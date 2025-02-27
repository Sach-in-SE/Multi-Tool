import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">About MultiTools</h1>

          <div className="prose prose-indigo dark:prose-invert max-w-none">
            <div className="mb-12 text-center">
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Your comprehensive suite of free online utilities designed to make your daily tasks 
                easier and more efficient.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-300 mb-4">Our Mission</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  We strive to provide high-quality, easy-to-use tools that help users accomplish their 
                  tasks quickly and efficiently. Our focus is on delivering reliable, secure, and 
                  accessible solutions for everyone.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-300 mb-4">Our Vision</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  To become the go-to platform for online utilities, making complex tasks simple and 
                  accessible to everyone, everywhere, at any time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Our Tools</h2>
                <div className="bg-white/50 dark:bg-gray-700/50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculators</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Age Calculator</li>
                    <li>• BMI Calculator</li>
                    <li>• Percentage Calculator</li>
                  </ul>
                </div>
                <div className="bg-white/50 dark:bg-gray-700/50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Document Tools</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Image to PDF Converter</li>
                    <li>• Speech to PDF Converter</li>
                    <li>• Image Compressor</li>
                    <li>• PDF Compressor</li>
                    <li>• Word Counter</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Key Features</h2>
                <div className="bg-white/50 dark:bg-gray-700/50 p-4 rounded-lg shadow-sm">
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      Local Processing for Privacy
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      Modern, Responsive Design
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      Free to Use
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      Regular Updates
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
              <p className="mb-6">
                Experience the power of MultiTools and streamline your daily tasks with our suite of 
                online utilities. No registration required - just choose a tool and get started!
              </p>
              <a 
                href="/tools" 
                className="inline-block bg-white text-indigo-600 px-6 py-2 rounded-md font-medium hover:bg-indigo-50 transition-colors"
              >
                Explore Our Tools
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;