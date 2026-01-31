import { supabase, Tables, InsertTables, UpdateTables } from '@/lib/supabase';

// Featured Projects Queries
export const featuredProjectsQueries = {
  getAll: async () => {
    return await supabase
      .from('featured_projects')
      .select('*')
      .order('created_at', { ascending: false });
  },

  getFeatured: async () => {
    return await supabase
      .from('featured_projects')
      .select('*')
      .eq('is_featured', true)
      .order('created_at', { ascending: false });
  },

  create: async (project: InsertTables<'featured_projects'>) => {
    return await supabase
      .from('featured_projects')
      .insert([project]);
  },

  update: async (id: string, updates: UpdateTables<'featured_projects'>) => {
    return await supabase
      .from('featured_projects')
      .update(updates)
      .eq('id', id);
  },

  delete: async (id: string) => {
    return await supabase
      .from('featured_projects')
      .delete()
      .eq('id', id);
  }
};

// Services Queries
export const servicesQueries = {
  getAll: async () => {
    return await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false });
  },

  getActive: async () => {
    return await supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });
  },

  getBySlug: async (slug: string) => {
    return await supabase
      .from('services')
      .select('*')
      .eq('slug', slug)
      .single();
  },

  create: async (service: InsertTables<'services'>) => {
    return await supabase
      .from('services')
      .insert([service]);
  },

  update: async (id: string, updates: UpdateTables<'services'>) => {
    return await supabase
      .from('services')
      .update(updates)
      .eq('id', id);
  },

  delete: async (id: string) => {
    return await supabase
      .from('services')
      .delete()
      .eq('id', id);
  }
};

// Team Members Queries
export const teamMembersQueries = {
  getAll: async () => {
    return await supabase
      .from('team_members')
      .select('*')
      .order('created_at', { ascending: false });
  },

  getActive: async () => {
    return await supabase
      .from('team_members')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });
  },

  create: async (member: InsertTables<'team_members'>) => {
    return await supabase
      .from('team_members')
      .insert([member]);
  },

  update: async (id: string, updates: UpdateTables<'team_members'>) => {
    return await supabase
      .from('team_members')
      .update(updates)
      .eq('id', id);
  },

  delete: async (id: string) => {
    return await supabase
      .from('team_members')
      .delete()
      .eq('id', id);
  }
};

// Blog Posts Queries
export const blogPostsQueries = {
  getAll: async () => {
    return await supabase
      .from('blog_posts')
      .select('*')
      .order('publication_date', { ascending: false });
  },

  getPublished: async (limit?: number) => {
    let query = supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });
    
    if (limit) {
      query = query.limit(limit);
    }
    
    return await query;
  },

  getFeatured: async () => {
    return await supabase
      .from('blog_posts')
      .select('*')
      .eq('is_featured', true)
      .eq('status', 'published')
      .order('created_at', { ascending: false });
  },

  getBySlug: async (slug: string) => {
    return await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
  },

  getByCategory: async (category: string) => {
    return await supabase
      .from('blog_posts')
      .select('*')
      .eq('category', category)
      .eq('status', 'published')
      .order('created_at', { ascending: false });
  },

  create: async (post: InsertTables<'blog_posts'>) => {
    return await supabase
      .from('blog_posts')
      .insert([post]);
  },

  update: async (id: string, updates: UpdateTables<'blog_posts'>) => {
    return await supabase
      .from('blog_posts')
      .update(updates)
      .eq('id', id);
  },

  delete: async (id: string) => {
    return await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);
  }
};

// Newsletter Subscribers Queries
export const newsletterQueries = {
  getAll: async () => {
    return await supabase
      .from('newsletter_subscribers')
      .select('*')
      .order('subscription_date', { ascending: false });
  },

  getActive: async () => {
    return await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('is_active', true)
      .order('subscription_date', { ascending: false });
  },

  subscribe: async (subscriber: InsertTables<'newsletter_subscribers'>) => {
    return await supabase
      .from('newsletter_subscribers')
      .insert([subscriber]);
  },

  unsubscribe: async (id: string) => {
    return await supabase
      .from('newsletter_subscribers')
      .update({ is_active: false })
      .eq('id', id);
  },

  delete: async (id: string) => {
    return await supabase
      .from('newsletter_subscribers')
      .delete()
      .eq('id', id);
  }
};

// Contact Info Queries
export const contactInfoQueries = {
  get: async () => {
    return await supabase
      .from('contact_info')
      .select('*')
      .single();
  },

  update: async (updates: UpdateTables<'contact_info'>) => {
    return await supabase
      .from('contact_info')
      .update(updates)
      .eq('id', '1');
  }
};