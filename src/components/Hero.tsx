
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
      <div 
        className="h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop')" }}
      >
      </div>
      <div className="container mx-auto absolute inset-0 z-20 flex flex-col justify-center items-start text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl">
          Increase Crop Yields by 30% with Our Innovative Solution
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-lg">
          Safe, Effective, and Environmentally Friendly Agricultural Chemistry
        </p>
        <div className="flex space-x-4">
          <Button size="lg" className="bg-agriPrimary hover:bg-agriDark text-white flex items-center gap-2">
            Order Now <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
