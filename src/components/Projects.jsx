import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300"
      style={{
        transform: isHovered ? 'perspective(1000px) rotateX(-2deg) rotateY(2deg) scale(1.02)' : 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
        boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Card Header with Gradient */}
      <div className={`h-48 bg-gradient-to-br ${project.color} p-6 flex flex-col justify-end relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 relative z-10">
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.link}
            className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
          >
            View Project
            <ExternalLink className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              <Github className="mr-1 w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'TeamLine Quick Order',
      description: 'B2B wholesale quick-order system with CSV upload, saved carts, and multi-location shipping. Reduced order time by 70% for wholesale customers. Currently deployed across 3 production Shopify stores.',
      tags: ['Liquid', 'JavaScript', 'Shopify Plus'],
      highlights: ['CSV Upload', 'Multi-location', 'Saved Carts', 'B2B Wholesale'],
      link: '#',
      github: null,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Cart Drawer System',
      description: 'Custom cart drawer with upsells, free shipping progress bar, and quick-edit quantity. Increased AOV by 15% across 3 stores. Features AJAX updates and seamless Shopify integration.',
      tags: ['Liquid', 'JavaScript', 'AJAX'],
      highlights: ['Upsells', 'Progress Bar', 'Quick Edit', '+15% AOV'],
      link: '#',
      github: null,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Z Energy Mobile App',
      description: 'Team project delivering a working prototype of Z Energy\'s mobile app under Agile methodology. Contributed to customer-facing features including price comparison, payment, and interactive map tools.',
      tags: ['React', 'Agile', 'Team Project'],
      highlights: ['Price Comparison', 'Payment Flow', 'Interactive Maps', 'Agile'],
      link: '#',
      github: 'https://github.com/h3m1sh',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Pathway+ Dashboard',
      description: 'Symfony-based web app built during SebData internship to support students tracking micro-credentials and aligning learning with career goals. Features skill tracking, career roadmaps, and gap analysis.',
      tags: ['PHP', 'Symfony', 'MongoDB', 'Dashboard'],
      highlights: ['Career Mapping', 'Skill Tracking', 'Gap Analysis', 'Internship'],
      link: '#',
      github: 'https://github.com/h3m1sh/pathway-plus',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="work" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects that deliver results
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Production Shopify stores and web applications handling real customers 
            and real revenue. Built with attention to detail and a focus on user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/h3m1sh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-all hover:scale-105"
          >
            View All Projects on GitHub
            <Github className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
