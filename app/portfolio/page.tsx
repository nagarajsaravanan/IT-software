'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { getCaseStudies, type CaseStudy } from '@/lib/api';

export default function PortfolioPage() {
  const [projects, setProjects] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Extract unique categories from projects
  const categories: string[] = ['All', ...Array.from(new Set(
    projects
      .map(p => p.attributes.service?.data?.attributes?.name)
      .filter((name): name is string => Boolean(name))
  ))];
  
  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getCaseStudies();
        setProjects(data);
      } catch (err) {
        setError('Failed to load portfolio projects');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const getImageUrl = (caseStudy: CaseStudy) => {
    // Fallback to a placeholder if no image
    if (!caseStudy.attributes.images || caseStudy.attributes.images.length === 0) {
      return 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800';
    }
    
    const firstImage = caseStudy.attributes.images[0];
    if (firstImage?.data?.attributes?.url) {
      return firstImage.data.attributes.url.startsWith('http') 
        ? firstImage.data.attributes.url 
        : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${firstImage.data.attributes.url}`;
    }
    
    return 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800';
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.attributes.service?.data?.attributes?.name === selectedCategory);

  if (loading) {
    return (
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Our Portfolio
              </h1>
              <p className="text-xl text-slate-300">
                Explore our successful projects and see how we've helped businesses
                achieve their digital transformation goals.
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
                Our Portfolio
              </h1>
              <p className="text-xl text-slate-300">
                Explore our successful projects and see how we've helped businesses
                achieve their digital transformation goals.
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
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-300">
              Explore our successful projects and see how we've helped businesses
              achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {categories.length > 1 && (
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center">
              <p className="text-slate-600">No projects found for the selected category.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-200">
                    <img
                      src={getImageUrl(project)}
                      alt={project.attributes.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.attributes.featured && (
                      <Badge className="absolute top-4 right-4 bg-blue-600">
                        Featured
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <div>
                      <p className="text-sm font-medium text-blue-600 mb-2">
                        {project.attributes.client}
                      </p>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {project.attributes.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                        {project.attributes.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.attributes.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.attributes.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.attributes.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-3 border-t">
                      {Object.entries(project.attributes.results).slice(0, 3).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm font-bold text-blue-600">
                            {value}
                          </div>
                          <div className="text-xs text-slate-500 capitalize">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/portfolio/${project.attributes.slug}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group/link"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-slate-600">
              Let's discuss how we can help you bring your vision to life with our
              proven expertise and innovative solutions.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
