import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, ArrowDown } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export const PageHeader = ({ eyebrow, title, description, breadcrumbs = [], image }) => {
  const last = breadcrumbs.length > 0 ? breadcrumbs[breadcrumbs.length - 1].label : null;

  return (
    <section className="relative bg-navy-deep text-white hero-viewport flex flex-col overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep to-[hsl(218_60%_12%)]" />
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      {/* Breadcrumb row */}
      <div className="relative flex-shrink-0">
        <div className="container-page pt-8 lg:pt-10">
          <nav className="flex items-center gap-2 font-tech text-[10.5px] tracking-[0.14em] uppercase text-white/45">
            <Link to="/" className="hover:text-accent transition-colors flex items-center gap-1.5">
              <HomeIcon className="w-3 h-3" /> Home
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-white/25" />
                {b.href ? (
                  <Link to={b.href} className="hover:text-accent transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-accent">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Centered content */}
      <div className="relative flex-1 flex items-center">
        <div className="container-page w-full py-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Title block */}
            <div className={`min-w-0 ${image ? 'lg:col-span-7' : 'lg:col-span-9'}`}>
              {eyebrow && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="eyebrow-light"
                >
                  {eyebrow}
                </motion.div>
              )}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease }}
                className="mt-7 font-serif text-[clamp(2rem,7vw,4rem)] font-semibold leading-[1.03] tracking-[-0.025em] text-balance"
              >
                {title}
              </motion.h1>
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25, ease }}
                  className="mt-7 text-[16px] lg:text-[17px] leading-[1.7] text-white/60 max-w-2xl"
                >
                  {description}
                </motion.p>
              )}
            </div>

            {/* Reference plate */}
            {image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease }}
                className="lg:col-span-5 hidden lg:block"
              >
                <div className="reg-marks border border-white/15 bg-white/[0.02] p-3">
                  <div className="flex items-center justify-between font-tech text-[10px] uppercase tracking-[0.16em] text-white/45 pb-3">
                    <span className="text-accent">Ref.</span>
                    {last && <span>{last}</span>}
                  </div>
                  <div className="relative overflow-hidden">
                    <img src={image} alt="" className="w-full h-[300px] xl:h-[360px] object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom meta strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative border-t border-white/[0.08] flex-shrink-0"
      >
        <div className="container-page py-4 flex items-center justify-between font-tech text-[10.5px] tracking-[0.14em] uppercase text-white/35">
          <span>Diarch Group <span className="text-white/15">/</span> Bihar · India</span>
          <span className="hidden sm:flex items-center gap-2">
            Scroll to explore <ArrowDown className="w-3 h-3 text-accent" />
          </span>
        </div>
      </motion.div>
    </section>
  );
};
