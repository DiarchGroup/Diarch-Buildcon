import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/mockData';
import { SectionHeading } from '../common/SectionHeading';
import { FadeUp } from '../common/FadeUp';

export const Services = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-page">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="What we do"
            title={<>Eight verticals of public-infrastructure execution.</>}
            description="Specialised teams, calibrated equipment fleets and discipline-specific engineering managers — mobilised under one integrated programme management framework."
          />
          <Link to="/capabilities" className="link-underline self-start lg:self-end">
            View full capabilities
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-border">
          {SERVICES.map((svc, i) => {
            const Icon = Icons[svc.icon] || Icons.Building2;
            return (
              <FadeUp
                key={svc.id}
                delay={i * 0.05}
                className="group relative border-r border-b border-border bg-card p-8 lg:p-9 transition-all duration-300 hover:bg-secondary/30 flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-secondary border border-border-strong flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" strokeWidth={1.6} />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                </div>
                <h3 className="mt-6 text-[17px] font-semibold tracking-tight text-foreground">
                  {svc.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground flex-1">
                  {svc.desc}
                </p>
                <div className="mt-6 pt-5 border-t border-dashed border-border space-y-1.5">
                  {svc.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2 text-[12px] text-foreground/70">
                      <span className="w-1 h-1 bg-accent" />
                      {cap}
                    </div>
                  ))}
                </div>
                <span className="absolute top-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-500" />
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};
