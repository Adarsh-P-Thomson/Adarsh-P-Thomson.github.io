'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaBriefcase, FaExternalLinkAlt, FaGithub, FaClock, FaUsers, FaAward } from 'react-icons/fa'

const FreelanceProjects = () => {
  const freelanceProjects = [
    {
      title: 'Groundwale Website & App',
      client: 'Groundwale Company',
      period: 'October 2025 – Present',
      status: 'In Development',
      description: 'Building comprehensive web presence with scalable AWS infrastructure including Next.js website and cross-platform company app.',
      achievements: [
        'Architecting high-performance frontend with Next.js and Vite',
        'Designing complete AWS backend (EC2, S3, RDS, Lambda)',
        'Leading cross-platform app development for iOS/Android',
        'Implementing scalable cloud architecture'
      ],
      technologies: ['Next.js', 'Vite', 'AWS', 'EC2', 'S3', 'RDS', 'Lambda', 'React Native'],
      links: {
        github: 'https://github.com/Adarsh-P-Thomson/GroundWale',
        live: '#'
      },
      type: 'Full-Stack Development',
      impact: 'Enterprise-level application',
      color: 'cyber-blue'
    },
    {
      title: 'Way For Sky Academy',
      client: 'Way For Sky Academy',
      period: 'September 2025 – Ongoing',
      status: 'Live',
      description: 'Academy website with cloud deployment and scalable architecture on GCP, featuring CDN and load balancers.',
      achievements: [
        'Collaborative development with team member',
        'Full deployment infrastructure on GCP',
        'CDN and load balancer implementation',
        'Agile methodologies and CI/CD pipeline'
      ],
      technologies: ['React.js', 'Java', 'GCP', 'CDN', 'Load Balancers', 'CI/CD'],
      links: {
        github: 'https://github.com/Adarsh-P-Thomson/WayForSky',
        live: 'https://wayforsky.com'
      },
      type: 'Education Platform',
      impact: 'Serving students nationwide',
      color: 'cyber-purple'
    },
    {
      title: 'Matzah Foods Website',
      client: 'Matzah Foods Pvt. Ltd.',
      period: 'Completed October 2024',
      status: 'Delivered',
      description: 'Led a team of 3 to design, develop, and deploy the official company website with SEO optimization.',
      achievements: [
        'Team leadership and project coordination',
        'Complete client communication management',
        'On-page SEO strategy implementation',
        'Agile delivery within timeline'
      ],
      technologies: ['Vite', 'Vue.js', 'Tailwind CSS', 'SEO Optimization'],
      links: {
        github: 'https://github.com/Adarsh-P-Thomson/MatzahFoods',
        live: '#'
      },
      type: 'Corporate Website',
      impact: 'Enhanced brand presence',
      color: 'cyber-cyan'
    },
    {
      title: 'Barzel Engineering',
      client: 'Barzel Engineering',
      period: 'Completed',
      status: 'Live',
      description: 'Rapid development and deployment of company website completed within 12 hours - a record delivery time.',
      achievements: [
        'Record 12-hour delivery timeline',
        'Complete design and development',
        'Immediate deployment and go-live',
        'Client satisfaction with rapid turnaround'
      ],
      technologies: ['Vue.js', 'Rapid Development', 'Fast Deployment'],
      links: {
        github: 'https://github.com/Adarsh-P-Thomson/barzelengineering',
        live: 'https://barzelengineering.com'
      },
      type: 'Quick Delivery',
      impact: 'Instant web presence',
      color: 'cyber-green'
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      'cyber-blue': 'border-cyber-blue/20 hover:border-cyber-blue/40 bg-cyber-blue/5',
      'cyber-purple': 'border-cyber-purple/20 hover:border-cyber-purple/40 bg-cyber-purple/5',
      'cyber-cyan': 'border-cyber-cyan/20 hover:border-cyber-cyan/40 bg-cyber-cyan/5',
      'cyber-green': 'border-cyber-green/20 hover:border-cyber-green/40 bg-cyber-green/5'
    }
    return colorMap[color] || colorMap['cyber-blue']
  }

  const getStatusColor = (status) => {
    const statusMap = {
      'Live': 'text-cyber-green bg-cyber-green/20',
      'In Development': 'text-cyber-blue bg-cyber-blue/20',
      'Delivered': 'text-cyber-purple bg-cyber-purple/20'
    }
    return statusMap[status] || 'text-gray-400 bg-gray-400/20'
  }

  return (
    <section className="py-20 px-4" id="freelance-projects">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <FaBriefcase className="text-4xl text-cyber-blue" />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold neon-text-blue">
                Freelance Projects
              </h2>
              <p className="text-xl text-gray-400 mt-2">
                Professional solutions delivered for real clients
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {freelanceProjects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                className={`glass rounded-lg p-8 border-2 ${getColorClasses(project.color)} transition-all duration-300`}
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-200 mb-2">{project.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                          <span className="flex items-center gap-2">
                            <FaUsers className="text-cyber-cyan" />
                            {project.client}
                          </span>
                          <span className="flex items-center gap-2">
                            <FaClock />
                            {project.period}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                            {project.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-200 mb-3">
                        <FaAward className="text-cyber-yellow" />
                        Key Deliverables
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start gap-3 text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.1) + (achIndex * 0.05) }}
                          >
                            <span className="w-2 h-2 rounded-full bg-cyber-blue mt-2 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                          whileHover={{ scale: 1.05, backgroundColor: '#374151' }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.1) + (techIndex * 0.02) }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Project Meta & Links */}
                  <div className="space-y-6">
                    <div className="glass rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-200 mb-4">Project Impact</h4>
                      <p className="text-cyber-cyan font-medium">{project.impact}</p>
                    </div>

                    <div className="space-y-3">
                      {project.links.live !== '#' && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 w-full px-4 py-3 bg-cyber-blue text-cyber-dark font-medium rounded-lg hover:bg-cyber-cyan transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt />
                          View Live Site
                        </motion.a>
                      )}
                      
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 w-full px-4 py-3 border-2 border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub />
                        View Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FreelanceProjects