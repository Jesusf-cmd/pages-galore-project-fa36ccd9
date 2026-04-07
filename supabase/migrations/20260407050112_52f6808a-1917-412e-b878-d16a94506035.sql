-- Add status column to quotes table
ALTER TABLE public.quotes 
ADD COLUMN status text NOT NULL DEFAULT 'pending' 
CONSTRAINT quotes_status_check CHECK (status IN ('pending', 'accepted', 'expired'));