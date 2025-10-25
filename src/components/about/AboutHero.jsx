'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import AnimatedSection from '../common/AnimatedSection'
import { FaWave, FaSmile, FaHeart } from 'react-icons/fa'

const AboutHero = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 2
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-3 h-3 bg-cyber-cyan rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay
            }}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="inline-block mr-4">
                <motion.span
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  👋
                </motion.span>
              </span>
              <span className="neon-text-cyan">Hi! Hello!</span>
            </h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I'm a <span className="text-cyber-purple font-bold">chill guy</span> who codes 
              <span className="text-cyber-cyan"> ✨</span>
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Welcome to my little corner of the internet! 🌐 I'm that guy who gets excited about 
              <span className="text-cyber-blue font-semibold"> clean code</span>, 
              <span className="text-cyber-purple font-semibold"> good books</span>, and 
              <span className="text-cyber-green font-semibold"> epic gaming sessions</span>. 
            </p>
            
            <motion.div
              className="mt-6 flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-3xl">🤓</span>
              <span className="text-3xl">🎮</span>
              <span className="text-3xl">📚</span>
              <span className="text-3xl">💻</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-12"
          >
            <p className="text-gray-400 text-lg">
              Scroll down to get to know the real me! 
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block ml-2"
              >
                ⬇️
              </motion.span>
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default AboutHero