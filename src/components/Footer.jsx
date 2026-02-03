import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              HE
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">Hamish Elliot</span>
          </div>

          {/* Quick Links */}
          <nav className="flex gap-6">
            {['Work', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="flex items-center gap-1 text-gray-400 text-sm">
            © {currentYear} Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            in Auckland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
