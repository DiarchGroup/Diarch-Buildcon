import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, ArrowUpRight } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'About', href: '/about' },
  { label: 'News', href: '/news' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-navy-deep text-white ${
          scrolled
            ? 'shadow-elegant border-b border-accent/20'
            : 'border-b border-white/5'
        }`}
      >
        <div className="container-page flex items-center justify-between h-[72px]">
          <Logo variant="dark" />

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-[11px] font-semibold uppercase tracking-widest transition-colors ${
                    isActive
                      ? 'text-accent'
                      : 'text-white/75 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute left-3.5 right-3.5 -bottom-[19px] h-[2px] bg-accent" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact">
              <Button variant="gold" size="sm" className="group" data-testid="navbar-contact-cta">
                Contact
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 -mr-2 text-white" aria-label="Open menu" data-testid="navbar-mobile-trigger">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] p-0 bg-navy-deep text-white border-l border-white/10">
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Logo variant="dark" />
                <button onClick={() => setMobileOpen(false)} className="p-2 -mr-2 text-white" aria-label="Close menu">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col p-4">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    end={link.href === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3.5 border-b border-white/10 text-[12px] uppercase tracking-widest font-semibold ${
                        isActive ? 'text-accent font-semibold' : 'text-white/85 hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 -rotate-90 opacity-40" />
                  </NavLink>
                ))}
                <Link to="/contact" className="mt-6">
                  <Button variant="gold" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      </header>
    </>
  );
};
