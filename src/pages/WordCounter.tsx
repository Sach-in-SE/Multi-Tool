import React, { useState, useEffect } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    characters: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0,
  });

  useEffect(() => {
    const calculateStats = () => {
      const characters = text.length;
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const sentences = text.split(/[.!?]+\s*/).filter(Boolean).length;
      const paragraphs = text.split(/\n\s*\n/).filter(Boolean).length;
      const readingTime = Math.ceil(words / 200); // Average reading speed: 200 words per minute

      setStats({
        characters,
        words,
        sentences,
        paragraphs,
        readingTime,
      });
    };

    calculateStats();
  }, [text]);

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Word Counter</h1>

          <div className="mb-6">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-64 p-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
              placeholder="Type or paste your text here..."
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-indigo-50 dark:bg-indigo-900/50 p-4 rounded-lg text-center">
              <span className="block text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.characters}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Characters</span>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/50 p-4 rounded-lg text-center">
              <span className="block text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.words}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Words</span>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/50 p-4 rounded-lg text-center">
              <span className="block text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.sentences}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Sentences</span>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/50 p-4 rounded-lg text-center">
              <span className="block text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.paragraphs}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Paragraphs</span>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/50 p-4 rounded-lg text-center">
              <span className="block text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.readingTime}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Minutes to Read</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Features</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Real-time character and word counting</li>
                <li>• Sentence and paragraph detection</li>
                <li>• Estimated reading time calculation</li>
                <li>• Works with copied and pasted text</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Tips</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Double spaces are counted as one</li>
                <li>• Paragraphs are separated by blank lines</li>
                <li>• Reading time is based on 200 words/minute</li>
                <li>• Text is automatically saved as you type</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCounter;