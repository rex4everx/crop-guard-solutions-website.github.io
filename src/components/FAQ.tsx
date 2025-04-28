
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does CropGuard Ultra work?",
    answer: "CropGuard Ultra works through a multi-layered approach. Its active ingredients create a protective barrier on plants while being absorbed systemically to fight existing infestations. The bio-stimulants simultaneously strengthen the plant's natural defense mechanisms, creating comprehensive protection against pests and diseases."
  },
  {
    question: "Is CropGuard safe for organic farming?",
    answer: "While CropGuard Ultra contains some synthetic components that may not qualify for certified organic farming, we offer CropGuard Organic, specifically formulated to comply with organic certification requirements. Please contact us for more information about our organic-certified options."
  },
  {
    question: "What are the recommended application rates?",
    answer: "For most crops, we recommend 10ml of CropGuard Ultra per 5 liters of water, covering approximately 100 square meters. However, application rates may vary depending on crop type, growth stage, and infestation level. Please consult the detailed application guide or contact our technical support team for crop-specific recommendations."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most farmers report visible results within 7-14 days of application. For preventative use, protection begins immediately after application and drying. For treating existing infestations, initial improvements can be seen within a week, with maximum effectiveness reached after two weeks."
  },
  {
    question: "Can CropGuard be mixed with other agricultural products?",
    answer: "CropGuard Ultra is compatible with most fertilizers and agricultural products. However, we recommend testing compatibility on a small scale before large-scale mixing. Do not mix with highly alkaline products or calcium-based fertilizers. Our technical team can provide specific compatibility information for your existing products."
  },
  {
    question: "What crops can benefit from CropGuard?",
    answer: "CropGuard Ultra is effective for a wide range of crops including cereals (wheat, barley, corn), vegetables (tomatoes, peppers, cucumbers), fruit trees, berries, and ornamentals. Our specialized formulations are available for specific crop families with unique protection needs."
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
