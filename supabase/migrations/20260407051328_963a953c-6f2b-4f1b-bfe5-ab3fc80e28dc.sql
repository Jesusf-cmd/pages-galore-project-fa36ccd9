CREATE POLICY "Authenticated users can delete quotes"
ON public.quotes
FOR DELETE
TO authenticated
USING (true);