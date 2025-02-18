import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Scale, FileText, Percent, FileImage, Mic } from 'lucide-react';

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
];

const Home = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            All-in-One Tools
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Free online tools to help you with everyday tasks
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.path}
                  to={tool.path}
                  className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div>
                    <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {tool.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {tool.description}
                    </p>
                  </div>
                  <span
                    className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </span>
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