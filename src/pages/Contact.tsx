import React from 'react';
import { Mail, Phone, MapPin, Github, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Developer Info */}
        <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Developer</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <Github className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Sachin Kumar</p>
                <p className="text-sm text-gray-600">Full Stack Developer</p>
              </div>
            </div>
            <a 
              href="https://www.instagram.com/official__luc_ky" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>@official__luc_ky</span>
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <a href="mailto:lucky002954@gmail.com" className="text-indigo-600 hover:text-indigo-800">
                lucky002954@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <a href="tel:+919917250558" className="text-indigo-600 hover:text-indigo-800">
                +91 9917250558
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Address</h3>
              <p className="text-gray-600">Bareilly, Uttar Pradesh</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your message"
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
    </div>
  );
};

export default Contact;