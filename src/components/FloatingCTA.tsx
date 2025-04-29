
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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

  const handleClick = () => {
    // Если мы на главной странице, просто скроллим к секции заказа
    if (window.location.pathname === '/') {
      const orderSection = document.getElementById('order');
      if (orderSection) {
        orderSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Иначе переходим на главную и направляем к секции заказа
      navigate('/#order');
    }
  };

  return (
    <div 
      className={`fixed bottom-8 right-8 z-40 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Button 
        onClick={handleClick}
        className="bg-agriPrimary hover:bg-agriDark text-white shadow-lg flex items-center gap-2 px-6 py-6 rounded-full animate-float"
      >
        Заказать сейчас <ArrowRight size={18} />
      </Button>
    </div>
  );
};

export default FloatingCTA;
