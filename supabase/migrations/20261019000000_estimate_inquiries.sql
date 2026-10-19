-- Unpriced estimate inquiries (Kansas request flow).
-- Separate from quotes: no prices, dimensions, acceptance, or expiry columns.
CREATE TABLE IF NOT EXISTS public.estimate_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  customer_address text,
  project_type text NOT NULL,
  property_type text,
  customer_role text,
  approx_size text,
  bidding_status text,
  project_details text,
  origin text,
  status text NOT NULL DEFAULT 'inquiry'
    CHECK (status IN ('inquiry', 'closed'))
);

COMMENT ON TABLE public.estimate_inquiries IS
  'Unpriced estimate requests. No dollar amounts or fabricated dimensions. Written quotes are created separately after plan review or a site visit.';

ALTER TABLE public.estimate_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.estimate_inquiries FORCE ROW LEVEL SECURITY;

-- Admin reads only; inserts go through the edge function (service role).
CREATE POLICY "Authenticated users can view estimate inquiries"
  ON public.estimate_inquiries FOR SELECT
  TO authenticated
  USING (true);
