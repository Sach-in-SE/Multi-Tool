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

const Tools = () => {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Tools</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Choose a tool to get started</p>
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
  );
};

export default Tools;