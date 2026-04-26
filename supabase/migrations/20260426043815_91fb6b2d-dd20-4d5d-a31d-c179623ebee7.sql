-- 1. Drop ALL existing policies on storage.objects that target the signatures bucket
DROP POLICY IF EXISTS "Anyone can view signatures" ON storage.objects;
DROP POLICY IF EXISTS "Public can view signatures" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload signatures" ON storage.objects;
DROP POLICY IF EXISTS "Allow public uploads to signatures" ON storage.objects;
DROP POLICY IF EXISTS "Allow public reads from signatures" ON storage.objects;
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can read signatures" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload signatures" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update signatures" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete signatures" ON storage.objects;

-- 2. Re-confirm bucket is private with strict limits
UPDATE storage.buckets
SET public = false,
    file_size_limit = 10485760,
    allowed_mime_types = ARRAY['image/jpeg','image/png','application/pdf']
WHERE id = 'signatures';

-- 3. ONLY authenticated users can read signature files. No anon. No public.
-- Writes (INSERT/UPDATE/DELETE) are intentionally NOT granted to any client role —
-- only the accept-quote edge function (service role) writes to this bucket, which
-- bypasses RLS safely. Admins view via short-lived signed URLs.
CREATE POLICY "Authenticated users can read signatures"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'signatures'
  AND auth.role() = 'authenticated'
);
