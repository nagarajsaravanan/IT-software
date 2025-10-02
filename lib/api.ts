import { strapi } from './strapi';

// Strapi data interfaces
export interface Service {
  id: number;
  attributes: {
    name: string;
    slug: string;
    description: string;
    icon: string;
    features: string[];
    order_position: number;
    published: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface CaseStudy {
  id: number;
  attributes: {
    title: string;
    slug: string;
    client: string;
    description: string;
    challenge: string;
    solution: string;
    results: Record<string, string>;
    images: any[];
    technologies: string[];
    service?: {
      data: Service;
    };
    published: boolean;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface BlogPost {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    cover_image: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    author: {
      data: {
        attributes: {
          name: string;
          email: string;
        };
      };
    };
    published: boolean;
    featured: boolean;
    views: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface TeamMember {
  id: number;
  attributes: {
    name: string;
    position: string;
    bio: string;
    avatar: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    social_links: Record<string, string>;
    order_position: number;
    published: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service_interest?: string;
  message: string;
}

// API functions
export async function getServices(): Promise<Service[]> {
  try {
    const response = await strapi.get('/services', {
      'filters[published][$eq]': 'true',
      'sort': 'order_position:asc',
      'populate': '*'
    });
    return response.data || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const response = await strapi.get('/services', {
      'filters[slug][$eq]': slug,
      'filters[published][$eq]': 'true',
      'populate': '*'
    });
    return response.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching service by slug:', error);
    throw error;
  }
}

export async function getCaseStudies(featured?: boolean): Promise<CaseStudy[]> {
  try {
    const filters: Record<string, string> = {
      'filters[published][$eq]': 'true',
      'sort': 'createdAt:desc',
      'populate': '*'
    };
    
    if (featured) {
      filters['filters[featured][$eq]'] = 'true';
    }

    const response = await strapi.get('/case-studies', filters);
    return response.data || [];
  } catch (error) {
    console.error('Error fetching case studies:', error);
    throw error;
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const response = await strapi.get('/case-studies', {
      'filters[slug][$eq]': slug,
      'filters[published][$eq]': 'true',
      'populate': '*'
    });
    return response.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching case study by slug:', error);
    throw error;
  }
}

export async function getBlogPosts(featured?: boolean): Promise<BlogPost[]> {
  try {
    const filters: Record<string, string> = {
      'filters[published][$eq]': 'true',
      'sort': 'createdAt:desc',
      'populate': '*'
    };
    
    if (featured) {
      filters['filters[featured][$eq]'] = 'true';
    }

    const response = await strapi.get('/blog-posts', filters);
    return response.data || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await strapi.get('/blog-posts', {
      'filters[slug][$eq]': slug,
      'filters[published][$eq]': 'true',
      'populate': '*'
    });
    return response.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    throw error;
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await strapi.get('/team-members', {
      'filters[published][$eq]': 'true',
      'sort': 'order_position:asc',
      'populate': '*'
    });
    return response.data || [];
  } catch (error) {
    console.error('Error fetching team members:', error);
    throw error;
  }
}

export async function submitContactForm(submission: ContactSubmission) {
  try {
    const response = await strapi.post('/contact-submissions', {
      data: submission
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

export async function subscribeNewsletter(email: string) {
  try {
    const response = await strapi.post('/newsletter-subscriptions', {
      data: { email }
    });
    return response.data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
}
