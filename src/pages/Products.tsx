
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/#order');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-agriLight py-12">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-agriDark">Наши продукты</h1>
            
            <Tabs defaultValue="ultra" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="ultra">CropGuard Ultra</TabsTrigger>
                <TabsTrigger value="natural">CropGuard Natural</TabsTrigger>
                <TabsTrigger value="special">CropGuard Special</TabsTrigger>
              </TabsList>
              
              <TabsContent value="ultra" className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="bg-agriPrimary/10 rounded-lg p-4 flex items-center justify-center h-64">
                      <div className="w-48 h-48 bg-agriPrimary rounded-lg flex items-center justify-center text-white">
                        <span className="text-xl font-bold">Ultra Protection</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-agriPrimary mb-3">CropGuard Ultra Protection</h2>
                    <p className="text-gray-600 mb-4">Наш флагманский продукт для комплексной защиты сельскохозяйственных культур от вредителей и болезней.</p>
                    
                    <h3 className="font-semibold mb-2">Основные преимущества:</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">
                      <li>Защита от более чем 200 видов вредителей</li>
                      <li>Продолжительный эффект до 30 дней</li>
                      <li>Безопасен для полезных насекомых</li>
                      <li>Не смывается дождем через 1 час после нанесения</li>
                      <li>Повышает урожайность на 25-30%</li>
                    </ul>
                    
                    <div className="flex gap-4 mt-6">
                      <Button onClick={handleOrderClick} className="bg-agriPrimary hover:bg-agriDark">Заказать сейчас</Button>
                      <Button variant="outline" onClick={() => window.open('/docs/cropguard-ultra.pdf')}>Скачать спецификацию</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="natural" className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="bg-green-100 rounded-lg p-4 flex items-center justify-center h-64">
                      <div className="w-48 h-48 bg-green-600 rounded-lg flex items-center justify-center text-white">
                        <span className="text-xl font-bold">Natural Series</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-green-600 mb-3">CropGuard Natural Series</h2>
                    <p className="text-gray-600 mb-4">Органическая линейка средств защиты растений для экологически чистого земледелия.</p>
                    
                    <h3 className="font-semibold mb-2">Основные преимущества:</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">
                      <li>100% натуральные компоненты растительного происхождения</li>
                      <li>Сертифицирован для использования в органическом земледелии</li>
                      <li>Не оставляет следов в готовой продукции</li>
                      <li>Безопасен для людей, животных и окружающей среды</li>
                      <li>Подходит для защиты овощных и ягодных культур</li>
                    </ul>
                    
                    <div className="flex gap-4 mt-6">
                      <Button onClick={handleOrderClick} className="bg-green-600 hover:bg-green-800">Заказать сейчас</Button>
                      <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" 
                        onClick={() => window.open('/docs/cropguard-natural.pdf')}>
                        Скачать спецификацию
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="special" className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="bg-amber-100 rounded-lg p-4 flex items-center justify-center h-64">
                      <div className="w-48 h-48 bg-amber-600 rounded-lg flex items-center justify-center text-white">
                        <span className="text-xl font-bold">Special Formula</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-amber-600 mb-3">CropGuard Special Formula</h2>
                    <p className="text-gray-600 mb-4">Специализированная серия для защиты определенных видов культур с учетом их особенностей.</p>
                    
                    <h3 className="font-semibold mb-2">Доступные варианты:</h3>
                    <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">
                      <li>CropGuard Зерновой (для пшеницы, ячменя, овса)</li>
                      <li>CropGuard Фруктовый (для яблонь, груш, слив)</li>
                      <li>CropGuard Виноградный (специально для виноградников)</li>
                      <li>CropGuard Картофельный (для защиты от колорадского жука и фитофторы)</li>
                      <li>CropGuard Теплица (для тепличных хозяйств)</li>
                    </ul>
                    
                    <div className="flex gap-4 mt-6">
                      <Button onClick={handleOrderClick} className="bg-amber-600 hover:bg-amber-800">Заказать сейчас</Button>
                      <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50"
                        onClick={() => window.open('/docs/cropguard-special.pdf')}>
                        Скачать спецификацию
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Products;
