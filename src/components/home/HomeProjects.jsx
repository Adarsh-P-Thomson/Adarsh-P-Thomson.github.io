'use client'

import AnimatedSection from '../common/AnimatedSection';
import ProjectCard from '../common/ProjectCard';

const HomeProjects = () => {
  const projects = [
    {
      title: 'Groundwale Website & App',
      description: 'Developing the web presence for Groundwale on AWS infrastructure, including a Next.js/Vite website and a company app with scalable backend on AWS (EC2, S3, RDS, Lambda).',
      tags: ['Next.js', 'Vite', 'AWS', 'EC2', 'S3', 'RDS', 'Lambda'],
      githubUrl: null, // Freelance project - code not shareable
      liveUrl: 'https://groundwale.com',
      status: 'October 2025 – Present'
    },
    {
      title: 'Way For Sky Academy',
      description: 'Academy website for wayforsky.com with cloud deployment and scalable architecture on GCP, including CDN and load balancers. Developed using React.js frontend and Java backend.',
      tags: ['React.js', 'Java', 'GCP', 'CDN', 'Load Balancers'],
      githubUrl: null, // Freelance project - code not shareable
      liveUrl: 'https://wayforsky.com',
      status: 'September 2025 – Ongoing'
    },
    {
      title: 'Secure Data Capsule System (.cpsx)',
      description: 'Custom encrypted file format designed for fintech applications with AES-256 encryption, RSA key exchange, policy-based access, and Zero Trust principles. Integrated with PostgreSQL and MongoDB.',
      tags: ['Java', 'Maven', 'AES-256', 'RSA', 'PostgreSQL', 'MongoDB'],
      githubUrl: 'https://github.com/Adarsh-P-Thomson/Dynamic-Trust-Aware-Capsule',
      liveUrl: null, // Security library - no live demo
      status: 'Completed July 2025'
    },
    {
      title: 'Matzah Foods Website',
      description: 'Led a team of 3 to design, develop, and deploy the official website for Matzah Foods Pvt. Ltd. Applied on-page SEO strategies and managed client communication.',
      tags: ['Vite', 'Vue.js', 'Tailwind CSS', 'SEO'],
      githubUrl: null, // Freelance project - code not shareable
      liveUrl: 'https://matzahfoods.com',
      status: 'Completed October 2024'
    },
    {
      title: 'Barzel Engineering',
      description: 'Rapidly designed, built, and deployed a company website for Barzel Engineering. The entire project was completed and deployed within 12 hours.',
      tags: ['Vue.js', 'Rapid Development'],
      githubUrl: null, // Freelance project - code not shareable
      liveUrl: 'https://barzelengineering.com',
      status: 'Completed'
    },
    {
      title: 'Portfolio Website',
      description: "You're looking at it, mate! 😎 A meta-tastic, cyberpunk-themed showcase with particle effects and buttery-smooth animations. Inception level: Portfolio.",
      tags: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
      githubUrl: 'https://github.com/Adarsh-P-Thomson/Adarsh-P-Thomson.github.io',
      liveUrl: 'https://adarshpthomson.me',
      status: 'Live'
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
