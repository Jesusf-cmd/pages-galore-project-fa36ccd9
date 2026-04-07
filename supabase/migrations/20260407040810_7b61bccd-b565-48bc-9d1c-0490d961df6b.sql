
-- Create a sequence for quote numbers
CREATE SEQUENCE public.quote_number_seq START WITH 1 INCREMENT BY 1;

-- Create the quotes table
CREATE TABLE public.quotes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  quote_number INTEGER NOT NULL DEFAULT nextval('public.quote_number_seq') UNIQUE,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_address TEXT NOT NULL DEFAULT '',
  project_details TEXT,
  project_type TEXT NOT NULL,
  finish_type TEXT,
  length_ft INTEGER NOT NULL,
  width_ft INTEGER NOT NULL,
  square_feet INTEGER NOT NULL,
  estimate_low INTEGER NOT NULL,
  estimate_high INTEGER NOT NULL,
  line_items JSONB NOT NULL DEFAULT '[]'::jsonb,
  total_estimate INTEGER NOT NULL,
  valid_until TIMESTAMPTZ NOT NULL DEFAULT (now() + interval '30 days'),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (public form)
CREATE POLICY "Anyone can submit a quote"
  ON public.quotes
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Anyone can view by ID (public quote page)
CREATE POLICY "Anyone can view quotes"
  ON public.quotes
  FOR SELECT
  TO anon, authenticated
  USING (true);
