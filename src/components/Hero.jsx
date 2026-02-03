import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Hamish Elliot';
  const [showSubtitle, setShowSubtitle] = useState(false);

  // Text generate effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowSubtitle(true), 300);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10" />
      
      {/* Animated background beams */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
              Available for work — Mt Roskill, Auckland
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-400 dark:text-gray-500 text-2xl md:text-3xl font-normal mb-2">
                Hi, I'm
              </span>
              <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            <p 
              className={`text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold transition-all duration-500 ${
                showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              E-commerce Frontend Engineer
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              Dynamic developer with a diverse background in customer service, operations, and project management. 
              50,000 lines of production code across 3 Shopify stores. Strong communication, problem-solving, 
              and a proven ability to learn quickly and deliver results under pressure.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="group inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/25 hover:scale-105"
              >
                View Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-all hover:scale-105"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/h3m1sh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/hamishelliot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:hamish.elliot5@gmail.com"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Bento Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Main Stat Card */}
            <div className="col-span-2 p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow group">
              <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-105 transition-transform">50k+</div>
              <div className="text-blue-100 text-lg">Lines of Production Code</div>
            </div>

            {/* Shopify Badge */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow hover:-translate-y-1">
              <div className="w-12 h-12 mb-4 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="font-semibold text-gray-900 dark:text-white">Shopify Expert</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">3+ years</div>
            </div>

            {/* Availability */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Open to work</span>
              </div>
              <div className="font-semibold text-gray-900 dark:text-white">Available</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Freelance / Full-time</div>
            </div>

            {/* Tech Stack */}
            <div className="col-span-2 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {['Liquid', 'JavaScript', 'Shopify', 'PHP', 'Symfony', 'MongoDB', 'React', 'Tailwind'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
