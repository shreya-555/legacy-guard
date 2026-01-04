import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  FileEdit, 
  Blocks, 
  Brain, 
  AlertCircle,
  Send
} from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Register & Verify",
      description: "Create your account with KYC verification using Aadhaar/PAN. Enable 2FA for maximum security.",
      color: "from-navy-500 to-navy-600",
    },
    {
      number: "02",
      icon: FileEdit,
      title: "Create Your Will",
      description: "Add your digital and physical assets, assign beneficiaries, and write personal messages.",
      color: "from-accent to-emerald-600",
    },
    {
      number: "03",
      icon: Brain,
      title: "AI Validation",
      description: "Our AI reviews your will for completeness, identifies gaps, and suggests improvements.",
      color: "from-navy-400 to-navy-500",
    },
    {
      number: "04",
      icon: Blocks,
      title: "Blockchain Storage",
      description: "Your will's hash is stored on Ethereum, creating an immutable, verifiable record.",
      color: "from-emerald-500 to-accent",
    },
    {
      number: "05",
      icon: AlertCircle,
      title: "Death Trigger",
      description: "Multi-party verification through death certificate or family confirmation activates execution.",
      color: "from-destructive to-destructive/80",
    },
    {
      number: "06",
      icon: Send,
      title: "Asset Transfer",
      description: "Beneficiaries receive their assigned assets, credentials, and personal messages securely.",
      color: "from-gold-400 to-gold-500",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="info" className="mb-4">
            Simple Process
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How LegacyVault Works
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            From registration to execution, every step is designed for security, 
            transparency, and ease of use.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div
                    className={`inline-block p-6 rounded-2xl bg-card shadow-lg border border-border/50 max-w-md animate-slide-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-sm font-bold text-muted-foreground font-body">
                      STEP {step.number}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center`}>
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
