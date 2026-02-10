import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="h-1 bg-primary w-full" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-heading text-xl font-bold tracking-wider mb-4">
              KFZ-GUTACHTEN <span className="text-primary">AZ</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ingenieurbüro für Kfz-Schäden & Kfz-Bewertungen. Ihr kompetenter Partner für Unfallgutachten in Berlin und Brandenburg.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase mb-4 text-primary">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>Hochstr 12, 13357 Berlin</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+4917672425003" className="hover:text-primary transition-colors">0176 72425 003</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>030 857 68 065 / 030 22185133</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:info@kfz-gutachten-az.de" className="hover:text-primary transition-colors">info@kfz-gutachten-az.de</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase mb-4 text-primary">Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Startseite</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kfz-Gutachten AZ. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
