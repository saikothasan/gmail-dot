import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Gmail Variant</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Generate unlimited Gmail address variants using dots and plus signs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#generator" className="text-gray-600 dark:text-gray-300 hover:text-[#4285F4]">
                  Generator
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-[#4285F4]">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 dark:text-gray-300 hover:text-[#4285F4]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-gray-600 dark:text-gray-300 hover:text-[#4285F4]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 dark:text-gray-300 hover:text-[#4285F4]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-[#4285F4]"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-[#4285F4]"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-600 dark:text-gray-300 hover:text-[#4285F4]"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Gmail Variant Generator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};