'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaCode, FaRocket, FaLightbulb, FaPalette, FaBriefcase } from 'react-icons/fa'

const ProjectsHero = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-cyber-blue/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <FaCode className="text-4xl text-cyber-blue" />
                <FaRocket className="text-4xl text-cyber-purple" />
                <FaLightbulb className="text-4xl text-cyber-cyan" />
                <FaPalette className="text-4xl text-cyber-green" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A showcase of my professional freelance work and personal passion projects. 
              From client solutions that drive business growth to experimental ventures that push the boundaries of technology.
            </p>
          </div>
        </AnimatedSection>

        {/* Project Categories Preview */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="glass rounded-lg p-8 relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <FaBriefcase className="text-3xl text-cyber-blue" />
                  <h2 className="text-2xl font-bold text-gray-200">Freelance Work</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  Production-ready applications built for real clients, featuring modern technologies and scalable architectures.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm">Professional</span>
                  <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm">Client Work</span>
                  <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm">Live Projects</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass rounded-lg p-8 relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <FaLightbulb className="text-3xl text-cyber-purple" />
                  <h2 className="text-2xl font-bold text-gray-200">Personal Projects</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  Experimental and learning projects where I explore new technologies, concepts, and creative ideas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyber-purple/20 text-cyber-purple rounded-full text-sm">Learning</span>
                  <span className="px-3 py-1 bg-cyber-purple/20 text-cyber-purple rounded-full text-sm">Experimental</span>
                  <span className="px-3 py-1 bg-cyber-purple/20 text-cyber-purple rounded-full text-sm">Open Source</span>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default ProjectsHero