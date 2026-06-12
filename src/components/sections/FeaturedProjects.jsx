import { useState } from 'react';
import { ArrowRight, MapPin, Calendar, Wallet, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_PROJECTS } from '../../data/mockData';
import { SectionHeading } from '../common/SectionHeading';
import { FadeUp } from '../common/FadeUp';
import { Button } from '../ui/button';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'roads', label: 'Roads & Bridges' },
  { id: 'buildings', label: 'Buildings' },
  { id: 'water', label: 'Water' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'public', label: 'Public' },
];

export const FeaturedProjects = () => {
  const [active, setActive] = useState('all');
  const projects = FEATURED_PROJECTS.filter((p) => active === 'all' || p.category === active).slice(0, 6);

  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="container-page">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <SectionHeading
            eyebrow="Featured Portfolio"
            title={<>Projects delivered for the public sector.</>}
            description="A curated selection from our active portfolio. Each engagement reflects rigorous engineering, transparent contracting and verified delivery."
          />
          <Link to="/projects">
            <Button variant="outline" size="lg" className="group">
              View complete portfolio
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <FadeUp className="flex flex-wrap items-center gap-1.5 mb-10 border-b border-border pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative px-4 py-2.5 text-[13px] font-medium tracking-tight transition-colors ${
                active === cat.id ? 'text-primary' : 'text-foreground/55 hover:text-foreground'
              }`}
            >
              {cat.label}
              {active === cat.id && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute left-3 right-3 -bottom-[10px] h-[2px] bg-accent"
                />
              )}
            </button>
          ))}
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export const ProjectCard = ({ project, index = 0 }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    className="group bg-card border border-border flex flex-col overflow-hidden transition-all duration-300 hover:shadow-elegant hover:border-primary/30"
  >
    <Link to={`/projects/${project.slug}`} className="contents">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1.5 bg-white/95 text-primary text-[10.5px] font-semibold tracking-[0.14em] uppercase">
            {project.type}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 w-9 h-9 bg-accent text-accent-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[18px] font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
          {project.scope}
        </p>
        <div className="mt-6 pt-5 border-t border-border grid grid-cols-3 gap-3 mt-auto">
          <div>
            <div className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
              <MapPin className="w-3 h-3" /> Location
            </div>
            <div className="text-[12.5px] font-medium text-foreground mt-1.5">{project.location}</div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
              <Calendar className="w-3 h-3" /> Year
            </div>
            <div className="text-[12.5px] font-medium text-foreground mt-1.5">{project.year}</div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
              <Wallet className="w-3 h-3" /> Value
            </div>
            <div className="text-[12.5px] font-semibold text-primary mt-1.5">{project.budget}</div>
          </div>
        </div>
      </div>
    </Link>
  </motion.article>
);
