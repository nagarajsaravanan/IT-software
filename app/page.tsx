import { Hero } from '@/components/sections/hero';
import { ServicesOverview } from '@/components/sections/services-overview';
import { FeaturedPortfolio } from '@/components/sections/featured-portfolio';
import { CTASection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <FeaturedPortfolio />
      <CTASection />
    </main>
  );
}
