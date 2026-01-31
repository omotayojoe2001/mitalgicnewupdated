// SEO utility functions

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export const defaultSEO: SEOData = {
  title: "Mitalgic Global - Industrial Engineering Solutions & Consulting Services",
  description: "Leading industrial engineering consultancy providing turnkey solutions, maintenance services, and technical expertise across power, oil & gas, and manufacturing sectors since 2015.",
  keywords: "industrial engineering, consulting services, power plant modernization, maintenance services, NDT testing, assembly commissioning, business expansion, Nigeria engineering",
  canonical: "https://mitalgic.com/",
  ogImage: "https://mitalgic.com/og-image.jpg",
  ogType: "website"
};

export const pageSEO = {
  home: {
    title: "Mitalgic Global - Industrial Engineering Solutions & Consulting Services",
    description: "Leading industrial engineering consultancy providing turnkey solutions, maintenance services, and technical expertise across power, oil & gas, and manufacturing sectors since 2015.",
    keywords: "industrial engineering, consulting services, power plant modernization, maintenance services, Nigeria engineering"
  },
  about: {
    title: "About Us - Mitalgic Global | Industrial Engineering Experts",
    description: "Founded in 2015, Mitalgic Global combines global expertise with local delivery to execute technically challenging industrial & infrastructure projects across Africa.",
    keywords: "about mitalgic, industrial engineering company, Nigeria engineering consultancy, board members"
  },
  services: {
    title: "Our Services - Industrial Engineering & Consulting | Mitalgic Global",
    description: "Comprehensive engineering solutions including consulting, assembly & commissioning, maintenance services, NDT testing, and business expansion support.",
    keywords: "engineering consulting, assembly commissioning, maintenance services, NDT testing, business expansion"
  },
  contact: {
    title: "Contact Us - Get Industrial Engineering Solutions | Mitalgic Global",
    description: "Contact Mitalgic Global for expert industrial engineering solutions. Located in Victoria Island, Lagos. Get a proposal for your next project.",
    keywords: "contact mitalgic, industrial engineering Lagos, Victoria Island engineering, get proposal"
  },
  insights: {
    title: "Insights & Updates - Industrial Engineering Blog | Mitalgic Global",
    description: "Latest insights, industry news, and technical expertise from Mitalgic Global's engineering team. Stay updated with industrial engineering trends.",
    keywords: "industrial engineering blog, engineering insights, technical articles, industry news"
  },
  industries: {
    title: "Industries We Serve - Power, Oil & Gas, Manufacturing | Mitalgic Global",
    description: "Specialized engineering expertise across power generation, oil & gas, manufacturing, mining, water treatment, and steel structures industries.",
    keywords: "power plant engineering, oil gas engineering, manufacturing solutions, mining engineering"
  }
};

export const generateStructuredData = (type: 'organization' | 'article' | 'service', data: any) => {
  const baseUrl = "https://mitalgic.com";
  
  switch (type) {
    case 'organization':
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Mitalgic Global Limited",
        "url": baseUrl,
        "logo": `${baseUrl}/favicon.png`,
        "description": defaultSEO.description,
        "foundingDate": "2015",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1B Etim Inyang Crescent",
          "addressLocality": "Victoria Island",
          "addressRegion": "Lagos",
          "addressCountry": "Nigeria"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+234-708-882-7509",
          "contactType": "customer service",
          "email": "info@mitalgic.org"
        },
        "sameAs": [
          "https://www.linkedin.com/company/81282258",
          "https://www.instagram.com/mitalgic/",
          "https://web.facebook.com/profile.php?id=61561103456114",
          "https://x.com/mitalgic",
          "https://www.youtube.com/@mitalgic"
        ]
      };
      
    case 'article':
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.title,
        "description": data.description,
        "author": {
          "@type": "Person",
          "name": data.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Mitalgic Global Limited",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/favicon.png`
          }
        },
        "datePublished": data.publishDate,
        "dateModified": data.modifiedDate || data.publishDate,
        "image": data.image || `${baseUrl}/og-image.jpg`,
        "url": `${baseUrl}/insights/${data.slug}`
      };
      
    case 'service':
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.title,
        "description": data.description,
        "provider": {
          "@type": "Organization",
          "name": "Mitalgic Global Limited"
        },
        "url": `${baseUrl}/services/${data.slug}`,
        "serviceType": "Industrial Engineering"
      };
      
    default:
      return null;
  }
};

export const updatePageSEO = (seoData: SEOData) => {
  // Update document title
  document.title = seoData.title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', seoData.description);
  }
  
  // Update meta keywords
  if (seoData.keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoData.keywords);
    }
  }
  
  // Update canonical URL
  if (seoData.canonical) {
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', seoData.canonical);
    }
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', seoData.title);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', seoData.description);
  }
  
  if (seoData.ogImage) {
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', seoData.ogImage);
    }
  }
};