import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Globe,
  Shield,
  Linkedin,
  Twitter,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - TechSolutions',
  description: 'Learn about our mission, values, and the expert team behind TechSolutions IT services.',
};

const stats = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
  { icon: Globe, value: '50+', label: 'Countries Reached' }
];

const values = [
  {
    icon: Target,
    title: 'Client-Centric',
    description: 'Your success is our success. We prioritize understanding your unique needs and delivering solutions that exceed expectations.'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'We implement industry-leading security practices to protect your data and ensure compliance with regulations.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation Driven',
    description: 'We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage.'
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'We work as an extension of your team, fostering partnerships built on trust, transparency, and open communication.'
  }
];

const team = [
  {
    name: 'David Chen',
    role: 'Chief Executive Officer',
    bio: '15+ years leading technology companies and driving digital transformation.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Sarah Johnson',
    role: 'Chief Technology Officer',
    bio: 'Expert in cloud architecture and cybersecurity with a track record of building scalable systems.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Michael Torres',
    role: 'VP of Software Development',
    bio: 'Passionate about creating elegant solutions and leading high-performing development teams.',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of Data Analytics',
    bio: 'Transforms complex data into actionable insights using advanced analytics and machine learning.',
    image: 'https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'James Wilson',
    role: 'Head of Cloud Services',
    bio: 'Specializes in cloud migration and optimization across AWS, Azure, and Google Cloud.',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Lisa Park',
    role: 'Cybersecurity Lead',
    bio: 'Protects organizations from evolving threats with comprehensive security strategies.',
    image: 'https://images.pexels.com/photos/3765035/pexels-photo-3765035.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    twitter: '#'
  }
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Empowering Businesses Through Technology
            </h1>
            <p className="text-xl text-slate-300">
              For over 15 years, we've been helping organizations transform their operations
              with innovative IT solutions and expert guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-8">
                    <Icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-slate-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in 2010, TechSolutions emerged from a simple belief: every business
              deserves access to world-class technology solutions. What started as a small
              team of passionate technologists has grown into a full-service IT company
              serving clients across 50+ countries.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, we combine deep technical expertise with a commitment to understanding
              our clients' unique challenges. Our diverse team brings together specialists
              in software development, cloud computing, cybersecurity, and data analytics
              to deliver comprehensive solutions that drive real business value.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                      <Icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
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
            <h2 className="text-3xl font-bold text-slate-900">Meet Our Leadership</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden group">
                <div className="relative h-80 overflow-hidden bg-slate-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      className="h-9 w-9 rounded-lg bg-slate-100 hover:bg-blue-600 flex items-center justify-center transition-colors group"
                    >
                      <Linkedin className="h-4 w-4 text-slate-600 group-hover:text-white" />
                    </a>
                    <a
                      href={member.twitter}
                      className="h-9 w-9 rounded-lg bg-slate-100 hover:bg-blue-600 flex items-center justify-center transition-colors group"
                    >
                      <Twitter className="h-4 w-4 text-slate-600 group-hover:text-white" />
                    </a>
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
            <h2 className="text-3xl font-bold">Join Our Team</h2>
            <p className="text-xl text-blue-100">
              We're always looking for talented individuals who are passionate about
              technology and making a difference.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/careers">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
