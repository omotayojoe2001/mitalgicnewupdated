# MITALGIC ADMIN PANEL - BACKEND SPECIFICATIONS

## OVERVIEW
Complete admin panel for managing website content with 5 main modules:
- **Projects** (Featured Projects)
- **Services** (Engineering Services)
- **Blog** (Blog Posts & Articles)
- **Newsletter** (Subscriber Management)
- **Contact** (Contact Information & Social Links)

## SUPABASE DATABASE SETUP

### Connection Details
```
Project URL: https://jhumwdvnpcmnvqtbxnva.supabase.co
Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpodW13ZHZucGNtbnZxdGJ4bnZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NjEyOTEsImV4cCI6MjA3NzMzNzI5MX0.8Pyfo3jJig47CDL4LDCwWXIK78Lw8DWU_1DYWNBUL7Q
Service Role: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpodW13ZHZucGNtbnZxdGJ4bnZhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTc2MTI5MSwiZXhwIjoyMDc3MzM3MjkxfQ.mtcp4LkyA_Idg2T8Fmb5DBarZEiwfp23SUZ7Jynxy0A
```

### Required Database Tables

#### 1. FEATURED_PROJECTS
```sql
CREATE TABLE featured_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(500),
  project_url VARCHAR(500),
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 2. SERVICES
```sql
CREATE TABLE services (
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
```

#### 3. BLOG_POSTS (MOST IMPORTANT)
```sql
CREATE TABLE blog_posts (
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
  is_published BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 4. NEWSLETTER_SUBSCRIBERS
```sql
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  subscription_date TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 5. CONTACT_INFO
```sql
CREATE TABLE contact_info (
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
```

## ADMIN PANEL REQUIREMENTS

### 1. AUTHENTICATION
- Simple admin login (username/password)
- Session management
- Protected routes

### 2. DASHBOARD OVERVIEW
- Total blog posts count
- Published vs draft posts
- Newsletter subscribers count
- Recent activity feed

### 3. BLOG MANAGEMENT (PRIORITY #1)
**List View:**
- Table with: Title, Category, Status, Publication Date, Actions
- Filter by: Published/Draft, Category, Date Range
- Search by title
- Bulk actions: Publish/Unpublish, Delete

**Create/Edit Form:**
- Title (auto-generates slug)
- Category (dropdown: Engineering, Technology, Industry News, Case Studies)
- Writer Name & Role
- Publication Date
- Read Time (e.g., "5 min read")
- Short Summary (for cards)
- Full Content (Rich text editor with HTML support)
- Cover Image Upload
- Featured checkbox
- Published checkbox
- Save as Draft / Publish buttons

### 4. PROJECTS MANAGEMENT
**List View:**
- Grid/Table view of projects
- Featured toggle
- Quick edit actions

**Create/Edit Form:**
- Title
- Description
- Image Upload
- Project URL (optional)
- Featured checkbox

### 5. SERVICES MANAGEMENT
**List View:**
- All services with active status
- Quick enable/disable

**Create/Edit Form:**
- Title (auto-generates slug)
- Overview Text
- What We Offer Text
- Process Text
- Service Image
- Icon Name
- NDT PDF Upload (optional)
- Active checkbox

### 6. NEWSLETTER MANAGEMENT
**Subscribers List:**
- Email, Name, Subscription Date, Status
- Export to CSV
- Bulk unsubscribe
- Search functionality

### 7. CONTACT INFO MANAGEMENT
**Single Form:**
- Phone Number
- Email Address
- All Social Media URLs
- WhatsApp Number
- Save Changes button

## API ENDPOINTS NEEDED

### Blog Posts (CRITICAL)
```
GET    /api/admin/blog-posts          # List all posts
POST   /api/admin/blog-posts          # Create new post
GET    /api/admin/blog-posts/:id      # Get single post
PUT    /api/admin/blog-posts/:id      # Update post
DELETE /api/admin/blog-posts/:id      # Delete post
PATCH  /api/admin/blog-posts/:id/publish   # Toggle publish status
```

### Projects
```
GET    /api/admin/projects            # List all projects
POST   /api/admin/projects            # Create project
PUT    /api/admin/projects/:id        # Update project
DELETE /api/admin/projects/:id        # Delete project
```

### Services
```
GET    /api/admin/services            # List all services
POST   /api/admin/services            # Create service
PUT    /api/admin/services/:id        # Update service
DELETE /api/admin/services/:id        # Delete service
```

### Newsletter
```
GET    /api/admin/newsletter          # List subscribers
DELETE /api/admin/newsletter/:id      # Remove subscriber
GET    /api/admin/newsletter/export   # Export CSV
```

### Contact Info
```
GET    /api/admin/contact-info        # Get contact info
PUT    /api/admin/contact-info        # Update contact info
```

## FILE UPLOAD REQUIREMENTS

### Image Upload
- **Blog covers**: Max 2MB, JPG/PNG, 1200x630px recommended
- **Project images**: Max 2MB, JPG/PNG, 800x600px recommended
- **Service images**: Max 1MB, JPG/PNG, 600x400px recommended

### File Storage
- Use Supabase Storage buckets:
  - `blog-images`
  - `project-images`
  - `service-images`
  - `documents` (for PDFs)

## FRONTEND INTEGRATION

### Current Frontend Setup
- React + TypeScript + Vite
- Supabase client configured
- All database types defined in `src/types/database.ts`
- Query functions in `src/utils/supabase-queries.ts`
- Hooks in `src/hooks/useSupabase.ts`

### Admin Panel Routes Needed
```
/admin/login
/admin/dashboard
/admin/blog
/admin/blog/new
/admin/blog/edit/:id
/admin/projects
/admin/services
/admin/newsletter
/admin/contact
```

## SECURITY REQUIREMENTS
- Row Level Security (RLS) on all tables
- Admin role-based access
- Input validation and sanitization
- CSRF protection
- Rate limiting on API endpoints

## DEPLOYMENT NOTES
- Admin panel should be separate from main website
- Can be subdomain: admin.mitalgic.org
- Or protected route: mitalgic.org/admin
- SSL required
- Environment variables for database connection

## PRIORITY ORDER
1. **Blog Management** (MOST CRITICAL)
2. Contact Info Management
3. Projects Management
4. Services Management
5. Newsletter Management

## CURRENT STATUS
- Database schema ready
- Frontend types configured
- Supabase project active
- Query functions implemented
- Need backend API + admin UI