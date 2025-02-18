import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, Scale, FileText, Percent, FileImage, Mic, Phone } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const tools = [
    { path: '/age-calculator', name: 'Age Calculator', icon: Calculator },
    { path: '/bmi-calculator', name: 'BMI Calculator', icon: Scale },
    { path: '/word-counter', name: 'Word Counter', icon: FileText },
    { path: '/percentage-calculator', name: 'Percentage Calculator', icon: Percent },
    { path: '/image-to-pdf', name: 'Image to PDF', icon: FileImage },
    { path: '/speech-to-pdf', name: 'Speech to PDF', icon: Mic },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            MultiTools
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</Link>
            <Link to="/contact" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors">
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          {location.pathname !== '/' && (
            <aside className="w-64 flex-shrink-0">
              <nav className="space-y-1">
                {tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      key={tool.path}
                      to={tool.path}
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                        location.pathname === tool.path
                          ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
                      }`}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {tool.name}
                    </Link>
                  );
                })}
              </nav>
            </aside>
          )}

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
              <div className="mt-4 space-y-4">
                <Link to="/about" className="text-base text-gray-500 hover:text-indigo-600 transition-colors block">
                  About Us
                </Link>
                <Link to="/contact" className="text-base text-gray-500 hover:text-indigo-600 transition-colors block">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <div className="mt-4 space-y-4">
                <Link to="/privacy" className="text-base text-gray-500 hover:text-indigo-600 transition-colors block">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-base text-gray-500 hover:text-indigo-600 transition-colors block">
                  Terms of Use
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
              <div className="mt-4 space-y-4">
                <Link to="/sitemap" className="text-base text-gray-500 hover:text-indigo-600 transition-colors block">
                  Sitemap
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
              <div className="mt-4 space-y-4">
                <a 
                  href="https://www.instagram.com/official__luc_ky" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-base text-gray-500 hover:text-indigo-600 transition-colors block"
                >
                  Instagram
                </a>
                <a 
                  href="https://github.com/Sach-in-SE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-base text-gray-500 hover:text-indigo-600 transition-colors block"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              © {new Date().getFullYear()} MultiTools. Developed by Sachin Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;