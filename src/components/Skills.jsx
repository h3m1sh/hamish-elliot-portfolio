import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'E-commerce',
      skills: [
        { name: 'Shopify', level: 'Expert' },
        { name: 'Liquid', level: 'Expert' },
        { name: 'Shopify Plus', level: 'Advanced' },
        { name: 'Storefront API', level: 'Intermediate' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', level: 'Expert' },
        { name: 'HTML5/CSS3', level: 'Expert' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Web Components', level: 'Advanced' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'PHP', level: 'Advanced' },
        { name: 'Symfony', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'REST APIs', level: 'Advanced' },
      ],
    },
    {
      title: 'Tools & Soft Skills',
      skills: [
        { name: 'Git/GitHub', level: 'Advanced' },
        { name: 'Shopify CLI', level: 'Expert' },
        { name: 'Cursor IDE', level: 'Advanced' },
        { name: 'Jira', level: 'Intermediate' },
        { name: 'Customer Service', level: 'Expert' },
        { name: 'Team Collaboration', level: 'Advanced' },
      ],
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-500';
      case 'Advanced':
        return 'bg-blue-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const workExperience = [
    {
      role: 'E-commerce Developer',
      company: 'Blue Sports',
      location: 'Auckland',
      period: '2024 – Present',
      description: 'Maintaining 3 Shopify stores with 50k+ lines of custom code. Built cart drawer systems, quick order flows, and B2B wholesale features. Reduced order time by 70% for wholesale customers.',
      type: 'tech',
    },
    {
      role: 'Junior Developer Intern',
      company: 'SebData',
      location: 'Auckland',
      period: 'May – July 2025',
      description: 'Built Pathway+ dashboard app using PHP/Symfony. Implemented skill tracking, career roadmaps, and progress visualization. Completed 10-week mentored internship as part of Level 6 qualification.',
      type: 'tech',
    },
    {
      role: 'Bartender',
      company: 'Pointers Nightclub',
      location: 'Auckland',
      period: 'Sept 2025 – Present',
      description: 'Prepare and serve beverages in fast-paced nightclub environment. Provide attentive customer service and maintain high standards of cleanliness. Work collaboratively during busy nights and events.',
      type: 'service',
    },
    {
      role: 'Handyman',
      company: 'Performance Cleaners NZ',
      location: 'Auckland',
      period: 'Dec 2024 – Present',
      description: 'Independently managed physical projects including gardening, landscaping, and cleaning. Operated tools safely and maintained consistent communication with business owner.',
      type: 'physical',
    },
    {
      role: 'Customer Service Team Member',
      company: 'The Warehouse',
      location: 'Mt Roskill',
      period: 'Nov 2022 – Oct 2023',
      description: 'Provided customer support in high-volume retail environment. Processed payments, returns, and online orders using POS systems. Collaborated with shift managers to resolve issues.',
      type: 'service',
    },
    {
      role: 'Café Assistant',
      company: 'Kreem Café',
      location: 'Mt Roskill',
      period: 'July 2022 – Jan 2023',
      description: 'Delivered high-quality customer service in busy café environment. Maintained hygiene and presentation standards. Supported team during peak hours.',
      type: 'service',
    },
  ];

  const education = [
    {
      degree: 'Advanced Full Stack Development (Level 6 NCEA)',
      institution: 'Mission Ready HQ',
      date: 'Jan 2025',
    },
    {
      degree: 'Cloud & AI Technology (Level 5 NCEA)',
      institution: 'Mission Ready HQ',
      date: 'Jan 2025',
    },
    {
      degree: 'Technology Product Development (Level 4, NZQA)',
      institution: 'Mission Ready HQ',
      date: 'Jan 2024',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">About</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            18-year-old developer with a diverse background in customer service, operations, and project management. 
            Strong communication, problem-solving skills, and a proven ability to learn quickly and deliver results under pressure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)}`} />
                        <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div 
                  key={index} 
                  className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700 last:border-transparent pb-2"
                >
                  <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full border-4 ${
                    job.type === 'tech' 
                      ? 'bg-blue-500 border-blue-100 dark:border-blue-900' 
                      : 'bg-gray-400 border-gray-100 dark:border-gray-800'
                  }`} />
                  
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {job.period}
                    </span>
                    {job.type === 'tech' && (
                      <span className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                        Tech
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{job.role}</h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-1 flex items-center gap-1">
                    {job.company}
                    <span className="text-gray-400">•</span>
                    <span className="text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                Education
              </h4>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{edu.degree}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-gray-500">{edu.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
