import { motion } from 'framer-motion';
import { ArrowRight, Download, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export const PartnershipCTA = () => {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/34690264/pexels-photo-34690264.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt="Government building"
          loading="lazy"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/70" />
        <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
      </div>

      <div className="relative container-page py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow-light">Partner with Diarch Group</span>
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.06] tracking-tight text-balance">
                Looking for a reliable
                <span className="block font-serif italic font-normal text-accent"> infrastructure partner?</span>
              </h2>
              <p className="mt-7 text-[16px] lg:text-[17px] leading-relaxed text-white/70 max-w-2xl">
                Initiate a structured partnership discussion. Our public-sector engagement desk responds to all formal
                inquiries within two working days with relevant case studies, compliance documents and engagement options.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/partnerships">
                  <Button size="lg" variant="gold" className="group w-full sm:w-auto">
                    Start Discussion
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="#download">
                  <Button size="lg" variant="outline-light" className="w-full sm:w-auto">
                    <Download className="w-4 h-4" />
                    Download Capability Statement
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 lg:pl-8"
          >
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 p-8">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-6">
                Direct Engagement
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4 pb-5 border-b border-white/10">
                  <div className="w-10 h-10 bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.14em] uppercase text-white/45">Partnerships Desk</p>
                    <a href="tel:+916122500000" className="block mt-1.5 text-[16px] font-semibold text-white hover:text-accent transition-colors">
                      +91 612 250 0000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-5 border-b border-white/10">
                  <div className="w-10 h-10 bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.14em] uppercase text-white/45">Tender Inquiries</p>
                    <a href="mailto:tenders@diarchgroup.in" className="block mt-1.5 text-[15px] font-semibold text-white hover:text-accent transition-colors">
                      tenders@diarchgroup.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <Download className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.14em] uppercase text-white/45">Capability Statement</p>
                    <button className="block mt-1.5 text-[15px] font-semibold text-white hover:text-accent transition-colors">
                      Download PDF (2.4 MB)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
