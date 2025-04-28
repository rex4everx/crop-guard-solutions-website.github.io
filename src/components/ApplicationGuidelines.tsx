
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ApplicationGuidelines = () => {
  const steps = [
    {
      title: "Preparation",
      description: "Dilute 10ml of CropGuard Ultra in 5 liters of water. Mix thoroughly until fully dissolved.",
      image: "https://images.unsplash.com/photo-1576252254925-dcef82db726a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Application",
      description: "Apply using a standard sprayer, ensuring even coverage of leaves and stems. Best applied in early morning or late evening.",
      image: "https://images.unsplash.com/photo-1590682300935-2d7997239c03?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Frequency",
      description: "Apply once every 2-3 weeks during growing season, or immediately after heavy rainfall.",
      image: "https://images.unsplash.com/photo-1585144291664-fa5712f990e9?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Storage",
      description: "Store in original container, tightly closed, in a cool, dry place away from direct sunlight and children's reach.",
      image: "https://images.unsplash.com/photo-1598843531029-2d95b52301c7?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section className="section-padding bg-white" id="guidelines">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agriDark mb-4">Application Guidelines</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            For optimal results, follow these recommended application procedures for CropGuard Ultra Protection.
          </p>
          <Button className="mt-6 bg-agriPrimary hover:bg-agriDark text-white flex items-center gap-2 mx-auto">
            <Download size={18} /> Download Complete Guide (PDF)
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
          <h3 className="text-xl font-semibold text-agriDark mb-4">Safety Precautions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-2">
                <li>• Wear protective gloves and eyewear during application</li>
                <li>• Avoid contact with skin, eyes, and clothing</li>
                <li>• Keep away from water sources and beehives</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>• Do not apply during windy conditions</li>
                <li>• Wash hands thoroughly after handling</li>
                <li>• Do not mix with other chemical products</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationGuidelines;
