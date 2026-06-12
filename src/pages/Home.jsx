import { Hero } from '../components/sections/Hero';
import { KPISection } from '../components/sections/KPISection';
import { Services } from '../components/sections/Services';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { CertificationsStrip } from '../components/sections/CertificationsStrip';
import { GeographicPresence } from '../components/sections/GeographicPresence';
import { Testimonials } from '../components/sections/Testimonials';
import { PartnershipCTA } from '../components/sections/PartnershipCTA';

export default function Home() {
  return (
    <main data-testid="page-home">
      <Hero />
      <KPISection />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />
      <CertificationsStrip />
      <GeographicPresence />
      <Testimonials />
      <PartnershipCTA />
    </main>
  );
}
