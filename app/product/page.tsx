import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Disclaimer from '@/components/Disclaimer';
import ProductHero from '@/components/product/ProductHero';
import ServiceCategories from '@/components/product/ServiceCategories';
import PrivateSection from '@/components/product/PrivateSection';
import ProductCta from '@/components/product/ProductCta';
import { BG, BORDER, TEXT } from '@/lib/theme';

export default function ProductPage() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: TEXT }}>
      <SiteNav />
      <ProductHero />
      <ServiceCategories />
      <PrivateSection />
      <section className="py-10 px-4 sm:px-6 lg:px-8" style={{ background: '#fff', borderTop: `1px solid ${BORDER}` }}>
        <Disclaimer />
      </section>
      <ProductCta />
      <SiteFooter />
    </div>
  );
}
