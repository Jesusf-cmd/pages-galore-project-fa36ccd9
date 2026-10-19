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
  'Unpriced estimate requests. No dollar amounts or fabricated dimensions. Written quotes are created separately after plan review or a site visit. Client roles have no direct access; edge functions use the service role.';

ALTER TABLE public.estimate_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.estimate_inquiries FORCE ROW LEVEL SECURITY;

-- Least privilege: no policies for anon/authenticated. service_role bypasses RLS.
-- Explicit grants so confidentiality does not rely on an accidental SELECT policy.
REVOKE ALL ON TABLE public.estimate_inquiries FROM PUBLIC;
REVOKE ALL ON TABLE public.estimate_inquiries FROM anon, authenticated;
GRANT ALL ON TABLE public.estimate_inquiries TO postgres, service_role;
