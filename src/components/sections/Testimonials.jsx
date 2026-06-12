import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../data/mockData';
import { SectionHeading } from '../common/SectionHeading';
import { FadeUp } from '../common/FadeUp';

export const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const t = TESTIMONIALS[idx];

  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Voices from the public sector"
          align="center"
          title="What our partners say."
          description="Direct quotations from government engineers, project directors and partner officials we have worked with."
        />

        <FadeUp className="mt-14 max-w-4xl mx-auto">
          <div className="relative bg-card border border-border p-10 lg:p-14">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-accent/15" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <p className="font-serif text-2xl lg:text-[28px] leading-[1.45] text-foreground text-balance">
                  “{t.quote}”
                </p>
                <div className="mt-10 pt-8 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="text-[15px] font-semibold text-foreground">{t.name}</p>
                    <p className="mt-1 text-[12.5px] text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prev}
                      className="w-10 h-10 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={next}
                      className="w-10 h-10 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-[2px] transition-all ${i === idx ? 'w-10 bg-accent' : 'w-5 bg-border hover:bg-border-strong'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
