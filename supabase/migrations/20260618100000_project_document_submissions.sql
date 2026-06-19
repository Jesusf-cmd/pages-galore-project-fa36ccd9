-- Private bucket for visitor-uploaded project documents (PDF/JPG/PNG only).
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'project-documents',
  'project-documents',
  false,
  10485760,
  ARRAY['application/pdf', 'image/jpeg', 'image/png']
)
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

CREATE TABLE IF NOT EXISTS public.document_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  address text,
  details text,
  file_paths jsonb NOT NULL DEFAULT '[]'::jsonb
);

ALTER TABLE public.document_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.document_submissions FORCE ROW LEVEL SECURITY;

-- Admin reads only; inserts go through the edge function (service role).
CREATE POLICY "Authenticated users can view document submissions"
  ON public.document_submissions FOR SELECT
  TO authenticated
  USING (true);
