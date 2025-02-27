import React, { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';

const SpeechToPDF = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const startRecording = () => {
    setError(null);

    if (!('webkitSpeechRecognition' in window)) {
      setError('Speech recognition is not supported in your browser. Please use Chrome.');
      return;
    }

    try {
      const SpeechRecognition = window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }

        setTranscript(finalTranscript + interimTranscript);
      };

      recognition.onerror = (event) => {
        setError(`Error occurred in recognition: ${event.error}`);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      setError('Error starting speech recognition');
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const generatePDF = () => {
    if (!transcript.trim()) {
      setError('Please record some text before generating PDF');
      return;
    }

    try {
      const doc = new jsPDF();
      const splitText = doc.splitTextToSize(transcript, 180);
      
      doc.setFont('helvetica');
      doc.setFontSize(12);
      
      let yPosition = 20;
      
      // Add title
      doc.setFontSize(16);
      doc.text('Speech Transcript', 105, yPosition, { align: 'center' });
      
      // Reset font size for content
      doc.setFontSize(12);
      yPosition += 10;

      // Add timestamp
      const timestamp = new Date().toLocaleString();
      doc.setFontSize(10);
      doc.text(`Generated on: ${timestamp}`, 20, yPosition);
      yPosition += 10;

      // Add content
      doc.setFontSize(12);
      splitText.forEach(line => {
        if (yPosition > 280) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(line, 20, yPosition);
        yPosition += 7;
      });

      doc.save('speech-transcript.pdf');
    } catch (err) {
      setError('Error generating PDF');
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Speech to PDF Converter</h1>

          <div className="space-y-6">
            <div className="flex justify-center space-x-4">
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors
                  ${isRecording 
                    ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'}`}
              >
                {isRecording ? 'Stop Recording' : 'Start Recording'}
              </button>

              <button
                onClick={generatePDF}
                disabled={!transcript.trim()}
                className={`px-6 py-3 rounded-md font-medium bg-green-600 text-white hover:bg-green-700 
                  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors
                  ${!transcript.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Generate PDF
              </button>
            </div>

            {isRecording && (
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse"></div>
                <span className="ml-2 text-gray-600 dark:text-gray-300">Recording...</span>
              </div>
            )}

            <div className="mt-6">
              <label htmlFor="transcript" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Transcript
              </label>
              <textarea
                id="transcript"
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                className="w-full h-64 p-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
                placeholder="Your speech will appear here..."
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-md">
                <p className="text-red-600 dark:text-red-300">{error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Features</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Real-time speech recognition</li>
                  <li>• Editable transcript</li>
                  <li>• Professional PDF formatting</li>
                  <li>• Instant PDF generation</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Tips</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Speak clearly and at a moderate pace</li>
                  <li>• Use Chrome for best results</li>
                  <li>• Edit transcript before generating PDF</li>
                  <li>• Keep microphone close for accuracy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechToPDF;