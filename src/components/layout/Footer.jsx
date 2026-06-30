import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { Logo } from "../brand/Logo";

export const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container-page pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-4">
            <Logo variant="dark" />
            <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-sm">
              An execution-led government contracting and infrastructure
              development group serving central ministries and Bihar state
              departments since 2003.
            </p>

            <div className="mt-8 space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-white/70">
                  H.N.-28, Vasant Vihar Colony Opp. Tapasaya Complex Boring Road<br />
                  Patna, Bihar 800013
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+916122500000"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  +91 92292 66955
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:partnerships@diarchgroup.in"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  info@diarchgroup.com
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-[14px]">
              {[
                ["About Us", "/about"],
                ["Leadership", "/about#leadership"],
                ["Careers", "/contact"],
                ["News", "/news"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent mb-5">
              Capabilities
            </h4>
            <ul className="space-y-3 text-[14px]">
              {[
                ["Civil Infrastructure", "/capabilities"],
                ["Roads & Highways", "/capabilities"],
                ["Government Buildings", "/capabilities"],
                ["Smart City", "/capabilities"],
                ["Water Infrastructure", "/capabilities"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent mb-5">
              Public Sector Inquiries
            </h4>
            <p className="text-[14px] text-white/65 leading-relaxed mb-5">
              For tender, partnership and contracting inquiries, contact our
              public-sector engagement desk.
            </p>
            <Link
              to="/partnerships"
              className="group inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-[13px] font-medium tracking-wide hover:border-accent hover:bg-accent/10 transition-all"
            >
              Initiate Partnership Discussion
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <div className="flex items-center gap-3 mt-8">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border border-white/15 hover:border-accent hover:bg-accent/10 hover:text-accent transition-all"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[12px] text-white/45">
            © {new Date().getFullYear()} Diarch Group. All rights reserved. CIN:
            U45203BR2003PLC010742
          </div>
          <div className="flex items-center gap-6 text-[12px] text-white/55">
            <a href="#privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-accent transition-colors">
              Terms of Use
            </a>
            <a
              href="#disclaimer"
              className="hover:text-accent transition-colors"
            >
              Disclaimer
            </a>
            <a href="#sitemap" className="hover:text-accent transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
