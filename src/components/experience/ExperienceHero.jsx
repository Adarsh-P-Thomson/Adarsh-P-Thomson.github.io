'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaBriefcase, FaCode, FaRocket, FaAward } from 'react-icons/fa'

const ExperienceHero = () => {
  const stats = [
    {
      icon: FaBriefcase,
      value: '3+',
      label: 'Years Experience',
      color: 'text-cyber-blue'
    },
    {
      icon: FaCode,
      value: '15+',
      label: 'Projects Completed',
      color: 'text-cyber-purple'
    },
    {
      icon: FaRocket,
      value: '5+',
      label: 'Live Websites',
      color: 'text-cyber-cyan'
    },
    {
      icon: FaAward,
      value: '100%',
      label: 'Client Satisfaction',
      color: 'text-cyber-green'
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
              My Journey
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From student to freelance developer, leading teams and building innovative solutions. 
              Here's the story of my professional growth and the impact I've made along the way.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats Grid */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className={`text-4xl ${stat.color} mx-auto mb-4`} />
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Professional Summary */}
        <AnimatedSection delay={0.4}>
          <div className="glass rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text-purple">
              Professional Overview
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Currently working as a <span className="text-cyber-cyan font-semibold">Freelance Full-Stack Developer</span>, 
              I specialize in building scalable web applications and cloud infrastructure. 
              My journey includes leadership roles in IEEE Computer Society and founding Maker Space DSATM, 
              where I've fostered innovation and collaboration among peers. 
              I bring a unique combination of technical expertise, project leadership, and a passion for creating impactful solutions.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default ExperienceHero