import * as Icons from 'lucide-react';
import { ArrowRight, CheckCircle2, Cog, ShieldCheck, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SectionHeading } from '../components/common/SectionHeading';
import { FadeUp } from '../components/common/FadeUp';
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

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => {
              const Icon = Icons[svc.icon] || Icons.Building2;
              return (
                <FadeUp
                  key={svc.id}
                  delay={i * 0.05}
                  className="group bg-card border border-border p-8 lg:p-10 transition-all duration-300 hover:shadow-elegant hover:border-primary/30 relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" strokeWidth={1.6} />
                    </div>
                    <span className="font-mono-num text-[11px] tracking-[0.14em] text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-foreground">
                    {svc.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                    {svc.desc}
                  </p>
                  <div className="mt-7 pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {svc.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2 text-[12.5px] text-foreground/75">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                        {cap}
                      </div>
                    ))}
                  </div>
                </FadeUp>
              );
            })}
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
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FRAMEWORK.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.08} className="bg-card border border-border p-8 relative">
                <div className="absolute top-0 left-0 h-1 w-12 bg-accent" />
                <div className="w-12 h-12 bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{f.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{f.desc}</p>
                <ul className="mt-6 pt-6 border-t border-border space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[13px] text-foreground/80">
                      <span className="w-1 h-1 bg-accent mt-2" />
                      {p}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            ))}
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
