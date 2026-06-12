import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, ArrowUpRight, Tag } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { FadeUp } from '../components/common/FadeUp';
import { NEWS_ITEMS } from '../data/mockData';

const CATEGORIES = ['All', 'Tender Win', 'Project Update', 'Recognition', 'Industry Insight'];

export default function News() {
  const [cat, setCat] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return NEWS_ITEMS.filter((n) => {
      const matchesCat = cat === 'All' || n.category === cat;
      const matchesQ = !query || n.title.toLowerCase().includes(query.toLowerCase()) || n.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQ;
    });
  }, [cat, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <main data-testid="page-news">
      <PageHeader
        eyebrow="News & Updates"
        title="Announcements, project milestones and industry insights."
        description="Tender wins, project progress updates and our perspective on public-infrastructure trends — published as they happen."
        breadcrumbs={[{ label: 'News & Updates' }]}
        image="https://images.unsplash.com/photo-1705747894609-6a7d17a8cfb7?auto=format&fit=crop&w=2200&q=80"
      />

      <section className="py-12 lg:py-16 bg-background">
        <div className="container-page">
          {/* Filters */}
          <div className="bg-card border border-border p-6 flex flex-col lg:flex-row gap-5 lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search announcements"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                data-testid="news-search-input"
                className="w-full h-11 pl-10 pr-4 border border-border bg-background text-[13.5px] focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  data-testid={`news-filter-${c.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-3.5 py-2 text-[12px] font-medium border transition-all ${
                    cat === c
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border text-foreground/60 hover:border-primary hover:text-primary'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-24 mt-10 text-center border border-dashed border-border">
              <p className="text-[14px] text-muted-foreground">No announcements match your search.</p>
            </div>
          ) : (
            <>
              {/* Featured */}
              {featured && (
                <FadeUp className="mt-10 grid grid-cols-1 lg:grid-cols-2 bg-card border border-border overflow-hidden group cursor-pointer hover:shadow-elegant transition-all">
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-muted">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-5 left-5">
                      <span className="inline-block px-3 py-1.5 bg-accent text-accent-foreground text-[10.5px] font-semibold tracking-[0.14em] uppercase">
                        {featured.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-[11.5px] tracking-[0.14em] uppercase text-muted-foreground">
                      <Calendar className="w-3 h-3" /> {featured.date}
                    </div>
                    <h2 className="mt-4 text-2xl lg:text-[32px] font-semibold leading-[1.15] tracking-tight text-foreground group-hover:text-primary transition-colors text-balance">
                      {featured.title}
                    </h2>
                    <p className="mt-5 text-[14.5px] leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                    <button className="mt-7 self-start inline-flex items-center gap-2 text-[13px] font-semibold text-accent hover:text-gold-deep transition-colors">
                      Read announcement
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </FadeUp>
              )}

              {/* Rest */}
              {rest.length > 0 && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((n, i) => (
                    <motion.article
                      key={n.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="group bg-card border border-border overflow-hidden cursor-pointer hover:shadow-elegant hover:border-primary/30 transition-all flex flex-col"
                      data-testid={`news-card-${n.id}`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={n.image}
                          alt={n.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1.5 bg-white/95 text-primary text-[10.5px] font-semibold tracking-[0.14em] uppercase">
                            {n.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
                          <Calendar className="w-3 h-3" /> {n.date}
                        </div>
                        <h3 className="mt-3 text-[17px] font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-3">
                          {n.title}
                        </h3>
                        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground line-clamp-3">{n.excerpt}</p>
                        <div className="mt-auto pt-5 border-t border-border flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <Tag className="w-3 h-3" /> {n.category}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
