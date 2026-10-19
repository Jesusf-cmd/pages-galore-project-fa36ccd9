-- Harden inquiry access if an earlier revision granted authenticated SELECT,
-- and add durable per-recipient notification outcomes for recovery/retry.

DROP POLICY IF EXISTS "Authenticated users can view estimate inquiries"
  ON public.estimate_inquiries;

REVOKE ALL ON TABLE public.estimate_inquiries FROM PUBLIC;
REVOKE ALL ON TABLE public.estimate_inquiries FROM anon, authenticated;
GRANT ALL ON TABLE public.estimate_inquiries TO postgres, service_role;

CREATE TABLE IF NOT EXISTS public.estimate_inquiry_notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  inquiry_id uuid NOT NULL REFERENCES public.estimate_inquiries(id) ON DELETE CASCADE,
  recipient_kind text NOT NULL
    CHECK (recipient_kind IN ('customer', 'internal')),
  recipient_email text NOT NULL,
  -- pending: recorded before send; provider_accepted: provider HTTP accept (not inbox proof);
  -- failed: send returned ok:false or was skipped due to missing config.
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'provider_accepted', 'failed')),
  attempt_count integer NOT NULL DEFAULT 0,
  last_error text,
  provider_message_id text,
  last_attempt_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (inquiry_id, recipient_kind)
);

COMMENT ON TABLE public.estimate_inquiry_notifications IS
  'Per-inquiry notification work and outcomes. provider_accepted means the email API accepted the message, not confirmed inbox delivery. Client roles have no access; retry uses the service role.';

CREATE INDEX IF NOT EXISTS estimate_inquiry_notifications_status_idx
  ON public.estimate_inquiry_notifications (status, updated_at);

ALTER TABLE public.estimate_inquiry_notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.estimate_inquiry_notifications FORCE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.estimate_inquiry_notifications FROM PUBLIC;
REVOKE ALL ON TABLE public.estimate_inquiry_notifications FROM anon, authenticated;
GRANT ALL ON TABLE public.estimate_inquiry_notifications TO postgres, service_role;
