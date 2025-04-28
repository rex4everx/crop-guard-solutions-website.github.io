
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const partners = [
  {
    name: "AgriFutures Institute",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
    description: "Research partner focused on sustainability"
  },
  {
    name: "EcoFarm Solutions",
    logo: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop",
    description: "Distribution partner for organic farms"
  },
  {
    name: "Global Harvest Tech",
    logo: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2141&auto=format&fit=crop",
    description: "Technology integration for smart farming"
  },
  {
    name: "AgriScience Labs",
    logo: "https://images.unsplash.com/photo-1607000975520-8c2436f1a219?q=80&w=2070&auto=format&fit=crop",
    description: "Quality testing and certification"
  },
  {
    name: "FarmTech Associates",
    logo: "https://images.unsplash.com/photo-1625757840668-2b2ec825315a?q=80&w=2070&auto=format&fit=crop",
    description: "Implementation support for large farms"
  },
];

const Partners = () => {
  return (
    <section className="section-padding bg-white" id="partners">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agriDark mb-4">Our Trusted Partners</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading agricultural institutions and companies to ensure our product meets the highest standards of quality and effectiveness.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-md p-6 h-full hover-grow">
                  <div className="h-48 rounded-md overflow-hidden mb-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-agriDark mb-2">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">
            "CropGuard has revolutionized our approach to crop protection. The results speak for themselves." 
            <span className="block mt-2 font-semibold">- Dr. Anna Petrova, AgriFutures Institute</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
