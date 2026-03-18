import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/gematex.png";

const Footer = () => {
  return (
    <footer className="bg-dark-surface diagonal-texture text-muted-foreground py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="GemaTex" className="h-10 w-auto brightness-0 invert" />
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <p className="text-sm font-bold tracking-widest uppercase text-primary-foreground mb-4">
            Contacto
          </p>

          <p className="text-sm text-primary-foreground/80 font-medium">
            Vendor: Rodrigo Allievi
          </p>

          <div className="flex items-center gap-3 text-sm">
            <Phone size={16} className="text-primary flex-shrink-0" />
            <span>+54 11 6710 - 5625</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Mail size={16} className="text-primary flex-shrink-0" />
            <span>rodrigoallievi97@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <MapPin size={16} className="text-primary flex-shrink-0" />
            <span>Argentina, Buenos Aires</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8" style={{ borderTop: "1px solid hsla(0,0%,100%,0.08)" }}>
        <p className="text-xs text-muted-foreground/60 text-center">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
