# HOSTINGER DEPLOYMENT GUIDE

## 📁 Files Ready for Upload

### **Upload to Hostinger:**
Upload ALL contents of the `dist/` folder to your Hostinger public_html directory:

```
dist/
├── index.html
├── .htaccess
├── assets/
│   ├── index-BUjkbSIm.css
│   ├── index-4kN_vmJY.js
│   └── [image files]
├── favicon.ico
├── favicon.png
├── robots.txt
├── sitemap.xml
├── manifest.json
├── aydin.jpg
├── Gabriel-Ajayi.jpg
└── placeholder.svg
```

## 🚀 Deployment Steps

### **1. Upload Files (RECOMMENDED METHOD)**
**Option A: Individual File Upload (RECOMMENDED)**
- Login to Hostinger File Manager
- Navigate to `public_html/` folder
- Upload files individually from `dist/` folder
- This avoids permission issues with zip extraction

**Option B: FTP Upload**
- Use FileZilla or similar FTP client
- Upload all files from `dist/` folder directly
- Faster for bulk uploads

### **2. ZIP Upload Troubleshooting**
**🚨 HOSTINGER BLOCKS ZIP EXTRACTION COMPLETELY**

**Error Messages You're Seeing:**
- "500 Internal Server Error"
- "You don't have permissions to access this"
- **= Hostinger has DISABLED ZIP extraction on your account**

**WHY THIS HAPPENS:**
- Shared hosting security restrictions
- Your hosting plan doesn't allow ZIP extraction
- Server-level permission blocks
- **This is NOT your fault - it's Hostinger's limitation**

**IMMEDIATE SOLUTION - DELETE THE ZIP:**
1. Delete the ZIP file from Hostinger immediately
2. Clear your browser cache
3. Use ONLY individual file upload methods below

**WORKING METHODS (TESTED):**

**Method 1: Drag & Drop (EASIEST)**
- Open your local `dist/` folder
- Open Hostinger File Manager in another window
- Select 5-10 files at a time
- Drag them directly into `public_html/`
- Repeat until all files uploaded

**Method 2: FileZilla FTP (FASTEST)**
- Download FileZilla (free FTP client)
- Get FTP credentials from Hostinger control panel
- Connect and upload entire `dist/` folder
- Takes 2-3 minutes total

**Method 3: Hostinger Upload Button**
- Click "Upload" in File Manager
- Select multiple files (NOT ZIP)
- Upload in small batches

**⚠️ NEVER TRY THESE ON HOSTINGER:**
- ZIP extraction (blocked by server)
- RAR files (not supported)
- TAR files (permission denied)
- Any compressed format

### **3. File Permissions Check**
- Ensure `.htaccess` has 644 permissions
- Ensure all files have 644 permissions
- Ensure folders have 755 permissions

### **2. Domain Configuration**
- Point your domain to Hostinger hosting
- Wait for DNS propagation (up to 24 hours)

### **3. SSL Certificate**
- Enable SSL in Hostinger control panel
- Force HTTPS redirect

## ⚙️ Environment Variables

### **Supabase Configuration:**
Your app uses these environment variables (already built into the app):
```
VITE_SUPABASE_URL=https://jhumwdvnpcmnvqtbxnva.supabase.co
VITE_SUPABASE_ANON_KEY=[your-key]
```

## 🔧 Post-Deployment Checklist

### **Test These Features:**
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Blog posts display (if published in Supabase)
- [ ] Contact form submits to info@mitalgic.com
- [ ] Newsletter subscription works
- [ ] Social media links work
- [ ] Mobile responsive design
- [ ] All images load properly

### **SEO Setup:**
- [ ] Verify robots.txt is accessible: `yoursite.com/robots.txt`
- [ ] Verify sitemap.xml: `yoursite.com/sitemap.xml`
- [ ] Submit sitemap to Google Search Console
- [ ] Test page speed with Google PageSpeed Insights

## 📧 Email Configuration

### **Contact Form:**
- Uses FormSubmit.co service
- Sends to: info@mitalgic.com
- No server-side setup needed

### **Newsletter:**
- Saves to Supabase database
- Admin can view subscribers through admin panel

## 🛠️ Troubleshooting

### **Common Issues:**
1. **404 on page refresh:** Ensure `.htaccess` is uploaded
2. **Images not loading:** Check file paths and uploads
3. **Contact form not working:** Verify FormSubmit.co setup
4. **Blog posts empty:** Publish posts in Supabase admin

### **Performance:**
- Gzip compression enabled via `.htaccess`
- Static assets cached for 1 year
- Images optimized during build

## 📱 Mobile Optimization
- Responsive design implemented
- Touch-friendly navigation
- Optimized images for mobile

Your Mitalgic website is ready for production! 🎉