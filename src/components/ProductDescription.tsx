
import React from 'react';
import { Check } from 'lucide-react';

const ProductDescription = () => {
  const features = [
    "Мощные активные ингредиенты на основе новейших исследований",
    "Широкий спектр эффективности против распространенных сельскохозяйственных вредителей",
    "Экологически безопасная формула с минимальным воздействием на полезных насекомых",
    "Длительная защита до 3 месяцев после применения",
    "Совместимость с большинством ирригационных систем и методов применения",
    "Соответствует международным стандартам сельскохозяйственной безопасности"
  ];
  
  return (
    <section className="section-padding bg-agriBg" id="product">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agriDark mb-4">Защита CropGuard Ultra</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Наша инновационная формула сочетает передовую сельскохозяйственную науку с экологически чистыми ингредиентами для обеспечения непревзойденной защиты ваших культур.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8 hover-grow">
              <h3 className="text-xl font-semibold mb-4 text-agriDark">Особенности продукта</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-agriPrimary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover-grow">
              <h3 className="text-xl font-semibold mb-4 text-agriDark">Активные ингредиенты</h3>
              <p className="mb-4">Наша запатентованная смесь содержит:</p>
              <ul className="space-y-2">
                <li><strong>Азоксистробин (12.5%):</strong> Предотвращает грибковые заболевания</li>
                <li><strong>Тиаметоксам (8.0%):</strong> Контролирует популяции насекомых</li>
                <li><strong>Органические растительные экстракты (5.5%):</strong> Усиливает естественную устойчивость</li>
                <li><strong>Биостимуляторы (3.0%):</strong> Способствует здоровому росту растений</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-lg hover-grow">
              <img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop" 
                alt="Product Application" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover-grow">
              <img 
                src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?q=80&w=2070&auto=format&fit=crop" 
                alt="Healthy Crops Result" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-agriDark text-white p-6 rounded-lg hover-grow">
              <h3 className="text-xl font-semibold mb-2">Results You Can See</h3>
              <p>In field tests, crops treated with CropGuard showed:</p>
              <ul className="mt-2 space-y-1">
                <li>• 30% increase in yield on average</li>
                <li>• 87% reduction in pest damage</li>
                <li>• Improved drought resistance</li>
                <li>• Higher quality produce at harvest</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
