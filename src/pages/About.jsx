import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SectionHeading } from '../components/common/SectionHeading';
import { FadeUp } from '../components/common/FadeUp';
import { FeatureColumns } from '../components/common/FeatureColumns';
import { Button } from '../components/ui/button';
import { LEADERSHIP, CORE_VALUES } from '../data/mockData';
import profileImg from '../lib/profileimg.webp';

const TIMELINE = [
  { year: '2003', title: 'Founded in Patna', desc: 'Diarch Group incorporated to undertake civil works for the Bihar state government.' },
  { year: '2008', title: 'First Highway Project', desc: 'Awarded a NH widening contract by MoRTH, marking entry into central government works.' },
  { year: '2013', title: 'ISO Triple Certification', desc: 'Achieved ISO 9001, 14001 and 45001 certification — a first in our peer group at the time.' },
  { year: '2017', title: 'CPWD Class-I Empanelment', desc: 'Empanelled as Class-I contractor with Central Public Works Department.' },
  { year: '2020', title: 'Smart City Programmes', desc: 'Delivered the Patna ICCC and entered the urban-infrastructure delivery vertical.' },
  { year: '2024', title: '₹ 1,840 Cr cumulative delivery', desc: 'Crossed the milestone of ₹ 1,840 Cr in cumulative contracted infrastructure delivery.' },
];

export default function About() {
  return (
    <main data-testid="page-about">
      <PageHeader
        eyebrow="About Us"
        title="An execution-led public-infrastructure group."
        description="Founded in 2003, Diarch Group operates as the trusted execution partner for central ministries and Bihar state departments. Twenty-two years, 248+ projects, one operating philosophy: deliver on commitment."
        breadcrumbs={[{ label: 'About' }]}
        image="https://images.pexels.com/photos/34690264/pexels-photo-34690264.jpeg?auto=compress&cs=tinysrgb&w=2200"
      />

      {/* Mission / Vision */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <FadeUp className="lg:col-span-5">
              <span className="eyebrow">Who we are</span>
              <h2 className="mt-5 heading-section">A quietly dependable execution partner for the public sector.</h2>
            </FadeUp>
            <FadeUp delay={0.1} className="lg:col-span-7 space-y-5 text-[15px] leading-[1.75] text-foreground/80">
              <p>
                Diarch Group was founded in Patna in 2003 to bring engineering discipline and contractual integrity to
                public infrastructure delivery in Bihar. Two decades later, we operate across eight verticals, in every
                administrative division of the state and on selected central works elsewhere in eastern India.
              </p>
              <p>
                We do not chase scale for its own sake. We pursue projects where we can apply our delivery framework
                end-to-end — and where our clients value predictable, documented and audit-ready execution.
              </p>
              <p>
                Our work is judged by completion certificates, not press releases. That is the standard we are most
                proud of.
              </p>
            </FadeUp>
          </div>

          <div className="mt-16">
            <FeatureColumns
              cols={3}
              items={[
                { title: 'Mission', desc: 'To deliver public infrastructure that is engineered to last, executed with integrity and documented to standard.' },
                { title: 'Vision', desc: 'To be the most trusted execution partner for state and central public-infrastructure programmes in eastern India.' },
                { title: 'Promise', desc: 'On every contract: transparent bidding, calibrated execution, full compliance, on-time delivery.' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Journey"
            title={<>Twenty-two years, six defining milestones.</>}
            description="Each milestone reflects an inflection point — in capability, geography, or institutional trust."
          />

          <div className="mt-16 relative">
            <div className="absolute left-[26px] md:left-1/2 top-0 bottom-0 w-[1px] bg-border" />
            <div className="space-y-12">
              {TIMELINE.map((t, i) => (
                <FadeUp key={t.year} delay={i * 0.05}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 md:px-10">
                      <div className={`bg-card border border-border p-7 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                        <span className="font-mono-num text-2xl font-bold text-accent">{t.year}</span>
                        <h3 className="mt-2 text-[19px] font-semibold text-foreground">{t.title}</h3>
                        <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{t.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-[12px] md:left-1/2 -translate-x-1/2 top-6">
                      <div className="w-7 h-7 bg-primary border-2 border-accent flex items-center justify-center">
                        <span className="w-2 h-2 bg-accent" />
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 lg:py-32 bg-background">
        <div className="container-page">
          <SectionHeading
            eyebrow="Leadership"
            title={<>The leadership that signs off on every project.</>}
            description="Decades of public infrastructure execution. Every major project carries a personal sign-off."
          />
          <div className="mt-14 max-w-3xl mx-auto">
            {LEADERSHIP.map((l) => (
              <FadeUp key={l.id} className="bg-card border border-border overflow-hidden group grid grid-cols-1 sm:grid-cols-2">
                <div className="aspect-[4/5] sm:aspect-auto bg-navy-deep relative overflow-hidden">
                  <img
                    src={profileImg}
                    alt={l.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-[22px] font-semibold text-foreground">{l.name}</h3>
                  <p className="mt-1.5 text-[12px] tracking-[0.14em] uppercase text-accent font-semibold">{l.role}</p>
                  <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground">{l.bio}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-24 lg:py-32 bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative container-page">
          <SectionHeading
            eyebrow="Core Values"
            light
            title={<>The principles we hire for, and judge ourselves by.</>}
            description="Every member of the organisation — from site engineer to managing director — is held to these five operating principles."
          />
          <div className="mt-12">
            <FeatureColumns cols={5} dark items={CORE_VALUES.map((v) => ({ title: v.title, desc: v.desc }))} />
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-[14px] text-white/65 max-w-xl">
              Interested in joining the team or starting a partnership discussion?
            </p>
            <div className="flex gap-3">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="group">
                  Contact us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/partnerships">
                <Button variant="outline-light" size="lg">Partnerships desk</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
