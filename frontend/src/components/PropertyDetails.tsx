import { MapPin, Bed, Bath, Square, Calendar, Shield, Wifi, Car, Dog, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  type: string;
  featured?: boolean;
}

interface PropertyDetailsProps {
  property: Property | null;
}

const amenities = [
  { icon: Wifi, label: "High-Speed Internet" },
  { icon: Car, label: "Parking Space" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Dog, label: "Pet Friendly" },
  { icon: Camera, label: "Virtual Tour" },
];

export function PropertyDetails({ property }: PropertyDetailsProps) {
  if (!property) {
    return (
      <div className="flex-1 flex items-center justify-center bg-muted/30">
        <div className="text-center">
          <Building className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-muted-foreground mb-2">Select a Property</h3>
          <p className="text-sm text-muted-foreground">Choose a property from the sidebar to view details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      <div className="max-w-4xl mx-auto p-6">
        {/* Hero Image */}
        <div className="relative mb-6">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=400&fit=crop&crop=center"
            alt={property.title}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
          {property.featured && (
            <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
              Featured
            </Badge>
          )}
        </div>

        {/* Property Header */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{property.title}</h1>
              <div className="flex items-center text-muted-foreground mb-2">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{property.location}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-price-text mb-2">{property.price}</p>
              <Badge variant="secondary" className="text-sm">
                {property.type}
              </Badge>
            </div>
          </div>

          <div className="flex gap-6 text-foreground">
            <div className="flex items-center">
              <Bed className="h-5 w-5 mr-2 text-primary" />
              <span className="font-medium">{property.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-5 w-5 mr-2 text-primary" />
              <span className="font-medium">{property.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center">
              <Square className="h-5 w-5 mr-2 text-primary" />
              <span className="font-medium">{property.area}</span>
            </div>
          </div>
        </div>

        {/* Property Description */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Property Description</h2>
          <p className="text-muted-foreground leading-relaxed">
            Experience luxury living in this stunning {property.type.toLowerCase()} located in the heart of {property.location}. 
            This beautifully designed space offers modern amenities, spacious rooms, and exceptional comfort for the perfect living experience. 
            The property features premium finishes throughout, with an open-concept layout that maximizes both functionality and style.
          </p>
        </Card>

        {/* Amenities */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div key={index} className="flex items-center p-3 bg-feature-bg rounded-lg">
                  <Icon className="h-5 w-5 text-primary mr-3" />
                  <span className="text-sm font-medium">{amenity.label}</span>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Contact Actions */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Interested in this property?</h2>
          <div className="flex gap-4">
            <Button className="flex-1">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Tour
            </Button>
            <Button variant="outline" className="flex-1">
              Contact Agent
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Building({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}