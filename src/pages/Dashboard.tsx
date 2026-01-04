import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  FileText,
  Users,
  Wallet,
  Building2,
  Mail,
  Cloud,
  Plus,
  ArrowRight,
  Bell,
  Settings,
  LogOut,
  ChevronDown,
  Blocks,
  Brain,
  CheckCircle2,
  AlertCircle,
  Clock,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: null,
  };

  const stats = [
    {
      title: "Digital Assets",
      value: "12",
      icon: Wallet,
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      title: "Physical Assets",
      value: "5",
      icon: Building2,
      color: "text-navy-400",
      bg: "bg-navy-400/10",
    },
    {
      title: "Beneficiaries",
      value: "4",
      icon: Users,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Documents",
      value: "8",
      icon: FileText,
      color: "text-gold-400",
      bg: "bg-gold-400/10",
    },
  ];

  const recentAssets = [
    {
      name: "Bitcoin Wallet",
      type: "Crypto",
      value: "$45,000",
      status: "verified",
    },
    {
      name: "Family Home",
      type: "Property",
      value: "$350,000",
      status: "pending",
    },
    {
      name: "Gmail Account",
      type: "Email",
      value: "N/A",
      status: "verified",
    },
    {
      name: "Savings Account",
      type: "Bank",
      value: "$25,000",
      status: "verified",
    },
  ];

  const sidebarLinks = [
    { name: "Dashboard", icon: Shield, path: "/dashboard", active: true },
    { name: "My Will", icon: FileText, path: "/dashboard/will" },
    { name: "Assets", icon: Wallet, path: "/dashboard/assets" },
    { name: "Beneficiaries", icon: Users, path: "/dashboard/beneficiaries" },
    { name: "Documents", icon: Cloud, path: "/dashboard/documents" },
    { name: "Blockchain", icon: Blocks, path: "/dashboard/blockchain" },
    { name: "AI Assistant", icon: Brain, path: "/dashboard/ai" },
    { name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border h-16 flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg gradient-hero">
            <Shield className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display font-semibold text-foreground">
            LegacyVault
          </span>
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-muted"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 bottom-0 w-64 bg-card border-r border-border z-40 transition-transform duration-300 lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="p-2 rounded-lg gradient-hero shadow-md">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold text-foreground">
              LegacyVault
            </span>
          </Link>

          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                  link.active
                    ? "bg-accent/10 text-accent font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <link.icon className="h-5 w-5" />
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-emerald-600 flex items-center justify-center text-primary-foreground font-semibold">
              {user.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
            <Link to="/">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        {/* Top Bar */}
        <header className="hidden lg:flex h-16 border-b border-border bg-card items-center justify-between px-6">
          <div>
            <h1 className="font-display text-xl font-semibold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, {user.name}</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg hover:bg-muted">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-emerald-600 flex items-center justify-center text-primary-foreground font-semibold">
              {user.name.charAt(0)}
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Will Status Banner */}
          <Card variant="glass" className="mb-6 bg-gradient-to-r from-navy-600 to-navy-700 border-navy-500/30 text-primary-foreground">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-foreground/10">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1">
                      Complete Your Digital Will
                    </h3>
                    <p className="text-primary-foreground/70 text-sm font-body">
                      Your will is 65% complete. Add more assets and beneficiaries to secure your legacy.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:block w-48">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2 bg-primary-foreground/20" />
                  </div>
                  <Button variant="accent" size="lg">
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat) => (
              <Card key={stat.title} variant="stat" className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className={cn("p-2.5 rounded-lg", stat.bg)}>
                    <stat.icon className={cn("h-5 w-5", stat.color)} />
                  </div>
                  <span className="text-xs text-muted-foreground">Total</span>
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </Card>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Assets */}
            <div className="lg:col-span-2">
              <Card variant="elevated">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Recent Assets</CardTitle>
                    <CardDescription>Your latest added assets</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Asset
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAssets.map((asset) => (
                      <div
                        key={asset.name}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                            {asset.type === "Crypto" && <Wallet className="h-5 w-5 text-accent" />}
                            {asset.type === "Property" && <Building2 className="h-5 w-5 text-navy-400" />}
                            {asset.type === "Email" && <Mail className="h-5 w-5 text-emerald-500" />}
                            {asset.type === "Bank" && <Building2 className="h-5 w-5 text-gold-400" />}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{asset.name}</p>
                            <p className="text-sm text-muted-foreground">{asset.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-foreground">{asset.value}</p>
                          <Badge variant={asset.status === "verified" ? "verified" : "pending"}>
                            {asset.status === "verified" ? (
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                            ) : (
                              <Clock className="h-3 w-3 mr-1" />
                            )}
                            {asset.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Blockchain Status */}
              <Card variant="feature">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Blocks className="h-5 w-5 text-accent" />
                    Blockchain Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Network</span>
                      <Badge variant="blockchain">Ethereum Testnet</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Will Hash</span>
                      <span className="text-xs font-mono text-foreground">0x7a3f...e9b2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Last Updated</span>
                      <span className="text-sm text-foreground">2 hours ago</span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <Badge variant="verified" className="w-full justify-center py-2">
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Verified on Blockchain
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Suggestions */}
              <Card variant="feature">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Brain className="h-5 w-5 text-navy-400" />
                    AI Suggestions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gold-400/10 border border-gold-400/20">
                      <AlertCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Unassigned Assets
                        </p>
                        <p className="text-xs text-muted-foreground">
                          3 assets haven't been assigned to beneficiaries
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Good Coverage
                        </p>
                        <p className="text-xs text-muted-foreground">
                          All major asset categories are covered
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Suggestions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
