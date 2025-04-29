
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-agriDark">О компании CropGuard</h1>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-agriPrimary">Наша миссия</h2>
              <p className="text-gray-700 mb-4">
                Компания CropGuard была основана с целью разработки инновационных решений для защиты сельскохозяйственных культур, 
                которые сочетают высокую эффективность с экологической безопасностью. Наша миссия - помогать фермерам 
                повышать урожайность, минимизируя негативное воздействие на окружающую среду.
              </p>
              <p className="text-gray-700 mb-4">
                Мы стремимся стать лидером рынка агрохимии, предлагая продукцию высочайшего качества, 
                основанную на последних научных достижениях и технологиях.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-agriPrimary">История компании</h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-24 flex-shrink-0 font-bold text-agriDark">2010</div>
                  <div>Основание компании группой ученых-агрохимиков и предпринимателей.</div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 font-bold text-agriDark">2012</div>
                  <div>Запуск первой линейки продуктов для защиты зерновых культур.</div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 font-bold text-agriDark">2015</div>
                  <div>Получение международного сертификата качества ISO 9001.</div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 font-bold text-agriDark">2018</div>
                  <div>Выход на международный рынок, открытие представительств в странах СНГ.</div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 font-bold text-agriDark">2020</div>
                  <div>Разработка и выпуск инновационной линейки CropGuard Ultra Protection.</div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 font-bold text-agriDark">2023</div>
                  <div>Расширение производственных мощностей и начало экспорта в Европу.</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-agriPrimary">Наша команда</h2>
              <p className="text-gray-700 mb-4">
                В CropGuard работают высококвалифицированные специалисты в области агрохимии, 
                агрономии, биотехнологий и маркетинга. Более 30% наших сотрудников имеют 
                научные степени и многолетний опыт работы в сельском хозяйстве.
              </p>
              <p className="text-gray-700">
                Мы постоянно инвестируем в обучение и развитие персонала, 
                а также сотрудничаем с ведущими научно-исследовательскими институтами 
                для разработки новых и совершенствования существующих продуктов.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default About;
