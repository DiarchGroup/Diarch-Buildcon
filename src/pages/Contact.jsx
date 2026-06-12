import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle, Send } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { FadeUp } from '../components/common/FadeUp';
import { Button } from '../components/ui/button';
import { FAQS } from '../data/mockData';

const OFFICES = [
  {
    city: 'Patna (Headquarters)',
    address: 'Diarch House, R-Block, Patliputra Industrial Area, Patna, Bihar 800013',
    phone: '+91 612 250 0000',
    email: 'partnerships@diarchgroup.in',
    hours: 'Mon–Fri · 09:30–18:30 IST',
  },
  {
    city: 'Muzaffarpur — Regional Office',
    address: 'A-7, Tirhut Industrial Area, Muzaffarpur, Bihar 842002',
    phone: '+91 621 224 4400',
    email: 'tirhut@diarchgroup.in',
    hours: 'Mon–Fri · 09:30–18:30 IST',
  },
  {
    city: 'Bhagalpur — Regional Office',
    address: 'C-12, Eastern Industrial Estate, Bhagalpur, Bihar 812001',
    phone: '+91 641 240 0220',
    email: 'east@diarchgroup.in',
    hours: 'Mon–Fri · 09:30–18:30 IST',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Message received. Our team will respond within 2 working days.');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <main data-testid="page-contact">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with our team."
        description="Three regional offices across Bihar. Dedicated desks for partnerships, tenders, careers and general inquiries — every channel actively monitored during business hours."
        breadcrumbs={[{ label: 'Contact' }]}
        image="https://images.pexels.com/photos/7104647/pexels-photo-7104647.jpeg?auto=compress&cs=tinysrgb&w=2200"
      />

      {/* Direct channels */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              [<Phone key="p" className="w-5 h-5" />, 'Call', '+91 612 250 0000', 'tel:+916122500000', 'Mon–Fri · 09:30–18:30'],
              [<MessageCircle key="w" className="w-5 h-5" />, 'WhatsApp', 'Message us', 'https://wa.me/916122500000', 'Replies in 2 working hours'],
              [<Mail key="e" className="w-5 h-5" />, 'Email', 'partnerships@diarchgroup.in', 'mailto:partnerships@diarchgroup.in', 'For all formal inquiries'],
              [<Send key="t" className="w-5 h-5" />, 'Tenders', 'tenders@diarchgroup.in', 'mailto:tenders@diarchgroup.in', 'Public-sector engagements'],
            ].map(([icon, label, value, href, sub], i) => (
              <FadeUp key={label} delay={i * 0.06}>
                <a
                  href={href}
                  className="block bg-card border border-border p-6 lg:p-7 hover:border-primary/30 hover:shadow-elegant transition-all group h-full"
                  data-testid={`contact-channel-${label.toLowerCase()}`}
                >
                  <div className="w-11 h-11 bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mb-5">
                    {icon}
                  </div>
                  <p className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">{label}</p>
                  <p className="mt-2 text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                    {value}
                  </p>
                  <p className="mt-2 text-[11.5px] text-muted-foreground">{sub}</p>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-12 lg:py-16 bg-secondary/40">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 bg-card border border-border p-8 lg:p-10"
              data-testid="contact-form"
            >
              <span className="eyebrow">Send a message</span>
              <h2 className="mt-4 heading-sub">Tell us how we can help.</h2>
              <p className="mt-3 text-[13.5px] text-muted-foreground">
                Choose the right desk below — our team responds to formal inquiries within two working days.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Full Name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required testid="contact-name" />
                <Field label="Email *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required testid="contact-email" />
                <Field label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} testid="contact-phone" />
                <div>
                  <label className="text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">Subject *</label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="mt-2 w-full h-11 px-4 border border-border bg-background text-[13.5px] focus:outline-none focus:border-primary transition-colors"
                    data-testid="contact-subject"
                  >
                    <option value="">Choose a desk</option>
                    <option>General Inquiry</option>
                    <option>Partnerships</option>
                    <option>Tenders & EOI</option>
                    <option>Careers</option>
                    <option>Media</option>
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
                    placeholder="Provide as much context as possible — project type, timeline, contracting agency."
                    data-testid="contact-message"
                  />
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-border flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <p className="text-[11.5px] text-muted-foreground">All inquiries treated confidentially.</p>
                <Button type="submit" variant="premium" size="lg" disabled={loading} data-testid="contact-submit">
                  {loading ? 'Sending…' : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </motion.form>

            <FadeUp delay={0.15} className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-card border border-border overflow-hidden flex-shrink-0">
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <iframe
                    title="Patna Headquarters"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=85.10%2C25.59%2C85.20%2C25.65&layer=mapnik&marker=25.6171%2C85.1429"
                    className="absolute inset-0 w-full h-full border-0 grayscale-[20%]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-accent">Headquarters</p>
                  <p className="mt-3 text-[14px] font-semibold text-foreground">Diarch House, Patna</p>
                  <p className="mt-1 text-[12.5px] text-muted-foreground leading-relaxed">
                    R-Block, Patliputra Industrial Area,<br />Patna, Bihar 800013 · India
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow">Our Offices</span>
            <h2 className="mt-5 heading-section">Three regional offices, full-state coverage.</h2>
            <p className="mt-5 text-[15px] text-muted-foreground">
              Each regional office maintains its own site execution, procurement and compliance teams — placed within
              four hours of every active project.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((o, i) => (
              <FadeUp key={o.city} delay={i * 0.08} className="bg-card border border-border p-7 relative">
                <div className="absolute top-0 left-0 h-1 w-12 bg-accent" />
                <div className="flex items-center gap-2 mb-5">
                  <MapPin className="w-4 h-4 text-accent" />
                  <h3 className="text-[16px] font-semibold text-foreground">{o.city}</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{o.address}</p>
                <div className="mt-6 pt-5 border-t border-border space-y-3 text-[12.5px]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-accent" />
                    <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="text-foreground hover:text-primary transition-colors">{o.phone}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-accent" />
                    <a href={`mailto:${o.email}`} className="text-foreground hover:text-primary transition-colors break-all">{o.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span className="text-muted-foreground">{o.hours}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <FadeUp className="lg:col-span-4">
              <span className="eyebrow">Frequently Asked</span>
              <h2 className="mt-5 heading-section">Questions our partners ask.</h2>
              <p className="mt-5 text-[14.5px] text-muted-foreground">
                Brief answers to the most common partnership, contracting and compliance questions.
              </p>
            </FadeUp>
            <div className="lg:col-span-8 space-y-3">
              {FAQS.map((f, i) => (
                <FadeUp key={f.q} delay={i * 0.04}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="w-full bg-card border border-border text-left p-6 hover:border-primary/30 transition-all"
                    data-testid={`faq-${i}`}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="text-[15px] font-semibold text-foreground">{f.q}</h3>
                      <span className={`flex-shrink-0 w-7 h-7 border ${openFaq === i ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-foreground/70'} flex items-center justify-center transition-all`}>
                        <span className="font-mono-num text-[16px] leading-none">{openFaq === i ? '−' : '+'}</span>
                      </span>
                    </div>
                    {openFaq === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-border text-[13.5px] leading-relaxed text-muted-foreground"
                      >
                        {f.a}
                      </motion.p>
                    )}
                  </button>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const Field = ({ label, value, onChange, type = 'text', required = false, testid }) => (
  <div>
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
