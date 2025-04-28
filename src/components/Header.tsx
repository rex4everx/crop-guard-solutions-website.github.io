
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <div className="h-10 w-10 bg-agriPrimary rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-xl font-bold">CG</span>
            </div>
            <span className="text-xl font-montserrat font-bold text-agriDark">CropGuard</span>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex items-center text-sm">
            <Phone size={18} className="text-agriPrimary mr-2" />
            <span>+7 (800) 123-4567</span>
          </div>
          <div className="flex items-center text-sm">
            <Mail size={18} className="text-agriPrimary mr-2" />
            <a href="mailto:info@cropguard.com" className="hover:text-agriPrimary transition-colors">
              info@cropguard.com
            </a>
          </div>
          <div className="flex items-center text-sm">
            <MapPin size={18} className="text-agriPrimary mr-2" />
            <span>Moscow, Russia</span>
          </div>
          <Button className="bg-agriPrimary hover:bg-agriDark text-white">
            Order Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
