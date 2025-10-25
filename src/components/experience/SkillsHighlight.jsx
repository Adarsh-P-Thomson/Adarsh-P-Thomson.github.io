'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaChartLine, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa'

const SkillsHighlight = () => {
  const skillCategories = [
    {
      title: 'Technical Leadership',
      icon: FaRocket,
      color: 'cyber-blue',
      skills: [
        'Full-Stack Architecture',
        'Cloud Infrastructure Design',
        'CI/CD Implementation',
        'Performance Optimization',
        'Security Best Practices'
      ]
    },
    {
      title: 'Project Management',
      icon: FaChartLine,
      color: 'cyber-purple',
      skills: [
        'Agile Methodologies',
        'Client Relationship Management',
        'Team Coordination',
        'Timeline Management',
        'Quality Assurance'
      ]
    },
    {
      title: 'Innovation & Strategy',
      icon: FaLightbulb,
      color: 'cyber-cyan',
      skills: [
        'Product Strategy',
        'Technology Research',
        'Problem Solving',
        'Innovation Management',
        'Future-Proofing Solutions'
      ]
    },
    {
      title: 'Community Building',
      icon: FaUsers,
      color: 'cyber-green',
      skills: [
        'Event Organization',
        'Mentorship & Training',
        'Public Speaking',
        'Stakeholder Engagement',
        'Culture Development'
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      'cyber-blue': 'text-cyber-blue border-cyber-blue/20 bg-cyber-blue/5',
      'cyber-purple': 'text-cyber-purple border-cyber-purple/20 bg-cyber-purple/5',
      'cyber-cyan': 'text-cyber-cyan border-cyber-cyan/20 bg-cyber-cyan/5',
      'cyber-green': 'text-cyber-green border-cyber-green/20 bg-cyber-green/5'
    }
    return colorMap[color] || colorMap['cyber-blue']
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cyber-dark/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text-cyan">
              Core Competencies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Skills developed through hands-on experience, leadership roles, and continuous learning
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.1}>
              <motion.div
                className="glass rounded-lg p-8"
                whileHover={{ scale: 1.03, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-lg ${getColorClasses(category.color)}`}>
                    <category.icon className={`text-2xl ${getColorClasses(category.color).split(' ')[0]}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-200">{category.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      className="flex items-center gap-3 text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                    >
                      <span className={`w-2 h-2 rounded-full ${getColorClasses(category.color).split(' ')[2]}`} />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-16">
            <div className="glass rounded-lg p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-4 neon-text-purple">
                Ready to Collaborate?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm always excited to work on challenging projects and build innovative solutions. 
                Let's discuss how we can create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="px-8 py-4 bg-cyber-purple text-white font-bold rounded-lg neon-glow hover:bg-cyber-blue transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="/#projects"
                  className="px-8 py-4 border-2 border-cyber-cyan text-cyber-cyan font-bold rounded-lg hover:bg-cyber-cyan/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default SkillsHighlight