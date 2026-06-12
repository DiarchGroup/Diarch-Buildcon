import { Phone, MessageCircle, Mail, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MobileBottomBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-primary text-primary-foreground border-t border-accent/30 shadow-elegant" data-testid="mobile-bottom-bar">
      <div className="grid grid-cols-4 divide-x divide-white/10">
        <a href="tel:+916122500000" data-testid="mobile-bar-call" className="flex flex-col items-center justify-center py-3 hover:bg-primary-hover transition-colors">
          <Phone className="w-4 h-4 text-accent" />
          <span className="text-[10px] mt-1 tracking-wide">Call</span>
        </a>
        <a href="https://wa.me/916122500000" data-testid="mobile-bar-whatsapp" className="flex flex-col items-center justify-center py-3 hover:bg-primary-hover transition-colors">
          <MessageCircle className="w-4 h-4 text-accent" />
          <span className="text-[10px] mt-1 tracking-wide">WhatsApp</span>
        </a>
        <a href="mailto:partnerships@diarchgroup.in" data-testid="mobile-bar-email" className="flex flex-col items-center justify-center py-3 hover:bg-primary-hover transition-colors">
          <Mail className="w-4 h-4 text-accent" />
          <span className="text-[10px] mt-1 tracking-wide">Email</span>
        </a>
        <Link to="/projects" data-testid="mobile-bar-projects" className="flex flex-col items-center justify-center py-3 hover:bg-primary-hover transition-colors">
          <Building2 className="w-4 h-4 text-accent" />
          <span className="text-[10px] mt-1 tracking-wide">Projects</span>
        </Link>
      </div>
    </div>
  );
};
