/*
  # Create Votes Table for MPK Election

  1. New Tables
    - `votes`
      - `id` (uuid, primary key) - Unique identifier for each vote
      - `nama` (text) - Full name of voter
      - `role` (text) - Role category (guru, ekskul, anggota_mpk, anggota_osis, perwakilan_kelas)
      - `ekstrakuler` (text, nullable) - Name of extracurricular if role is ekskul
      - `jabatan_kelas` (text, nullable) - Class and position if role is perwakilan_kelas
      - `kandidat` (integer) - Candidate number (1-5)
      - `alasan` (text) - Reason for voting
      - `created_at` (timestamptz) - Timestamp of vote submission

  2. Security
    - Enable RLS on `votes` table
    - Add policy for public insert (anyone can submit a vote)
    - Add policy for authenticated users to view all votes (for admin purposes)
*/

CREATE TABLE IF NOT EXISTS votes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nama text NOT NULL,
  role text NOT NULL,
  ekstrakuler text DEFAULT '',
  jabatan_kelas text DEFAULT '',
  kandidat integer NOT NULL CHECK (kandidat BETWEEN 1 AND 5),
  alasan text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert votes (public voting)
CREATE POLICY "Anyone can submit a vote"
  ON votes
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can view all votes (for admin)
CREATE POLICY "Authenticated users can view all votes"
  ON votes
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster queries on kandidat
CREATE INDEX IF NOT EXISTS idx_votes_kandidat ON votes(kandidat);

-- Create index for faster queries on created_at
CREATE INDEX IF NOT EXISTS idx_votes_created_at ON votes(created_at DESC);