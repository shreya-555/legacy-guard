import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Brain, 
  Blocks, 
  FileCheck, 
  Users, 
  Bell,
  Lock,
  CloudUpload
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Will Creation",
      description: "Create comprehensive digital wills with military-grade encryption. Your sensitive data never leaves unprotected.",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Brain,
      title: "AI Validation",
      description: "Our AI assistant checks for missing assets, unassigned beneficiaries, and ambiguous instructions automatically.",
      color: "text-navy-400",
      bg: "bg-navy-400/10",
    },
    {
      icon: Blocks,
      title: "Blockchain Storage",
      description: "Will hashes stored on Ethereum blockchain ensure tamper-proof verification and permanent records.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: FileCheck,
      title: "Asset Management",
      description: "Manage both digital and physical assets - from crypto wallets to property deeds, all in one secure place.",
      color: "text-gold-400",
      bg: "bg-gold-400/10",
    },
    {
      icon: Users,
      title: "Beneficiary Assignment",
      description: "Easily assign assets to beneficiaries with conditional logic and personal messages for each recipient.",
      color: "text-navy-300",
      bg: "bg-navy-300/10",
    },
    {
      icon: Bell,
      title: "Death Trigger System",
      description: "Multi-factor verification including death certificates and family confirmations for secure execution.",
      color: "text-destructive",
      bg: "bg-destructive/10",
    },
    {
      icon: Lock,
      title: "2FA Security",
      description: "Two-factor authentication with email OTP ensures only you can access and modify your will.",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: CloudUpload,
      title: "Document Upload",
      description: "Upload and store scanned traditional wills, legal documents, and important files securely.",
      color: "text-navy-400",
      bg: "bg-navy-400/10",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider font-body">
            Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Everything You Need to Secure Your Legacy
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            A comprehensive platform combining cutting-edge technology with 
            intuitive design to protect your assets and ensure seamless transfer.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              variant="feature"
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm font-body">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
