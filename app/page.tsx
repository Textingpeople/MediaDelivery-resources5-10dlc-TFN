import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Disclaimer from '@/components/Disclaimer';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import ServicesGrid from '@/components/home/ServicesGrid';
import TrustPillars from '@/components/home/TrustPillars';
import FinalCta from '@/components/home/FinalCta';
import { BG, TEXT } from '@/lib/theme';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: TEXT }}>
      <SiteNav />
      <Hero />
      <HowItWorks />
      <ServicesGrid />
      <TrustPillars />
      <FinalCta />
      <section className="py-10 px-4 sm:px-6 lg:px-8" style={{ background: BG }}>
        <Disclaimer />
      </section>
      <SiteFooter />
    </div>
  );
}
