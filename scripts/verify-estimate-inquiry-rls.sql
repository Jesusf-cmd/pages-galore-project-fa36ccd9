-- Role access proof for estimate inquiry tables (local/test Postgres only).
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

DO $$
DECLARE
  n int;
BEGIN
  BEGIN
    SET LOCAL ROLE anon;
    SELECT count(*) INTO n FROM public.estimate_inquiries;
    INSERT INTO rls_results VALUES (
      'anon SELECT returns no rows', n = 0, format('rowCount=%s', n)
    );
  EXCEPTION WHEN insufficient_privilege THEN
    INSERT INTO rls_results VALUES (
      'anon SELECT denied by privilege', true, SQLERRM
    );
  END;
  RESET ROLE;
END $$;

DO $$
DECLARE
  n int;
BEGIN
  BEGIN
    SET LOCAL ROLE authenticated;
    SELECT count(*) INTO n FROM public.estimate_inquiries;
    INSERT INTO rls_results VALUES (
      'authenticated SELECT returns no rows', n = 0, format('rowCount=%s', n)
    );
  EXCEPTION WHEN insufficient_privilege THEN
    INSERT INTO rls_results VALUES (
      'authenticated SELECT denied by privilege', true, SQLERRM
    );
  END;
  RESET ROLE;
END $$;

DO $$
BEGIN
  BEGIN
    SET LOCAL ROLE authenticated;
    INSERT INTO public.estimate_inquiries (
      customer_name, customer_email, customer_phone, project_type
    ) VALUES ('Nope', 'x@example.com', '3165550199', 'commercial');
    INSERT INTO rls_results VALUES (
      'authenticated INSERT denied', false, 'insert unexpectedly succeeded'
    );
  EXCEPTION WHEN others THEN
    INSERT INTO rls_results VALUES (
      'authenticated INSERT denied',
      SQLERRM ~* 'permission denied|row-level security|RLS|policy',
      SQLERRM
    );
  END;
  RESET ROLE;
END $$;

DO $$
DECLARE
  n int;
  err text;
BEGIN
  BEGIN
    SET LOCAL ROLE service_role;
    SELECT count(*) INTO n FROM public.estimate_inquiries;
    RESET ROLE;
    INSERT INTO rls_results VALUES (
      'service_role SELECT can read inquiries', n >= 1, format('rowCount=%s', n)
    );
  EXCEPTION WHEN others THEN
    GET STACKED DIAGNOSTICS err = MESSAGE_TEXT;
    RESET ROLE;
    INSERT INTO rls_results VALUES (
      'service_role SELECT can read inquiries', false, err
    );
  END;
END $$;

DO $$
DECLARE
  n int;
BEGIN
  BEGIN
    SET LOCAL ROLE authenticated;
    SELECT count(*) INTO n FROM public.estimate_inquiry_notifications;
    INSERT INTO rls_results VALUES (
      'authenticated notification SELECT returns no rows', n = 0, format('rowCount=%s', n)
    );
  EXCEPTION WHEN insufficient_privilege THEN
    INSERT INTO rls_results VALUES (
      'authenticated notification SELECT denied', true, SQLERRM
    );
  END;
  RESET ROLE;
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
