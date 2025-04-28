
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductDescription from '@/components/ProductDescription';
import Partners from '@/components/Partners';
import ApplicationGuidelines from '@/components/ApplicationGuidelines';
import FAQ from '@/components/FAQ';
import OrderForm from '@/components/OrderForm';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <ProductDescription />
        <Partners />
        <ApplicationGuidelines />
        <FAQ />
        <OrderForm />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
