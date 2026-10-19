-- Role access proof for estimate inquiry tables (local/test Postgres only).
-- Each check captures the tested operation under the restricted role, then
-- RESET ROLE before writing to rls_results. Unexpected errors fail the check.
\set ON_ERROR_STOP on

DO $$ BEGIN CREATE ROLE anon NOLOGIN; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE ROLE authenticated NOLOGIN; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE ROLE service_role NOLOGIN BYPASSRLS; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;

WITH i AS (
  INSERT INTO public.estimate_inquiries (
    customer_name, customer_email, customer_phone, project_type, origin, status
  ) VALUES (
    'RLS Fixture', 'rls@example.com', '3165550100', 'commercial',
    'concrete-contractors-wichita-ks', 'inquiry'
  )
  RETURNING id
)
INSERT INTO public.estimate_inquiry_notifications (
  inquiry_id, recipient_kind, recipient_email, status
)
SELECT id, 'internal', 'ops@example.com', 'failed' FROM i;

CREATE TEMP TABLE rls_results (name text, pass boolean, detail text);

-- anon inquiry SELECT
DO $$
DECLARE
  n int := -1;
  err text;
  denied boolean := false;
BEGIN
  BEGIN
    SET LOCAL ROLE anon;
    SELECT count(*) INTO n FROM public.estimate_inquiries;
  EXCEPTION
    WHEN insufficient_privilege THEN
      denied := true;
      err := SQLERRM;
    WHEN others THEN
      err := SQLERRM;
      RESET ROLE;
      INSERT INTO rls_results VALUES ('anon inquiry SELECT', false, 'unexpected: ' || err);
      RETURN;
  END;
  RESET ROLE;
  IF denied THEN
    INSERT INTO rls_results VALUES ('anon inquiry SELECT denied by privilege', true, err);
  ELSE
    INSERT INTO rls_results VALUES (
      'anon inquiry SELECT returns no rows', n = 0, format('rowCount=%s', n)
    );
  END IF;
END $$;

-- authenticated inquiry SELECT
DO $$
DECLARE
  n int := -1;
  err text;
  denied boolean := false;
BEGIN
  BEGIN
    SET LOCAL ROLE authenticated;
    SELECT count(*) INTO n FROM public.estimate_inquiries;
  EXCEPTION
    WHEN insufficient_privilege THEN
      denied := true;
      err := SQLERRM;
    WHEN others THEN
      err := SQLERRM;
      RESET ROLE;
      INSERT INTO rls_results VALUES ('authenticated inquiry SELECT', false, 'unexpected: ' || err);
      RETURN;
  END;
  RESET ROLE;
  IF denied THEN
    INSERT INTO rls_results VALUES ('authenticated inquiry SELECT denied by privilege', true, err);
  ELSE
    INSERT INTO rls_results VALUES (
      'authenticated inquiry SELECT returns no rows', n = 0, format('rowCount=%s', n)
    );
  END IF;
END $$;

-- authenticated inquiry INSERT
DO $$
DECLARE
  err text;
  denied boolean := false;
  unexpected boolean := false;
BEGIN
  BEGIN
    SET LOCAL ROLE authenticated;
    INSERT INTO public.estimate_inquiries (
      customer_name, customer_email, customer_phone, project_type
    ) VALUES ('Nope', 'x@example.com', '3165550199', 'commercial');
  EXCEPTION
    WHEN insufficient_privilege THEN
      denied := true;
      err := SQLERRM;
    WHEN others THEN
      IF SQLERRM ~* 'permission denied|row-level security|RLS|policy' THEN
        denied := true;
        err := SQLERRM;
      ELSE
        unexpected := true;
        err := SQLERRM;
      END IF;
  END;
  RESET ROLE;
  IF unexpected THEN
    INSERT INTO rls_results VALUES ('authenticated inquiry INSERT denied', false, 'unexpected: ' || err);
  ELSIF denied THEN
    INSERT INTO rls_results VALUES ('authenticated inquiry INSERT denied', true, err);
  ELSE
    INSERT INTO rls_results VALUES (
      'authenticated inquiry INSERT denied', false, 'insert unexpectedly succeeded'
    );
  END IF;
END $$;

-- authenticated notification SELECT
DO $$
DECLARE
  n int := -1;
  err text;
  denied boolean := false;
BEGIN
  BEGIN
    SET LOCAL ROLE authenticated;
    SELECT count(*) INTO n FROM public.estimate_inquiry_notifications;
  EXCEPTION
    WHEN insufficient_privilege THEN
      denied := true;
      err := SQLERRM;
    WHEN others THEN
      err := SQLERRM;
      RESET ROLE;
      INSERT INTO rls_results VALUES ('authenticated notification SELECT', false, 'unexpected: ' || err);
      RETURN;
  END;
  RESET ROLE;
  IF denied THEN
    INSERT INTO rls_results VALUES ('authenticated notification SELECT denied', true, err);
  ELSE
    INSERT INTO rls_results VALUES (
      'authenticated notification SELECT returns no rows', n = 0, format('rowCount=%s', n)
    );
  END IF;
END $$;

-- anon notification SELECT
DO $$
DECLARE
  n int := -1;
  err text;
  denied boolean := false;
BEGIN
  BEGIN
    SET LOCAL ROLE anon;
    SELECT count(*) INTO n FROM public.estimate_inquiry_notifications;
  EXCEPTION
    WHEN insufficient_privilege THEN
      denied := true;
      err := SQLERRM;
    WHEN others THEN
      err := SQLERRM;
      RESET ROLE;
      INSERT INTO rls_results VALUES ('anon notification SELECT', false, 'unexpected: ' || err);
      RETURN;
  END;
  RESET ROLE;
  IF denied THEN
    INSERT INTO rls_results VALUES ('anon notification SELECT denied', true, err);
  ELSE
    INSERT INTO rls_results VALUES (
      'anon notification SELECT returns no rows', n = 0, format('rowCount=%s', n)
    );
  END IF;
END $$;

-- service_role can read inquiries
DO $$
DECLARE
  n int := -1;
  err text;
BEGIN
  BEGIN
    SET LOCAL ROLE service_role;
    SELECT count(*) INTO n FROM public.estimate_inquiries;
  EXCEPTION WHEN others THEN
    err := SQLERRM;
    RESET ROLE;
    INSERT INTO rls_results VALUES ('service_role SELECT can read inquiries', false, err);
    RETURN;
  END;
  RESET ROLE;
  INSERT INTO rls_results VALUES (
    'service_role SELECT can read inquiries', n >= 1, format('rowCount=%s', n)
  );
END $$;

-- service_role can execute create RPC (smoke)
DO $$
DECLARE
  res jsonb;
  err text;
BEGIN
  BEGIN
    SET LOCAL ROLE service_role;
    res := public.create_estimate_inquiry_with_notifications(
      jsonb_build_object(
        'customer_name', 'RPC Fixture',
        'customer_email', 'rpc@example.com',
        'customer_phone', '3165550111',
        'project_type', 'commercial',
        'origin', 'concrete-contractors-wichita-ks',
        'status', 'inquiry'
      ),
      'ops@example.com'
    );
  EXCEPTION WHEN others THEN
    err := SQLERRM;
    RESET ROLE;
    INSERT INTO rls_results VALUES ('service_role create RPC works', false, err);
    RETURN;
  END;
  RESET ROLE;
  INSERT INTO rls_results VALUES (
    'service_role create RPC works',
    (res ? 'inquiry_id') AND (res ? 'customer_notification_id'),
    coalesce(res::text, 'null')
  );
END $$;

-- authenticated cannot execute create RPC
DO $$
DECLARE
  err text;
  denied boolean := false;
BEGIN
  BEGIN
    SET LOCAL ROLE authenticated;
    PERFORM public.create_estimate_inquiry_with_notifications(
      jsonb_build_object(
        'customer_name', 'Nope',
        'customer_email', 'nope@example.com',
        'customer_phone', '3165550000',
        'project_type', 'commercial',
        'status', 'inquiry'
      ),
      'ops@example.com'
    );
  EXCEPTION
    WHEN insufficient_privilege THEN
      denied := true;
      err := SQLERRM;
    WHEN others THEN
      IF SQLERRM ~* 'permission denied|must be owner' THEN
        denied := true;
        err := SQLERRM;
      ELSE
        err := SQLERRM;
      END IF;
  END;
  RESET ROLE;
  INSERT INTO rls_results VALUES (
    'authenticated create RPC denied',
    denied,
    coalesce(err, 'unexpected success')
  );
END $$;

SELECT CASE WHEN pass THEN 'PASS' ELSE 'FAIL' END AS status, name, detail
FROM rls_results
ORDER BY name;

SELECT format('%s/%s checks passed', count(*) FILTER (WHERE pass), count(*)) AS summary
FROM rls_results;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM rls_results WHERE NOT pass) THEN
    RAISE EXCEPTION 'RLS verification failed';
  END IF;
END $$;
