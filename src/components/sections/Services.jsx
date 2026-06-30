import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/mockData';
import { SectionHeading } from '../common/SectionHeading';
import { FeatureColumns } from '../common/FeatureColumns';

export const Services = () => {
  const items = SERVICES.map((svc) => ({
    title: svc.title,
    desc: svc.desc,
    meta: (
      <div className="space-y-1.5">
        {svc.capabilities.map((cap) => (
          <div key={cap} className="flex items-center gap-2 font-tech text-[11px] uppercase tracking-[0.08em] text-foreground/55">
            <span className="w-1 h-1 bg-accent flex-shrink-0" />
            {cap}
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-page">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
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

        <FeatureColumns items={items} cols={4} />
      </div>
    </section>
  );
};
