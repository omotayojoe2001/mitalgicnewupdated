import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/info@mitalgic.org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: 'New Contact Form Submission - Mitalgic Website',
          _captcha: 'false',
          _template: 'table'
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Failed to send message' };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting };
};