-- Replace permissive write policies with ones that verify auth.uid() is present
DROP POLICY IF EXISTS "Authenticated users can upload signatures" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update signatures" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete signatures" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload admin uploads" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update admin uploads" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete admin uploads" ON storage.objects;

CREATE POLICY "Authenticated users can upload signatures"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'signatures' AND auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update signatures"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'signatures' AND auth.uid() IS NOT NULL)
WITH CHECK (bucket_id = 'signatures' AND auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete signatures"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'signatures' AND auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can upload admin uploads"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'admin-uploads' AND auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update admin uploads"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'admin-uploads' AND auth.uid() IS NOT NULL)
WITH CHECK (bucket_id = 'admin-uploads' AND auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete admin uploads"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'admin-uploads' AND auth.uid() IS NOT NULL);