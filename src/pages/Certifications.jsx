import { ShieldCheck, FileCheck, Download, Award, Calendar } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { SectionHeading } from '../components/common/SectionHeading';
import { FadeUp } from '../components/common/FadeUp';
import { Button } from '../components/ui/button';
import { CERTIFICATIONS } from '../data/mockData';

const CATEGORIES = [
  {
    title: 'Quality, Environment & Safety',
    desc: 'Triple-ISO certified operations audited annually by independent third-party certification bodies.',
    filter: ['iso9001', 'iso14001', 'iso45001'],
  },
  {
    title: 'Government Empanelments',
    desc: 'Class-I and approved-vendor empanelments with central and state procurement agencies.',
    filter: ['cpwd', 'morth'],
  },
  {
    title: 'Sustainability & Testing',
    desc: 'GRIHA Council membership and NABL accreditation for in-house material testing and calibration.',
    filter: ['griha', 'nabl', 'msme'],
  },
];

export default function Certifications() {
  return (
    <main data-testid="page-certifications">
      <PageHeader
        eyebrow="Compliance & Certifications"
        title="Independently verified, annually audited."
        description="Every certification on this page is current, traceable to its issuing body and validated by independent audit. Documentation is available on formal request."
        breadcrumbs={[{ label: 'Certifications' }]}
        image="https://images.pexels.com/photos/7104647/pexels-photo-7104647.jpeg?auto=compress&cs=tinysrgb&w=2200"
      />

      {/* All certifications gallery */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-page">
          <SectionHeading
            eyebrow="Certifications Gallery"
            title={<>Eight active certifications across compliance, quality and procurement.</>}
            description="Hover over any certification to view issuer details, category and most recent audit year."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTIFICATIONS.map((cert, i) => (
              <FadeUp key={cert.id} delay={i * 0.05}>
                <div
                  className="group relative bg-card border border-border p-7 h-full flex flex-col hover:shadow-elegant hover:border-primary/30 transition-all cursor-pointer"
                  data-testid={`cert-${cert.id}`}
                >
                  <div className="absolute top-0 left-0 h-1 w-12 bg-accent" />
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[10.5px] tracking-[0.14em] text-muted-foreground">
                      <Calendar className="w-3 h-3" /> <span className="font-mono-num">{cert.year}</span>
                    </div>
                  </div>
                  <h3 className="text-[16px] font-semibold text-foreground leading-tight">{cert.name}</h3>
                  <p className="mt-2 text-[12.5px] text-muted-foreground">{cert.issuer}</p>

                  <div className="mt-auto pt-6 border-t border-dashed border-border">
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.14em] text-primary font-semibold">
                      <FileCheck className="w-3 h-3" /> {cert.category}
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Categorised view */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="By Category"
            title={<>Compliance organised by purpose.</>}
            description="Quality, statutory empanelment and sustainability — three pillars of public-sector readiness."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, i) => (
              <FadeUp key={cat.title} delay={i * 0.08} className="bg-card border border-border p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <Award className="w-5 h-5 text-accent" />
                  <h3 className="text-[17px] font-semibold text-foreground">{cat.title}</h3>
                </div>
                <p className="text-[13.5px] leading-relaxed text-muted-foreground">{cat.desc}</p>
                <div className="mt-7 pt-6 border-t border-border space-y-3">
                  {CERTIFICATIONS.filter((c) => cat.filter.includes(c.id)).map((c) => (
                    <div key={c.id} className="flex items-center justify-between text-[13px]">
                      <span className="font-medium text-foreground">{c.name}</span>
                      <span className="text-muted-foreground font-mono-num text-[11.5px]">{c.year}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Download all */}
      <section className="py-20 bg-background">
        <div className="container-page">
          <div className="bg-navy-deep text-white p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-[0.07]" />
            <div className="absolute inset-0 noise-overlay" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <span className="eyebrow-light">Full Compliance Pack</span>
                <h2 className="mt-4 text-3xl lg:text-[42px] font-semibold tracking-tight leading-[1.1]">
                  Download the full compliance documentation pack.
                </h2>
                <p className="mt-4 text-[14px] text-white/65 leading-relaxed">
                  Includes all certificates, third-party audit reports, sample DPRs and a current capability statement.
                </p>
              </div>
              <Button variant="gold" size="xl" className="self-start">
                <Download className="w-4 h-4" />
                Download Compliance Pack
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
