import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Instagram } from 'lucide-react';

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMessage(true);
    // Clear form data
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Hide message after 5 seconds
    setTimeout(() => setShowMessage(false), 5000);
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h1>

          {/* Success Message */}
          {showMessage && (
            <div className="mb-8 p-4 bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-md shadow-sm">
              <p className="text-green-700 dark:text-green-300 text-center">
                Thank you for your valuable feedback! We appreciate your time and effort in helping us improve.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Developer Info */}
            <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-700 dark:to-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-300 mb-4">Developer</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <Github className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Sachin Kumar</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Full Stack Developer</p>
                  </div>
                </div>
                <a 
                  href="https://www.instagram.com/official__luc_ky" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@official__luc_ky</span>
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                  <a href="mailto:lucky002954@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                    lucky002954@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                  <a href="tel:+919917250558" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                    +91 9759938908
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">Bareilly, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Success Message Alert */}
          {showMessage && (
            <div className="fixed inset-0 flex items-center justify-center px-4 z-50">
              <div className="fixed inset-0 bg-black/30 backdrop-blur-sm"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full">
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900">
                    <svg className="h-6 w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-gray-900 dark:text-white">Message Sent!</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Thank you for your valuable feedback! We appreciate your time and effort in helping us improve.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Contact;
