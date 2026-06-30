import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const ease = [0.22, 1, 0.36, 1];

const STATS = [
  ['22', 'yrs', 'Execution record'],
  ['38', '', 'Districts active'],
  ['64', '+', 'Govt. partnerships'],
];

export const Hero = () => {
  return (
    <section className="relative bg-navy-deep text-white hero-viewport flex flex-col overflow-hidden">
      {/* Blueprint grid + ambient field */}
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep to-[hsl(218_60%_12%)]" />
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative flex-1 flex items-center">
        <div className="container-page w-full py-12 lg:py-0">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">

            {/* ── Left: editorial statement ── */}
            <div className="lg:col-span-7 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="eyebrow-light"
              >
                Government Infrastructure · Est. 2003
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease }}
                className="mt-7 font-serif text-[clamp(2rem,8vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.025em]"
              >
                Building infrastructure
                <span className="block italic font-normal text-accent">that powers progress.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease }}
                className="mt-7 text-[16px] lg:text-[17px] leading-[1.7] text-white/60 max-w-xl"
              >
                Trusted execution partner for public infrastructure and government
                projects across Bihar and Eastern India.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease }}
                className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <Link to="/projects">
                  <Button size="lg" variant="gold" className="group w-full sm:w-auto">
                    View Portfolio
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link
                  to="/partnerships"
                  className="text-[13.5px] text-white/55 hover:text-white transition-colors tracking-wide"
                >
                  Request Partnership Discussion →
                </Link>
              </motion.div>

              {/* Datasheet stat row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.55 }}
                className="mt-12 pt-7 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-6"
              >
                {STATS.map(([num, suffix, label]) => (
                  <div key={label}>
                    <div className="flex items-baseline gap-0.5">
                      <span className="font-serif text-3xl font-semibold tabular-nums">{num}</span>
                      <span className="font-tech text-lg text-accent">{suffix}</span>
                    </div>
                    <div className="font-tech text-[10px] uppercase tracking-[0.16em] text-white/40 mt-2">
                      {label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: project plate (a survey drawing) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="reg-marks border border-white/15 bg-white/[0.02] p-3">
                {/* drawing header */}
                <div className="flex items-center justify-between font-tech text-[10px] uppercase tracking-[0.16em] text-white/45 pb-3">
                  <span className="text-accent">Fig. 01</span>
                  <span>Patna–Gaya Expressway</span>
                </div>

                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571363604084-c652ecf0a106?auto=format&fit=crop&w=1400&q=80"
                    alt="Six-lane expressway under execution"
                    className="w-full h-[300px] xl:h-[360px] object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />

                  {/* floating value chip */}
                  <div className="absolute bottom-3 left-3 bg-navy-deep/90 backdrop-blur-sm border border-accent/30 px-4 py-2.5">
                    <div className="font-serif text-2xl font-semibold leading-none">₹1,240 <span className="font-tech text-sm text-accent">Cr</span></div>
                    <div className="font-tech text-[9px] uppercase tracking-[0.16em] text-white/50 mt-1.5">Contract value</div>
                  </div>
                </div>

                {/* spec caption strip */}
                <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 mt-3 pt-3 font-tech text-[10px] uppercase tracking-[0.12em]">
                  <div className="pr-3">
                    <div className="text-white/40">Length</div>
                    <div className="text-white/80 mt-1 normal-case tracking-normal">168 km</div>
                  </div>
                  <div className="px-3">
                    <div className="text-white/40">Lanes</div>
                    <div className="text-white/80 mt-1 normal-case tracking-normal">Six · NH</div>
                  </div>
                  <div className="pl-3">
                    <div className="text-white/40">Status</div>
                    <div className="text-accent mt-1 normal-case tracking-normal">Executing</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Agency credentials strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="relative border-t border-white/[0.08] flex-shrink-0"
      >
        <div className="container-page py-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 font-tech text-[10.5px] tracking-[0.14em] text-white/35 uppercase">
            <span className="text-white/25">Empanelled with</span>
            {['MoRTH', 'NHAI', 'CPWD', 'BSRDC', 'BIADA', 'Water Resources Dept.'].map((name, i, arr) => (
              <span key={name} className="flex items-center gap-6">
                {name}
                {i < arr.length - 1 && <span className="text-white/15">/</span>}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
