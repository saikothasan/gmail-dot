import React from 'react';
import { Download } from 'lucide-react';
import { CopyButton } from '../ui/CopyButton';
import type { VariantListProps } from '../../types';

export const VariantList: React.FC<VariantListProps> = ({ variants, onExport }) => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Generated Variants</h3>
        <button
          onClick={onExport}
          className="flex items-center text-[#34A853] hover:text-[#2d9147] transition-colors"
        >
          <Download size={16} className="mr-1" />
          Export CSV
        </button>
      </div>

      <div className="space-y-2">
        {variants.map((variant, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-md"
          >
            <span className="font-mono">{variant.address}</span>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">
                {variant.type}
              </span>
              <CopyButton text={variant.address} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};