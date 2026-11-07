import Hero from '@/components/home/Hero';
import BrandIntro from '@/components/home/BrandIntro';
import ShopByCategory from '@/components/home/ShopByCategory';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Craftsmanship from '@/components/home/Craftsmanship';
import CustomisationSection from '@/components/home/CustomisationSection';
import DeliveryBanner from '@/components/home/DeliveryBanner';
import Testimonials from '@/components/home/Testimonials';
import HomeCTA from '@/components/home/HomeCTA';
import { developmentTestimonials } from '@/lib/testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ShopByCategory />
      <FeaturedProducts />
      <Craftsmanship />
      <CustomisationSection />
      <DeliveryBanner />
      <Testimonials testimonials={developmentTestimonials} />
      <HomeCTA />
    </>
  );
}
