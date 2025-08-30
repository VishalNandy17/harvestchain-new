import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QrCode, Scan, ShieldCheck, MapPin, Calendar, Truck } from "lucide-react";

export const QRSection = () => {
  const sampleProduct = {
    name: "Organic Heirloom Tomatoes",
    farm: "Green Valley Organic Farm",
    farmer: "Maria Rodriguez",
    harvestDate: "March 15, 2024",
    location: "Salinas Valley, CA",
    certifications: ["USDA Organic", "Fair Trade", "Non-GMO"],
    journey: [
      { stage: "Harvested", date: "Mar 15", location: "Green Valley Farm", verified: true },
      { stage: "Packaged", date: "Mar 15", location: "Farm Facility", verified: true },
      { stage: "Shipped", date: "Mar 16", location: "Distribution Center", verified: true },
      { stage: "Received", date: "Mar 17", location: "Fresh Market Store", verified: true }
    ]
  };

  return (
    <section id="verify" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-2 w-8 bg-gradient-to-r from-farm-primary to-blockchain-blue rounded-full" />
            <span className="text-farm-primary font-semibold tracking-wide">QR VERIFICATION</span>
            <div className="h-2 w-8 bg-gradient-to-r from-blockchain-blue to-farm-primary rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Instant Product
            <br />
            <span className="bg-gradient-to-r from-farm-primary to-blockchain-blue bg-clip-text text-transparent">
              Verification
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scan any QR code to instantly access complete product history, 
            verification status, and supply chain journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* QR Code Scanner Interface */}
          <div className="space-y-6">
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Scan className="h-6 w-6 text-blockchain-blue" />
                  <span>Scan Product QR Code</span>
                </CardTitle>
                <CardDescription>
                  Point your camera at any product QR code for instant verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Mock QR Scanner Interface */}
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                    <div className="text-center">
                      <QrCode className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Camera view would appear here</p>
                    </div>
                  </div>
                  
                  {/* Scanner Overlay */}
                  <div className="absolute inset-4 border-2 border-blockchain-blue rounded-lg opacity-50">
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-blockchain-blue rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-blockchain-blue rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-blockchain-blue rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-blockchain-blue rounded-br-lg"></div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <Button variant="blockchain" className="w-full">
                    <Scan className="mr-2 h-4 w-4" />
                    Start Scanning
                  </Button>
                  <Button variant="outline" className="w-full">
                    Upload QR Image
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sample Verification Results */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <ShieldCheck className="h-6 w-6 text-trust-green" />
                    <span>Verification Results</span>
                  </CardTitle>
                  <Badge className="bg-trust-green text-white">VERIFIED</Badge>
                </div>
                <CardDescription>Complete product information and supply chain history</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Product Info */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{sampleProduct.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-farm-primary" />
                      <span className="text-muted-foreground">Farm:</span>
                      <span className="text-foreground">{sampleProduct.farm}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-harvest-amber" />
                      <span className="text-muted-foreground">Harvested:</span>
                      <span className="text-foreground">{sampleProduct.harvestDate}</span>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {sampleProduct.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Supply Chain Journey */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Supply Chain Journey</h4>
                  <div className="space-y-3">
                    {sampleProduct.journey.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${step.verified ? 'bg-trust-green' : 'bg-muted'}`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-foreground">{step.stage}</span>
                            <span className="text-xs text-muted-foreground">{step.date}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">{step.location}</div>
                        </div>
                        {step.verified && (
                          <ShieldCheck className="h-4 w-4 text-trust-green" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Truck className="mr-2 h-4 w-4" />
                  View Full Journey
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};