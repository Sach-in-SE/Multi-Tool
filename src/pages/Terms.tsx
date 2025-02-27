import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Use</h1>

      <div className="prose prose-indigo max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using MultiTools, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
          <ul className="space-y-4 text-gray-700">
            <li>• The tools are provided free of charge for personal and commercial use</li>
            <li>• You may not modify or copy the software behind the tools</li>
            <li>• You may not use the tools for any illegal purposes</li>
            <li>• You are responsible for any content you process using our tools</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            The tools are provided "as is" without any warranties. We do not guarantee that the tools will be error-free or uninterrupted. You use the tools at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations</h2>
          <p className="text-gray-700 mb-4">
            We shall not be liable for any damages arising from the use or inability to use our tools. This includes but is not limited to direct, indirect, incidental, or consequential damages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Revisions</h2>
          <p className="text-gray-700 mb-4">
            We may update these terms of use at any time. By using our tools, you agree to be bound by the current version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms of Use, please contact us at legal@multitools.example.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;