import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile'; // Import Turnstile
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null); // Store Turnstile token
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    if (!captchaToken) {
      setToast({ message: 'Please complete the CAPTCHA.', type: 'error' });
      setIsSubmitting(false);
      return;
    }

    try {
      const serviceID = 'service_xag5ohe';
      const templateID = 'saikothsan';
      const publicKey = 'nhclsi_h_X-rEJGTq';

      await emailjs.send(serviceID, templateID, { name, email, message, captchaToken }, publicKey);

      setToast({ message: 'Message sent successfully!', type: 'success' });
      setFormData({ name: '', email: '', message: '' });
      setCaptchaToken(null); // Reset the token
    } catch (error) {
      console.error('Failed to send email:', error);
      setToast({ message: 'Failed to send message. Please try again later.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Contact Us</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            required
          ></textarea>
        </div>
        {/* Turnstile CAPTCHA */}
        <div>
          <Turnstile
            siteKey="0x4AAAAAAA4QUgy-hEF_bOfI" // Replace with your Turnstile site key
            onSuccess={(token) => setCaptchaToken(token)} // Set the token on success
            onError={() => setToast({ message: 'CAPTCHA verification failed.', type: 'error' })}
            onExpire={() => setCaptchaToken(null)} // Reset token if expired
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting || !captchaToken}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isSubmitting ? 'Submitting...' : <span className="flex items-center justify-center"><Send className="mr-2" />Send Message</span>}
        </button>
        {toast && (
          <div
            className={`mt-4 text-center p-2 rounded ${
              toast.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {toast.message}
          </div>
        )}
      </form>
    </div>
  );
};
