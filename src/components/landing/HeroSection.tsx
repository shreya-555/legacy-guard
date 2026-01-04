import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  ArrowRight, 
  CheckCircle2,
  Blocks
} from "lucide-react";

const HeroSection = () => {
  const features = [
    "Blockchain-secured storage",
    "AI-powered validation",
    "Automated execution",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="blockchain" className="mb-6 animate-fade-in">
            <Blocks className="h-3 w-3 mr-1" />
            Powered by Blockchain Technology
          </Badge>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
            Secure Your{" "}
            <span className="text-accent">Digital Legacy</span>
            <br />
            For Future Generations
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto font-body animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Create tamper-proof digital wills, manage assets, and ensure seamless 
            transfer to your beneficiaries with AI-powered validation and 
            blockchain security.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-body"
              >
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="accent" size="xl" asChild>
              <Link to="/register">
                Start Creating Your Will
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/login">
                <Lock className="mr-2 h-5 w-5" />
                Access Your Vault
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-body">256-bit Encryption</span>
            </div>
            <div className="h-6 w-px bg-primary-foreground/20" />
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <Blocks className="h-5 w-5" />
              <span className="text-sm font-body">Ethereum Testnet</span>
            </div>
            <div className="h-6 w-px bg-primary-foreground/20" />
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <Lock className="h-5 w-5" />
              <span className="text-sm font-body">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
