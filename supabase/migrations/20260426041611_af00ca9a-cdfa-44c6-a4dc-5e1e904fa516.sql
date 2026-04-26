-- Lock down quotes table: remove all public access, only authenticated users can read/write
DROP POLICY IF EXISTS "Anyone can view quotes" ON public.quotes;
DROP POLICY IF EXISTS "Anyone can submit a quote" ON public.quotes;
DROP POLICY IF EXISTS "Anyone can accept a quote" ON public.quotes;
DROP POLICY IF EXISTS "Authenticated users can delete quotes" ON public.quotes;

-- Ensure RLS is enabled
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quotes FORCE ROW LEVEL SECURITY;

-- Authenticated users (admins) get full access. Public anon role gets nothing.
-- Edge functions use the service role key which bypasses RLS entirely.
CREATE POLICY "Authenticated users can view quotes"
  ON public.quotes FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert quotes"
  ON public.quotes FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update quotes"
  ON public.quotes FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete quotes"
  ON public.quotes FOR DELETE
  TO authenticated
  USING (true);

-- Lock down estimate_submissions: remove public insert. Submissions must go through the edge function.
DROP POLICY IF EXISTS "Anyone can submit an estimate" ON public.estimate_submissions;

ALTER TABLE public.estimate_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.estimate_submissions FORCE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view estimate submissions"
  ON public.estimate_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert estimate submissions"
  ON public.estimate_submissions FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update estimate submissions"
  ON public.estimate_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete estimate submissions"
  ON public.estimate_submissions FOR DELETE
  TO authenticated
  USING (true);