import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/ramdhas.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Stockholm, Sweden
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Hey,
                <br />
                <span className="text-primary">I'm Ramdhas</span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-primary rounded-full"></div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              I'm an iOS Developer based in Stockholm (Sweden) with over 12 years of experience creating mobile apps. I specialize in turning ideas into well-crafted digital products with clean architecture and optimal performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("#portfolio")}
                className="shadow-soft"
              >
                View My Work
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="group"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-accent rounded-full animate-pulse"></div>
                Available for new projects
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image with Decorative Elements */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Main Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src={profileImage}
                  alt="Ramdhas Munirathinam - iOS Developer"
                  className="w-full h-full object-cover rounded-full shadow-strong"
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-medium animate-bounce">
                  iOS
                </div>        
                                
                <div className="absolute top-1/2 -left-8 w-14 h-14 bg-hero-accent rounded-full flex items-center justify-center text-white font-semibold text-xs shadow-medium" style={{ animationDelay: "2s" }}>
                Android
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-8 right-8 w-32 h-32 bg-primary/10 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 bg-hero-accent/10 rounded-full"></div>
                <div className="absolute top-1/2 right-0 w-16 h-16 bg-tech-accent/10 rounded-full"></div>
              </div>

              {/* Dotted Connection Lines */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                style={{ transform: "scale(1.2)" }}
              >
                <defs>
                  <pattern id="dots" patternUnits="userSpaceOnUse" width="10" height="10">
                    <circle cx="5" cy="5" r="1" fill="hsl(var(--primary))" opacity="0.3"/>
                  </pattern>
                </defs>
                <path
                  d="M100,50 Q200,30 300,80 Q400,120 450,100"
                  stroke="url(#dots)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection("#about")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-primary" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;