
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OrderConfirmation = () => {
  const location = useLocation();
  const { name, quantity } = location.state || { name: 'Customer', quantity: 1 };

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
              <h1 className="text-3xl font-bold text-agriDark mb-2">Order Received!</h1>
              <p className="text-gray-600">Thank you, {name}. Your order has been successfully submitted.</p>
            </div>
            
            <div className="border-t border-b py-4 mb-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Product:</span>
                <span>CropGuard Ultra Protection</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Quantity:</span>
                <span>{quantity} x 5L container{quantity > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>₽{(4500 * quantity).toLocaleString()}*</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">*Plus shipping costs</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
              <ol className="space-y-3 text-gray-700">
                <li className="flex">
                  <span className="bg-agriLight rounded-full h-6 w-6 flex items-center justify-center text-agriPrimary font-semibold mr-3">1</span>
                  <span>Our team will contact you within 24 hours to confirm your order details.</span>
                </li>
                <li className="flex">
                  <span className="bg-agriLight rounded-full h-6 w-6 flex items-center justify-center text-agriPrimary font-semibold mr-3">2</span>
                  <span>We'll provide payment instructions and finalize shipping costs based on your location.</span>
                </li>
                <li className="flex">
                  <span className="bg-agriLight rounded-full h-6 w-6 flex items-center justify-center text-agriPrimary font-semibold mr-3">3</span>
                  <span>After payment confirmation, your order will be shipped within 2-3 business days.</span>
                </li>
              </ol>
            </div>
            
            <div className="text-center">
              <Button asChild className="bg-agriPrimary hover:bg-agriDark text-white">
                <Link to="/">Return to Homepage</Link>
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
