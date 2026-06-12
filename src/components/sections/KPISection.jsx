import { Counter } from '../common/Counter';
import { KPI_STATS } from '../../data/mockData';
import { FadeUp } from '../common/FadeUp';

export const KPISection = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-background border-y border-border">
      <div className="container-page">
        <FadeUp className="text-center mb-14">
          <span className="eyebrow">Delivery at scale</span>
          <h2 className="mt-5 heading-section">
            A measurable record across two decades.
          </h2>
          <p className="mt-5 text-[16px] text-muted-foreground max-w-2xl mx-auto">
            Numbers verified by independent third-party audits and government project completion certificates.
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-t border-border">
          {KPI_STATS.map((stat, i) => (
            <FadeUp
              key={stat.label}
              delay={i * 0.08}
              className="group relative border-r border-b border-border p-7 lg:p-8 bg-card hover:bg-secondary/40 transition-colors"
            >
              <div className="flex items-baseline gap-1">
                <span className="kpi-number">
                  <Counter to={stat.value} duration={1600 + i * 100} />
                </span>
                <span className="font-mono-num text-2xl lg:text-3xl font-extrabold text-accent">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-3 text-[13px] font-semibold text-foreground tracking-tight">
                {stat.label}
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">
                {stat.desc}
              </p>
              <div className="absolute top-0 left-0 w-12 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
