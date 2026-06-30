import { CERTIFICATIONS } from '../../data/mockData';
import { SectionHeading } from '../common/SectionHeading';
import { FeatureColumns } from '../common/FeatureColumns';

export const CertificationsStrip = () => {
  const items = CERTIFICATIONS.map((cert) => ({
    title: cert.name,
    desc: cert.issuer,
    meta: (
      <div className="flex items-center justify-between font-tech text-[10.5px] uppercase tracking-[0.12em]">
        <span className="text-primary">{cert.category}</span>
        <span className="text-muted-foreground">{cert.year}</span>
      </div>
    ),
  }));

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-page">
        <SectionHeading
          eyebrow="Compliance & Certifications"
          title={<>Government-grade compliance, independently verified.</>}
          description="Operating under triple ISO certification, central empanelments and a documented quality regime audited every year."
        />

        <div className="mt-12">
          <FeatureColumns items={items} cols={4} />
        </div>
      </div>
    </section>
  );
};
