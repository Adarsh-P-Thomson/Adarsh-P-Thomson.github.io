'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaGlobe, FaCode, FaClock, FaUsers } from 'react-icons/fa'

const ProjectStats = () => {
  const stats = [
    {
      icon: FaGlobe,
      value: '8+',
      label: 'Live Websites',
      description: 'Production applications serving real users',
      color: 'cyber-blue'
    },
    {
      icon: FaCode,
      value: '15+',
      label: 'Total Projects',
      description: 'Including freelance and personal work',
      color: 'cyber-purple'
    },
    {
      icon: FaClock,
      value: '12hr',
      label: 'Fastest Delivery',
      description: 'Record time for Barzel Engineering',
      color: 'cyber-cyan'
    },
    {
      icon: FaUsers,
      value: '100%',
      label: 'Client Satisfaction',
      description: 'All projects delivered successfully',
      color: 'cyber-green'
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      'cyber-blue': 'text-cyber-blue bg-cyber-blue/10 border-cyber-blue/20',
      'cyber-purple': 'text-cyber-purple bg-cyber-purple/10 border-cyber-purple/20',
      'cyber-cyan': 'text-cyber-cyan bg-cyber-cyan/10 border-cyber-cyan/20',
      'cyber-green': 'text-cyber-green bg-cyber-green/10 border-cyber-green/20'
    }
    return colorMap[color] || colorMap['cyber-blue']
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent to-cyber-dark/20">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`glass rounded-lg p-6 text-center border ${getColorClasses(stat.color).split(' ')[2]}`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${getColorClasses(stat.color).split(' ')[1]}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className={`text-xl ${getColorClasses(stat.color).split(' ')[0]}`} />
                </motion.div>
                
                <motion.div
                  className={`text-3xl font-bold mb-2 ${getColorClasses(stat.color).split(' ')[0]}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: (index * 0.1) + 0.3, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                
                <h3 className="text-gray-200 font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default ProjectStats