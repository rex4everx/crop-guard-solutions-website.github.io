
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Check, Package, Truck } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const OrderForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation would go here
    
    toast({
      title: "Order submitted successfully!",
      description: "We will contact you shortly to confirm your order.",
      variant: "default",
    });
    
    // Simulate a form submission delay
    setTimeout(() => {
      navigate('/order-confirmation', { 
        state: { 
          name: formData.name,
          quantity: quantity
        } 
      });
    }, 1500);
  };

  return (
    <section className="section-padding bg-white" id="order">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agriDark mb-4">Order CropGuard Ultra</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fill out the form below to place your order. Our team will contact you to confirm details and arrange delivery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name*</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-____"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="address">Delivery Address*</Label>
                  <Textarea 
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your complete delivery address"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <div className="flex items-center">
                    <button 
                      type="button"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="px-3 py-1 border border-gray-300 rounded-l-md"
                    >
                      -
                    </button>
                    <Input 
                      id="quantity"
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      min="1"
                      className="rounded-none text-center"
                      style={{ width: '60px' }}
                    />
                    <button 
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 border border-gray-300 rounded-r-md"
                    >
                      +
                    </button>
                    <span className="ml-3">5-liter containers</span>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="comments">Additional Comments</Label>
                  <Textarea 
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    placeholder="Any special requests or questions"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-agriPrimary hover:bg-agriDark">
                  Submit Order
                </Button>
              </div>
            </form>
          </div>
          
          <div>
            <div className="bg-agriBg rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-agriDark mb-4">Order Details</h3>
              <div className="flex justify-between items-center py-3 border-b">
                <span>CropGuard Ultra (5L)</span>
                <span>₽4,500 per unit</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span>Quantity</span>
                <span>{quantity} units</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b font-semibold">
                <span>Subtotal</span>
                <span>₽{(4500 * quantity).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between items-center py-3 font-bold text-lg">
                <span>Total</span>
                <span>₽{(4500 * quantity).toLocaleString()}*</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">*Plus shipping costs</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-agriPrimary p-2 rounded-full text-white mr-4">
                  <Package size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Bulk Ordering Options</h4>
                  <p className="text-sm text-gray-600">For orders over 10 units, contact us directly for special pricing.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-agriPrimary p-2 rounded-full text-white mr-4">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Delivery Information</h4>
                  <p className="text-sm text-gray-600">Standard delivery takes 3-5 business days. Express shipping available for an additional fee.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-agriPrimary p-2 rounded-full text-white mr-4">
                  <Check size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Secure Payment</h4>
                  <p className="text-sm text-gray-600">We accept bank transfers, credit cards, and online payment systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
