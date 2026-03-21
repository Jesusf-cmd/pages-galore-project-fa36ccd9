CREATE TABLE public.estimate_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  project_type TEXT NOT NULL,
  finish_type TEXT,
  length_ft INTEGER NOT NULL,
  width_ft INTEGER NOT NULL,
  square_feet INTEGER NOT NULL,
  estimate_low INTEGER NOT NULL,
  estimate_high INTEGER NOT NULL,
  details TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.estimate_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an estimate"
ON public.estimate_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);