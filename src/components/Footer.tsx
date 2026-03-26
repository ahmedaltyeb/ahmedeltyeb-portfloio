import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Social Media", href: "/social-media" },
  { label: "Contact", href: "/contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="text-xl font-semibold font-display text-foreground hover:text-primary transition-colors"
          >
            Ahmed<span className="text-primary"> Eltyeb.</span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            (c) {currentYear} Ahmed Eltyeb. Made with{" "}
            <Heart className="h-4 w-4 text-primary fill-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};
