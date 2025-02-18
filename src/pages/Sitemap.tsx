import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const sections = [
    {
      title: 'Main Tools',
      links: [
        { to: '/age-calculator', label: 'Age Calculator' },
        { to: '/bmi-calculator', label: 'BMI Calculator' },
        { to: '/word-counter', label: 'Word Counter' },
        { to: '/percentage-calculator', label: 'Percentage Calculator' },
      ],
    },
    {
      title: 'Document Tools',
      links: [
        { to: '/image-to-pdf', label: 'Image to PDF Converter' },
        { to: '/speech-to-pdf', label: 'Speech to PDF Converter' },
      ],
    },
    {
      title: 'Information',
      links: [
        { to: '/about', label: 'About Us' },
        { to: '/privacy', label: 'Privacy Policy' },
        { to: '/terms', label: 'Terms of Use' },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Sitemap</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Navigation</h2>
        <p className="text-gray-700">
          Use this sitemap to quickly navigate to any tool or information page on our website. All our tools are free to use and process data locally in your browser.
        </p>
      </div>
    </div>
  );
};

export default Sitemap;