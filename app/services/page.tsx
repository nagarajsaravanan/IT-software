'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, Shield, Code, Database, Smartphone, Network, Bot, Globe, Server, Lock, BarChart3, Headphones, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getServices, type Service } from '@/lib/api';

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

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await getServices();
        setServices(data);
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
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Comprehensive IT Services
              </h1>
              <p className="text-xl text-slate-300">
                From development to deployment, security to scaling - we provide
                end-to-end IT solutions tailored to your business needs.
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
                Comprehensive IT Services
              </h1>
              <p className="text-xl text-slate-300">
                From development to deployment, security to scaling - we provide
                end-to-end IT solutions tailored to your business needs.
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
              Comprehensive IT Services
            </h1>
            <p className="text-xl text-slate-300">
              From development to deployment, security to scaling - we provide
              end-to-end IT solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const IconComponent = iconMap[service.attributes.icon] || Code;
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200"
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
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.attributes.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-slate-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.attributes.slug}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group/link"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-slate-600">
              Every business is unique. Let's discuss how we can create a tailored
              IT strategy that fits your specific requirements.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
