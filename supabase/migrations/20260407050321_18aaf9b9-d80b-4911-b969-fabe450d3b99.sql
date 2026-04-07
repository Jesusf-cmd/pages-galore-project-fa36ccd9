-- Add acceptance columns to quotes
ALTER TABLE public.quotes
ADD COLUMN signature_url text,
ADD COLUMN accepted_at timestamp with time zone;

-- Allow anonymous updates for quote acceptance (status, signature, accepted_at only)
CREATE POLICY "Anyone can accept a quote"
ON public.quotes
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- Create signatures storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('signatures', 'signatures', true);

-- Allow anyone to upload signatures
CREATE POLICY "Anyone can upload signatures"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'signatures');

-- Allow anyone to view signatures
CREATE POLICY "Anyone can view signatures"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'signatures');