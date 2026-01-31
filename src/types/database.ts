// Database types for Supabase integration

export interface Database {
  public: {
    Tables: {
      featured_projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          image_url: string;
          project_url?: string;
          is_featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          image_url: string;
          project_url?: string;
          is_featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          image_url?: string;
          project_url?: string;
          is_featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          title: string;
          slug: string;
          overview_text: string;
          what_we_offer_text: string;
          process_text: string;
          image_url?: string;
          icon_name?: string;
          ndt_pdf_url?: string;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          overview_text: string;
          what_we_offer_text: string;
          process_text: string;
          image_url?: string;
          icon_name?: string;
          ndt_pdf_url?: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          overview_text?: string;
          what_we_offer_text?: string;
          process_text?: string;
          image_url?: string;
          icon_name?: string;
          ndt_pdf_url?: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      team_members: {
        Row: {
          id: string;
          full_name: string;
          position: string;
          biography: string;
          profile_image_url: string;
          linkedin_url?: string;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          position: string;
          biography: string;
          profile_image_url: string;
          linkedin_url?: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          position?: string;
          biography?: string;
          profile_image_url?: string;
          linkedin_url?: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          category: string;
          publication_date: string;
          writer_name: string;
          writer_role: string;
          read_time: string;
          short_summary: string;
          full_content: string;
          cover_image_url?: string;
          is_featured: boolean;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          category: string;
          publication_date: string;
          writer_name: string;
          writer_role: string;
          read_time: string;
          short_summary: string;
          full_content: string;
          cover_image_url?: string;
          is_featured?: boolean;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          category?: string;
          publication_date?: string;
          writer_name?: string;
          writer_role?: string;
          read_time?: string;
          short_summary?: string;
          full_content?: string;
          cover_image_url?: string;
          is_featured?: boolean;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          name?: string;
          email: string;
          subscription_date: string;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name?: string;
          email: string;
          subscription_date?: string;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          subscription_date?: string;
          is_active?: boolean;
          created_at?: string;
        };
      };
      contact_info: {
        Row: {
          id: string;
          phone_number: string;
          email_address: string;
          linkedin_url?: string;
          instagram_url?: string;
          facebook_url?: string;
          twitter_url?: string;
          youtube_url?: string;
          whatsapp_number?: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          phone_number: string;
          email_address: string;
          linkedin_url?: string;
          instagram_url?: string;
          facebook_url?: string;
          twitter_url?: string;
          youtube_url?: string;
          whatsapp_number?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          phone_number?: string;
          email_address?: string;
          linkedin_url?: string;
          instagram_url?: string;
          facebook_url?: string;
          twitter_url?: string;
          youtube_url?: string;
          whatsapp_number?: string;
          updated_at?: string;
        };
      };
      company_info: {
        Row: {
          id: string;
          mission: string;
          vision: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          mission: string;
          vision: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          mission?: string;
          vision?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      company_values: {
        Row: {
          id: string;
          title: string;
          icon_name: string;
          display_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          icon_name: string;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          icon_name?: string;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}