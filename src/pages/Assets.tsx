import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Shield,
  Wallet,
  Building2,
  Mail,
  Cloud,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  CheckCircle2,
  Clock,
  ArrowLeft,
  Globe,
  Key,
  CreditCard,
  Smartphone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type AssetType = "crypto" | "bank" | "property" | "email" | "social" | "cloud" | "domain" | "other";

interface Asset {
  id: string;
  name: string;
  type: AssetType;
  value: string;
  status: "verified" | "pending";
  description: string;
  beneficiary?: string;
}

const assetIcons: Record<AssetType, typeof Wallet> = {
  crypto: Wallet,
  bank: Building2,
  property: Building2,
  email: Mail,
  social: Globe,
  cloud: Cloud,
  domain: Globe,
  other: Key,
};

const assetColors: Record<AssetType, { text: string; bg: string }> = {
  crypto: { text: "text-accent", bg: "bg-accent/10" },
  bank: { text: "text-gold-400", bg: "bg-gold-400/10" },
  property: { text: "text-navy-400", bg: "bg-navy-400/10" },
  email: { text: "text-emerald-500", bg: "bg-emerald-500/10" },
  social: { text: "text-navy-300", bg: "bg-navy-300/10" },
  cloud: { text: "text-accent", bg: "bg-accent/10" },
  domain: { text: "text-gold-500", bg: "bg-gold-500/10" },
  other: { text: "text-muted-foreground", bg: "bg-muted" },
};

const Assets = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newAsset, setNewAsset] = useState({
    name: "",
    type: "crypto" as AssetType,
    value: "",
    description: "",
  });

  const [assets] = useState<Asset[]>([
    {
      id: "1",
      name: "Bitcoin Wallet",
      type: "crypto",
      value: "$45,000",
      status: "verified",
      description: "Primary BTC wallet on Coinbase",
      beneficiary: "Sarah Doe",
    },
    {
      id: "2",
      name: "Ethereum Holdings",
      type: "crypto",
      value: "$12,500",
      status: "verified",
      description: "ETH stored in MetaMask",
      beneficiary: "John Jr.",
    },
    {
      id: "3",
      name: "Family Home",
      type: "property",
      value: "$350,000",
      status: "pending",
      description: "123 Main Street, San Francisco",
    },
    {
      id: "4",
      name: "HDFC Savings Account",
      type: "bank",
      value: "$25,000",
      status: "verified",
      description: "Primary savings account",
      beneficiary: "Sarah Doe",
    },
    {
      id: "5",
      name: "Gmail Account",
      type: "email",
      value: "N/A",
      status: "verified",
      description: "johndoe@gmail.com",
      beneficiary: "Sarah Doe",
    },
    {
      id: "6",
      name: "Google Drive",
      type: "cloud",
      value: "N/A",
      status: "verified",
      description: "Family photos and documents",
      beneficiary: "All Beneficiaries",
    },
    {
      id: "7",
      name: "Twitter Account",
      type: "social",
      value: "N/A",
      status: "pending",
      description: "@johndoe - 15K followers",
    },
    {
      id: "8",
      name: "johndoe.com",
      type: "domain",
      value: "$2,500",
      status: "verified",
      description: "Personal domain on GoDaddy",
      beneficiary: "John Jr.",
    },
  ]);

  const filteredAssets = assets.filter((asset) => {
    const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || asset.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleAddAsset = () => {
    toast({
      title: "Asset Added",
      description: `${newAsset.name} has been added to your assets.`,
    });
    setIsAddModalOpen(false);
    setNewAsset({ name: "", type: "crypto", value: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="font-display text-xl font-semibold text-foreground">Asset Management</h1>
              <p className="text-sm text-muted-foreground">Manage your digital and physical assets</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Assets", value: assets.length, icon: Wallet, color: "text-accent" },
            { label: "Verified", value: assets.filter(a => a.status === "verified").length, icon: CheckCircle2, color: "text-emerald-500" },
            { label: "Pending", value: assets.filter(a => a.status === "pending").length, icon: Clock, color: "text-gold-400" },
            { label: "Total Value", value: "$435K", icon: CreditCard, color: "text-navy-400" },
          ].map((stat) => (
            <Card key={stat.label} variant="stat" className="p-4">
              <div className="flex items-center gap-3">
                <div className={cn("p-2 rounded-lg bg-muted", stat.color)}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-display">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card variant="elevated" className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search assets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="crypto">Cryptocurrency</SelectItem>
                  <SelectItem value="bank">Bank Accounts</SelectItem>
                  <SelectItem value="property">Property</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="cloud">Cloud Storage</SelectItem>
                  <SelectItem value="domain">Domains</SelectItem>
                </SelectContent>
              </Select>
              <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                <DialogTrigger asChild>
                  <Button variant="accent">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Asset
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add New Asset</DialogTitle>
                    <DialogDescription>
                      Add a new digital or physical asset to your will.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="asset-name">Asset Name</Label>
                      <Input
                        id="asset-name"
                        placeholder="e.g., Bitcoin Wallet"
                        value={newAsset.name}
                        onChange={(e) => setNewAsset(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="asset-type">Asset Type</Label>
                      <Select
                        value={newAsset.type}
                        onValueChange={(value: AssetType) => setNewAsset(prev => ({ ...prev, type: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="crypto">Cryptocurrency</SelectItem>
                          <SelectItem value="bank">Bank Account</SelectItem>
                          <SelectItem value="property">Property</SelectItem>
                          <SelectItem value="email">Email Account</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="cloud">Cloud Storage</SelectItem>
                          <SelectItem value="domain">Domain</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="asset-value">Estimated Value</Label>
                      <Input
                        id="asset-value"
                        placeholder="e.g., $10,000"
                        value={newAsset.value}
                        onChange={(e) => setNewAsset(prev => ({ ...prev, value: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="asset-desc">Description</Label>
                      <Textarea
                        id="asset-desc"
                        placeholder="Additional details about this asset..."
                        value={newAsset.description}
                        onChange={(e) => setNewAsset(prev => ({ ...prev, description: e.target.value }))}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button variant="accent" onClick={handleAddAsset}>
                      Add Asset
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Assets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAssets.map((asset) => {
            const Icon = assetIcons[asset.type];
            const colors = assetColors[asset.type];
            
            return (
              <Card key={asset.id} variant="interactive" className="group">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn("p-3 rounded-xl", colors.bg)}>
                      <Icon className={cn("h-6 w-6", colors.text)} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={asset.status === "verified" ? "verified" : "pending"}>
                        {asset.status === "verified" ? (
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                        ) : (
                          <Clock className="h-3 w-3 mr-1" />
                        )}
                        {asset.status}
                      </Badge>
                      <button className="p-1 rounded hover:bg-muted opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-1">{asset.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{asset.description}</p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Value</p>
                      <p className="font-semibold text-foreground">{asset.value}</p>
                    </div>
                    {asset.beneficiary && (
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Beneficiary</p>
                        <p className="text-sm font-medium text-accent">{asset.beneficiary}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 mt-4 pt-3 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 text-destructive hover:text-destructive">
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredAssets.length === 0 && (
          <Card variant="glass" className="p-12 text-center">
            <Wallet className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-display text-lg font-semibold mb-2">No assets found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery ? "Try a different search term" : "Start by adding your first asset"}
            </p>
            <Button variant="accent" onClick={() => setIsAddModalOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Asset
            </Button>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Assets;
