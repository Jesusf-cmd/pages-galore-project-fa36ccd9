-- Atomic inquiry+notification create, claim/finalize for concurrent delivery,
-- and restricted reconciliation for missing notification rows.
-- Additive: preserves existing inquiry and notification data.

ALTER TABLE public.estimate_inquiry_notifications
  DROP CONSTRAINT IF EXISTS estimate_inquiry_notifications_status_check;

ALTER TABLE public.estimate_inquiry_notifications
  ADD CONSTRAINT estimate_inquiry_notifications_status_check
  CHECK (status IN ('pending', 'sending', 'provider_accepted', 'failed'));

ALTER TABLE public.estimate_inquiry_notifications
  ADD COLUMN IF NOT EXISTS claim_token uuid;
ALTER TABLE public.estimate_inquiry_notifications
  ADD COLUMN IF NOT EXISTS claimed_at timestamptz;
ALTER TABLE public.estimate_inquiry_notifications
  ADD COLUMN IF NOT EXISTS claim_expires_at timestamptz;

COMMENT ON COLUMN public.estimate_inquiry_notifications.claim_token IS
  'Opaque token owned by the worker that claimed this notification for a send attempt.';
COMMENT ON COLUMN public.estimate_inquiry_notifications.claim_expires_at IS
  'Abandoned sending claims may be recovered after this time.';

-- ---------------------------------------------------------------------------
-- create_estimate_inquiry_with_notifications
-- Inserts the inquiry and both required pending notification rows atomically.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.create_estimate_inquiry_with_notifications(
  p_inquiry jsonb,
  p_internal_email text
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_inquiry_id uuid;
  v_customer_id uuid;
  v_internal_id uuid;
  v_customer_email text;
BEGIN
  IF p_internal_email IS NULL OR length(trim(p_internal_email)) = 0 THEN
    RAISE EXCEPTION 'internal notification email is required';
  END IF;

  v_customer_email := nullif(trim(p_inquiry->>'customer_email'), '');
  IF v_customer_email IS NULL THEN
    RAISE EXCEPTION 'customer_email is required';
  END IF;

  INSERT INTO public.estimate_inquiries (
    customer_name,
    customer_email,
    customer_phone,
    customer_address,
    project_type,
    property_type,
    customer_role,
    approx_size,
    bidding_status,
    project_details,
    origin,
    status
  ) VALUES (
    p_inquiry->>'customer_name',
    v_customer_email,
    p_inquiry->>'customer_phone',
    nullif(p_inquiry->>'customer_address', ''),
    p_inquiry->>'project_type',
    nullif(p_inquiry->>'property_type', ''),
    nullif(p_inquiry->>'customer_role', ''),
    nullif(p_inquiry->>'approx_size', ''),
    nullif(p_inquiry->>'bidding_status', ''),
    nullif(p_inquiry->>'project_details', ''),
    nullif(p_inquiry->>'origin', ''),
    COALESCE(nullif(p_inquiry->>'status', ''), 'inquiry')
  )
  RETURNING id INTO v_inquiry_id;

  INSERT INTO public.estimate_inquiry_notifications (
    inquiry_id, recipient_kind, recipient_email, status, attempt_count
  ) VALUES (
    v_inquiry_id, 'customer', v_customer_email, 'pending', 0
  )
  RETURNING id INTO v_customer_id;

  INSERT INTO public.estimate_inquiry_notifications (
    inquiry_id, recipient_kind, recipient_email, status, attempt_count
  ) VALUES (
    v_inquiry_id, 'internal', trim(p_internal_email), 'pending', 0
  )
  RETURNING id INTO v_internal_id;

  RETURN jsonb_build_object(
    'inquiry_id', v_inquiry_id,
    'customer_notification_id', v_customer_id,
    'internal_notification_id', v_internal_id
  );
END;
$$;

REVOKE ALL ON FUNCTION public.create_estimate_inquiry_with_notifications(jsonb, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.create_estimate_inquiry_with_notifications(jsonb, text) TO service_role;

-- ---------------------------------------------------------------------------
-- claim_estimate_inquiry_notification
-- Only one worker can claim a pending/failed or abandoned sending row.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.claim_estimate_inquiry_notification(
  p_notification_id uuid,
  p_claim_token uuid,
  p_claim_ttl_seconds integer DEFAULT 120
)
RETURNS public.estimate_inquiry_notifications
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_row public.estimate_inquiry_notifications;
  v_ttl integer := GREATEST(COALESCE(p_claim_ttl_seconds, 120), 30);
BEGIN
  IF p_claim_token IS NULL THEN
    RAISE EXCEPTION 'claim_token is required';
  END IF;

  UPDATE public.estimate_inquiry_notifications n
  SET
    status = 'sending',
    claim_token = p_claim_token,
    claimed_at = now(),
    claim_expires_at = now() + make_interval(secs => v_ttl),
    attempt_count = n.attempt_count + 1,
    updated_at = now()
  WHERE n.id = p_notification_id
    AND (
      n.status IN ('pending', 'failed')
      OR (
        n.status = 'sending'
        AND n.claim_expires_at IS NOT NULL
        AND n.claim_expires_at < now()
      )
    )
  RETURNING * INTO v_row;

  RETURN v_row;
END;
$$;

REVOKE ALL ON FUNCTION public.claim_estimate_inquiry_notification(uuid, uuid, integer) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.claim_estimate_inquiry_notification(uuid, uuid, integer) TO service_role;

-- ---------------------------------------------------------------------------
-- finalize_estimate_inquiry_notification
-- Stale workers cannot overwrite a newer claim/attempt.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.finalize_estimate_inquiry_notification(
  p_notification_id uuid,
  p_claim_token uuid,
  p_expected_attempt integer,
  p_status text,
  p_last_error text DEFAULT NULL,
  p_provider_message_id text DEFAULT NULL
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_updated integer;
BEGIN
  IF p_status NOT IN ('provider_accepted', 'failed') THEN
    RAISE EXCEPTION 'finalize status must be provider_accepted or failed';
  END IF;

  UPDATE public.estimate_inquiry_notifications n
  SET
    status = p_status,
    last_error = CASE WHEN p_status = 'provider_accepted' THEN NULL ELSE p_last_error END,
    provider_message_id = COALESCE(p_provider_message_id, n.provider_message_id),
    claim_token = NULL,
    claimed_at = NULL,
    claim_expires_at = NULL,
    last_attempt_at = now(),
    updated_at = now()
  WHERE n.id = p_notification_id
    AND n.claim_token = p_claim_token
    AND n.attempt_count = p_expected_attempt
    AND n.status = 'sending';

  GET DIAGNOSTICS v_updated = ROW_COUNT;
  RETURN v_updated = 1;
END;
$$;

REVOKE ALL ON FUNCTION public.finalize_estimate_inquiry_notification(uuid, uuid, integer, text, text, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.finalize_estimate_inquiry_notification(uuid, uuid, integer, text, text, text) TO service_role;

-- ---------------------------------------------------------------------------
-- record_notification_provider_acceptance
-- Best-effort persist of provider id while still claimed (finalize may fail later).
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.record_notification_provider_acceptance(
  p_notification_id uuid,
  p_claim_token uuid,
  p_expected_attempt integer,
  p_provider_message_id text
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_updated integer;
BEGIN
  UPDATE public.estimate_inquiry_notifications n
  SET
    provider_message_id = COALESCE(p_provider_message_id, n.provider_message_id),
    last_error = 'provider_accepted_finalize_pending',
    updated_at = now()
  WHERE n.id = p_notification_id
    AND n.claim_token = p_claim_token
    AND n.attempt_count = p_expected_attempt
    AND n.status = 'sending';

  GET DIAGNOSTICS v_updated = ROW_COUNT;
  RETURN v_updated = 1;
END;
$$;

REVOKE ALL ON FUNCTION public.record_notification_provider_acceptance(uuid, uuid, integer, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.record_notification_provider_acceptance(uuid, uuid, integer, text) TO service_role;

-- ---------------------------------------------------------------------------
-- reconcile_estimate_inquiry_notifications
-- Inserts missing customer/internal pending rows; never duplicates or touches
-- provider_accepted rows. Does not send email.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.reconcile_estimate_inquiry_notifications(
  p_internal_email text,
  p_inquiry_id uuid DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_created integer := 0;
  v_rowcount integer;
  v_inq record;
BEGIN
  IF p_internal_email IS NULL OR length(trim(p_internal_email)) = 0 THEN
    RAISE EXCEPTION 'internal notification email is required';
  END IF;

  FOR v_inq IN
    SELECT i.id, i.customer_email
    FROM public.estimate_inquiries i
    WHERE p_inquiry_id IS NULL OR i.id = p_inquiry_id
  LOOP
    INSERT INTO public.estimate_inquiry_notifications (
      inquiry_id, recipient_kind, recipient_email, status, attempt_count
    ) VALUES (
      v_inq.id, 'customer', v_inq.customer_email, 'pending', 0
    )
    ON CONFLICT (inquiry_id, recipient_kind) DO NOTHING;
    GET DIAGNOSTICS v_rowcount = ROW_COUNT;
    v_created := v_created + v_rowcount;

    INSERT INTO public.estimate_inquiry_notifications (
      inquiry_id, recipient_kind, recipient_email, status, attempt_count
    ) VALUES (
      v_inq.id, 'internal', trim(p_internal_email), 'pending', 0
    )
    ON CONFLICT (inquiry_id, recipient_kind) DO NOTHING;
    GET DIAGNOSTICS v_rowcount = ROW_COUNT;
    v_created := v_created + v_rowcount;
  END LOOP;

  RETURN jsonb_build_object('created', v_created);
END;
$$;

REVOKE ALL ON FUNCTION public.reconcile_estimate_inquiry_notifications(text, uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.reconcile_estimate_inquiry_notifications(text, uuid) TO service_role;
