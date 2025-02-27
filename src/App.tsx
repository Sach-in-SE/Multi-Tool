import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tools from './pages/Tools';
import AgeCalculator from './pages/AgeCalculator';
import BMICalculator from './pages/BMICalculator';
import WordCounter from './pages/WordCounter';
import PercentageCalculator from './pages/PercentageCalculator';
import ImageToPDF from './pages/ImageToPDF';
import SpeechToPDF from './pages/SpeechToPDF';
import ImageCompressor from './pages/ImageCompressor';
import PDFCompressor from './pages/PDFCompressor';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/age-calculator" element={<AgeCalculator />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/word-counter" element={<WordCounter />} />
          <Route path="/percentage-calculator" element={<PercentageCalculator />} />
          <Route path="/image-to-pdf" element={<ImageToPDF />} />
          <Route path="/speech-to-pdf" element={<SpeechToPDF />} />
          <Route path="/image-compressor" element={<ImageCompressor />} />
          <Route path="/pdf-compressor" element={<PDFCompressor />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;