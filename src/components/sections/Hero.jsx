import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export const Hero = () => {
  return (
    <section className="relative bg-navy-deep text-white hero-viewport flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571363604084-c652ecf0a106?auto=format&fit=crop&w=2200&q=80"
          alt="Infrastructure construction site"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/70 to-navy-deep/95" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="relative flex-1 flex items-center">
        <div className="container-page py-6 lg:py-6 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10 h-[1px] w-12 bg-accent origin-center mx-auto"
            />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-[38px] sm:text-[52px] lg:text-[64px] font-semibold leading-[1.04] tracking-[-0.025em] text-balance"
            >
              Building infrastructure
              <span className="block font-serif italic font-normal text-accent">that powers progress.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 text-[16px] lg:text-[17px] leading-[1.7] text-white/60 max-w-xl mx-auto"
            >
              Trusted execution partner for public infrastructure and government projects across Bihar and Eastern India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/projects">
                <Button size="lg" variant="gold" className="group w-full sm:w-auto">
                  View Portfolio
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/partnerships" className="text-[13.5px] text-white/50 hover:text-white/80 transition-colors tracking-wide">
                Request Partnership Discussion →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.65 }}
              className="mt-16 pt-8 border-t border-white/8 grid grid-cols-3 max-w-sm gap-8 mx-auto"
            >
              {[
                ['22 yrs', 'Execution record'],
                ['38', 'Districts active'],
                ['64+', 'Govt. partnerships'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl font-semibold text-white tabular-nums">{num}</div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-white/40 mt-1.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative border-t border-white/[0.07] flex-shrink-0"
      >
        <div className="container-page py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[11px] tracking-[0.12em] text-white/30 uppercase">
            {['MoRTH', 'NHAI', 'CPWD', 'BSRDC', 'BIADA', 'Water Resources Dept.'].map((name, i, arr) => (
              <span key={name} className="flex items-center gap-5">
                {name}
                {i < arr.length - 1 && <span className="text-white/15">·</span>}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
