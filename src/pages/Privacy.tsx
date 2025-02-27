import React from 'react';

const Privacy = () => {
  return (
    <div 
      className="min-h-screen py-16"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/7135019/pexels-photo-7135019.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-indigo max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-12">
              <section className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Collection and Use</h2>
                <p className="text-gray-700">
                  MultiTools is committed to protecting your privacy. Our tools process all data locally in your browser, 
                  and we do not collect, store, or transmit your personal information or files to any servers.
                </p>
              </section>

              <section className="bg-white/50 p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Processing</h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                    All file conversions are performed locally in your browser
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                    We do not store or transmit your files to any external servers
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                    Your files are immediately discarded after processing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                    We do not track individual user behavior or collect personal information
                  </li>
                </ul>
              </section>

              <section className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Analytics</h2>
                <p className="text-gray-700">
                  We use minimal cookies that are necessary for the website to function properly. We may use 
                  anonymous analytics to understand general usage patterns and improve our services.
                </p>
              </section>

              <section className="bg-white/50 p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
                <p className="text-gray-700">
                  Our website may contain links to third-party websites. We are not responsible for the privacy 
                  practices or content of these external sites.
                </p>
              </section>

              <section className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page.
                </p>
              </section>

              <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p>
                  If you have any questions about our Privacy Policy, please contact us at:
                </p>
                <a 
                  href="mailto:lucky002954@gmail.com" 
                  className="mt-4 inline-block bg-white text-indigo-600 px-6 py-2 rounded-md font-medium hover:bg-indigo-50 transition-colors"
                >
                  lucky002954@gmail.com
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;