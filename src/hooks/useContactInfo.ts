import { useState, useEffect } from 'react';
import { contactInfoQueries } from '@/utils/supabase-queries';

interface ContactInfo {
  phone_number: string;
  email_address: string;
  linkedin_url?: string;
  instagram_url?: string;
  facebook_url?: string;
  twitter_url?: string;
  youtube_url?: string;
  whatsapp_number?: string;
}

export const useContactInfo = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const { data, error } = await contactInfoQueries.get();
        if (error) throw error;
        setContactInfo(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch contact info');
        // Fallback to default values
        setContactInfo({
          phone_number: '+90 532 651 71 56',
          email_address: 'info@mitalgic.com',
          linkedin_url: 'https://www.linkedin.com/company/81282258/admin/dashboard/',
          instagram_url: 'https://www.instagram.com/mitalgic/',
          facebook_url: 'https://web.facebook.com/profile.php?id=61561103456114',
          twitter_url: 'https://x.com/mitalgic',
          youtube_url: 'https://www.youtube.com/@mitalgic',
          whatsapp_number: '+90 532 651 71 56'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  return { contactInfo, loading, error };
};