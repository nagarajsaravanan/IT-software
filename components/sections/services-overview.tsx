'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getServices, type Service } from '@/lib/api';
import {
  Cloud,
  Shield,
  Code,
  Database,
  Smartphone,
  Network,
  ArrowRight,
  Bot,
  Globe,
  Server,
  Lock,
  BarChart3,
  Headphones,
  Loader2
} from 'lucide-react';

// Icon mapping for services
const iconMap: Record<string, any> = {
  Code,
  Cloud,
  Shield,
  Database,
  Network,
  Smartphone,
  Bot,
  Globe,
  Server,
  Lock,
  BarChart3,
  Headphones,
};

export function ServicesOverview() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await getServices();
        // Take only first 6 services for overview
        setServices(data.slice(0, 6));
      } catch (err) {
        setError('Failed to load services');
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Comprehensive IT Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end technology solutions tailored to your business needs,
              from development to deployment and beyond.
            </p>
          </div>
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive IT Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            End-to-end technology solutions tailored to your business needs,
            from development to deployment and beyond.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = iconMap[service.attributes.icon] || Code;
            return (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.attributes.name}</CardTitle>
                  <CardDescription className="text-base">
                    {service.attributes.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/services/${service.attributes.slug}`}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
