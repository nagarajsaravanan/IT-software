import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

const blogPostsData: Record<string, any> = {
  'future-of-cloud-computing-2025': {
    title: 'The Future of Cloud Computing in 2025',
    category: 'Cloud Computing',
    author: 'David Chen',
    authorRole: 'Cloud Solutions Architect',
    date: '2024-12-15',
    readTime: '8 min read',
    coverImage: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt: 'Explore the emerging trends in cloud technology and how they will shape business operations in the coming years.',
    content: `
      <p>Cloud computing has evolved dramatically over the past decade, and 2025 promises to bring even more transformative changes. As businesses continue to migrate their operations to the cloud, new technologies and approaches are reshaping how we think about infrastructure, security, and scalability.</p>

      <h2>The Rise of Multi-Cloud Strategies</h2>
      <p>Organizations are increasingly adopting multi-cloud strategies to avoid vendor lock-in and optimize costs. By distributing workloads across AWS, Azure, and Google Cloud Platform, businesses can leverage the unique strengths of each provider while maintaining flexibility.</p>

      <h2>Edge Computing Integration</h2>
      <p>Edge computing is becoming integral to cloud architecture, bringing computation closer to data sources. This hybrid approach reduces latency, improves performance, and enables real-time processing for IoT devices and mobile applications.</p>

      <h2>AI-Powered Cloud Management</h2>
      <p>Artificial intelligence is revolutionizing how we manage cloud infrastructure. AI-driven tools can predict resource needs, automatically optimize costs, and detect security threats before they become critical issues.</p>

      <h2>Sustainability in the Cloud</h2>
      <p>Green cloud computing is no longer optional. Major cloud providers are committing to carbon-neutral operations, and businesses are prioritizing sustainable cloud practices as part of their environmental responsibility.</p>

      <h2>Conclusion</h2>
      <p>The cloud computing landscape in 2025 will be characterized by greater flexibility, intelligence, and sustainability. Organizations that embrace these trends will be well-positioned to innovate and compete in an increasingly digital world.</p>
    `
  },
  'ai-powered-cybersecurity': {
    title: 'AI-Powered Cybersecurity: Protecting Your Business',
    category: 'Cybersecurity',
    author: 'Sarah Johnson',
    authorRole: 'Cybersecurity Specialist',
    date: '2024-12-10',
    readTime: '6 min read',
    coverImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt: 'Learn how artificial intelligence is revolutionizing cybersecurity and helping businesses stay ahead of threats.',
    content: `
      <p>In an era where cyber threats are becoming increasingly sophisticated, artificial intelligence is emerging as a game-changer in cybersecurity. AI-powered security systems can detect, analyze, and respond to threats faster and more accurately than traditional methods.</p>

      <h2>Threat Detection and Prevention</h2>
      <p>Machine learning algorithms can analyze vast amounts of network traffic and user behavior to identify anomalies that might indicate a security breach. These systems learn from each interaction, continuously improving their detection capabilities.</p>

      <h2>Automated Response Systems</h2>
      <p>AI doesn't just detect threats—it can respond to them in real-time. Automated security systems can isolate compromised systems, block malicious traffic, and initiate incident response protocols without human intervention.</p>

      <h2>Predictive Security Analytics</h2>
      <p>By analyzing historical data and current trends, AI can predict potential vulnerabilities and attack vectors before they're exploited. This proactive approach allows organizations to strengthen their defenses preemptively.</p>

      <h2>Challenges and Considerations</h2>
      <p>While AI-powered cybersecurity offers tremendous benefits, it's not without challenges. Organizations must ensure their AI systems are properly trained, regularly updated, and integrated with human oversight to avoid false positives and maintain effectiveness.</p>

      <h2>The Road Ahead</h2>
      <p>As cyber threats continue to evolve, AI will play an increasingly critical role in protecting businesses. The key to success lies in combining AI capabilities with human expertise and a comprehensive security strategy.</p>
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPostsData[params.slug];

  if (!post) {
    return {
      title: 'Post Not Found'
    };
  }

  return {
    title: `${post.title} | TechSolutions Blog`,
    description: post.excerpt
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article>
        <section className="relative h-[400px] bg-slate-900 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${post.coverImage})` }}
          />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-4xl text-white space-y-6">
              <Button asChild variant="ghost" className="text-white hover:text-white/80 -ml-4">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              <Badge className="bg-blue-600">{post.category}</Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-lg prose-slate max-w-none
                  prose-headings:font-bold prose-headings:text-slate-900
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-slate-900
                  prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-slate-200 flex items-center justify-center">
                    <User className="h-8 w-8 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{post.author}</div>
                    <div className="text-sm text-slate-600">{post.authorRole}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-slate-50 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <Button asChild variant="outline">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share Article
              </Button>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
