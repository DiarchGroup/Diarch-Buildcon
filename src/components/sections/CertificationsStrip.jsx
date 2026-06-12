import { ShieldCheck, Award, FileCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/mockData';
import { SectionHeading } from '../common/SectionHeading';
import { FadeUp } from '../common/FadeUp';

export const CertificationsStrip = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-page">
        <SectionHeading
          eyebrow="Compliance & Certifications"
          title={<>Government-grade compliance, independently verified.</>}
          description="Operating under triple ISO certification, central empanelments and a documented quality regime audited every year."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 border-l border-t border-border">
          {CERTIFICATIONS.map((cert, i) => (
            <FadeUp
              key={cert.id}
              delay={i * 0.05}
              className="group relative border-r border-b border-border bg-card p-6 lg:p-7 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 border border-accent/40 bg-accent/8 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                </div>
                <span className="text-[10.5px] font-mono-num tracking-wider text-muted-foreground">{cert.year}</span>
              </div>
              <h3 className="text-[15px] font-semibold text-foreground leading-tight">{cert.name}</h3>
              <p className="mt-1.5 text-[12px] text-muted-foreground">{cert.issuer}</p>
              <div className="mt-auto pt-4">
                <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.14em] text-primary font-semibold">
                  <FileCheck className="w-3 h-3" /> {cert.category}
                </span>
              </div>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500" />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
