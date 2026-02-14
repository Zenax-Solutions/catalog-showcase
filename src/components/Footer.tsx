import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg text-gold-gradient mb-3">Riff Leather's</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Premium handcrafted leather goods since 2018. Each piece is meticulously crafted with exotic and genuine leather.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a href="mailto:Rifai10115@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" /> Rifai10115@gmail.com
            </a>
            <a href="tel:+94781729790" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" /> +94 78 172 9790
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Order</h4>
          <p className="text-sm text-muted-foreground">
            Browse our catalogue and order directly via WhatsApp. Custom orders welcome.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © 2025 Riff Leather's Handcraftes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
