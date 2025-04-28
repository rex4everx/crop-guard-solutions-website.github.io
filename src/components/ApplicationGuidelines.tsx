import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ApplicationGuidelines = () => {
  const steps = [
    {
      title: "Подготовка",
      description: "Разведите 10 мл CropGuard Ultra в 5 литрах воды. Тщательно перемешайте до полного растворения.",
      image: "https://images.unsplash.com/photo-1576252254925-dcef82db726a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Применение",
      description: "Наносите с помощью стандартного опрыскивателя, обеспечивая равномерное покрытие листьев и стеблей. Лучше всего применять рано утром или поздно вечером.",
      image: "https://images.unsplash.com/photo-1590682300935-2d7997239c03?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Частота",
      description: "Применяйте один раз в 2-3 недели в течение вегетационного периода или сразу после сильного дождя.",
      image: "https://images.unsplash.com/photo-1585144291664-fa5712f990e9?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Хранение",
      description: "Храните в оригинальной упаковке, плотно закрытой, в прохладном, сухом месте, вдали от прямых солнечных лучей и в недоступном для детей месте.",
      image: "https://images.unsplash.com/photo-1598843531029-2d95b52301c7?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section className="section-padding bg-white" id="guidelines">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agriDark mb-4">Инструкция по применению</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Для достижения оптимальных результатов следуйте этим рекомендованным процедурам применения CropGuard Ultra Protection.
          </p>
          <Button className="mt-6 bg-agriPrimary hover:bg-agriDark text-white flex items-center gap-2 mx-auto">
            <Download size={18} /> Скачать полную инструкцию (PDF)
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover-grow">
              <div className="h-48">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-agriPrimary text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold ml-3 text-agriDark">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-agriLight p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-agriDark mb-4">Меры предосторожности</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-2">
                <li>• Используйте защитные перчатки и очки при нанесении</li>
                <li>• Избегайте контакта с кожей, глазами и одеждой</li>
                <li>• Держите вдали от источников воды и ульев</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>• Не наносите при сильном ветре</li>
                <li>• Тщательно мойте руки после использования</li>
                <li>• Не смешивайте с другими химическими продуктами</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationGuidelines;
