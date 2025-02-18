import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="prose prose-indigo max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Collection and Use</h2>
          <p className="text-gray-700 mb-4">
            MultiTools is committed to protecting your privacy. Our tools process all data locally in your browser, and we do not collect, store, or transmit your personal information or files to any servers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Processing</h2>
          <ul className="space-y-4 text-gray-700">
            <li>• All file conversions are performed locally in your browser</li>
            <li>• We do not store or transmit your files to any external servers</li>
            <li>• Your files are immediately discarded after processing</li>
            <li>• We do not track individual user behavior or collect personal information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Analytics</h2>
          <p className="text-gray-700 mb-4">
            We use minimal cookies that are necessary for the website to function properly. We may use anonymous analytics to understand general usage patterns and improve our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
          <p className="text-gray-700 mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about our Privacy Policy, please contact us at privacy@multitools.example.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;