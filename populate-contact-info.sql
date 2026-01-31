-- Insert default contact information
INSERT INTO contact_info (
  id,
  phone_number, 
  email_address, 
  linkedin_url, 
  instagram_url, 
  facebook_url, 
  twitter_url, 
  youtube_url, 
  whatsapp_number
) VALUES (
  '1',
  '+90 532 651 71 56',
  'info@mitalgic.com',
  'https://www.linkedin.com/company/81282258/admin/dashboard/',
  'https://www.instagram.com/mitalgic/',
  'https://web.facebook.com/profile.php?id=61561103456114',
  'https://x.com/mitalgic',
  'https://www.youtube.com/@mitalgic',
  '+90 532 651 71 56'
) ON CONFLICT (id) DO UPDATE SET
  phone_number = EXCLUDED.phone_number,
  email_address = EXCLUDED.email_address,
  linkedin_url = EXCLUDED.linkedin_url,
  instagram_url = EXCLUDED.instagram_url,
  facebook_url = EXCLUDED.facebook_url,
  twitter_url = EXCLUDED.twitter_url,
  youtube_url = EXCLUDED.youtube_url,
  whatsapp_number = EXCLUDED.whatsapp_number,
  updated_at = NOW();