-- 1. Make signatures bucket private + enforce type/size limits
UPDATE storage.buckets
SET public = false,
    file_size_limit = 10485760, -- 10 MB
    allowed_mime_types = ARRAY['image/jpeg','image/png','application/pdf']
WHERE id = 'signatures';

-- 2. Create private admin-uploads bucket with the same limits
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'admin-uploads',
  'admin-uploads',
  false,
  10485760,
  ARRAY['image/jpeg','image/png','application/pdf']
)
ON CONFLICT (id) DO UPDATE
SET public = EXCLUDED.public,
    file_size_limit = EXCLUDED.file_size_limit,
    allowed_mime_types = EXCLUDED.allowed_mime_types;

-- 3. Drop legacy permissive policies on signatures
DROP POLICY IF EXISTS "Public can view signatures" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload signatures" ON storage.objects;
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Allow public uploads to signatures" ON storage.objects;
DROP POLICY IF EXISTS "Allow public reads from signatures" ON storage.objects;

-- 4. Authenticated-only access to signatures bucket
CREATE POLICY "Authenticated users can read signatures"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'signatures');

CREATE POLICY "Authenticated users can upload signatures"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'signatures');

CREATE POLICY "Authenticated users can update signatures"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'signatures');

CREATE POLICY "Authenticated users can delete signatures"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'signatures');

-- 5. Authenticated-only access to admin-uploads bucket
CREATE POLICY "Authenticated users can read admin uploads"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'admin-uploads');

CREATE POLICY "Authenticated users can upload admin uploads"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'admin-uploads');

CREATE POLICY "Authenticated users can update admin uploads"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'admin-uploads');

CREATE POLICY "Authenticated users can delete admin uploads"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'admin-uploads');