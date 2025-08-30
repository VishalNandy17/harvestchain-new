import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Tractor, 
  Package, 
  Store, 
  User,
  Star,
  MapPin,
  Calendar,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

export const Stakeholders = () => {
  const stakeholderTypes = [
    {
      type: "Farmers",
      icon: <Tractor className="h-8 w-8" />,
      description: "Growers who start the supply chain by producing quality agricultural products",
      benefits: ["Fair pricing", "Direct market access", "Quality verification", "Transparent transactions"],
      color: "from-farm-primary to-farm-secondary",
      iconColor: "text-farm-primary"
    },
    {
      type: "Distributors", 
      icon: <Package className="h-8 w-8" />,
      description: "Partners who handle logistics and ensure products reach retailers efficiently",
      benefits: ["Supply chain visibility", "Quality assurance", "Efficiency tracking", "Trust building"],
      color: "from-blockchain-blue to-farm-primary",
      iconColor: "text-blockchain-blue"
    },
    {
      type: "Retailers",
      icon: <Store className="h-8 w-8" />,
      description: "Stores and markets that provide verified products directly to consumers",
      benefits: ["Product authenticity", "Customer trust", "Premium pricing", "Brand differentiation"],
      color: "from-trust-green to-blockchain-blue",
      iconColor: "text-trust-green"
    },
    {
      type: "Consumers",
      icon: <User className="h-8 w-8" />,
      description: "End users who can verify the origin and quality of their food purchases",
      benefits: ["Food safety", "Origin verification", "Quality assurance", "Sustainable choices"],
      color: "from-harvest-amber to-trust-green",
      iconColor: "text-harvest-amber"
    }
  ];

  const featuredStakeholders = [
    {
      name: "Maria Rodriguez",
      type: "Organic Farmer",
      location: "Salinas Valley, CA",
      products: "Tomatoes, Lettuce, Herbs",
      rating: 4.9,
      transactions: 245,
      verified: true,
      joinDate: "Jan 2023",
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Fresh Valley Distribution",
      type: "Distributor",
      location: "Central California", 
      products: "Multi-category logistics",
      rating: 4.8,
      transactions: 1250,
      verified: true,
      joinDate: "Mar 2022",
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Green Market Co-op",
      type: "Retailer",
      location: "San Francisco, CA",
      products: "Organic & Local produce",
      rating: 4.7,
      transactions: 890,
      verified: true,
      joinDate: "Jun 2022",
      avatar: "/api/placeholder/150/150"
    }
  ];

  return (
    <section id="stakeholders" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-2 w-8 bg-gradient-to-r from-farm-primary to-blockchain-blue rounded-full" />
            <span className="text-farm-primary font-semibold tracking-wide">STAKEHOLDERS</span>
            <div className="h-2 w-8 bg-gradient-to-r from-blockchain-blue to-farm-primary rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Connecting Every Player
            <br />
            <span className="bg-gradient-to-r from-farm-primary to-blockchain-blue bg-clip-text text-transparent">
              In The Supply Chain
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform brings together farmers, distributors, retailers, and consumers 
            in a transparent, trust-based ecosystem that benefits everyone.
          </p>
        </div>

        {/* Stakeholder Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stakeholderTypes.map((stakeholder, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${stakeholder.color}`} />
              <CardHeader className="text-center">
                <div className={`${stakeholder.iconColor} mx-auto mb-4`}>
                  {stakeholder.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{stakeholder.type}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {stakeholder.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {stakeholder.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <ShieldCheck className="h-3 w-3 text-trust-green flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Stakeholders */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Featured Community Members
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStakeholders.map((stakeholder, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={stakeholder.avatar} alt={stakeholder.name} />
                      <AvatarFallback>{stakeholder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-foreground">{stakeholder.name}</h4>
                        {stakeholder.verified && (
                          <ShieldCheck className="h-4 w-4 text-trust-green" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{stakeholder.type}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{stakeholder.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Package className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{stakeholder.products}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">Joined {stakeholder.joinDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-harvest-amber fill-current" />
                      <span className="text-sm font-medium text-foreground">{stakeholder.rating}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stakeholder.transactions} transactions
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Active
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="bg-gradient-to-r from-farm-primary to-blockchain-blue rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Become part of the transparent agricultural revolution. Whether you're a farmer, 
            distributor, retailer, or consumer, our platform has tools designed for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Register as Stakeholder
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-farm-primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};