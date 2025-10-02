import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
                Trusted by 500+ Companies Worldwide
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Transform Your Business with
              <span className="block text-blue-600 mt-2">
                Innovative IT Solutions
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              From cloud infrastructure to custom software development, we deliver
              enterprise-grade IT services that drive growth and efficiency for
              businesses of all sizes.
            </p>

            <ul className="space-y-3">
              {[
                '24/7 Expert Support & Monitoring',
                'Enterprise-Grade Security',
                'Scalable Cloud Solutions'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-slate-600 mt-1">Projects Delivered</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-slate-600 mt-1">Client Satisfaction</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600">15+</div>
                  <div className="text-sm text-slate-600 mt-1">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-slate-600 mt-1">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
