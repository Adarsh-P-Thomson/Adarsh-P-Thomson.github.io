'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaHeart, FaCode, FaGamepad, FaBook, FaCoffee, FaRocket } from 'react-icons/fa'

const ConnectSection = () => {
  const personalityTraits = [
    { icon: FaCode, text: "Problem Solver", color: "cyber-blue" },
    { icon: FaGamepad, text: "Gaming Enthusiast", color: "cyber-green" },
    { icon: FaBook, text: "Book Nerd", color: "cyber-purple" },
    { icon: FaCoffee, text: "Coffee Addict", color: "cyber-cyan" },
    { icon: FaRocket, text: "Tech Explorer", color: "cyber-pink" }
  ]

  const quickFacts = [
    "🎮 Been gaming since 2005",
    "📚 Can quote Sherlock Holmes",
    "☕ Code quality ∝ Coffee intake",
    "🏁 NFS MW 2005 changed my life",
    "🤓 Proud nerd since childhood",
    "🎯 Strategy games = life"
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-t from-cyber-dark/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text-cyan">
              That's Me in a Nutshell! 🥜
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A developer who believes in balancing code, books, and controller buttons. 
              Life's too short for boring conversations and laggy games! 😄
            </p>
          </div>
        </AnimatedSection>

        {/* Personality Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {personalityTraits.map((trait, index) => (
            <AnimatedSection key={trait.text} delay={index * 0.1}>
              <motion.div
                className="glass rounded-lg p-4 text-center"
                whileHover={{ y: -10, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <trait.icon className={`text-2xl text-${trait.color} mx-auto mb-2`} />
                <p className="text-sm text-gray-300 font-medium">{trait.text}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Quick Facts */}
        <AnimatedSection delay={0.5}>
          <div className="glass rounded-lg p-8 md:p-12 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 neon-text-purple">
              Quick Facts About This Chill Guy 😎
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-900/30 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <span className="text-lg">{fact.split(' ')[0]}</span>
                  <span className="text-gray-300">{fact.substring(fact.indexOf(' ') + 1)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Final CTA */}
        <AnimatedSection delay={0.8}>
          <div className="text-center">
            <div className="glass rounded-lg p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6">
                <span className="neon-text-cyan">Ready to Connect?</span> 🤝
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Whether you want to discuss the latest tech trends, share book recommendations, 
                plan an epic gaming session, or just have a chill conversation about life - 
                I'm always up for it! Let's build something awesome together! 🚀
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-cyber-cyan text-cyber-dark font-bold rounded-lg neon-glow hover:bg-cyber-blue transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaHeart />
                  Let's Chat!
                </motion.a>
                <motion.a
                  href="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyber-purple text-cyber-purple font-bold rounded-lg hover:bg-cyber-purple/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCode />
                  Check My Work
                </motion.a>
              </div>

              <motion.div
                className="mt-8 text-4xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🎮📚💻✨
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default ConnectSection