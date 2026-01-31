-- MITALGIC ADMIN PANEL DATABASE SCHEMA
-- Execute this in Supabase SQL Editor

-- 1. Featured Projects Table
CREATE TABLE IF NOT EXISTS featured_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(500),
  project_url VARCHAR(500),
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 2. Services Table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  overview_text TEXT NOT NULL,
  what_we_offer_text TEXT NOT NULL,
  process_text TEXT NOT NULL,
  image_url VARCHAR(500),
  icon_name VARCHAR(100),
  ndt_pdf_url VARCHAR(500),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 3. Blog Posts Table (MOST IMPORTANT)
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  category VARCHAR(100) NOT NULL,
  publication_date DATE NOT NULL,
  writer_name VARCHAR(255) NOT NULL,
  writer_role VARCHAR(255) NOT NULL,
  read_time VARCHAR(50) NOT NULL,
  short_summary TEXT NOT NULL,
  full_content TEXT NOT NULL,
  cover_image_url VARCHAR(500),
  is_featured BOOLEAN DEFAULT false,
  status VARCHAR(20) DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 4. Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  subscription_date TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 5. Contact Info Table
CREATE TABLE IF NOT EXISTS contact_info (
  id VARCHAR(10) DEFAULT '1' PRIMARY KEY,
  phone_number VARCHAR(50) NOT NULL,
  email_address VARCHAR(255) NOT NULL,
  linkedin_url VARCHAR(500),
  instagram_url VARCHAR(500),
  facebook_url VARCHAR(500),
  twitter_url VARCHAR(500),
  youtube_url VARCHAR(500),
  whatsapp_number VARCHAR(50),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert default contact info
INSERT INTO contact_info (
  phone_number, 
  email_address, 
  linkedin_url, 
  instagram_url, 
  facebook_url, 
  twitter_url, 
  youtube_url, 
  whatsapp_number
) VALUES (
  '+90 532 651 71 56',
  'info@mitalgic.com',
  'https://linkedin.com/company/mitalgic',
  'https://instagram.com/mitalgic',
  'https://facebook.com/mitalgic',
  'https://twitter.com/mitalgic',
  'https://youtube.com/@mitalgic',
  '+90 532 651 71 56'
) ON CONFLICT (id) DO NOTHING;

-- Create Storage Buckets (Run these separately in Supabase)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('project-images', 'project-images', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('service-images', 'service-images', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('documents', 'documents', true);

-- Enable Row Level Security
ALTER TABLE featured_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access" ON featured_projects FOR SELECT USING (true);
CREATE POLICY "Public read access" ON services FOR SELECT USING (true);
CREATE POLICY "Public read access" ON blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "Public read access" ON contact_info FOR SELECT USING (true);

-- Admin policies (replace 'admin_user_id' with actual admin user ID)
-- CREATE POLICY "Admin full access" ON featured_projects FOR ALL USING (auth.uid() = 'admin_user_id');
-- CREATE POLICY "Admin full access" ON services FOR ALL USING (auth.uid() = 'admin_user_id');
-- CREATE POLICY "Admin full access" ON blog_posts FOR ALL USING (auth.uid() = 'admin_user_id');
-- CREATE POLICY "Admin full access" ON newsletter_subscribers FOR ALL USING (auth.uid() = 'admin_user_id');
-- CREATE POLICY "Admin full access" ON contact_info FOR ALL USING (auth.uid() = 'admin_user_id');