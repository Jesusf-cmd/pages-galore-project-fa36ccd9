-- Negative control: temporarily grant permissive authenticated SELECT and prove
-- the verifier fails. Local/test disposable DB only. Never run on production.
\set ON_ERROR_STOP on

GRANT SELECT ON public.estimate_inquiries TO authenticated;
CREATE POLICY "negative_control_authenticated_select"
  ON public.estimate_inquiries FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated should now see rows — record that as the negative signal.
DO $$
DECLARE
  n int;
BEGIN
  SET LOCAL ROLE authenticated;
  SELECT count(*) INTO n FROM public.estimate_inquiries;
  RESET ROLE;
  IF n < 1 THEN
    RAISE EXCEPTION 'negative control setup failed: expected authenticated visibility, got %', n;
  END IF;
  RAISE NOTICE 'NEG_CONTROL_VISIBLE rowCount=%', n;
END $$;
