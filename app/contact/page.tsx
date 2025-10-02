import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/forms/contact-form';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - TechSolutions',
  description: 'Get in touch with our team. We\'re here to help with your IT needs.',
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'info@techsolutions.com',
    link: 'mailto:info@techsolutions.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (234) 567-890',
    link: 'tel:+1234567890'
  },
  {
    icon: MapPin,
    title: 'Office',
    content: '123 Tech Street, San Francisco, CA 94102',
    link: '#'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
    link: '#'
  }
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let's Talk About Your Project
            </h1>
            <p className="text-xl text-slate-300">
              Our team is ready to discuss your IT needs and help you find the perfect solution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <Card key={info.title}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                              <Icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900 mb-1">
                                {info.title}
                              </div>
                              {info.link !== '#' ? (
                                <a
                                  href={info.link}
                                  className="text-slate-600 hover:text-blue-600 transition-colors"
                                >
                                  {info.content}
                                </a>
                              ) : (
                                <p className="text-slate-600">{info.content}</p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Our support team is available 24/7 for urgent matters.
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="text-white font-semibold hover:underline"
                  >
                    Call Emergency Hotline →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-slate-600">
              Located in the heart of San Francisco
            </p>
          </div>

          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0864598730193!2d-122.41941708468196!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1638887687867!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
