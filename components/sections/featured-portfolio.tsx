'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Loader2 } from 'lucide-react';
import { getCaseStudies, type CaseStudy } from '@/lib/api';

export function FeaturedPortfolio() {
  const [projects, setProjects] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFeaturedProjects() {
      try {
        const data = await getCaseStudies(true); // Get featured case studies
        setProjects(data.slice(0, 3)); // Take only first 3 for featured section
      } catch (err) {
        setError('Failed to load featured projects');
        console.error('Error fetching featured projects:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedProjects();
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
        : `${process.env.NEXT_PUBLIC_STRAPI_URL}${firstImage.data.attributes.url}`;
    }
    
    return 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800';
  };

  if (loading) {
    return (
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover how we've helped businesses transform their operations
              with cutting-edge technology solutions.
            </p>
          </div>
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        </div>
      </section>
    );
  }

  if (error || projects.length === 0) {
    return (
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {error || 'No featured projects available at the moment.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations
            with cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group overflow-hidden hover:shadow-xl transition-all duration-300 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden bg-slate-200">
                  <img
                    src={getImageUrl(project)}
                    alt={project.attributes.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-blue-600 mb-2">
                        {project.attributes.client}
                      </p>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        {project.attributes.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {project.attributes.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.attributes.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-200">
                      {Object.entries(project.attributes.results).slice(0, 2).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-2xl font-bold text-blue-600">
                            {value}
                          </div>
                          <div className="text-sm text-slate-600 capitalize">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/portfolio/${project.attributes.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group/link"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
