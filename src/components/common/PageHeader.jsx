import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';

export const PageHeader = ({ eyebrow, title, description, breadcrumbs = [], image }) => {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white hero-viewport flex flex-col">
      <div className="absolute inset-0">
        {image && (
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/70 to-navy-deep/95" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Breadcrumbs pinned to top */}
      <div className="relative">
        <div className="container-page pt-10 lg:pt-12">
          <nav className="flex items-center gap-2 text-[11.5px] tracking-[0.14em] uppercase text-white/55">
            <Link to="/" className="hover:text-accent transition-colors flex items-center gap-1.5">
              <HomeIcon className="w-3 h-3" /> Home
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-white/30" />
                {b.href ? (
                  <Link to={b.href} className="hover:text-accent transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-accent">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Title block */}
      <div className="relative flex-1 flex items-center">
        <div className="container-page py-12 lg:py-16 w-full">
          <div className="max-w-4xl mx-auto text-center">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block h-[1px] w-10 bg-accent origin-left flex-shrink-0"
                />
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold-light">
                  {eyebrow}
                </span>
              </motion.div>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-[60px] xl:text-[64px] font-semibold leading-[1.05] tracking-tight text-balance"
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-6 lg:mt-7 text-[15px] lg:text-[18px] leading-relaxed text-white/60 max-w-3xl mx-auto"
              >
                {description}
              </motion.p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="relative h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent flex-shrink-0" />
    </section>
  );
};
