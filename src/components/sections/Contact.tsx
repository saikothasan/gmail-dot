import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Toast } from '../ui/Toast';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    try {
      // Replace with your EmailJS credentials
      const serviceID = 'service_xag5ohe';
      const templateID = 'saikothsan';
      const publicKey = 'nhclsi_h_X-rEJGTq';

      await emailjs.send(serviceID, templateID, { name, email, message }, publicKey);

      setToast({ message: 'Message sent successfully!', type: 'success' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setToast({ message: 'Failed to send message. Please try again later.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto px-8 py-3 ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#4285F4] hover:bg-[#3367d6]'
            } text-white rounded-md transition duration-200 flex items-center justify-center`}
          >
            {isSubmitting ? 'Sending...' : <><Send size={16} className="mr-2" /> Send Message</>}
          </button>
        </form>

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
