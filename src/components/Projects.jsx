import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'TeamLine Quick Order',
      description: 'B2B wholesale quick-order system with CSV upload, saved carts, and multi-location shipping. Reduced order time by 70% for wholesale customers.',
      tags: ['Liquid', 'JavaScript', 'Shopify Plus'],
      highlights: ['CSV Upload', 'Multi-location', 'Saved Carts'],
      link: '#',
      github: null,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Cart Drawer System',
      description: 'Custom cart drawer with upsells, free shipping progress bar, and quick-edit quantity. Increased AOV by 15% across 3 stores.',
      tags: ['Liquid', 'JavaScript', 'AJAX'],
      highlights: ['Upsells', 'Progress Bar', 'Quick Edit'],
      link: '#',
      github: null,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Pathway+ Dashboard',
      description: 'Student career tracking dashboard built during SebData internship. Symfony-based with skill tracking and career recommendations.',
      tags: ['PHP', 'Symfony', 'MongoDB'],
      highlights: ['Career Mapping', 'Skill Tracking', 'Dashboard'],
      link: '#',
      github: 'https://github.com/h3m1sh/pathway-plus',
      color: 'from-orange-500 to-red-500',
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
            and real revenue.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Card Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.color} p-6 flex flex-col justify-end`}>
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

              {/* Card Content */}
              <div className="p-6">
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
                    className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    View Project
                    <ExternalLink className="ml-1 w-4 h-4" />
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
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/h3m1sh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-colors"
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
