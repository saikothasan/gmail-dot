import React from 'react';
import { Mail, Shield, Filter, Share2 } from 'lucide-react';

const features = [
  {
    icon: <Mail className="text-[#4285F4]" size={24} />,
    title: 'Multiple Variants',
    description: 'Generate unlimited email variants using Gmail's dot (.) and plus (+) features'
  },
  {
    icon: <Shield className="text-[#34A853]" size={24} />,
    title: 'Track Sources',
    description: 'Identify which services share your email address'
  },
  {
    icon: <Filter className="text-[#FBBC05]" size={24} />,
    title: 'Email Filtering',
    description: 'Create custom filters based on email variants'
  },
  {
    icon: <Share2 className="text-[#4285F4]" size={24} />,
    title: 'Easy Export',
    description: 'Export your variants in CSV format'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};