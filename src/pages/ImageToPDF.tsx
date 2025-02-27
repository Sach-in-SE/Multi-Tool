import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { jsPDF } from 'jspdf';

interface ImageFile extends File {
  preview: string;
}

const ImageToPDF = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [converting, setConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null);
    const imageFiles = acceptedFiles.map(file => 
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    );
    setImages(prev => [...prev, ...imageFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.bmp', '.tiff']
    },
    multiple: true
  });

  const removeImage = (index: number) => {
    setImages(prev => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const convertToPDF = async () => {
    if (images.length === 0) {
      setError('Please add at least one image');
      return;
    }

    setConverting(true);
    setError(null);

    try {
      const pdf = new jsPDF();
      
      for (let i = 0; i < images.length; i++) {
        if (i > 0) pdf.addPage();
        
        const image = images[i];
        const imgData = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.readAsDataURL(image);
        });

        const img = new Image();
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          img.src = imgData;
        });

        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (img.height * imgWidth) / img.width;

        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      }

      pdf.save('converted-images.pdf');
    } catch (err) {
      setError('Error converting images to PDF. Please try again.');
    } finally {
      setConverting(false);
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Image to PDF Converter</h1>

          <div 
            {...getRootProps()} 
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
              ${isDragActive 
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/50' 
                : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-400'}`}
          >
            <input {...getInputProps()} />
            <div className="space-y-4">
              <div className="text-gray-600 dark:text-gray-300">
                {isDragActive ? (
                  <p>Drop the images here ...</p>
                ) : (
                  <>
                    <p className="text-lg">Drag and drop images here, or click to select files</p>
                    <p className="text-sm">Supports JPG, PNG, BMP, and TIFF formats</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {images.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Selected Images</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image.preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={convertToPDF}
                disabled={converting}
                className={`mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors
                  ${converting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {converting ? 'Converting...' : 'Convert to PDF'}
              </button>
            </div>
          )}

          {error && (
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-md">
              <p className="text-red-600 dark:text-red-300">{error}</p>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Features</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Drag and drop multiple images</li>
                <li>• High-quality conversion</li>
                <li>• Maintains aspect ratio</li>
                <li>• Preview before conversion</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Tips</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Images are processed locally</li>
                <li>• Each image becomes a page</li>
                <li>• Optimal for up to 20 images</li>
                <li>• Maximum file size: 10MB per image</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageToPDF;