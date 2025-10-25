'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaSmile, FaCode, FaLightbulb, FaCoffee } from 'react-icons/fa'

const PersonalitySection = () => {
  const traits = [
    {
      icon: FaSmile,
      title: "The Chill Vibe",
      description: "I'm that developer who doesn't stress over semicolons... much 😄",
      color: "cyber-cyan"
    },
    {
      icon: FaCode,
      title: "Problem Solver",
      description: "I see bugs as puzzles waiting to be solved (most of the time)",
      color: "cyber-purple"
    },
    {
      icon: FaLightbulb,
      title: "Always Learning",
      description: "Curious about everything - from quantum computing to why cats purr",
      color: "cyber-blue"
    },
    {
      icon: FaCoffee,
      title: "Caffeine Powered",
      description: "My code quality is directly proportional to my coffee intake ☕",
      color: "cyber-green"
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text-purple">
              The Real Me 🤗
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Beyond the code and technical stuff, here's what makes me... well, me!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {traits.map((trait, index) => (
            <AnimatedSection key={trait.title} delay={index * 0.2}>
              <motion.div
                className="glass rounded-lg p-8 h-full"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <trait.icon className={`text-3xl text-${trait.color}`} />
                  <h3 className="text-xl font-bold text-gray-200">{trait.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{trait.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.8}>
          <div className="glass rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-6 neon-text-cyan">
              Fun Fact Alert! 🚨
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              I once spent 3 hours debugging a piece of code, only to realize I forgot to save the file. 
              Classic developer moment! 🤦‍♂️ But hey, that's how we learn, right? Now I'm obsessively 
              hitting Ctrl+S every 5 seconds... old habits die hard!
            </p>
            
            <motion.div
              className="mt-8 flex justify-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-4xl">🤓</span>
              <span className="text-4xl">😅</span>
              <span className="text-4xl">💻</span>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default PersonalitySection