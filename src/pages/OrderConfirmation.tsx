
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OrderConfirmation = () => {
  const location = useLocation();
  const { name, quantity } = location.state || { name: 'Клиент', quantity: 1 };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto py-16">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <div className="h-20 w-20 bg-agriPrimary rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-white" size={48} />
              </div>
              <h1 className="text-3xl font-bold text-agriDark mb-2">Заказ получен!</h1>
              <p className="text-gray-600">Спасибо, {name}. Ваш заказ успешно отправлен.</p>
            </div>
            
            <div className="border-t border-b py-4 mb-6">
              <h2 className="text-xl font-semibold mb-4">Сводка заказа</h2>
              <div className="flex justify-between mb-2">
                <span>Продукт:</span>
                <span>CropGuard Ultra Protection</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Количество:</span>
                <span>{quantity} x 5Л контейнер{quantity > 1 ? 'ов' : ''}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Итого:</span>
                <span>₽{(4500 * quantity).toLocaleString()}*</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">*Плюс стоимость доставки</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Что дальше?</h2>
              <ol className="space-y-3 text-gray-700">
                <li className="flex">
                  <span className="bg-agriLight rounded-full h-6 w-6 flex items-center justify-center text-agriPrimary font-semibold mr-3">1</span>
                  <span>Наша команда свяжется с вами в течение 24 часов для подтверждения деталей заказа.</span>
                </li>
                <li className="flex">
                  <span className="bg-agriLight rounded-full h-6 w-6 flex items-center justify-center text-agriPrimary font-semibold mr-3">2</span>
                  <span>Мы предоставим инструкции по оплате и рассчитаем стоимость доставки в зависимости от вашего местоположения.</span>
                </li>
                <li className="flex">
                  <span className="bg-agriLight rounded-full h-6 w-6 flex items-center justify-center text-agriPrimary font-semibold mr-3">3</span>
                  <span>После подтверждения оплаты ваш заказ будет отправлен в течение 2-3 рабочих дней.</span>
                </li>
              </ol>
            </div>
            
            <div className="text-center">
              <Button asChild className="bg-agriPrimary hover:bg-agriDark text-white">
                <Link to="/">Вернуться на главную</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
