import React, { useState, useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import imageCompression from 'browser-image-compression';
import ReactSlider from 'react-slider';
import { Download, Image as ImageIcon, Sun, Moon, Move } from 'lucide-react';

interface CompressedImage {
  originalFile: File;
  compressedBlob: Blob;
  preview: string;
  originalPreview: string;
  originalSize: number;
  compressedSize: number;
}

const ImageCompressor = () => {
  const [images, setImages] = useState<CompressedImage[]>([]);
  const [compressionLevel, setCompressionLevel] = useState(50);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsProcessing(true);
    
    try {
      const compressedImages = await Promise.all(
        acceptedFiles.map(async (file) => {
          const options = {
            maxSizeMB: (file.size / 1024 / 1024) * (1 - compressionLevel / 100),
            maxWidthOrHeight: 1920,
            useWebWorker: true,
          };

          const compressedBlob = await imageCompression(file, options);
          const preview = URL.createObjectURL(compressedBlob);
          const originalPreview = URL.createObjectURL(file);

          return {
            originalFile: file,
            compressedBlob,
            preview,
            originalPreview,
            originalSize: file.size,
            compressedSize: compressedBlob.size,
          };
        })
      );

      setImages((prev) => [...prev, ...compressedImages]);
    } catch (error) {
      console.error('Error compressing images:', error);
    } finally {
      setIsProcessing(false);
    }
  }, [compressionLevel]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp']
    },
    multiple: true
  });

  const downloadImage = async (image: CompressedImage) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(image.compressedBlob);
    link.download = `compressed_${image.originalFile.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAll = () => {
    images.forEach(downloadImage);
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
    if (!sliderRef.current || activeImageIndex === null) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newPosition = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-8`}>
          <div className="flex justify-between items-center mb-8">
            <h1 className={`text-3xl font-bold text-gray-900 dark:text-white`}>
              Image Compressor
            </h1>
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
            <ImageIcon className={`h-12 w-12 mx-auto mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              {isDragActive ? (
                <p>Drop the images here ...</p>
              ) : (
                <>
                  <p className="text-lg">Drag and drop images here, or click to select files</p>
                  <p className="text-sm mt-2">Supports PNG, JPG, JPEG, and WebP formats</p>
                </>
              )}
            </div>
          </div>

          <div className="mt-8">
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Compression Level: {compressionLevel}%
            </label>
            <div className="px-2">
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
            </div>
          </div>

          {isProcessing && (
            <div className="mt-4 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Processing images...</p>
            </div>
          )}

          {images.length > 0 && (
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Compressed Images
                </h2>
                <button
                  onClick={downloadAll}
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download All
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`${
                      isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50/50'
                    } backdrop-blur-sm p-4 rounded-lg shadow`}
                  >
                    <div 
                      className="relative"
                      ref={index === activeImageIndex ? sliderRef : null}
                      onMouseEnter={() => setActiveImageIndex(index)}
                      onMouseLeave={() => setActiveImageIndex(null)}
                    >
                      <img
                        src={index === activeImageIndex ? image.originalPreview : image.preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      {index === activeImageIndex && (
                        <div 
                          className="absolute inset-0 flex items-center cursor-ew-resize"
                          onMouseMove={handleSliderMove}
                        >
                          <div 
                            className="absolute inset-y-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm"
                            style={{ width: `${sliderPosition}%` }}
                          >
                            <img
                              src={image.preview}
                              alt="Compressed"
                              className="h-full object-cover"
                              style={{ width: `${100 / (sliderPosition / 100)}%` }}
                            />
                          </div>
                          <div className="absolute inset-y-0 w-1 bg-white shadow-lg" style={{ left: `${sliderPosition}%` }}>
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
                              <Move className="h-4 w-4 text-gray-600" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Original: {formatSize(image.originalSize)}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Compressed: {formatSize(image.compressedSize)}
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Saved: {calculateSavings(image.originalSize, image.compressedSize)}%
                      </p>
                      <button
                        onClick={() => downloadImage(image)}
                        className="w-full mt-2 flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCompressor;