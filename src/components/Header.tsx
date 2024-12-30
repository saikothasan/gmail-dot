import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
}

export const Header: React.FC<HeaderProps> = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#4285F4]">Gmail Variant</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#generator" className="text-gray-700 dark:text-gray-200 hover:text-[#4285F4]">Generator</a>
            <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-[#4285F4]">About</a>
            <a href="#faq" className="text-gray-700 dark:text-gray-200 hover:text-[#4285F4]">FAQ</a>
            <button
              onClick={theme.toggle}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme.isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#generator" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-[#4285F4]">Generator</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-[#4285F4]">About</a>
            <a href="#faq" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-[#4285F4]">FAQ</a>
          </div>
        </div>
      )}
    </header>
  );
};