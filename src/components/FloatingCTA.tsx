
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed bottom-8 right-8 z-40 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Button 
        onClick={scrollToOrder}
        className="bg-agriPrimary hover:bg-agriDark text-white shadow-lg flex items-center gap-2 px-6 py-6 rounded-full animate-float"
      >
        Заказать сейчас <ArrowRight size={18} />
      </Button>
    </div>
  );
};

export default FloatingCTA;
