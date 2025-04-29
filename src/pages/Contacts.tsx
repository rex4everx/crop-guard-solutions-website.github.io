
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-agriDark">Контактная информация</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-agriPrimary">Наши контакты</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin size={24} className="text-agriPrimary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Главный офис</h3>
                    <p className="text-gray-600">ул. Сельскохозяйственная 123, Москва, Россия, 123456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-agriPrimary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Телефон</h3>
                    <p className="text-gray-600">+7 (800) 123-4567 - бесплатная линия для РФ</p>
                    <p className="text-gray-600">+7 (495) 987-6543 - для Москвы и МО</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-agriPrimary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@cropguard.com - общие вопросы</p>
                    <p className="text-gray-600">sales@cropguard.com - отдел продаж</p>
                    <p className="text-gray-600">support@cropguard.com - техническая поддержка</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-agriPrimary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Режим работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-600">Сб: 10:00 - 15:00 (только отдел продаж)</p>
                    <p className="text-gray-600">Вс: выходной</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-agriPrimary">Региональные представительства</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-md p-4">
                  <h3 className="font-semibold text-gray-800">Санкт-Петербург</h3>
                  <p className="text-gray-600">ул. Полевая 45, офис 302</p>
                  <p className="text-gray-600">+7 (812) 345-6789</p>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-semibold text-gray-800">Краснодар</h3>
                  <p className="text-gray-600">ул. Урожайная 78</p>
                  <p className="text-gray-600">+7 (861) 234-5678</p>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-semibold text-gray-800">Новосибирск</h3>
                  <p className="text-gray-600">пр. Агрономов 112, офис 56</p>
                  <p className="text-gray-600">+7 (383) 123-4567</p>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-semibold text-gray-800">Казань</h3>
                  <p className="text-gray-600">ул. Сельская 29</p>
                  <p className="text-gray-600">+7 (843) 987-6543</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-agriPrimary">Напишите нам</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Ваше имя</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border rounded-md focus:ring-agriPrimary focus:border-agriPrimary" 
                    placeholder="Иванов Иван"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border rounded-md focus:ring-agriPrimary focus:border-agriPrimary" 
                    placeholder="example@mail.ru"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Телефон</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border rounded-md focus:ring-agriPrimary focus:border-agriPrimary" 
                    placeholder="+7 (___) ___-____"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Тема</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-2 border rounded-md focus:ring-agriPrimary focus:border-agriPrimary"
                  >
                    <option value="">Выберите тему обращения</option>
                    <option value="order">Заказ продукции</option>
                    <option value="consultation">Консультация специалиста</option>
                    <option value="partnership">Предложение о сотрудничестве</option>
                    <option value="support">Техническая поддержка</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Сообщение</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border rounded-md focus:ring-agriPrimary focus:border-agriPrimary"
                    placeholder="Введите текст вашего сообщения..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input 
                    id="privacy" 
                    type="checkbox" 
                    className="w-4 h-4 text-agriPrimary border-gray-300 rounded focus:ring-agriPrimary" 
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                    Я согласен с <a href="#" className="text-agriPrimary hover:underline">политикой конфиденциальности</a>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-2 bg-agriPrimary text-white font-medium rounded-md hover:bg-agriDark transition-colors"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
