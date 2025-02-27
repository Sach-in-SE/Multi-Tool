import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactSlider from 'react-slider';
import { FileImage, Download } from 'lucide-react';
import imageCompression from 'browser-image-compression';

interface UploadedFile {
  name: string;
  size: number;
  compressedSize?: number;
  file: File;
  compressedBlob?: Blob;
}

const ImageCompressor: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [compressionLevel, setCompressionLevel] = useState<number>(50);
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const uploadedFiles = acceptedFiles.map((file) => ({
      name: file.name,
      size: file.size,
      file,
    }));
    setFiles([...files, ...uploadedFiles]);
  }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    multiple: true
  });

  const handleCompression = async () => {
    setIsProcessing(true);
    const compressedFiles = await Promise.all(
      files.map(async (file) => {
        const options = {
          maxSizeMB: (file.size / 1024 / 1024) * (1 - compressionLevel / 100),
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        const compressedBlob = await imageCompression(file.file, options);
        return { ...file, compressedSize: compressedBlob.size, compressedBlob };
      })
    );
    setFiles(compressedFiles);
    setIsProcessing(false);
  };

  const handleDownload = (file: UploadedFile) => {
    if (file.compressedBlob) {
      const url = URL.createObjectURL(file.compressedBlob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `compressed_${file.name}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const handleDeleteAll = () => {
    setFiles([]);
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Image Compressor</h1>

          <div {...getRootProps()} className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/50' : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-400'}`}>
            <input {...getInputProps()} />
            <FileImage className="h-12 w-12 mx-auto mb-4 text-gray-600 dark:text-gray-400" />
            <p className="text-lg text-gray-600 dark:text-gray-300">Drag and drop images here, or click to select files</p>
            <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">Supports JPG, JPEG, PNG, WEBP - Max file size: 50MB</p>
          </div>

          <div className="mt-8">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Compression Level: {compressionLevel}%</label>
            <ReactSlider className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-md" 
              thumbClassName="w-6 h-6 bg-indigo-600 rounded-full cursor-pointer" 
              trackClassName="h-4 bg-indigo-200 dark:bg-indigo-800 rounded-md" 
              value={compressionLevel} 
              onChange={setCompressionLevel} 
              min={10} max={90} />
          </div>

          {files.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Selected Files</h2>
              <div className="flex gap-2 mt-4">
                <button onClick={handleCompression} className="px-4 py-2 bg-indigo-600 text-white rounded-md">{isProcessing ? 'Compressing...' : 'Compress'}</button>
                <button onClick={handleDeleteAll} className="px-4 py-2 bg-red-600 text-white rounded-md">Delete All</button>
              </div>

              <div className="mt-4 space-y-4">
                {files.map((file, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
                    <h3 className="font-medium text-gray-900 dark:text-white">{file.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Original Size: {formatSize(file.size)}</p>
                    {file.compressedSize !== undefined && (
                      <>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Compressed Size: {formatSize(file.compressedSize)}</p>
                        <button onClick={() => handleDownload(file)} className="px-3 py-2 bg-green-600 text-white rounded-md">Download</button>
                      </>
                    )}
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
