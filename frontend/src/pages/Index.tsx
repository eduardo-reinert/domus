import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PropertySidebar } from "@/components/PropertySidebar";
import { PropertyDetails } from "@/components/PropertyDetails";
import { Footer } from "@/components/Footer";

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

const Index = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <PropertySidebar 
          onSelectProperty={setSelectedProperty}
          selectedProperty={selectedProperty}
        />
        <PropertyDetails property={selectedProperty} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
