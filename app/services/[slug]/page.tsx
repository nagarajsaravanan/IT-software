import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CircleCheck as CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

const servicesData: Record<string, any> = {
  'software-development': {
    title: 'Software Development',
    description: 'Build custom software solutions that drive your business forward with cutting-edge technologies and best practices.',
    heroImage: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Custom web applications',
      'Mobile app development (iOS & Android)',
      'Desktop software solutions',
      'SaaS platform development',
      'API development & integration',
      'Progressive Web Apps (PWA)'
    ],
    benefits: [
      'Increased operational efficiency',
      'Reduced manual processes',
      'Better user experience',
      'Scalable architecture',
      'Lower maintenance costs',
      'Competitive advantage'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'Java', '.NET', 'Flutter', 'React Native'],
    process: [
      {
        title: 'Discovery & Planning',
        description: 'We analyze your requirements and create a detailed project roadmap.'
      },
      {
        title: 'Design & Prototyping',
        description: 'Creating intuitive UI/UX designs and interactive prototypes.'
      },
      {
        title: 'Development',
        description: 'Agile development with regular sprints and continuous feedback.'
      },
      {
        title: 'Testing & QA',
        description: 'Comprehensive testing to ensure quality and reliability.'
      },
      {
        title: 'Deployment & Support',
        description: 'Smooth deployment and ongoing maintenance and support.'
      }
    ]
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    description: 'Leverage the power of cloud computing to scale your infrastructure, reduce costs, and improve performance.',
    heroImage: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Cloud migration services',
      'AWS, Azure, GCP deployment',
      'Cloud infrastructure management',
      'Serverless architecture',
      'Container orchestration',
      'Cloud security implementation'
    ],
    benefits: [
      'Reduced infrastructure costs',
      'Unlimited scalability',
      'High availability & reliability',
      'Global reach',
      'Automatic backups',
      'Pay-as-you-go pricing'
    ],
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    process: [
      {
        title: 'Assessment',
        description: 'Evaluate your current infrastructure and cloud readiness.'
      },
      {
        title: 'Strategy',
        description: 'Design a cloud architecture that meets your needs.'
      },
      {
        title: 'Migration',
        description: 'Seamless migration with minimal downtime.'
      },
      {
        title: 'Optimization',
        description: 'Continuous monitoring and cost optimization.'
      },
      {
        title: 'Support',
        description: '24/7 cloud infrastructure management and support.'
      }
    ]
  },
  'cybersecurity': {
    title: 'Cybersecurity',
    description: 'Protect your business from cyber threats with comprehensive security solutions and expert monitoring.',
    heroImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Security audits & assessments',
      'Penetration testing',
      'Firewall configuration',
      'Intrusion detection systems',
      'Data encryption',
      'Security awareness training'
    ],
    benefits: [
      'Protection from cyber threats',
      'Compliance with regulations',
      'Data breach prevention',
      'Business continuity',
      'Customer trust',
      'Reduced security risks'
    ],
    technologies: ['Fortinet', 'Palo Alto', 'CrowdStrike', 'Splunk', 'Wireshark', 'Metasploit'],
    process: [
      {
        title: 'Risk Assessment',
        description: 'Identify vulnerabilities and security gaps.'
      },
      {
        title: 'Security Planning',
        description: 'Develop a comprehensive security strategy.'
      },
      {
        title: 'Implementation',
        description: 'Deploy security tools and protocols.'
      },
      {
        title: 'Monitoring',
        description: '24/7 threat detection and response.'
      },
      {
        title: 'Maintenance',
        description: 'Regular updates and security improvements.'
      }
    ]
  },
  'data-analytics': {
    title: 'Data & Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and business intelligence solutions.',
    heroImage: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Business Intelligence dashboards',
      'Big data processing',
      'Predictive analytics',
      'Machine learning models',
      'Data visualization',
      'Real-time analytics'
    ],
    benefits: [
      'Data-driven decision making',
      'Improved operational efficiency',
      'Better customer insights',
      'Revenue optimization',
      'Competitive advantage',
      'Risk mitigation'
    ],
    technologies: ['Python', 'R', 'TensorFlow', 'Power BI', 'Tableau', 'Apache Spark'],
    process: [
      {
        title: 'Data Collection',
        description: 'Gather and consolidate data from multiple sources.'
      },
      {
        title: 'Data Processing',
        description: 'Clean, transform, and prepare data for analysis.'
      },
      {
        title: 'Analysis',
        description: 'Apply statistical methods and machine learning.'
      },
      {
        title: 'Visualization',
        description: 'Create interactive dashboards and reports.'
      },
      {
        title: 'Insights',
        description: 'Deliver actionable recommendations.'
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = servicesData[params.slug];

  if (!service) {
    return {
      title: 'Service Not Found'
    };
  }

  return {
    title: `${service.title} - TechSolutions`,
    description: service.description
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <main>
      <section className="relative h-[400px] bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {service.title}
            </h1>
            <p className="text-xl text-slate-200">
              {service.description}
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Key Features
              </h2>
              <div className="space-y-4">
                {service.features.map((feature: string) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Benefits
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit: string) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.process.map((step: any, index: number) => (
              <Card key={step.title}>
                <CardHeader>
                  <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Technologies We Use
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech: string) => (
              <Badge key={tech} variant="secondary" className="text-base px-6 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <h2 className="text-3xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100">
              Let's discuss how we can help you achieve your goals with {service.title.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/portfolio">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
