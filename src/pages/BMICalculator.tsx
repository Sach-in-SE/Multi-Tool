import React, { useState } from 'react';

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
}

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<BMIResult | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert cm to meters

    if (weightNum > 0 && heightNum > 0) {
      const bmi = weightNum / (heightNum * heightNum);
      const category = getBMICategory(bmi);
      setResult({
        bmi: Math.round(bmi * 10) / 10,
        ...category,
      });
    }
  };

  const getBMICategory = (bmi: number): { category: string; color: string } => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-600' };
    if (bmi < 25) return { category: 'Normal weight', color: 'text-green-600' };
    if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-600' };
    return { category: 'Obese', color: 'text-red-600' };
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">BMI Calculator</h1>

      <form onSubmit={calculateBMI} className="space-y-6">
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter weight in kilograms"
            required
            min="1"
            step="0.1"
          />
        </div>

        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter height in centimeters"
            required
            min="1"
            step="0.1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
        >
          Calculate BMI
        </button>
      </form>

      {result && (
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your BMI Result:</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-4xl font-bold text-indigo-600 mb-2">{result.bmi}</p>
            <p className={`text-xl font-medium ${result.color}`}>{result.category}</p>
          </div>
        </div>
      )}

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 mb-2">BMI Categories</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-blue-600">Underweight: &lt; 18.5</li>
            <li className="text-green-600">Normal weight: 18.5 - 24.9</li>
            <li className="text-yellow-600">Overweight: 25 - 29.9</li>
            <li className="text-red-600">Obese: ≥ 30</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 mb-2">About BMI</h3>
          <p className="text-sm text-gray-600">
            BMI is a measure of body fat based on height and weight. While it's not perfect, 
            it can be a useful starting point for understanding your weight status.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;