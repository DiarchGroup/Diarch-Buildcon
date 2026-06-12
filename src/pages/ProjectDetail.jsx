import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin, Calendar, Wallet, Users, Building2, FileText, ArrowLeft, ArrowRight,
  CheckCircle2, ShieldCheck, Clock, ChevronRight, Home as HomeIcon, Briefcase,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { FadeUp } from '../components/common/FadeUp';
import { FEATURED_PROJECTS } from '../data/mockData';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = FEATURED_PROJECTS.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) return <Navigate to="/projects" replace />;

  const currentIndex = FEATURED_PROJECTS.findIndex((p) => p.slug === slug);
  const prevProject = FEATURED_PROJECTS[(currentIndex - 1 + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length];
  const nextProject = FEATURED_PROJECTS[(currentIndex + 1) % FEATURED_PROJECTS.length];
  const related = FEATURED_PROJECTS
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <main data-testid="page-project-detail">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0">
          <img src={gallery[activeImage]} alt={project.title} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/70 to-navy-deep/95" />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        <div className="relative container-page pt-12 pb-20 lg:pt-16 lg:pb-24">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[11.5px] tracking-[0.14em] uppercase text-white/55 mb-10">
            <Link to="/" className="hover:text-accent transition-colors flex items-center gap-1.5">
              <HomeIcon className="w-3 h-3" /> Home
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-accent truncate max-w-[60vw]">{project.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-8"
            >
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="inline-block px-3 py-1.5 bg-accent text-accent-foreground text-[10.5px] font-semibold tracking-[0.14em] uppercase">
                  {project.type}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-gold-light">
                  <Clock className="w-3 h-3" /> {project.status}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-semibold leading-[1.05] tracking-tight text-balance">
                {project.title}
              </h1>
              <p className="mt-6 text-[16px] lg:text-[17px] leading-relaxed text-white/70 max-w-3xl">
                {project.scopeDetailed || project.scope}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-4 lg:pl-6"
            >
              <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 p-6 space-y-5">
                {[
                  ['Client', project.client],
                  ['Location', project.location],
                  ['Contract value', project.budget],
                  ['Year', project.year],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-3 pb-3 border-b border-white/10 last:border-0 last:pb-0">
                    <span className="text-[10.5px] tracking-[0.14em] uppercase text-white/45">{label}</span>
                    <span className="text-[13px] font-semibold text-white text-right max-w-[60%]">{value}</span>
                  </div>
                ))}
                <Link to="/partnerships" className="block pt-2">
                  <Button variant="gold" className="w-full group" data-testid="project-detail-cta">
                    Discuss similar engagement
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </section>

      {/* Metadata bar */}
      <section className="bg-card border-b border-border">
        <div className="container-page">
          <div className="grid grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {[
              [<MapPin key="l" className="w-4 h-4" />, 'Location', project.location],
              [<Calendar key="d" className="w-4 h-4" />, 'Timeline', `${project.startDate} → ${project.completionDate}`],
              [<Wallet key="v" className="w-4 h-4" />, 'Value', project.budget],
              [<Briefcase key="m" className="w-4 h-4" />, 'Model', project.deliveryModel],
              [<Users key="t" className="w-4 h-4" />, 'Team', project.teamSize],
            ].map(([icon, label, value]) => (
              <div key={label} className="p-6 lg:p-7">
                <div className="flex items-center gap-2 text-accent">
                  {icon}
                  <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase">{label}</span>
                </div>
                <p className="mt-3 text-[13.5px] font-semibold text-foreground leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery + highlights */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <FadeUp className="lg:col-span-7">
              <div className="aspect-[16/10] bg-muted overflow-hidden border border-border">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={gallery[activeImage]}
                  alt={`${project.title} — view ${activeImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {gallery.length > 1 && (
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {gallery.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setActiveImage(i)}
                      data-testid={`gallery-thumb-${i}`}
                      className={`relative aspect-[16/10] overflow-hidden border transition-all ${
                        activeImage === i ? 'border-accent shadow-gold' : 'border-border opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                      {activeImage === i && <span className="absolute inset-0 ring-1 ring-accent" />}
                    </button>
                  ))}
                </div>
              )}
            </FadeUp>

            <FadeUp delay={0.1} className="lg:col-span-5">
              <span className="eyebrow">Project Highlights</span>
              <h2 className="mt-4 heading-sub">Key delivery elements.</h2>
              <ul className="mt-7 space-y-4">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-[14px] leading-relaxed text-foreground/85">{h}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Scope + compliance */}
      <section className="py-20 lg:py-24 bg-secondary/40">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <FadeUp className="lg:col-span-7">
              <span className="eyebrow">Scope of Work</span>
              <h2 className="mt-4 heading-sub">Engineering delivered, end-to-end.</h2>
              <p className="mt-6 text-[15px] leading-[1.75] text-foreground/80">
                {project.scopeDetailed || project.scope}
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  [<Building2 key="d" className="w-4 h-4 text-accent" />, 'Delivery Model', project.deliveryModel],
                  [<Clock key="s" className="w-4 h-4 text-accent" />, 'Duration', project.duration],
                  [<Users key="t" className="w-4 h-4 text-accent" />, 'Site Team', project.teamSize],
                ].map(([icon, label, value]) => (
                  <div key={label} className="bg-card border border-border p-5">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      {icon} {label}
                    </div>
                    <p className="mt-2 text-[13.5px] font-semibold text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.1} className="lg:col-span-5">
              <div className="bg-navy-deep text-white p-8 relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
                <div className="absolute inset-0 noise-overlay" />
                <div className="relative">
                  <span className="eyebrow-light">Compliance Stack</span>
                  <h3 className="mt-4 text-xl font-semibold">Standards governing this engagement.</h3>
                  <ul className="mt-6 space-y-3">
                    {project.compliance.map((c) => (
                      <li key={c} className="flex items-start gap-3 pb-3 border-b border-white/10 last:border-0 last:pb-0">
                        <ShieldCheck className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-[13.5px] text-white/85">{c}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-accent">
                    <FileText className="w-3.5 h-3.5" /> Documentation available on request
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-20 lg:py-24 bg-background">
          <div className="container-page">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <span className="eyebrow">Related Engagements</span>
                <h2 className="mt-4 heading-section">More from the {project.type.toLowerCase()} vertical.</h2>
              </div>
              <Link to="/projects" className="link-underline self-start">
                Browse complete portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/projects/${r.slug}`}
                  data-testid={`related-${r.id}`}
                  className="group bg-card border border-border flex flex-col overflow-hidden hover:shadow-elegant hover:border-primary/30 transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1.5 bg-white/95 text-primary text-[10.5px] font-semibold tracking-[0.14em] uppercase">
                        {r.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-[16px] font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {r.title}
                    </h3>
                    <div className="mt-auto pt-5 flex items-center justify-between text-[12px]">
                      <span className="text-muted-foreground">{r.location} · {r.year}</span>
                      <span className="font-semibold text-primary">{r.budget}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev/Next */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container-page py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to={`/projects/${prevProject.slug}`}
              data-testid="project-prev"
              className="group bg-card border border-border p-6 flex items-center gap-5 hover:border-primary/30 hover:shadow-soft transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-accent transition-transform group-hover:-translate-x-1" />
              <div className="flex-1">
                <p className="text-[10.5px] tracking-[0.14em] uppercase text-muted-foreground">Previous project</p>
                <p className="mt-1 text-[14px] font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {prevProject.title}
                </p>
              </div>
            </Link>
            <Link
              to={`/projects/${nextProject.slug}`}
              data-testid="project-next"
              className="group bg-card border border-border p-6 flex items-center gap-5 md:text-right hover:border-primary/30 hover:shadow-soft transition-all"
            >
              <div className="flex-1 md:order-1">
                <p className="text-[10.5px] tracking-[0.14em] uppercase text-muted-foreground">Next project</p>
                <p className="mt-1 text-[14px] font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {nextProject.title}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-accent transition-transform group-hover:translate-x-1 md:order-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
