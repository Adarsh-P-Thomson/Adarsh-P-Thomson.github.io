'use client'

import AnimatedSection from '../common/AnimatedSection';
import ProjectCard from '../common/ProjectCard';

const HomeProjects = () => {
  const projects = [
    {
      title: 'Cyberpunk Portfolio',
      description: 'A stunning, highly interactive portfolio website with cyberpunk aesthetics, particle effects, and smooth animations. Built with React, Vite, and Framer Motion.',
      tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
      githubUrl: 'https://github.com/Adarsh-P-Thomson/Adarsh-P-Thomson.github.io',
      liveUrl: 'https://adarshpthomson.me',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by AI, featuring smart replies, sentiment analysis, and multi-language support.',
      tags: ['React', 'WebSocket', 'Python', 'OpenAI'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Task Management Dashboard',
      description: 'Comprehensive project management tool with kanban boards, time tracking, and team collaboration features.',
      tags: ['TypeScript', 'React', 'GraphQL', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text-purple">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A showcase of my best work, from web applications to innovative solutions
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
