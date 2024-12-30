import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { ToastProps } from '../../types';

export const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg flex items-center space-x-2 ${
        type === 'success' ? 'bg-[#34A853] text-white' : 'bg-red-500 text-white'
      }`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="p-1 hover:opacity-80">
        <X size={16} />
      </button>
    </div>
  );
};