import React, { useState } from 'react';

const PercentageCalculator = () => {
  const [calculationType, setCalculationType] = useState<'basic' | 'change'>('basic');
  const [number, setNumber] = useState('');
  const [percentage, setPercentage] = useState('');
  const [originalValue, setOriginalValue] = useState('');
  const [newValue, setNewValue] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const calculateBasicPercentage = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseFloat(number);
    const perc = parseFloat(percentage);
    if (!isNaN(num) && !isNaN(perc)) {
      const result = (num * perc) / 100;
      setResult(`${perc}% of ${num} is ${result.toFixed(2)}`);
    }
  };

  const calculatePercentageChange = (e: React.FormEvent) => {
    e.preventDefault();
    const original = parseFloat(originalValue);
    const newVal = parseFloat(newValue);
    if (!isNaN(original) && !isNaN(newVal)) {
      const change = ((newVal - original) / original) * 100;
      const isIncrease = change > 0;
      setResult(
        `The ${isIncrease ? 'increase' : 'decrease'} is ${Math.abs(change).toFixed(2)}%`
      );
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Percentage Calculator</h1>

          <div className="mb-6">
            <div className="flex space-x-4">
              <button
                onClick={() => setCalculationType('basic')}
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                  calculationType === 'basic'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Basic Percentage
              </button>
              <button
                onClick={() => setCalculationType('change')}
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                  calculationType === 'change'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Percentage Change
              </button>
            </div>
          </div>

          {calculationType === 'basic' ? (
            <form onSubmit={calculateBasicPercentage} className="space-y-6">
              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number
                </label>
                <input
                  type="number"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
                  placeholder="Enter a number"
                  required
                  step="any"
                />
              </div>

              <div>
                <label htmlFor="percentage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Percentage
                </label>
                <input
                  type="number"
                  id="percentage"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
                  placeholder="Enter percentage"
                  required
                  step="any"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
              >
                Calculate
              </button>
            </form>
          ) : (
            <form onSubmit={calculatePercentageChange} className="space-y-6">
              <div>
                <label htmlFor="originalValue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Original Value
                </label>
                <input
                  type="number"
                  id="originalValue"
                  value={originalValue}
                  onChange={(e) => setOriginalValue(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
                  placeholder="Enter original value"
                  required
                  step="any"
                />
              </div>

              <div>
                <label htmlFor="newValue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  New Value
                </label>
                <input
                  type="number"
                  id="newValue"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
                  placeholder="Enter new value"
                  required
                  step="any"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
              >
                Calculate Change
              </button>
            </form>
          )}

          {result && (
            <div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg text-center">
              <p className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{result}</p>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Basic Percentage</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Calculate what percentage of one number is of another. Useful for discounts, 
                proportions, and simple percentage calculations.
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Percentage Change</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Calculate the percentage increase or decrease between two values. Perfect for 
                analyzing growth, decline, or any value changes over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageCalculator;