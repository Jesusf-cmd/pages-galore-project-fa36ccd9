-- Rejected estimate submissions (spam checks). Service role inserts from submit-quote.
CREATE TABLE IF NOT EXISTS public.rejected_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  reason text NOT NULL,
  payload jsonb,
  client_ip text,
  user_agent text
);

ALTER TABLE public.rejected_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rejected_leads FORCE ROW LEVEL SECURITY;

-- Admins (authenticated) can review rejected leads; inserts come via service role.
CREATE POLICY "Authenticated users can view rejected_leads"
  ON public.rejected_leads FOR SELECT
  TO authenticated
  USING (true);

COMMENT ON TABLE public.rejected_leads IS
  'Spam-check rejections from submit-quote. Check weekly for real leads blocked by mistake.';
