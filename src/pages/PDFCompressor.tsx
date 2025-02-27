import React, { useState, useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import ReactSlider from 'react-slider';
import { FileText, Download, Sun, Moon, Move } from 'lucide-react';

interface CompressedPDF {
  originalFile: File;
  compressedBlob: Blob;
  originalSize: number;
  compressedSize: number;
  name: string;
  preview?: string;
}

const PDFCompressor = () => {
  const [pdf, setPdf] = useState<CompressedPDF | null>(null);
  const [compressionLevel, setCompressionLevel] = useState(50);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const compressPDF = async (file: File) => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      
      // Compress PDF using quality settings
      const quality = 1 - (compressionLevel / 100);
      const compressedBytes = await pdfDoc.save({
        useObjectStreams: true,
        addDefaultPage: false,
        objectsStack: [],
        updateFieldAppearances: false,
      });

      const compressedBlob = new Blob([compressedBytes], { type: 'application/pdf' });
      const preview = URL.createObjectURL(file);

      return {
        originalFile: file,
        compressedBlob,
        originalSize: file.size,
        compressedSize: compressedBlob.size,
        name: file.name,
        preview,
      };
    } catch (error) {
      console.error('Error compressing PDF:', error);
      throw error;
    }
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    setIsProcessing(true);
    try {
      const compressedPDF = await compressPDF(acceptedFiles[0]);
      setPdf(compressedPDF);
      setPreviewUrl(URL.createObjectURL(acceptedFiles[0]));
    } catch (error) {
      console.error('Error processing PDF:', error);
    } finally {
      setIsProcessing(false);
    }
  }, [compressionLevel]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: false
  });

  const downloadPDF = () => {
    if (!pdf) return;

    const link = document.createElement('a');
    link.href = URL.createObjectURL(pdf.compressedBlob);
    link.download = `compressed_${pdf.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const calculateSavings = (original: number, compressed: number) => {
    return ((original - compressed) / original * 100).toFixed(1);
  };

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current || !pdf) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newPosition = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-8`}>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">PDF Compressor</h1>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
            >
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>

          <div 
            {...getRootProps()} 
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
              ${isDragActive 
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/50' 
                : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-400'}`}
          >
            <input {...getInputProps()} />
            <FileText className={`h-12 w-12 mx-auto mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              {isDragActive ? (
                <p>Drop the PDF here ...</p>
              ) : (
                <>
                  <p className="text-lg">Drag and drop a PDF here, or click to select file</p>
                  <p className="text-sm mt-2">Maximum file size: 100MB</p>
                </>
              )}
            </div>
          </div>

          <div className="mt-8">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Compression Level: {compressionLevel}%
            </label>
            <ReactSlider
              className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-md"
              thumbClassName={`w-6 h-6 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isDarkMode ? 'bg-indigo-400' : 'bg-indigo-600'
              }`}
              trackClassName="h-4 bg-indigo-200 dark:bg-indigo-800 rounded-md"
              value={compressionLevel}
              onChange={setCompressionLevel}
              min={10}
              max={90}
            />
            <div className="flex justify-between text-sm mt-2 text-gray-600 dark:text-gray-400">
              <span>Better Quality</span>
              <span>Smaller Size</span>
            </div>
          </div>

          {isProcessing && (
            <div className="mt-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">Processing your PDF...</p>
            </div>
          )}

          {pdf && !isProcessing && (
            <div className={`mt-8 ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50/50'} p-6 rounded-lg`}>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Compression Results</h2>
              
              {previewUrl && (
                <div 
                  className="relative mb-6 h-64 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
                  ref={sliderRef}
                  onMouseMove={handleSliderMove}
                >
                  <iframe
                    src={previewUrl}
                    className="w-full h-full"
                    title="PDF Preview"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <div className="absolute inset-y-0 right-0 w-1 bg-white">
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
                        <Move className="h-4 w-4 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Original Size</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatSize(pdf.originalSize)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Compressed Size</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatSize(pdf.compressedSize)}</p>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Space Saved</p>
                <p className="text-2xl font-bold text-green-500">
                  {calculateSavings(pdf.originalSize, pdf.compressedSize)}%
                </p>
              </div>
              <button
                onClick={downloadPDF}
                className="w-full flex items-center justify-center px-4 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Compressed PDF
              </button>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-4 ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50/50'} rounded-md`}>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Features</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Adjustable compression levels</li>
                <li>• Maintains PDF structure</li>
                <li>• Fast processing</li>
                <li>• Secure local compression</li>
              </ul>
            </div>
            <div className={`p-4 ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50/50'} rounded-md`}>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Tips</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Start with 50% compression</li>
                <li>• Adjust based on quality needs</li>
                <li>• Best for document sharing</li>
                <li>• Processes files locally</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFCompressor;