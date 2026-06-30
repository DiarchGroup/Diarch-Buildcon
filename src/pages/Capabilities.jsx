import * as Icons from 'lucide-react';
import { ArrowRight, CheckCircle2, Cog, ShieldCheck, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SectionHeading } from '../components/common/SectionHeading';
import { FadeUp } from '../components/common/FadeUp';
import { FeatureColumns } from '../components/common/FeatureColumns';
import { Button } from '../components/ui/button';
import { SERVICES, PROCESS_STEPS } from '../data/mockData';

const FRAMEWORK = [
  {
    icon: <Cog className="w-5 h-5" />,
    title: 'Engineering Excellence',
    desc: 'BIM-led coordination, modular construction methods, and IRC/IS code-aligned site practices.',
    points: [
      'Multi-disciplinary BIM modelling (LOD 350)',
      'Pre-engineered modular construction',
      'Geotechnical & structural design validation',
      'Climate-adaptive material selection',
    ],
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Safety & Compliance',
    desc: 'Triple-ISO certified operations with zero compromise on documented safety standards.',
    points: [
      'ISO 45001:2018 Occupational H&S',
      'Daily safety briefings & site audits',
      'NABL-accredited material testing',
      'Third-party quality inspections',
    ],
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Project Controls',
    desc: 'Earned-value management, digital site logs, and full traceability across the lifecycle.',
    points: [
      'Primavera P6 schedule control',
      'Digital DPR & quality dossiers',
      'Cost-loaded baseline tracking',
      'Monthly progress dashboards',
    ],
  },
];

export default function Capabilities() {
  return (
    <main data-testid="page-capabilities">
      <PageHeader
        eyebrow="Capabilities"
        title="An integrated engineering capability across eight verticals."
        description="From concept feasibility to operational handover — every capability under one delivery framework. Specialised teams, calibrated equipment, and discipline-led engineering managers."
        breadcrumbs={[{ label: 'Capabilities' }]}
        image="https://images.pexels.com/photos/5504388/pexels-photo-5504388.jpeg?auto=compress&cs=tinysrgb&w=2200"
      />

      {/* Verticals grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-page">
          <SectionHeading
            eyebrow="Eight execution verticals"
            title={<>Specialist teams for every public-infrastructure discipline.</>}
            description="Each vertical is run by a dedicated engineering manager with full P&L accountability for delivery, quality and safety."
          />

          <div className="mt-12">
            <FeatureColumns
              cols={2}
              items={SERVICES.map((svc) => ({
                title: svc.title,
                desc: svc.desc,
                meta: (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2.5">
                    {svc.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2 font-tech text-[11px] uppercase tracking-[0.06em] text-foreground/60">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-px flex-shrink-0" />
                        {cap}
                      </div>
                    ))}
                  </div>
                ),
              }))}
            />
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Engineering Framework"
            title={<>Three pillars of disciplined execution.</>}
            description="The same framework applied to every project — regardless of scale, sector or location."
          />
          <div className="mt-12">
            <FeatureColumns
              cols={3}
              items={FRAMEWORK.map((f) => ({
                title: f.title,
                desc: f.desc,
                meta: (
                  <ul className="space-y-2.5">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 font-tech text-[11px] uppercase tracking-[0.06em] text-foreground/60">
                        <span className="w-1 h-1 bg-accent mt-1.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                ),
              }))}
            />
          </div>
        </div>
      </section>

      {/* Process timeline (vertical) */}
      <section className="py-24 lg:py-32 bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative container-page">
          <SectionHeading
            eyebrow="Lifecycle Execution"
            light
            title={<>Six stages, fully documented.</>}
            description="From planning to handover — every stage produces audit-ready outputs, transparent reports and a verifiable trail."
          />

          <div className="mt-16 relative">
            <div className="absolute left-[34px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-white/15" />
            <div className="space-y-12">
              {PROCESS_STEPS.map((step, i) => (
                <FadeUp key={step.id} delay={i * 0.05}>
                  <div className={`relative flex items-start gap-6 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="lg:w-1/2 lg:px-12">
                      <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-7 ${i % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <span className="font-mono-num text-[11px] tracking-[0.18em] uppercase text-accent">
                          Stage {step.id}
                        </span>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{step.title}</h3>
                        <p className="mt-4 text-[13.5px] leading-relaxed text-white/65">{step.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-[20px] lg:left-1/2 -translate-x-1/2 top-6">
                      <div className="w-7 h-7 bg-accent text-accent-foreground flex items-center justify-center font-mono-num text-[11px] font-bold relative">
                        {step.id}
                        <span className="absolute -inset-1 border border-accent/40" />
                      </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-page">
          <div className="bg-card border border-border p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="eyebrow">Next Step</span>
              <h2 className="mt-4 heading-sub">Need a detailed capability statement?</h2>
              <p className="mt-3 text-[14px] text-muted-foreground">
                Get a sector-specific brief with case studies, compliance documentation and execution methodology.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/partnerships">
                <Button variant="premium" size="lg" className="group">
                  Request capability brief
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg">View portfolio</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
