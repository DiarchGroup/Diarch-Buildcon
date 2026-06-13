import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Download, FileText, Phone, Mail, ArrowRight, Gavel, ShieldCheck, FileSearch, Briefcase, BadgeCheck, ClipboardList } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { SectionHeading } from '../components/common/SectionHeading';
import { FadeUp } from '../components/common/FadeUp';
import { Button } from '../components/ui/button';

const EMPANELMENTS = [
  { name: 'CPWD', tag: 'Class-I Contractor', desc: 'Central Public Works Department — eligible to bid on central government works of all values.' },
  { name: 'MoRTH', tag: 'Highway Contractor', desc: 'Registered with the Ministry of Road Transport & Highways for highway and bridge works.' },
  { name: 'NHAI', tag: 'Approved Vendor', desc: 'Approved on National Highways Authority of India vendor panel for HAM and EPC contracts.' },
  { name: 'Bihar BCD', tag: 'Government Buildings', desc: 'Bihar Building Construction Department — full empanelment across building and PWD works.' },
  { name: 'BSRDC', tag: 'State Road Development', desc: 'Bihar State Road Development Corporation — empanelled for state highway and bridge works.' },
  { name: 'BIADA', tag: 'Industrial Areas', desc: 'Bihar Industrial Area Development Authority — empanelled for industrial park development.' },
];

const PROCUREMENT = [
  { icon: <FileSearch className="w-5 h-5" />, title: 'Tender Discovery', desc: 'Active monitoring across central and state portals — CPP, eProcurement, Bihar tenders.' },
  { icon: <ClipboardList className="w-5 h-5" />, title: 'EOI & Pre-qualification', desc: 'Structured documentation, dossier preparation and compliance verification for every submission.' },
  { icon: <Gavel className="w-5 h-5" />, title: 'Competitive Bidding', desc: 'Engineering-led rate analysis, integrity-bound pricing and full documentary compliance.' },
  { icon: <BadgeCheck className="w-5 h-5" />, title: 'Contract Execution', desc: 'Signed LOA to financial closure — mobilisation, performance guarantees and statutory clearances.' },
];

export default function Partnerships() {
  const [form, setForm] = useState({ org: '', name: '', designation: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Partnership inquiry received. Our team will respond within 2 working days.');
      setForm({ org: '', name: '', designation: '', email: '', phone: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <main data-testid="page-partnerships">
      <PageHeader
        eyebrow="Government Partnerships"
        title="A structured partnership desk for public-sector engagement."
        description="From tender pre-qualification to contract execution and ongoing project delivery — a single point of contact for central ministries, state departments and statutory authorities."
        breadcrumbs={[{ label: 'Partnerships' }]}
        image="https://images.pexels.com/photos/34690264/pexels-photo-34690264.jpeg?auto=compress&cs=tinysrgb&w=2200"
      />

      {/* Empanelments */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-page">
          <SectionHeading
            eyebrow="Empanelments & Registrations"
            title={<>Registered with every relevant central and state agency.</>}
            description="Documented Class-I empanelments, vendor approvals and statutory registrations across the agencies that procure public infrastructure in our operating geography."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EMPANELMENTS.map((e, i) => (
              <FadeUp key={e.name} delay={i * 0.05} className="bg-card border border-border p-7 relative group hover:border-primary/30 hover:shadow-elegant transition-all">
                <div className="absolute top-0 left-0 h-1 w-12 bg-accent" />
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-semibold text-[14px]">
                    {e.name}
                  </div>
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <p className="text-[10.5px] uppercase tracking-[0.14em] text-accent font-semibold">{e.tag}</p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{e.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement process */}
      <section className="py-24 lg:py-32 bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative container-page">
          <SectionHeading
            eyebrow="Procurement Expertise"
            light
            title={<>A four-stage procurement engagement model.</>}
            description="Disciplined documentation, transparent bidding and engineered cost responses — every tender treated as a contract waiting to be earned."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCUREMENT.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.08} className="bg-white/[0.04] backdrop-blur-sm border border-white/10 p-7 hover:bg-white/[0.06] transition-colors relative">
                <span className="absolute top-3 right-4 font-mono-num text-[12px] text-accent">0{i + 1}</span>
                <div className="w-12 h-12 bg-accent/15 border border-accent/30 text-accent flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h3 className="text-[17px] font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-white/65">{p.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance commitments */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeUp className="lg:col-span-5">
              <span className="eyebrow">Integrity Pact</span>
              <h2 className="mt-5 heading-section">Our public-sector commitments.</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                Every engagement with a public agency is bound by the same set of integrity commitments — and these are
                non-negotiable, regardless of contract value, sector or geography.
              </p>
              <div className="mt-8">
                <Button variant="premium" size="lg" className="group">
                  <Download className="w-4 h-4" />
                  Download Integrity Pact
                </Button>
              </div>
            </FadeUp>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                ['Transparent Bidding', 'No backdoor negotiations. Every bid responds to publicly available tender documents.'],
                ['Documented Quality', 'Every cement bag, every steel ton, every concrete pour — traceable to source.'],
                ['On-Time Delivery', '97.4% of contracts delivered on or ahead of contractual completion dates.'],
                ['Zero-Tolerance Safety', 'IS / IRC / ISO 45001 aligned. Documented safety culture, audited monthly.'],
                ['Statutory Compliance', 'GST, EPF, ESIC, labour licences — all current and verifiable.'],
                ['Post-Handover Support', 'Defect-liability obligations honoured fully, with documented post-handover audits.'],
              ].map(([t, d], i) => (
                <FadeUp key={t} delay={i * 0.05} className="bg-card border border-border p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BadgeCheck className="w-4 h-4 text-accent" />
                    <h3 className="text-[14.5px] font-semibold text-foreground">{t}</h3>
                  </div>
                  <p className="text-[12.5px] leading-relaxed text-muted-foreground">{d}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership inquiry form */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <FadeUp className="lg:col-span-5">
              <SectionHeading
                eyebrow="Initiate Discussion"
                title="Public-sector engagement desk."
                description="For tender, partnership, EOI or contracting inquiries — our public-sector desk responds to formal inquiries within two working days."
                align="left"
              />
              <div className="mt-10 space-y-5">
                {[
                  [<Phone key="p" className="w-4 h-4" />, 'Partnerships Desk', '+91 92292 66955', 'tel:+919229266955'],
                  [<Mail key="m" className="w-4 h-4" />, 'Tender Inquiries', 'info@diarchgroup.com', 'mailto:info@diarchgroup.com'],
                  [<FileText key="f" className="w-4 h-4" />, 'Capability Statement', 'Download PDF (2.4 MB)', '#download'],
                ].map(([icon, label, value, href], i) => (
                  <div key={i} className="flex items-start gap-4 bg-card border border-border p-5">
                    <div className="w-10 h-10 bg-accent/10 border border-accent/30 text-accent flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground">{label}</p>
                      <a href={href} className="block mt-1.5 text-[15px] font-semibold text-foreground hover:text-accent transition-colors">
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <motion.form
              data-testid="partnership-form"
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 bg-card border border-border p-8 lg:p-10"
            >
              <h3 className="text-xl font-semibold tracking-tight text-foreground mb-2">Submit a Formal Inquiry</h3>
              <p className="text-[13px] text-muted-foreground mb-8">All fields marked with an asterisk are required.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Organisation *" value={form.org} onChange={(v) => setForm({ ...form, org: v })} required testid="partnership-org" />
                <Field label="Designation" value={form.designation} onChange={(v) => setForm({ ...form, designation: v })} testid="partnership-designation" />
                <Field label="Contact Name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required testid="partnership-name" />
                <Field label="Phone *" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required testid="partnership-phone" />
                <Field label="Email *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required full testid="partnership-email" />

                <div className="md:col-span-2">
                  <label className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">Inquiry Type *</label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="mt-2 w-full h-11 px-4 border border-border bg-background text-[13.5px] focus:outline-none focus:border-primary transition-colors"
                    data-testid="partnership-subject"
                  >
                    <option value="">Select an inquiry type</option>
                    <option>Tender / EOI Inquiry</option>
                    <option>Capability Brief Request</option>
                    <option>Partnership Discussion</option>
                    <option>Site Visit / Reference Check</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full px-4 py-3 border border-border bg-background text-[13.5px] focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Provide context about your inquiry — project type, scope, timeline, expected engagement model."
                    data-testid="partnership-message"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <p className="text-[11.5px] text-muted-foreground">
                  We treat all inquiries with strict confidentiality. By submitting, you agree to our communication policy.
                </p>
                <Button type="submit" variant="premium" size="lg" disabled={loading} data-testid="partnership-submit">
                  {loading ? 'Submitting…' : (
                    <>
                      Submit Inquiry
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
}

const Field = ({ label, value, onChange, type = 'text', required = false, full = false, testid }) => (
  <div className={full ? 'md:col-span-2' : ''}>
    <label className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">{label}</label>
    <input
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      data-testid={testid}
      className="mt-2 w-full h-11 px-4 border border-border bg-background text-[13.5px] focus:outline-none focus:border-primary transition-colors"
    />
  </div>
);
