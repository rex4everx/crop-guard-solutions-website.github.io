
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Как работает CropGuard Ultra?",
    answer: "CropGuard Ultra работает по многоуровневому принципу. Его активные ингредиенты создают защитный барьер на растениях, одновременно системно борясь с существующими заражениями. Биостимуляторы одновременно укрепляют естественные защитные механизмы растения, создавая комплексную защиту от вредителей и болезней."
  },
  {
    question: "Безопасен ли CropGuard для органического земледелия?",
    answer: "Хотя CropGuard Ultra содержит некоторые синтетические компоненты, которые могут не подходить для сертифицированного органического земледелия, мы предлагаем CropGuard Organic, специально разработанный в соответствии с требованиями органической сертификации. Пожалуйста, свяжитесь с нами для получения дополнительной информации о наших органических сертифицированных продуктах."
  },
  {
    question: "Каковы рекомендуемые нормы применения?",
    answer: "Для большинства культур мы рекомендуем 10 мл CropGuard Ultra на 5 литров воды, покрывая примерно 100 квадратных метров. Однако нормы применения могут варьироваться в зависимости от типа культуры, стадии роста и уровня заражения. Пожалуйста, обратитесь к подробному руководству по применению или свяжитесь с нашей службой технической поддержки для получения рекомендаций по конкретным культурам."
  },
  {
    question: "Как быстро можно увидеть результаты?",
    answer: "Большинство фермеров отмечают видимые результаты в течение 7-14 дней после применения. При профилактическом использовании защита начинается сразу после нанесения и высыхания. При лечении существующих заражений первые улучшения можно увидеть в течение недели, максимальная эффективность достигается через две недели."
  },
  {
    question: "Можно ли смешивать CropGuard с другими сельскохозяйственными продуктами?",
    answer: "CropGuard Ultra совместим с большинством удобрений и сельскохозяйственных продуктов. Однако мы рекомендуем проверять совместимость в малом масштабе перед крупномасштабным смешиванием. Не смешивайте с сильнощелочными продуктами или удобрениями на основе кальция. Наша техническая команда может предоставить конкретную информацию о совместимости с вашими существующими продуктами."
  },
  {
    question: "Для каких культур подходит CropGuard?",
    answer: "CropGuard Ultra эффективен для широкого спектра культур, включая зерновые (пшеница, ячмень, кукуруза), овощи (томаты, перец, огурцы), фруктовые деревья, ягоды и декоративные растения. Доступны специализированные формуляции для конкретных семейств культур с уникальными потребностями в защите."
  }
];

const FAQ = () => {
  return (
    <section className="section-padding bg-agriBg" id="faq">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agriDark mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about our CropGuard Ultra Protection solution.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-agriDark">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Don't see your question here? <a href="#" className="text-agriPrimary font-semibold hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
