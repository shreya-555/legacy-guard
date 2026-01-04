import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Users,
  Plus,
  Search,
  ArrowLeft,
  Mail,
  Phone,
  Edit,
  Trash2,
  MoreVertical,
  UserPlus,
  Percent,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Beneficiary {
  id: string;
  name: string;
  email: string;
  phone: string;
  relationship: string;
  allocation: number;
  assetsAssigned: number;
  avatar?: string;
}

const Beneficiaries = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newBeneficiary, setNewBeneficiary] = useState({
    name: "",
    email: "",
    phone: "",
    relationship: "",
  });

  const [beneficiaries] = useState<Beneficiary[]>([
    {
      id: "1",
      name: "Sarah Doe",
      email: "sarah.doe@email.com",
      phone: "+1 555-123-4567",
      relationship: "Spouse",
      allocation: 50,
      assetsAssigned: 5,
    },
    {
      id: "2",
      name: "John Doe Jr.",
      email: "johnjr@email.com",
      phone: "+1 555-234-5678",
      relationship: "Son",
      allocation: 30,
      assetsAssigned: 3,
    },
    {
      id: "3",
      name: "Emily Doe",
      email: "emily.doe@email.com",
      phone: "+1 555-345-6789",
      relationship: "Daughter",
      allocation: 15,
      assetsAssigned: 2,
    },
    {
      id: "4",
      name: "Robert Smith",
      email: "robert.smith@email.com",
      phone: "+1 555-456-7890",
      relationship: "Brother",
      allocation: 5,
      assetsAssigned: 1,
    },
  ]);

  const filteredBeneficiaries = beneficiaries.filter((b) =>
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalAllocation = beneficiaries.reduce((sum, b) => sum + b.allocation, 0);

  const handleAddBeneficiary = () => {
    toast({
      title: "Beneficiary Added",
      description: `${newBeneficiary.name} has been added as a beneficiary.`,
    });
    setIsAddModalOpen(false);
    setNewBeneficiary({ name: "", email: "", phone: "", relationship: "" });
  };

  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").toUpperCase();
  };

  const getRelationshipColor = (relationship: string) => {
    const colors: Record<string, string> = {
      "Spouse": "bg-accent/10 text-accent",
      "Son": "bg-navy-400/10 text-navy-400",
      "Daughter": "bg-emerald-500/10 text-emerald-500",
      "Brother": "bg-gold-400/10 text-gold-500",
      "Sister": "bg-navy-300/10 text-navy-300",
    };
    return colors[relationship] || "bg-muted text-muted-foreground";
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
              <h1 className="font-display text-xl font-semibold text-foreground">Beneficiaries</h1>
              <p className="text-sm text-muted-foreground">Manage who receives your assets</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card variant="stat" className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold font-display">{beneficiaries.length}</p>
                <p className="text-xs text-muted-foreground">Beneficiaries</p>
              </div>
            </div>
          </Card>
          <Card variant="stat" className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <Percent className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <p className="text-2xl font-bold font-display">{totalAllocation}%</p>
                <p className="text-xs text-muted-foreground">Allocated</p>
              </div>
            </div>
          </Card>
          <Card variant="stat" className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-navy-400/10">
                <FileText className="h-5 w-5 text-navy-400" />
              </div>
              <div>
                <p className="text-2xl font-bold font-display">
                  {beneficiaries.reduce((sum, b) => sum + b.assetsAssigned, 0)}
                </p>
                <p className="text-xs text-muted-foreground">Assets Assigned</p>
              </div>
            </div>
          </Card>
          <Card variant="stat" className="p-4">
            <div className="flex items-center gap-3">
              <div className={cn(
                "p-2 rounded-lg",
                totalAllocation === 100 ? "bg-emerald-500/10" : "bg-gold-400/10"
              )}>
                {totalAllocation === 100 ? (
                  <Percent className="h-5 w-5 text-emerald-500" />
                ) : (
                  <Percent className="h-5 w-5 text-gold-400" />
                )}
              </div>
              <div>
                <p className="text-2xl font-bold font-display">{100 - totalAllocation}%</p>
                <p className="text-xs text-muted-foreground">Unallocated</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Allocation Warning */}
        {totalAllocation !== 100 && (
          <Card variant="glass" className="mb-6 bg-gold-400/10 border-gold-400/30">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 rounded-lg bg-gold-400/20">
                <Percent className="h-5 w-5 text-gold-500" />
              </div>
              <div>
                <p className="font-medium text-foreground">Incomplete Allocation</p>
                <p className="text-sm text-muted-foreground">
                  You have {100 - totalAllocation}% of your estate unallocated. Consider distributing it among your beneficiaries.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search and Add */}
        <Card variant="elevated" className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search beneficiaries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                <DialogTrigger asChild>
                  <Button variant="accent">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add Beneficiary
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add Beneficiary</DialogTitle>
                    <DialogDescription>
                      Add a new beneficiary to your digital will.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="ben-name">Full Name</Label>
                      <Input
                        id="ben-name"
                        placeholder="Enter full name"
                        value={newBeneficiary.name}
                        onChange={(e) => setNewBeneficiary(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ben-email">Email</Label>
                      <Input
                        id="ben-email"
                        type="email"
                        placeholder="Enter email address"
                        value={newBeneficiary.email}
                        onChange={(e) => setNewBeneficiary(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ben-phone">Phone Number</Label>
                      <Input
                        id="ben-phone"
                        type="tel"
                        placeholder="+1 555-123-4567"
                        value={newBeneficiary.phone}
                        onChange={(e) => setNewBeneficiary(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ben-rel">Relationship</Label>
                      <Input
                        id="ben-rel"
                        placeholder="e.g., Spouse, Child, Sibling"
                        value={newBeneficiary.relationship}
                        onChange={(e) => setNewBeneficiary(prev => ({ ...prev, relationship: e.target.value }))}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button variant="accent" onClick={handleAddBeneficiary}>
                      Add Beneficiary
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Beneficiaries Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredBeneficiaries.map((beneficiary) => (
            <Card key={beneficiary.id} variant="interactive" className="group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-emerald-600 flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                    {getInitials(beneficiary.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{beneficiary.name}</h3>
                        <Badge className={cn("mt-1", getRelationshipColor(beneficiary.relationship))}>
                          {beneficiary.relationship}
                        </Badge>
                      </div>
                      <button className="p-1 rounded hover:bg-muted opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                    
                    <div className="space-y-1 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{beneficiary.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>{beneficiary.phone}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div>
                        <p className="text-xs text-muted-foreground">Allocation</p>
                        <p className="text-lg font-bold text-accent">{beneficiary.allocation}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Assets</p>
                        <p className="text-lg font-bold text-foreground">{beneficiary.assetsAssigned}</p>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4 pt-3 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-destructive hover:text-destructive">
                        <Trash2 className="h-3 w-3 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBeneficiaries.length === 0 && (
          <Card variant="glass" className="p-12 text-center">
            <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-display text-lg font-semibold mb-2">No beneficiaries found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery ? "Try a different search term" : "Start by adding your first beneficiary"}
            </p>
            <Button variant="accent" onClick={() => setIsAddModalOpen(true)}>
              <UserPlus className="h-4 w-4 mr-2" />
              Add Your First Beneficiary
            </Button>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Beneficiaries;
