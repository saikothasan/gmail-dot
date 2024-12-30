import React from 'react';
import { Mail, Plus, Dot } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Gmail Address Tricks</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Dot className="text-[#FBBC05] mr-2" size={24} />
              <h3 className="text-xl font-semibold">The Dot (.) Trick</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Gmail ignores dots in email addresses. This means john.doe@gmail.com, 
              johndoe@gmail.com, and j.o.h.n.d.o.e@gmail.com all deliver to the same inbox.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Plus className="text-[#34A853] mr-2" size={24} />
              <h3 className="text-xl font-semibold">The Plus (+) Trick</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Adding +anything after your username still delivers to your inbox. 
              For example: username+shopping@gmail.com delivers to username@gmail.com.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Mail className="text-[#4285F4] mr-2" size={24} />
            <h3 className="text-xl font-semibold">Why Use These Tricks?</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Track which websites share your email address</li>
            <li>Create filters to organize your inbox</li>
            <li>Sign up for multiple accounts on the same website</li>
            <li>Identify spam sources easily</li>
          </ul>
        </div>
      </div>
    </section>
  );
};