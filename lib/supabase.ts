// Strapi API configuration
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://impressive-cow-1777db2c6c.strapiapp.com/admin';
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || '42909c5c1f0b422b2a232736675e7f2a6b73b2cc93ca0fc39769604b747ddc31';

// Strapi API client
class StrapiAPI {
  private baseUrl: string;
  private token?: string;

  constructor(baseUrl: string, token?: string) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api${endpoint}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> || {}),
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async get(endpoint: string, params?: Record<string, string>) {
    const searchParams = params ? `?${new URLSearchParams(params)}` : '';
    return this.request(`${endpoint}${searchParams}`);
  }

  async post(endpoint: string, data: any) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put(endpoint: string, data: any) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint: string) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  }
}

export const strapi = new StrapiAPI(STRAPI_URL, STRAPI_TOKEN);
