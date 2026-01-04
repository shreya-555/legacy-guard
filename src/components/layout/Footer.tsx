import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", path: "/#features" },
      { name: "How It Works", path: "/#how-it-works" },
      { name: "Pricing", path: "/pricing" },
      { name: "Security", path: "/security" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Blog", path: "/blog" },
      { name: "Press", path: "/press" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" },
      { name: "Compliance", path: "/compliance" },
    ],
  };

  return (
    <footer className="bg-navy-800 text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary-foreground/10">
                <Shield className="h-5 w-5 text-accent" />
              </div>
              <span className="font-display text-xl font-semibold">
                LegacyVault
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm font-body">
              Secure your digital legacy with blockchain-powered will management. 
              Protect what matters most for future generations.
            </p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@legacyvault.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm font-body">
            © {currentYear} LegacyVault. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-primary-foreground/40 font-body">
              Secured by Blockchain Technology
            </span>
            <div className="h-4 w-px bg-primary-foreground/20" />
            <span className="text-xs text-primary-foreground/40 font-body">
              AES-256 Encryption
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
