import { useState, useEffect } from 'react';
import { supabase, Tables } from '@/lib/supabase';

// Featured Projects Hook
export const useFeaturedProjects = () => {
  const [projects, setProjects] = useState<Tables<'featured_projects'>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('featured_projects')
        .select('*')
        .eq('is_featured', true)
        .order('created_at', { ascending: false });
      
      if (data) setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return { projects, loading };
};

// Services Hook
export const useServices = () => {
  const [services, setServices] = useState<Tables<'services'>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      
      if (data) setServices(data);
      setLoading(false);
    };

    fetchServices();
  }, []);

  return { services, loading };
};

// Team Members Hook
export const useTeamMembers = () => {
  const [members, setMembers] = useState<Tables<'team_members'>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      
      if (data) setMembers(data);
      setLoading(false);
    };

    fetchMembers();
  }, []);

  return { members, loading };
};

// Blog Posts Hook
export const useBlogPosts = (limit?: number) => {
  const [posts, setPosts] = useState<Tables<'blog_posts'>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      let query = supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });
      
      if (limit) {
        query = query.limit(limit);
      }
      
      const { data, error } = await query;
      
      if (data) setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, [limit]);

  return { posts, loading };
};

// Contact Info Hook
export const useContactInfo = () => {
  const [contactInfo, setContactInfo] = useState<Tables<'contact_info'> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      const { data, error } = await supabase
        .from('contact_info')
        .select('*')
        .single();
      
      if (data) setContactInfo(data);
      setLoading(false);
    };

    fetchContactInfo();
  }, []);

  return { contactInfo, loading };
};

// Company Info Hook
export const useCompanyInfo = () => {
  const [companyInfo, setCompanyInfo] = useState<Tables<'company_info'> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      const { data, error } = await supabase
        .from('company_info')
        .select('*')
        .single();
      
      if (data) setCompanyInfo(data);
      setLoading(false);
    };

    fetchCompanyInfo();
  }, []);

  return { companyInfo, loading };
};

// Company Values Hook
export const useCompanyValues = () => {
  const [values, setValues] = useState<Tables<'company_values'>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchValues = async () => {
      const { data, error } = await supabase
        .from('company_values')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });
      
      if (data) setValues(data);
      setLoading(false);
    };

    fetchValues();
  }, []);

  return { values, loading };
};

// Newsletter Subscription Hook
export const useNewsletterSubscription = () => {
  const [loading, setLoading] = useState(false);

  const subscribe = async (email: string, name?: string) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email, name }]);
    
    setLoading(false);
    return { data, error };
  };

  return { subscribe, loading };
};