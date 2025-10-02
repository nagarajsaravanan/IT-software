import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Award,
  TrendingUp,
  Heart,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Join Our Team | TechSolutions',
  description: 'Join our team of talented professionals and build the future of technology.',
};

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'Industry-leading compensation and performance bonuses'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear career paths with mentorship and training opportunities'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Remote work options and flexible hours'
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Collaborative culture with talented professionals'
  },
  {
    icon: Award,
    title: 'Recognition',
    description: 'Employee recognition programs and team events'
  }
];

const openings = [
  {
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    salary: '$120K - $180K',
    description: 'Build scalable web applications using React, Node.js, and modern cloud technologies.',
    requirements: ['5+ years of experience', 'React & Node.js expertise', 'Cloud platforms (AWS/Azure)', 'Team leadership']
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'Cloud Services',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    salary: '$140K - $200K',
    description: 'Design and implement cloud infrastructure for enterprise clients.',
    requirements: ['AWS/Azure/GCP certified', '7+ years experience', 'Infrastructure as Code', 'Client-facing skills']
  },
  {
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$130K - $190K',
    description: 'Protect our clients from cyber threats and ensure compliance with security standards.',
    requirements: ['Security certifications', 'Penetration testing', 'SIEM experience', 'Incident response']
  },
  {
    title: 'Data Scientist',
    department: 'Data Analytics',
    location: 'Remote',
    type: 'Full-time',
    salary: '$110K - $170K',
    description: 'Build machine learning models and deliver insights from complex datasets.',
    requirements: ['Python/R proficiency', 'ML frameworks', 'Statistical analysis', 'Communication skills']
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    salary: '$115K - $175K',
    description: 'Automate infrastructure and streamline CI/CD pipelines for faster deployments.',
    requirements: ['Kubernetes/Docker', 'CI/CD tools', 'Scripting languages', 'Cloud platforms']
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    salary: '$90K - $140K',
    description: 'Create beautiful, intuitive interfaces for web and mobile applications.',
    requirements: ['Design tools (Figma)', 'User research', 'Prototyping', 'Portfolio required']
  }
];

export default function CareersPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Build the Future with Us
            </h1>
            <p className="text-xl text-slate-300">
              Join a team of talented professionals passionate about solving complex
              problems and creating innovative solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              Why Work at TechSolutions?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer more than just a job – we provide an environment where you can
              grow, innovate, and make a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-slate-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              Open Positions
            </h2>
            <p className="text-lg text-slate-600">
              Find your next opportunity and grow your career with us.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {openings.map((job) => (
              <Card key={job.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">{job.title}</CardTitle>
                      <CardDescription className="text-base">
                        {job.description}
                      </CardDescription>
                    </div>
                    <Button asChild>
                      <Link href="/contact">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      {job.department}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {job.type}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      {job.salary}
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Requirements:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {job.requirements.map((req) => (
                        <li key={req} className="text-sm text-slate-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <h2 className="text-3xl font-bold">
              Don't See the Right Position?
            </h2>
            <p className="text-xl text-blue-100">
              We're always looking for talented individuals. Send us your resume and
              we'll keep you in mind for future opportunities.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Send Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
