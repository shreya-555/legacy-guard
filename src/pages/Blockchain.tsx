import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Blocks,
  ArrowLeft,
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  Send,
  Brain,
  Shield,
  Hash,
  ExternalLink,
  RefreshCw,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Blockchain = () => {
  const { toast } = useToast();
  const [isPublishing, setIsPublishing] = useState(false);

  const blockchainData = {
    network: "Ethereum Sepolia Testnet",
    contractAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f8f8Bc",
    willHash: "0x7a3f9e2c8b1d4a5f6e7c8d9b0a1f2e3d4c5b6a7e9b2",
    lastUpdated: "2024-01-15 14:30:00 UTC",
    transactionHash: "0x1234...abcd",
    blockNumber: 4567890,
    gasUsed: "45,000",
    status: "verified" as const,
  };

  const transactions = [
    {
      id: "1",
      type: "Will Created",
      hash: "0x1234...5678",
      date: "Jan 10, 2024",
      status: "confirmed",
    },
    {
      id: "2",
      type: "Asset Added",
      hash: "0x2345...6789",
      date: "Jan 12, 2024",
      status: "confirmed",
    },
    {
      id: "3",
      type: "Beneficiary Updated",
      hash: "0x3456...7890",
      date: "Jan 15, 2024",
      status: "confirmed",
    },
    {
      id: "4",
      type: "Will Hash Updated",
      hash: "0x4567...8901",
      date: "Jan 15, 2024",
      status: "pending",
    },
  ];

  const handlePublishToBlockchain = async () => {
    setIsPublishing(true);
    
    // Simulate blockchain transaction
    setTimeout(() => {
      setIsPublishing(false);
      toast({
        title: "Published to Blockchain",
        description: "Your will hash has been successfully stored on the Ethereum blockchain.",
      });
    }, 3000);
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
              <h1 className="font-display text-xl font-semibold text-foreground">Blockchain Verification</h1>
              <p className="text-sm text-muted-foreground">Immutable storage on Ethereum</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Status Banner */}
        <Card variant="glass" className="mb-8 bg-gradient-to-r from-navy-600 to-navy-700 border-navy-500/30 text-primary-foreground overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/20">
                  <Blocks className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="font-display text-xl font-semibold">
                      Blockchain Status
                    </h2>
                    <Badge variant="verified" className="bg-accent/20 text-accent border-accent/30">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <p className="text-primary-foreground/70 text-sm font-body">
                    Your will is secured on the {blockchainData.network}. Any changes 
                    will be automatically hashed and stored.
                  </p>
                </div>
              </div>
              <Button 
                variant="accent" 
                size="lg"
                onClick={handlePublishToBlockchain}
                disabled={isPublishing}
              >
                {isPublishing ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Publish Update
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Will Hash Details */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Hash className="h-5 w-5 text-accent" />
                Will Hash
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted font-mono text-sm break-all">
                  {blockchainData.willHash}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Block Number</p>
                    <p className="font-medium">{blockchainData.blockNumber.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Gas Used</p>
                    <p className="font-medium">{blockchainData.gasUsed}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-1">Last Updated</p>
                  <p className="font-medium">{blockchainData.lastUpdated}</p>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href={`https://sepolia.etherscan.io/tx/${blockchainData.transactionHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Etherscan
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Smart Contract */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-navy-400" />
                Smart Contract
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Contract Address</p>
                  <div className="p-3 rounded-lg bg-muted font-mono text-xs break-all">
                    {blockchainData.contractAddress}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-1">Network</p>
                  <Badge variant="blockchain">{blockchainData.network}</Badge>
                </div>

                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-foreground">Immutable Storage</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Once published, your will hash cannot be altered or deleted. 
                        This ensures complete tamper-proof verification.
                      </p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href={`https://sepolia.etherscan.io/address/${blockchainData.contractAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Contract
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transaction History */}
        <Card variant="elevated" className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-gold-400" />
              Transaction History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      tx.status === "confirmed" ? "bg-emerald-500/10" : "bg-gold-400/10"
                    )}>
                      {tx.status === "confirmed" ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <Clock className="h-5 w-5 text-gold-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{tx.type}</p>
                      <p className="text-sm text-muted-foreground font-mono">{tx.hash}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{tx.date}</p>
                    <Badge variant={tx.status === "confirmed" ? "verified" : "pending"}>
                      {tx.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card variant="feature" className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Brain className="h-5 w-5 text-navy-400" />
              How Blockchain Verification Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                  <Hash className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-1">1. Hash Generation</h4>
                <p className="text-sm text-muted-foreground">
                  Your will content is converted into a unique SHA-256 hash
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-navy-400/10 flex items-center justify-center">
                  <Blocks className="h-6 w-6 text-navy-400" />
                </div>
                <h4 className="font-semibold mb-1">2. Blockchain Storage</h4>
                <p className="text-sm text-muted-foreground">
                  The hash is stored on Ethereum via our smart contract
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-emerald-500" />
                </div>
                <h4 className="font-semibold mb-1">3. Verification</h4>
                <p className="text-sm text-muted-foreground">
                  Anyone can verify will authenticity by comparing hashes
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Blockchain;
