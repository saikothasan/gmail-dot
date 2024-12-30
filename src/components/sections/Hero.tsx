import React from 'react';
import { Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-[#4285F4] to-[#34A853]">
      <div className="max-w-4xl mx-auto text-center text-white">
        <div className="flex justify-center mb-6">
          <Mail size={48} className="text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Generate Gmail Address Variants
        </h1>
        <p className="text-xl mb-8">
          Unlock the power of Gmail's dot (.) and plus (+) features to create unlimited email variants
        </p>
        <a
          href="#generator"
          className="inline-block bg-white text-[#4285F4] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-200"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};