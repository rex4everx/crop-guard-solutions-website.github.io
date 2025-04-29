
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4">
      <div className="container mx-auto">
        {/* Desktop Header */}
        <div className="hidden md:flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 bg-agriPrimary rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-xl font-bold">CG</span>
              </div>
              <span className="text-xl font-montserrat font-bold text-agriDark">CropGuard</span>
            </Link>
          </div>
          
          <NavigationMenu className="mx-4">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Главная
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/products" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Продукты
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    О компании
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contacts" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Контакты
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
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
              <span>Москва, Россия</span>
            </div>
            <Button onClick={scrollToOrder} className="bg-agriPrimary hover:bg-agriDark text-white">
              Заказать сейчас
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="h-10 w-10 bg-agriPrimary rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-xl font-bold">CG</span>
            </div>
            <span className="text-xl font-montserrat font-bold text-agriDark">CropGuard</span>
          </Link>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-agriDark"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-2 mb-4">
              <Link 
                to="/" 
                className="px-4 py-2 hover:bg-agriLight rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/products" 
                className="px-4 py-2 hover:bg-agriLight rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Продукты
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 hover:bg-agriLight rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                О компании
              </Link>
              <Link 
                to="/contacts" 
                className="px-4 py-2 hover:bg-agriLight rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </Link>
            </nav>
            
            <div className="space-y-2 px-4">
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
              <div className="flex items-center text-sm mb-3">
                <MapPin size={18} className="text-agriPrimary mr-2" />
                <span>Москва, Россия</span>
              </div>
              <Button 
                onClick={() => {
                  scrollToOrder();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-agriPrimary hover:bg-agriDark text-white"
              >
                Заказать сейчас
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
