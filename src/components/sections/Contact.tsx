import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Toast } from '../ui/Toast';
import emailjs from '@emailjs/browser';
import { Turnstile } from '@marsidev/react-turnstile'; // Import Turnstile

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

      // Include captchaToken in your email or send it to your backend for verification
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      />
      {/* Turnstile CAPTCHA */}
      <Turnstile
        siteKey="0x4AAAAAAA4QUgy-hEF_bOfI" // Replace with your site key
        onSuccess={(token) => setCaptchaToken(token)} // Set the token on success
        onError={() => setToast({ message: 'CAPTCHA verification failed.', type: 'error' })}
        onExpire={() => setCaptchaToken(null)} // Reset token if expired
      />
      <button type="submit" disabled={isSubmitting || !captchaToken}>
        {isSubmitting ? 'Submitting...' : <Send />}
      </button>
      {toast && <Toast type={toast.type}>{toast.message}</Toast>}
    </form>
  );
};
