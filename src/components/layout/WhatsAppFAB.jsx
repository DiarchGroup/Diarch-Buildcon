import { useState } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

export const WhatsAppFAB = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 lg:bottom-6 z-[60]" data-testid="whatsapp-fab-wrapper">
      {open && (
        <div className="mb-4 w-[300px] bg-card border border-border shadow-premium animate-fade-up" data-testid="whatsapp-fab-popover">
          <div className="bg-primary text-primary-foreground px-5 py-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-[14px]">Diarch Group</p>
              <p className="text-[11px] text-white/70 mt-0.5">Typically replies within 2 working hours</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4 space-y-2">
            <a
              href="https://wa.me/916122500000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 border border-border hover:border-accent hover:bg-accent/5 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-success" />
              <div>
                <p className="text-[13px] font-medium text-foreground">WhatsApp</p>
                <p className="text-[11px] text-muted-foreground">+91 612 250 0000</p>
              </div>
            </a>
            <a
              href="tel:+916122500000"
              className="flex items-center gap-3 px-4 py-3 border border-border hover:border-accent hover:bg-accent/5 transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <div>
                <p className="text-[13px] font-medium text-foreground">Call us</p>
                <p className="text-[11px] text-muted-foreground">Mon–Fri, 09:30–18:30 IST</p>
              </div>
            </a>
            <a
              href="mailto:partnerships@diarchgroup.in"
              className="flex items-center gap-3 px-4 py-3 border border-border hover:border-accent hover:bg-accent/5 transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              <div>
                <p className="text-[13px] font-medium text-foreground">Email</p>
                <p className="text-[11px] text-muted-foreground">partnerships@diarchgroup.in</p>
              </div>
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((s) => !s)}
        className="group w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center shadow-elegant hover:shadow-xl hover:bg-primary-hover transition-all relative"
        aria-label="Contact us"
        data-testid="whatsapp-fab"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent" />
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>
    </div>
  );
};
