import { motion } from 'framer-motion';

export const SectionHeading = ({ eyebrow, title, description, align = 'center', light = false, maxWidth = '720px' }) => {
  const textAlign = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`${textAlign}`}
      style={{ maxWidth: align === 'center' ? maxWidth : undefined }}
    >
      {eyebrow && (
        <span className={light ? 'eyebrow-light' : 'eyebrow'}>{eyebrow}</span>
      )}
      <h2 className={`mt-5 heading-section text-balance ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-[16px] leading-relaxed text-balance ${light ? 'text-white/70' : 'text-muted-foreground'}`} style={{ maxWidth }}>
          {description}
        </p>
      )}
    </motion.div>
  );
};
