import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold mb-4">
              <Zap className="h-8 w-8 text-blue-400" />
              <span>WordGen Pro</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              The ultimate random word generator for writers, students, and language enthusiasts. 
              Generate words by category, length, and type to inspire your creativity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/generator" className="text-gray-300 hover:text-white transition-colors">Word Generator</Link></li>
              <li><Link to="/rhyming-words" className="text-gray-300 hover:text-white transition-colors">Rhyming Words</Link></li>
              <li><Link to="/synonyms" className="text-gray-300 hover:text-white transition-colors">Synonyms</Link></li>
              <li><Link to="/word-games" className="text-gray-300 hover:text-white transition-colors">Word Games</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 WordGen Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;