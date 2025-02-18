import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About MultiTools</h1>

      <div className="prose prose-indigo max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          MultiTools is your comprehensive suite of free online utilities designed to make your daily tasks easier and more efficient. Our platform offers a variety of tools that help you with calculations, document conversions, and text processing.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          We strive to provide high-quality, easy-to-use tools that help users accomplish their tasks quickly and efficiently. Our focus is on delivering reliable, secure, and accessible solutions for everyone.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Calculators</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Age Calculator</li>
              <li>• BMI Calculator</li>
              <li>• Percentage Calculator</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Document Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Image to PDF Converter</li>
              <li>• Speech to PDF Converter</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Privacy & Security</h2>
        <p className="text-gray-700 mb-6">
          We take your privacy seriously. All our tools process your data locally in your browser whenever possible. We don't store your files or personal information. Read our Privacy Policy for more details.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Have questions or suggestions? We'd love to hear from you. Contact us at support@multitools.example.com
        </p>
      </div>
    </div>
  );
};

export default About;