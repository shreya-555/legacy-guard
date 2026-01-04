import { Card } from "@/components/ui/card";
import { Shield, Users, FileCheck, Blocks } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Registered Users",
      color: "text-accent",
    },
    {
      icon: FileCheck,
      value: "25,000+",
      label: "Wills Created",
      color: "text-navy-400",
    },
    {
      icon: Blocks,
      value: "50,000+",
      label: "Blockchain Transactions",
      color: "text-emerald-500",
    },
    {
      icon: Shield,
      value: "99.99%",
      label: "Uptime Security",
      color: "text-gold-400",
    },
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              variant="stat"
              className="p-6 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-body">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
