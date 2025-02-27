import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Scale, FileText, Percent, FileImage, Mic, ArrowRight, FileDown } from 'lucide-react';

const tools = [
  {
    path: '/age-calculator',
    name: 'Age Calculator',
    description: 'Calculate age from date of birth in years, months, and days',
    icon: Calculator,
  },
  {
    path: '/bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate BMI based on weight and height with classification',
    icon: Scale,
  },
  {
    path: '/word-counter',
    name: 'Word Counter',
    description: 'Count words and characters in your text',
    icon: FileText,
  },
  {
    path: '/percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Calculate percentages and percentage changes',
    icon: Percent,
  },
  {
    path: '/image-to-pdf',
    name: 'Image to PDF',
    description: 'Convert images to high-quality PDF files',
    icon: FileImage,
  },
  {
    path: '/speech-to-pdf',
    name: 'Speech to PDF',
    description: 'Convert speech to PDF documents',
    icon: Mic,
  },
  {
    path: '/image-compressor',
    name: 'Image Compressor',
    description: 'Compress images with adjustable quality settings',
    icon: FileImage,
  },
  {
    path: '/pdf-compressor',
    name: 'PDF Compressor',
    description: 'Reduce PDF file size while maintaining quality',
    icon: FileDown,
  },
];

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div 
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Your All-in-One
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Productivity Suite
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-delay">
            Powerful tools to help you work smarter, not harder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link
              to="/tools"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in-up">
                <div className="text-3xl font-bold text-white">8+</div>
                <div className="text-gray-300">Tools Available</div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-gray-300">Free</div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-300">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Explore Our Tools
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Everything you need in one place
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.path}
                  to={tool.path}
                  className="relative group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    <span className="rounded-lg inline-flex p-3 bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 ring-4 ring-white dark:ring-gray-800">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {tool.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {tool.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Try now</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;