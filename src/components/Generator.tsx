import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { generateDotVariants, generatePlusVariants, isValidGmail } from '../utils/gmailUtils';
import { VariantList } from './variants/VariantList';
import { Toast } from './ui/Toast';
import type { GmailVariant } from '../types';

export const Generator: React.FC = () => {
  const [email, setEmail] = useState('');
  const [alias, setAlias] = useState('');
  const [variants, setVariants] = useState<GmailVariant[]>([]);
  const [error, setError] = useState('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const generateVariants = () => {
    if (!isValidGmail(email)) {
      setError('Please enter a valid Gmail address');
      return;
    }
    setError('');

    const dotVariants = generateDotVariants(email).map(address => ({
      address,
      type: 'dot' as const,
      original: email
    }));

    const plusVariant = alias ? [{
      address: generatePlusVariants(email, alias),
      type: 'plus' as const,
      original: email
    }] : [];

    setVariants([...dotVariants, ...plusVariant]);
  };

  const handleExport = () => {
    const csv = variants.map(v => `${v.address},${v.type}`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gmail-variants.csv';
    a.click();
    URL.revokeObjectURL(url);
    setToast({ message: 'Variants exported successfully!', type: 'success' });
  };

  return (
    <section id="generator" className="py-12 px-4 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Generate Gmail Variants</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Gmail Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4285F4] focus:ring-[#4285F4] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="alias" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Custom Alias (optional)
            </label>
            <input
              type="text"
              id="alias"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4285F4] focus:ring-[#4285F4] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="custom.alias"
            />
          </div>

          {error && (
            <div className="flex items-center text-red-600 dark:text-red-400">
              <AlertCircle size={16} className="mr-2" />
              <span>{error}</span>
            </div>
          )}

          <button
            onClick={generateVariants}
            className="w-full bg-[#4285F4] text-white py-2 px-4 rounded-md hover:bg-[#3367d6] transition duration-200"
          >
            Generate Variants
          </button>
        </div>

        {variants.length > 0 && (
          <VariantList variants={variants} onExport={handleExport} />
        )}

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </section>
  );
};