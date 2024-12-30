import React from 'react';
import { Lock, Shield, Eye } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Privacy Policy
        </h2>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <Lock className="text-[#4285F4] flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Data Processing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                All email variant generation is performed locally in your browser. 
                We never store or transmit your email address.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Shield className="text-[#34A853] flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                No Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We don't use cookies or any tracking mechanisms. Your privacy is our priority.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Eye className="text-[#FBBC05] flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Transparency
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our code is open source and available for inspection. We believe in 
                complete transparency about how your data is handled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};