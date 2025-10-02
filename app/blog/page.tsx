'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Loader2 } from 'lucide-react';
import { getBlogPosts, type BlogPost } from '@/lib/api';

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const data = await getBlogPosts();
        setBlogPosts(data);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  const getImageUrl = (blogPost: BlogPost) => {
    if (!blogPost.attributes.cover_image?.data?.attributes?.url) {
      return 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800';
    }
    
    const imageUrl = blogPost.attributes.cover_image.data.attributes.url;
    return imageUrl.startsWith('http') 
      ? imageUrl 
      : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageUrl}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const featuredPosts = blogPosts.filter(post => post.attributes.featured);
  const regularPosts = blogPosts.filter(post => !post.attributes.featured);

  if (loading) {
    return (
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Tech Insights & Industry Trends
              </h1>
              <p className="text-xl text-slate-300">
                Expert perspectives on technology, best practices, and digital transformation
                from our team of IT professionals.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Tech Insights & Industry Trends
              </h1>
              <p className="text-xl text-slate-300">
                Expert perspectives on technology, best practices, and digital transformation
                from our team of IT professionals.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Tech Insights & Industry Trends
            </h1>
            <p className="text-xl text-slate-300">
              Expert perspectives on technology, best practices, and digital transformation
              from our team of IT professionals.
            </p>
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.attributes.slug}`}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-64 overflow-hidden bg-slate-200">
                      <img
                        src={getImageUrl(post)}
                        alt={post.attributes.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-blue-600">
                        Featured
                      </Badge>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {post.attributes.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {post.attributes.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-500 pt-4 border-t">
                        <span>{post.attributes.author?.data?.attributes?.name || 'Unknown Author'}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.attributes.createdAt)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Recent Articles</h2>
          {regularPosts.length === 0 ? (
            <div className="text-center">
              <p className="text-slate-600">No blog posts available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.attributes.slug}`}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden bg-slate-200">
                      <img
                        src={getImageUrl(post)}
                        alt={post.attributes.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.attributes.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                        {post.attributes.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t">
                        <span>{post.attributes.author?.data?.attributes?.name || 'Unknown Author'}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}