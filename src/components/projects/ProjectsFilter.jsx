'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaBriefcase, FaLightbulb, FaFilter, FaCode, FaRocket } from 'react-icons/fa'

const ProjectsFilter = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects', icon: FaCode, color: 'cyber-cyan' },
    { id: 'freelance', label: 'Freelance Work', icon: FaBriefcase, color: 'cyber-blue' },
    { id: 'personal', label: 'Personal Projects', icon: FaLightbulb, color: 'cyber-purple' },
    { id: 'featured', label: 'Featured', icon: FaRocket, color: 'cyber-green' }
  ]

  const getColorClasses = (color, isActive) => {
    const colorMap = {
      'cyber-blue': isActive 
        ? 'bg-cyber-blue text-cyber-dark border-cyber-blue' 
        : 'text-cyber-blue border-cyber-blue/30 hover:bg-cyber-blue/10',
      'cyber-purple': isActive 
        ? 'bg-cyber-purple text-cyber-dark border-cyber-purple' 
        : 'text-cyber-purple border-cyber-purple/30 hover:bg-cyber-purple/10',
      'cyber-cyan': isActive 
        ? 'bg-cyber-cyan text-cyber-dark border-cyber-cyan' 
        : 'text-cyber-cyan border-cyber-cyan/30 hover:bg-cyber-cyan/10',
      'cyber-green': isActive 
        ? 'bg-cyber-green text-cyber-dark border-cyber-green' 
        : 'text-cyber-green border-cyber-green/30 hover:bg-cyber-green/10'
    }
    return colorMap[color] || colorMap['cyber-cyan']
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaFilter className="text-2xl text-cyber-cyan" />
              <h2 className="text-3xl font-bold neon-text-cyan">Explore My Work</h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Filter through my portfolio to discover different types of projects and technologies
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg border-2 font-medium transition-all ${
                  getColorClasses(filter.color, activeFilter === filter.id)
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <filter.icon className="text-lg" />
                {filter.label}
                {activeFilter === filter.id && (
                  <motion.div
                    className="w-2 h-2 rounded-full bg-current"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Active Filter Indicator */}
        <AnimatedSection delay={0.4}>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeFilter}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-lg">
              <span className="text-gray-400">Showing:</span>
              <span className="text-cyber-cyan font-semibold">
                {filters.find(f => f.id === activeFilter)?.label}
              </span>
              <motion.div
                className="w-1 h-1 rounded-full bg-cyber-cyan"
                animate={{ scale: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default ProjectsFilter