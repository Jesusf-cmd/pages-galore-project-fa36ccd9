-- Add unguessable access token + signer audit fields
ALTER TABLE public.quotes
  ADD COLUMN IF NOT EXISTS access_token uuid NOT NULL DEFAULT gen_random_uuid(),
  ADD COLUMN IF NOT EXISTS signer_name text,
  ADD COLUMN IF NOT EXISTS signer_email text,
  ADD COLUMN IF NOT EXISTS accepted_ip text;

-- Backfill: existing quotes use their id as the token so previously emailed links keep working.
UPDATE public.quotes
SET access_token = id
WHERE access_token IS NULL OR access_token = '00000000-0000-0000-0000-000000000000'::uuid;

-- Enforce uniqueness on the public-facing token
CREATE UNIQUE INDEX IF NOT EXISTS quotes_access_token_key ON public.quotes (access_token);