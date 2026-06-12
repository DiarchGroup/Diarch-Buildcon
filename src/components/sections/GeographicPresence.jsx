import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { BIHAR_DIVISIONS } from '../../data/mockData';
import { SectionHeading } from '../common/SectionHeading';
import { FadeUp } from '../common/FadeUp';

export const GeographicPresence = () => {
  const [active, setActive] = useState(BIHAR_DIVISIONS[0]);

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-page">
        <SectionHeading
          eyebrow="Geographic Presence"
          title={<>Active across every administrative division of Bihar.</>}
          description="38 districts. 10 administrative divisions. A field-led operating model with regional offices placed within four hours of every active site."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Map */}
          <FadeUp className="lg:col-span-3 relative">
            <div className="relative bg-card border border-border aspect-[5/4] overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="bg-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="hsl(218 72% 21%)" stopOpacity="0.08" />
                    <stop offset="1" stopColor="hsl(43 55% 54%)" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                {/* Stylised Bihar outline */}
                <path
                  d="M 18 30 L 30 22 L 42 20 L 52 18 L 64 22 L 76 24 L 86 30 L 88 42 L 86 54 L 84 64 L 80 74 L 70 80 L 58 82 L 46 82 L 36 78 L 28 72 L 22 64 L 18 54 L 16 42 Z"
                  fill="url(#bg-grad)"
                  stroke="hsl(218 72% 21%)"
                  strokeWidth="0.3"
                  strokeOpacity="0.4"
                />
              </svg>

              {BIHAR_DIVISIONS.map((d) => (
                <button
                  key={d.name}
                  onClick={() => setActive(d)}
                  className="absolute group"
                  style={{ left: `${d.x}%`, top: `${d.y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <span className={`block ${active.name === d.name ? 'scale-150' : 'scale-100'} transition-transform`}>
                    <span className={`block w-3 h-3 ${active.name === d.name ? 'bg-accent' : 'bg-primary'} relative`}>
                      <span className="absolute inset-0 animate-ping opacity-60 bg-current" />
                    </span>
                  </span>
                  <span className={`absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-[10.5px] font-medium tracking-tight transition-opacity ${active.name === d.name ? 'opacity-100 text-primary' : 'opacity-0 group-hover:opacity-100 text-foreground/70'}`}>
                    {d.name}
                  </span>
                </button>
              ))}

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-card/90 backdrop-blur-sm border border-border px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-primary" />
                  <span className="text-[11px] text-muted-foreground">Operational hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-accent" />
                  <span className="text-[11px] text-muted-foreground">Selected</span>
                </div>
                <div className="text-[11px] font-medium text-foreground">Bihar · India</div>
              </div>
            </div>
          </FadeUp>

          {/* Details */}
          <FadeUp delay={0.15} className="lg:col-span-2 flex flex-col">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border p-7"
            >
              <span className="eyebrow">Division Spotlight</span>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">{active.name}</h3>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <div className="font-mono-num text-3xl font-extrabold text-primary">{active.projects}</div>
                  <div className="text-[11.5px] uppercase tracking-[0.14em] text-muted-foreground mt-1.5">Active projects</div>
                </div>
                <div>
                  <div className="font-mono-num text-3xl font-extrabold text-primary">
                    {Math.round(active.projects * 38.5)} <span className="text-base font-normal text-muted-foreground">Cr</span>
                  </div>
                  <div className="text-[11.5px] uppercase tracking-[0.14em] text-muted-foreground mt-1.5">Contract value</div>
                </div>
              </div>
              <p className="mt-6 text-[13.5px] text-muted-foreground leading-relaxed">
                Project mix includes highways, government buildings, water schemes and public facilities under both
                central and state contracts.
              </p>
            </motion.div>

            <div className="mt-4 max-h-[280px] overflow-auto bg-card border border-border">
              {BIHAR_DIVISIONS.map((d, i) => (
                <button
                  key={d.name}
                  onClick={() => setActive(d)}
                  className={`w-full flex items-center justify-between px-5 py-3.5 text-left transition-colors ${
                    active.name === d.name ? 'bg-secondary' : 'hover:bg-secondary/50'
                  } ${i !== BIHAR_DIVISIONS.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <span className="flex items-center gap-2.5">
                    <MapPin className={`w-3.5 h-3.5 ${active.name === d.name ? 'text-accent' : 'text-muted-foreground'}`} />
                    <span className="text-[13px] font-medium text-foreground">{d.name}</span>
                  </span>
                  <span className="font-mono-num text-[12px] text-muted-foreground">{d.projects} projects</span>
                </button>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
