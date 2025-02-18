import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AgeCalculator from './pages/AgeCalculator';
import BMICalculator from './pages/BMICalculator';
import WordCounter from './pages/WordCounter';
import PercentageCalculator from './pages/PercentageCalculator';
import ImageToPDF from './pages/ImageToPDF';
import SpeechToPDF from './pages/SpeechToPDF';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/age-calculator" element={<AgeCalculator />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/word-counter" element={<WordCounter />} />
          <Route path="/percentage-calculator" element={<PercentageCalculator />} />
          <Route path="/image-to-pdf" element={<ImageToPDF />} />
          <Route path="/speech-to-pdf" element={<SpeechToPDF />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;