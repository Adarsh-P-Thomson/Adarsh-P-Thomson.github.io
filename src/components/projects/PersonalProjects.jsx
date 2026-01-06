'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaLightbulb, FaGithub, FaExternalLinkAlt, FaCode, FaGraduationCap, FaHeart } from 'react-icons/fa'

const PersonalProjects = () => {
  const personalProjects = [
    {
      title: 'Secure Data Capsule System (.cpsx)',
      category: 'Security & Fintech',
      period: 'Completed July 2025',
      description: 'A custom encrypted file format designed for fintech applications featuring advanced security and compliance with Zero Trust principles.',
      purpose: 'Learning advanced encryption and security protocols',
      features: [
        'AES-256 encryption for data security',
        'RSA key exchange implementation',
        'Policy-based access control system',
        'Time-based data shredding capabilities',
        'Zero Trust security architecture',
        'PostgreSQL and MongoDB integration'
      ],
      technologies: ['Java', 'Maven', 'AES-256', 'RSA', 'PostgreSQL', 'MongoDB', 'Security'],
      links: {
        github: 'https://github.com/Adarsh-P-Thomson/Dynamic-Trust-Aware-Capsule',
        live: '#'
      },
      type: 'Security Project',
      learningGoals: 'Encryption, Security Architecture, Database Integration',
      color: 'cyber-purple'
    },
    {
      title: 'Portfolio Website',
      category: 'Web Development',
      period: 'Ongoing',
      description: "You're looking at it, mate! 😎 A meta-tastic, cyberpunk-themed showcase with particle effects and buttery-smooth animations. Inception level: Portfolio.",
      purpose: 'Showcasing skills and experimenting with modern web technologies',
      features: [
        'Cyberpunk-themed design system',
        'Framer Motion animations',
        'Multi-page architecture with Next.js',
        'Responsive design across all devices',
        'Interactive particle effects',
        'Dynamic content management'
      ],
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
      links: {
        github: 'https://github.com/Adarsh-P-Thomson/Adarsh-P-Thomson.github.io',
        live: 'https://adarshpthomson.me'
      },
      type: 'Frontend Showcase',
      learningGoals: 'Modern React, Animation Libraries, Design Systems',
      color: 'cyber-cyan'
    },
    {
      title: 'Converse-AI',
      category: 'AI & Chat Applications',
      period: 'Learning Project',
      description: 'A real-time chat application exploring AI integration and modern communication technologies.',
      purpose: 'Understanding AI integration in real-time applications',
      features: [
        'Real-time messaging capabilities',
        'AI-powered chat features',
        'Modern UI/UX design',
        'Scalable architecture',
        'WebSocket implementation',
        'User management system'
      ],
      technologies: ['React', 'Node.js', 'WebSocket', 'AI APIs', 'Real-time Technologies'],
      links: {
        github: 'https://github.com/Adarsh-P-Thomson/Converse-AI',
        live: '#'
      },
      type: 'AI Experiment',
      learningGoals: 'AI Integration, Real-time Systems, WebSocket',
      color: 'cyber-blue'
    },
    {
      title: 'Product Describer Chrome Extension',
      category: 'Browser Extensions & AI',
      period: 'Experimental',
      description: 'A Chrome extension that uses AI to generate compelling product descriptions for e-commerce platforms.',
      purpose: 'Exploring browser extension development and AI APIs',
      features: [
        'Chrome extension architecture',
        'AI-powered content generation',
        'E-commerce platform integration',
        'User-friendly interface',
        'Automated description generation',
        'Content optimization tools'
      ],
      technologies: ['JavaScript', 'Chrome APIs', 'AI APIs', 'HTML/CSS', 'Browser Extension'],
      links: {
        github: 'https://github.com/Adarsh-P-Thomson/product-describer-chrome-extension',
        live: '#'
      },
      type: 'Browser Extension',
      learningGoals: 'Browser APIs, AI Integration, Extension Development',
      color: 'cyber-green'
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      'cyber-blue': 'border-cyber-blue/20 hover:border-cyber-blue/40',
      'cyber-purple': 'border-cyber-purple/20 hover:border-cyber-purple/40',
      'cyber-cyan': 'border-cyber-cyan/20 hover:border-cyber-cyan/40',
      'cyber-green': 'border-cyber-green/20 hover:border-cyber-green/40'
    }
    return colorMap[color] || colorMap['cyber-purple']
  }

  const getAccentColor = (color) => {
    const colorMap = {
      'cyber-blue': 'text-cyber-blue',
      'cyber-purple': 'text-cyber-purple',
      'cyber-cyan': 'text-cyber-cyan',
      'cyber-green': 'text-cyber-green'
    }
    return colorMap[color] || 'text-cyber-purple'
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cyber-dark/20 to-transparent" id="personal-projects">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <FaLightbulb className="text-4xl text-cyber-purple" />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold neon-text-purple">
                Personal Projects
              </h2>
              <p className="text-xl text-gray-400 mt-2">
                Experimental ventures and learning adventures
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {personalProjects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                className={`glass rounded-lg p-8 h-full border-2 ${getColorClasses(project.color)} transition-all duration-300`}
                whileHover={{ scale: 1.03, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-gray-200">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gray-800 ${getAccentColor(project.color)}`}>
                      {project.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-2">
                      <FaCode className="text-cyber-cyan" />
                      {project.category}
                    </span>
                    <span>{project.period}</span>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                  
                  <div className={`p-3 rounded-lg bg-gray-800/50 border-l-4 border-l-cyber-purple`}>
                    <div className="flex items-center gap-2 mb-2">
                      <FaGraduationCap className="text-cyber-purple" />
                      <span className="text-sm font-medium text-gray-300">Learning Purpose</span>
                    </div>
                    <p className="text-gray-400 text-sm">{project.purpose}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-200 mb-3">
                    <FaHeart className="text-cyber-pink" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-3 text-gray-300 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                      >
                        <span className={`w-2 h-2 rounded-full ${getAccentColor(project.color).replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs border border-gray-700"
                        whileHover={{ scale: 1.05 }}
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

                {/* Learning Goals */}
                <div className="mb-6 p-3 bg-gray-900/50 rounded-lg">
                  <h5 className="text-sm font-medium text-gray-300 mb-2">Learning Goals Achieved:</h5>
                  <p className={`text-sm ${getAccentColor(project.color)}`}>{project.learningGoals}</p>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.links.github && project.links.github !== '#' && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 flex-1 px-4 py-2 border-2 border-gray-600 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-800 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      Code
                    </motion.a>
                  )}

                  {project.links.live && project.links.live !== '#' && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 flex-1 px-4 py-2 ${getAccentColor(project.color).replace('text-', 'bg-')} text-cyber-dark text-sm font-medium rounded-lg hover:opacity-90 transition-all`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Learning Journey CTA */}
        <AnimatedSection delay={0.8}>
          <div className="text-center mt-16">
            <div className="glass rounded-lg p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-4 neon-text-purple">
                Continuous Learning Journey
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                These projects represent my commitment to continuous learning and exploration. 
                Each one taught me something new and pushed me to grow as a developer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://github.com/Adarsh-P-Thomson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-cyber-purple text-white font-bold rounded-lg neon-glow hover:bg-cyber-blue transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  Explore All Projects
                </motion.a>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyber-cyan text-cyber-cyan font-bold rounded-lg hover:bg-cyber-cyan/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Collaborate
                </motion.a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default PersonalProjects