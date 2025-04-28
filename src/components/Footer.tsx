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
              Ведущий поставщик инновационных решений для защиты растений в современном сельском хозяйстве.
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
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Главная</Link>
              </li>
              <li>
                <a href="#product" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Продукты</a>
              </li>
              <li>
                <a href="#guidelines" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Инструкция по применению</a>
              </li>
              <li>
                <a href="#order" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Заказать</a>
              </li>
              <li>
                <a href="#faq" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Вопросы и ответы</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Правовая информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Политика конфиденциальности</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Условия использования</Link>
              </li>
              <li>
                <Link to="/safety-information" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Информация о безопасности</Link>
              </li>
              <li>
                <Link to="/certificates" className="opacity-70 hover:opacity-100 hover:text-agriPrimary transition-colors">Сертификаты и соответствия</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Свяжитесь с нами</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="opacity-70">ул. Сельскохозяйственная 123, Москва, Россия</span>
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
          <p className="text-sm opacity-70">© {new Date().getFullYear()} CropGuard. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-colors">Карта сайта</a>
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-colors">Дистрибьюторы</a>
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-colors">Поддержка</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
