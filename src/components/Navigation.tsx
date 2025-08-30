import { Button } from "@/components/ui/button";
import { Leaf, ShieldCheck, Truck, QrCode, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-farm-primary to-farm-secondary rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300" />
              <div className="relative bg-gradient-to-r from-farm-primary to-farm-secondary p-2.5 rounded-xl">
                <Leaf className="h-7 w-7 text-white" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-farm-primary to-blockchain-blue bg-clip-text text-transparent">
                HarvestLink
              </span>
              <div className="text-xs text-muted-foreground tracking-wide">BLOCKCHAIN TRANSPARENCY</div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-muted/50 rounded-full p-1">
              <a href="#dashboard" className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-white hover:text-farm-primary transition-all duration-200 hover:shadow-sm">
                Dashboard
              </a>
              <a href="#track" className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-white hover:text-farm-primary transition-all duration-200 hover:shadow-sm">
                Track Produce
              </a>
              <a href="#verify" className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-white hover:text-farm-primary transition-all duration-200 hover:shadow-sm">
                Verify Origin
              </a>
              <a href="#stakeholders" className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-white hover:text-farm-primary transition-all duration-200 hover:shadow-sm">
                Stakeholders
              </a>
            </div>
          </div>

          {/* Enhanced Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-farm-primary">
              Sign In
            </Button>
            <Button variant="hero" size="sm" className="shadow-lg">
              Get Started
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            className="md:hidden relative p-2 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-1">
              <a href="#dashboard" className="px-4 py-3 rounded-xl text-foreground hover:bg-muted/50 hover:text-farm-primary transition-all duration-200 font-medium">
                Dashboard
              </a>
              <a href="#track" className="px-4 py-3 rounded-xl text-foreground hover:bg-muted/50 hover:text-farm-primary transition-all duration-200 font-medium">
                Track Produce
              </a>
              <a href="#verify" className="px-4 py-3 rounded-xl text-foreground hover:bg-muted/50 hover:text-farm-primary transition-all duration-200 font-medium">
                Verify Origin
              </a>
              <a href="#stakeholders" className="px-4 py-3 rounded-xl text-foreground hover:bg-muted/50 hover:text-farm-primary transition-all duration-200 font-medium">
                Stakeholders
              </a>
              <div className="flex flex-col space-y-3 pt-6">
                <Button variant="outline" size="sm" className="mx-4">
                  Sign In
                </Button>
                <Button variant="hero" size="sm" className="mx-4">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};