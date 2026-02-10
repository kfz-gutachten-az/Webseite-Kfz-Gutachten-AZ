import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const links = [
    { to: "/", label: "Startseite" },
    { to: "/services", label: "Services" },
    { to: "/kontakt", label: "Kontakt" },
  ];
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-heading text-xl md:text-2xl font-bold tracking-wider text-foreground">
              KFZ-GUTACHTEN <span className="text-primary">AZ</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-heading text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                  isActive(link.to) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+4917672425003"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-sm font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Anrufen
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-heading text-sm tracking-widest uppercase ${
                  isActive(link.to) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+4917672425003"
              className="mt-2 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-sm font-heading text-sm tracking-wider w-fit"
            >
              <Phone className="h-4 w-4" />
              Anrufen
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
