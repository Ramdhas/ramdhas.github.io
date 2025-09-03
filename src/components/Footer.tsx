import { Button } from "@/components/ui/button";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          {/* <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ramdhas Munirathinam</h3>
            <p className="text-background/80 leading-relaxed">
              iOS Developer based in Stockholm, Sweden. Building exceptional mobile experiences 
              with over 12 years of expertise in iOS development.
            </p>
            <p className="text-background/60 text-sm">
              Available for new projects and collaborations.
            </p>
          </div> */}

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-background/80 hover:text-background text-left transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-background/80">
              <p>📧 ramdhasmails@gmail.com</p>
              <p>📞 +46-761269314</p>
              <a href="https://api.whatsapp.com/send/?phone=%2B919739599890" target="_blank" rel="noopener noreferrer"> 📞 +91-9739599890 (Whatsapp) </a>
              <p>📍 Stockholm, Sweden</p>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="border-background/20 text-background hover:bg-background hover:text-foreground mt-4"
              onClick={() => window.open("mailto:ramdhasmails@gmail.com")}
            >
              Send Email
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-background/60 text-sm">
              <span>© {currentYear} Ramdhas Munirathinam. Built with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>using React & TypeScript</span>
            </div>
            
            <div className="flex items-center gap-4">
              <p className="text-background/60 text-sm">
                Crafted for exceptional mobile experiences
              </p>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="text-background/80 hover:text-background hover:bg-background/10"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;