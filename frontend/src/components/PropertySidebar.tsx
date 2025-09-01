import { useState } from "react";
import { MapPin, Bed, Bath, Square, Heart, ChevronDown } from "lucide-react";
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

const sampleProperties: Property[] = [
  {
    id: "1",
    title: "Modern Downtown Apartment",
    price: "$2,500/month",
    location: "Downtown District",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sq ft",
    image: "/api/placeholder/300/200",
    type: "Apartment",
    featured: true
  },
  {
    id: "2",
    title: "Luxury Villa with Pool",
    price: "$4,800/month",
    location: "Beverly Hills",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,800 sq ft",
    image: "/api/placeholder/300/200",
    type: "Villa"
  },
  {
    id: "3",
    title: "Cozy Studio Near University",
    price: "$1,200/month",
    location: "University Area",
    bedrooms: 1,
    bathrooms: 1,
    area: "650 sq ft",
    image: "/api/placeholder/300/200",
    type: "Studio"
  },
  {
    id: "4",
    title: "Family House with Garden",
    price: "$3,200/month",
    location: "Suburban Heights",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,800 sq ft",
    image: "/api/placeholder/300/200",
    type: "House"
  },
  {
    id: "5",
    title: "Penthouse with City View",
    price: "$6,500/month",
    location: "City Center",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,200 sq ft",
    image: "/api/placeholder/300/200",
    type: "Penthouse",
    featured: true
  }
];

interface PropertySidebarProps {
  onSelectProperty: (property: Property) => void;
  selectedProperty: Property | null;
}

export function PropertySidebar({ onSelectProperty, selectedProperty }: PropertySidebarProps) {
  const [filterType, setFilterType] = useState<string>("All");
  const [showFilters, setShowFilters] = useState(false);

  const propertyTypes = ["All", "Apartment", "Villa", "Studio", "House", "Penthouse"];
  
  const filteredProperties = filterType === "All" 
    ? sampleProperties 
    : sampleProperties.filter(p => p.type === filterType);

  return (
    <div className="w-80 bg-card border-r border-border h-screen overflow-y-auto">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground mb-3">Properties</h2>
        
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="w-full justify-between"
        >
          Filter by Type
          <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </Button>
        
        {showFilters && (
          <div className="mt-2 flex flex-wrap gap-1">
            {propertyTypes.map((type) => (
              <Badge
                key={type}
                variant={filterType === type ? "default" : "secondary"}
                className="cursor-pointer text-xs"
                onClick={() => setFilterType(type)}
              >
                {type}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="p-2 space-y-2">
        {filteredProperties.map((property) => (
          <Card
            key={property.id}
            className={`p-3 cursor-pointer transition-all duration-200 hover:shadow-md border ${
              selectedProperty?.id === property.id 
                ? 'border-primary bg-accent' 
                : 'border-border hover:bg-property-hover'
            }`}
            onClick={() => onSelectProperty(property)}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-sm text-foreground line-clamp-1">
                    {property.title}
                  </h3>
                  {property.featured && (
                    <Heart className="h-3 w-3 fill-red-500 text-red-500 flex-shrink-0" />
                  )}
                </div>
                <p className="text-lg font-bold text-price-text">{property.price}</p>
              </div>
            </div>

            <div className="flex items-center text-xs text-muted-foreground mb-2">
              <MapPin className="h-3 w-3 mr-1" />
              {property.location}
            </div>

            <div className="flex justify-between text-xs text-muted-foreground">
              <div className="flex items-center">
                <Bed className="h-3 w-3 mr-1" />
                {property.bedrooms}
              </div>
              <div className="flex items-center">
                <Bath className="h-3 w-3 mr-1" />
                {property.bathrooms}
              </div>
              <div className="flex items-center">
                <Square className="h-3 w-3 mr-1" />
                {property.area}
              </div>
            </div>

            <Badge variant="secondary" className="mt-2 text-xs">
              {property.type}
            </Badge>
          </Card>
        ))}
      </div>
    </div>
  );
}