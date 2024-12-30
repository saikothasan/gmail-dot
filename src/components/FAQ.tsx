import React from 'react';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Are these email variants really valid?",
      answer: "Yes! Gmail treats dots (.) as non-existent in email addresses, and the plus (+) symbol allows for custom aliases. All variants will deliver to your original Gmail inbox."
    },
    {
      question: "Will I receive emails sent to all variants?",
      answer: "Yes, you'll receive all emails sent to any of these variants in your main Gmail inbox."
    },
    {
      question: "Is this a security risk?",
      answer: "No, this is an intentional feature of Gmail. It can actually help improve your security by allowing you to track who shares your email address."
    },
    {
      question: "Can I use this for multiple Gmail accounts?",
      answer: "No, these variants only work for a single Gmail account. Each base Gmail address needs to be unique."
    }
  ];

  return (
    <section id="faq" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <HelpCircle className="text-[#FBBC05] mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};