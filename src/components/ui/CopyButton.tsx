import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import type { CopyButtonProps } from '../../types';

export const CopyButton: React.FC<CopyButtonProps> = ({ text, onCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    onCopy?.();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check size={16} className="text-[#34A853]" />
      ) : (
        <Copy size={16} className="text-gray-500 dark:text-gray-400" />
      )}
    </button>
  );
};