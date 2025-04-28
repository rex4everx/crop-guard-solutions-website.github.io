
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-agriDark text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center mr-2">
                <span className="text-agriDark text-xl font-bold">CG</span>
              </div>
              <span className="text-xl font-montserrat font-bold">CropGuard</span>
            </div>
            <p className="text-sm opacity-70 mb-4">
              Leading provider of innovative crop protection solutions for modern agriculture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-agriPrimary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-agriPrimary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-agriPrimary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Home</Link>
              </li>
              <li>
                <a href="#product" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Products</a>
              </li>
              <li>
                <a href="#guidelines" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Application Guidelines</a>
              </li>
              <li>
                <a href="#order" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Order Now</a>
              </li>
              <li>
                <a href="#faq" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/safety-information" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Safety Information</Link>
              </li>
              <li>
                <Link to="/certificates" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Certificates & Compliance</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="opacity-70">123 Agricultural Drive, Moscow, Russia</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="opacity-70">+7 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@cropguard.com" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">info@cropguard.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">© {new Date().getFullYear()} CropGuard. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-colors">Sitemap</a>
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-colors">Distributors</a>
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
