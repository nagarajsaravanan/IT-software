import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CircleCheck as CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

const projectsData: Record<string, any> = {
  'healthcare-management-system': {
    title: 'Healthcare Management System',
    client: 'MedTech Solutions',
    category: 'Healthcare',
    duration: '8 months',
    team: '12 people',
    heroImage: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: 'MedTech Solutions needed a comprehensive digital platform to modernize their patient management processes and enable telemedicine capabilities. We developed an integrated system that streamlined operations and improved patient care.',
    challenge: 'The healthcare provider was struggling with disconnected systems, manual processes, and the inability to offer remote consultations. They needed a HIPAA-compliant solution that could integrate with existing systems while providing a seamless user experience for both staff and patients.',
    solution: 'We designed and built a cloud-based healthcare management platform with integrated telemedicine features, automated appointment scheduling, electronic health records, and real-time patient monitoring. The system was built with security and compliance as top priorities.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'WebRTC', 'Redis', 'Docker'],
    features: [
      'Patient portal with appointment booking',
      'Video consultation integration',
      'Electronic Health Records (EHR)',
      'Automated appointment reminders',
      'Prescription management',
      'Real-time health monitoring',
      'Insurance verification',
      'Billing and payments'
    ],
    results: [
      { metric: 'Operational Efficiency', value: '+45%', description: 'Reduction in administrative tasks' },
      { metric: 'Patient Satisfaction', value: '4.8/5', description: 'Average rating from users' },
      { metric: 'Active Users', value: '10,000+', description: 'Registered patients' },
      { metric: 'Consultations', value: '25,000+', description: 'Completed telemedicine sessions' },
      { metric: 'System Uptime', value: '99.9%', description: 'Reliability score' },
      { metric: 'Response Time', value: '-60%', description: 'Faster patient query resolution' }
    ],
    testimonial: {
      quote: 'The platform has transformed how we deliver healthcare. Our staff is more efficient, and our patients love the convenience of telemedicine.',
      author: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer, MedTech Solutions'
    }
  },
  'ecommerce-platform': {
    title: 'E-Commerce Platform',
    client: 'RetailPro',
    category: 'E-Commerce',
    duration: '10 months',
    team: '15 people',
    heroImage: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
    overview: 'RetailPro wanted to create a modern multi-vendor marketplace that could scale with their rapidly growing business. We delivered a high-performance e-commerce platform with advanced features.',
    challenge: 'The client was using an outdated platform that couldn\'t handle their growing traffic and vendor base. They needed a scalable solution with real-time inventory management, advanced search, and seamless payment processing.',
    solution: 'We built a next-generation e-commerce platform using modern technologies, implementing microservices architecture for scalability, real-time inventory synchronization, AI-powered product recommendations, and integrated payment processing.',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'Elasticsearch'],
    features: [
      'Multi-vendor marketplace',
      'Real-time inventory management',
      'Advanced product search',
      'AI-powered recommendations',
      'Multiple payment gateways',
      'Order tracking system',
      'Vendor dashboard',
      'Customer reviews & ratings'
    ],
    results: [
      { metric: 'Revenue Growth', value: '+120%', description: 'Increase in sales' },
      { metric: 'Page Load Time', value: '2.5s', description: 'Average load speed' },
      { metric: 'Monthly Orders', value: '50,000+', description: 'Orders processed' },
      { metric: 'Conversion Rate', value: '+35%', description: 'Improvement' },
      { metric: 'Active Vendors', value: '500+', description: 'Registered sellers' },
      { metric: 'Customer Rating', value: '4.6/5', description: 'Average satisfaction' }
    ],
    testimonial: {
      quote: 'This platform has exceeded our expectations. The performance is outstanding, and our vendors love how easy it is to manage their stores.',
      author: 'Michael Chen',
      role: 'CEO, RetailPro'
    }
  },
  'financial-analytics-dashboard': {
    title: 'Financial Analytics Dashboard',
    client: 'FinanceHub',
    category: 'Finance',
    duration: '6 months',
    team: '10 people',
    heroImage: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: 'FinanceHub required an advanced analytics platform to provide real-time insights and predictive analytics for their investment portfolio management.',
    challenge: 'The financial firm was relying on manual data analysis and disparate tools, leading to slow decision-making and missed opportunities. They needed a unified platform with real-time data processing and AI-powered predictions.',
    solution: 'We developed a sophisticated analytics dashboard with real-time data streaming, machine learning models for predictive analytics, interactive visualizations, and automated risk assessment capabilities.',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'Kafka', 'TimescaleDB', 'AWS'],
    features: [
      'Real-time market data streaming',
      'Predictive analytics models',
      'Interactive data visualizations',
      'Risk assessment tools',
      'Portfolio optimization',
      'Automated alerts',
      'Custom report generation',
      'Multi-source data integration'
    ],
    results: [
      { metric: 'Prediction Accuracy', value: '94%', description: 'Machine learning model accuracy' },
      { metric: 'Processing Speed', value: '3x faster', description: 'Compared to previous system' },
      { metric: 'Data Insights', value: '1,000+', description: 'Actionable insights generated' },
      { metric: 'Decision Time', value: '-70%', description: 'Faster investment decisions' },
      { metric: 'Risk Detection', value: '+85%', description: 'Improvement in early risk identification' },
      { metric: 'ROI', value: '+40%', description: 'Improvement in portfolio returns' }
    ],
    testimonial: {
      quote: 'The analytics platform has given us a competitive edge. We can now make data-driven decisions in real-time with confidence.',
      author: 'Jennifer Martinez',
      role: 'Chief Investment Officer, FinanceHub'
    }
  }
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projectsData[params.slug];

  if (!project) {
    return {
      title: 'Project Not Found'
    };
  }

  return {
    title: `${project.title} - ${project.client} | TechSolutions`,
    description: project.overview
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="relative h-[500px] bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white space-y-6">
            <Badge className="bg-blue-600">{project.category}</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="text-xl text-slate-200">
              {project.client}
            </p>
            <div className="flex gap-8 text-sm">
              <div>
                <span className="text-slate-400">Duration:</span>{' '}
                <span className="font-medium">{project.duration}</span>
              </div>
              <div>
                <span className="text-slate-400">Team:</span>{' '}
                <span className="font-medium">{project.team}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
                <p className="text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">The Solution</h2>
                <p className="text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature: string) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Technologies Used
            </h2>
            <p className="text-slate-600 text-center mb-12">
              Built with modern, scalable technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech: string) => (
                <Badge key={tech} variant="secondary" className="text-base px-6 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Results & Impact</h2>
              <p className="text-xl text-blue-100">
                Measurable outcomes that drove business success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.results.map((result: any) => (
                <Card key={result.metric} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold mb-2">{result.value}</div>
                    <div className="text-lg font-semibold mb-2">{result.metric}</div>
                    <div className="text-sm text-blue-100">{result.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="text-6xl text-blue-600 mb-4">"</div>
                </div>
                <blockquote className="text-xl text-slate-700 leading-relaxed text-center mb-8">
                  {project.testimonial.quote}
                </blockquote>
                <div className="text-center">
                  <div className="font-bold text-slate-900">{project.testimonial.author}</div>
                  <div className="text-slate-600">{project.testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-600">
              Let's discuss how we can create a solution tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">
                  View More Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
