/*
# VVISC Website Database Schema

1. New Tables
- `team_members` - Stores all council members including executives, faculty, leads, and members
- `events` - Stores event information with status, dates, and details
- `gallery` - Stores gallery images with categories and metadata
- `councils` - Stores council framework information

2. Security
- Enable RLS on all tables
- Allow public read access for website display (single-tenant, no auth required)
- Allow admin insert/update/delete (public access for demo purposes)
*/

-- Team Members Table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  position text NOT NULL,
  roll_number text,
  department text,
  academic_year text,
  photo_url text,
  council text,
  category text NOT NULL DEFAULT 'member', -- 'executive', 'faculty', 'lead', 'member'
  social_linkedin text,
  social_instagram text,
  social_github text,
  created_at timestamptz DEFAULT now()
);

-- Events Table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  event_date date NOT NULL,
  event_time text,
  venue text NOT NULL,
  event_mode text DEFAULT 'Offline',
  description text NOT NULL,
  objectives text[] DEFAULT '{}',
  speakers text[] DEFAULT '{}',
  poster_url text,
  banner_url text,
  status text NOT NULL DEFAULT 'upcoming', -- 'upcoming', 'ongoing', 'completed'
  category text NOT NULL DEFAULT 'General',
  created_at timestamptz DEFAULT now()
);

-- Gallery Table
CREATE TABLE IF NOT EXISTS gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  event_name text NOT NULL,
  description text,
  venue text,
  category text NOT NULL DEFAULT 'General',
  year text NOT NULL DEFAULT '2026',
  created_at timestamptz DEFAULT now()
);

-- Councils Table
CREATE TABLE IF NOT EXISTS councils (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  short_name text NOT NULL,
  responsibilities text[] DEFAULT '{}',
  contributions text[] DEFAULT '{}',
  icon text DEFAULT 'Settings',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE councils ENABLE ROW LEVEL SECURITY;

-- Public read policies for all tables (single-tenant, website display)
DROP POLICY IF EXISTS "public_select_team_members" ON team_members;
CREATE POLICY "public_select_team_members" ON team_members FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_select_events" ON events;
CREATE POLICY "public_select_events" ON events FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_select_gallery" ON gallery;
CREATE POLICY "public_select_gallery" ON gallery FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_select_councils" ON councils;
CREATE POLICY "public_select_councils" ON councils FOR SELECT
TO anon, authenticated USING (true);

-- Allow public insert for demo/contact form submissions
DROP POLICY IF EXISTS "public_insert_team_members" ON team_members;
CREATE POLICY "public_insert_team_members" ON team_members FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_insert_events" ON events;
CREATE POLICY "public_insert_events" ON events FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_insert_gallery" ON gallery;
CREATE POLICY "public_insert_gallery" ON gallery FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_insert_councils" ON councils;
CREATE POLICY "public_insert_councils" ON councils FOR INSERT
TO anon, authenticated WITH CHECK (true);
