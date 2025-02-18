import React, { useState } from 'react';
import { differenceInYears, differenceInMonths, differenceInDays, parse } from 'date-fns';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);
  const [error, setError] = useState('');

  const calculateAge = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const birth = parse(birthDate, 'yyyy-MM-dd', new Date());
      const today = new Date();

      if (birth > today) {
        setError('Birth date cannot be in the future');
        setAge(null);
        return;
      }

      const years = differenceInYears(today, birth);
      const monthsAfterYear = differenceInMonths(today, birth) % 12;
      const daysAfterMonth = differenceInDays(today, birth) % 30;

      setAge({
        years,
        months: monthsAfterYear,
        days: daysAfterMonth,
      });
      setError('');
    } catch (err) {
      setError('Please enter a valid date');
      setAge(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Age Calculator</h1>
      
      <form onSubmit={calculateAge} className="space-y-6">
        <div>
          <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
        >
          Calculate Age
        </button>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {age && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Age is:</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <span className="block text-3xl font-bold text-indigo-600">{age.years}</span>
              <span className="text-sm text-gray-600">Years</span>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <span className="block text-3xl font-bold text-indigo-600">{age.months}</span>
              <span className="text-sm text-gray-600">Months</span>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <span className="block text-3xl font-bold text-indigo-600">{age.days}</span>
              <span className="text-sm text-gray-600">Days</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 p-4 bg-gray-50 rounded-md">
        <h3 className="text-lg font-medium text-gray-900 mb-2">How it works</h3>
        <p className="text-gray-600">
          Enter your date of birth in the field above. The calculator will show your exact age in years, 
          months, and days. The calculation takes into account leap years and varying month lengths for 
          precise results.
        </p>
      </div>
    </div>
  );
};

export default AgeCalculator;