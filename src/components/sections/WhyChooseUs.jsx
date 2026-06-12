import { PROCESS_STEPS } from '../../data/mockData';
import { SectionHeading } from '../common/SectionHeading';
import { FadeUp } from '../common/FadeUp';

export const WhyChooseUs = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-deep text-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative container-page">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Why Choose Us"
            light
            title={<>A six-stage execution discipline.</>}
            description="From planning to handover, every project follows a documented, audit-ready framework — the same one that has delivered 248+ public projects across Bihar."
          />
        </div>

        <div className="relative mt-16">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-[34px] left-0 right-0 h-[1px] bg-white/15" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-10 lg:gap-y-0 gap-x-6">
            {PROCESS_STEPS.map((step, i) => (
              <FadeUp key={step.id} delay={i * 0.08} className="relative flex flex-col">
                <div className="relative z-10 flex items-center gap-4 lg:block">
                  <div className="relative w-[68px] h-[68px] flex items-center justify-center bg-navy-deep border-2 border-accent">
                    <span className="font-mono-num text-xl font-extrabold text-accent">{step.id}</span>
                    <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-accent" />
                  </div>
                  <h3 className="lg:mt-6 text-[17px] font-semibold tracking-tight text-white">{step.title}</h3>
                </div>
                <p className="mt-4 text-[13.5px] leading-relaxed text-white/65 max-w-[230px]">
                  {step.desc}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ['97.4%', 'On-time delivery rate'],
            ['Zero', 'Lost-time injuries (FY24)'],
            ['ISO Triple', '9001 / 14001 / 45001'],
            ['Class-I', 'CPWD empanelment'],
          ].map(([num, label]) => (
            <div key={label} className="text-center md:text-left">
              <div className="font-mono-num text-3xl lg:text-4xl font-semibold text-accent">{num}</div>
              <div className="mt-2 text-[12px] uppercase tracking-[0.14em] text-white/55">{label}</div>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
};
