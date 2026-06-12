import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Wallet, ArrowUpRight } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { FEATURED_PROJECTS } from '../data/mockData';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'roads', label: 'Roads & Highways' },
  { id: 'buildings', label: 'Government Buildings' },
  { id: 'water', label: 'Water Infrastructure' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'public', label: 'Smart City & Public' },
];

const YEARS = ['all', '2024', '2023', '2022'];

export default function Projects() {
  const [cat, setCat] = useState('all');
  const [year, setYear] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return FEATURED_PROJECTS.filter((p) => {
      const matchesCat = cat === 'all' || p.category === cat;
      const matchesYear = year === 'all' || p.year === year;
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.location.toLowerCase().includes(query.toLowerCase()) ||
        p.client.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesYear && matchesQuery;
    });
  }, [cat, year, query]);

  return (
    <main data-testid="page-projects">
      <PageHeader
        eyebrow="Portfolio"
        title="A portfolio of public infrastructure, delivered."
        description="Eight verticals, 38 districts, 248+ completed projects. Browse engagements by category, year and geography."
        breadcrumbs={[{ label: 'Projects' }]}
        image="https://images.unsplash.com/photo-1529926691761-20fb82067c71?auto=format&fit=crop&w=2200&q=80"
      />

      <section className="py-12 lg:py-16 bg-background">
        <div className="container-page">
          {/* Filters */}
          <div className="bg-card border border-border p-6 lg:p-7">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-5">
                <label className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">Search</label>
                <div className="mt-2 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    data-testid="projects-search-input"
                    type="text"
                    placeholder="Project name, location, or client"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full h-11 pl-10 pr-4 border border-border bg-background text-[13.5px] focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <label className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">Category</label>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      data-testid={`projects-filter-${c.id}`}
                      onClick={() => setCat(c.id)}
                      className={`px-3 py-2 text-[12px] font-medium border transition-all ${
                        cat === c.id
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border text-foreground/60 hover:border-primary hover:text-primary'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2">
                <label className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">Year</label>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {YEARS.map((y) => (
                    <button
                      key={y}
                      data-testid={`projects-year-${y}`}
                      onClick={() => setYear(y)}
                      className={`px-3 py-2 text-[12px] font-medium border transition-all ${
                        year === y
                          ? 'border-accent bg-accent text-accent-foreground'
                          : 'border-border text-foreground/60 hover:border-accent hover:text-accent-foreground'
                      }`}
                    >
                      {y === 'all' ? 'All' : y}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Result count */}
          <div className="flex items-center justify-between mt-6 mb-4">
            <p className="text-[13px] text-muted-foreground">
              Showing <span className="text-foreground font-semibold font-mono-num">{filtered.length}</span> of{' '}
              <span className="font-mono-num">{FEATURED_PROJECTS.length}</span> featured projects
            </p>
            {(cat !== 'all' || year !== 'all' || query) && (
              <button
                onClick={() => {
                  setCat('all');
                  setYear('all');
                  setQuery('');
                }}
                className="text-[12px] text-accent hover:text-gold-deep font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="py-24 text-center border border-dashed border-border">
              <p className="text-[14px] text-muted-foreground">No projects match your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p) => (
                  <article
                    key={p.id}
                    className="group bg-card border border-border flex flex-col overflow-hidden transition-all duration-300 hover:shadow-elegant hover:border-primary/30"
                    data-testid={`project-card-${p.id}`}
                  >
                    <Link to={`/projects/${p.slug}`} className="contents">
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1.5 bg-white/95 text-primary text-[10.5px] font-semibold tracking-[0.14em] uppercase">
                            {p.type}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4 w-9 h-9 bg-accent text-accent-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
                          {p.scope}
                        </p>
                        <div className="mt-6 pt-5 border-t border-border grid grid-cols-3 gap-3">
                          <div>
                            <div className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                              <MapPin className="w-3 h-3" /> Location
                            </div>
                            <div className="text-[12.5px] font-medium text-foreground mt-1.5">{p.location}</div>
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                              <Calendar className="w-3 h-3" /> Year
                            </div>
                            <div className="text-[12.5px] font-medium text-foreground mt-1.5">{p.year}</div>
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                              <Wallet className="w-3 h-3" /> Value
                            </div>
                            <div className="text-[12.5px] font-semibold text-primary mt-1.5">{p.budget}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
