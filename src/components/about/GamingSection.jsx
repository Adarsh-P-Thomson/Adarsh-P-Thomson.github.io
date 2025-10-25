'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaGamepad, FaCar, FaCrosshairs, FaSteam, FaDiscord } from 'react-icons/fa'

const GamingSection = () => {
  const games = [
    {
      title: "Need for Speed: Most Wanted 2005",
      description: "The game that started it all! 🏁",
      category: "Racing",
      icon: FaCar,
      color: "cyber-blue",
      isFirst: true,
      memory: "My first gaming addiction! Spent countless hours customizing cars and outrunning cops."
    },
    {
      title: "Grand Theft Auto Series",
      description: "SA, Vice City, IV - The holy trinity! 🌆",
      category: "Open World",
      icon: FaCar,
      color: "cyber-purple",
      memory: "Vice City's 80s vibe + SA's grove street = Pure nostalgia!"
    },
    {
      title: "Sniper Elite 1-4",
      description: "Precision gaming at its finest 🎯",
      category: "Tactical Shooter",
      icon: FaCrosshairs,
      color: "cyber-cyan",
      memory: "Those bullet-time shots never get old. Physics + strategy = perfection!"
    },
    {
      title: "NFS Hot Pursuit",
      description: "High-speed police chases! 🚔",
      category: "Racing",
      icon: FaCar,
      color: "cyber-green",
      memory: "Being both the hunter and the hunted - what a concept!"
    }
  ]

  const currentStats = [
    { label: "Gaming Since", value: "2005", icon: "🎮" },
    { label: "Favorite Genre", value: "Racing & Strategy", icon: "🏁" },
    { label: "Current Status", value: "Still Playing!", icon: "🔥" },
    { label: "Gaming Setup", value: "PC Master Race", icon: "💻" }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="neon-text-green">Gaming Life</span> 🎮
            </h2>
            <div className="glass rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                For fun, I dive into virtual worlds! My gaming journey started with 
                <span className="text-cyber-blue font-bold"> NFS Most Wanted 2005</span> and it's been 
                an epic adventure ever since. From high-speed chases to tactical precision - 
                I love games that challenge both reflexes and strategy! 🚗💨
              </p>
              <motion.div
                className="text-3xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎮➡️😍
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Gaming Stats */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {currentStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                <div className="font-bold text-cyber-cyan">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {games.map((game, index) => (
            <AnimatedSection key={game.title} delay={index * 0.2}>
              <motion.div
                className={`glass rounded-lg p-6 relative ${game.isFirst ? 'border-2 border-cyber-blue/50' : ''}`}
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {game.isFirst && (
                  <div className="absolute -top-3 -right-3">
                    <motion.div
                      className="bg-cyber-blue text-cyber-dark px-3 py-1 rounded-full text-sm font-bold"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      First Game! 🌟
                    </motion.div>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <game.icon className={`text-3xl text-${game.color}`} />
                  <div>
                    <h3 className="text-lg font-bold text-gray-200">{game.title}</h3>
                    <p className="text-sm text-gray-400">{game.category}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-3">{game.description}</p>
                
                <div className="bg-gray-900/50 rounded-lg p-3">
                  <p className="text-sm text-gray-400 italic">"{game.memory}"</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Gaming Connect Section */}
        <AnimatedSection delay={0.8}>
          <div className="glass rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-6 neon-text-purple">
              Want to Play Together? 🎮
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              I'm always down for some co-op action or friendly competition! 
              Hit me up if you want to team up for some epic gaming sessions. 
              Fair warning: I take racing games very seriously! 😄
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                className="flex items-center gap-3 glass rounded-lg p-4 border border-cyber-blue/30"
                whileHover={{ scale: 1.05, borderColor: 'rgb(0, 255, 255)' }}
              >
                <FaSteam className="text-2xl text-cyber-blue" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Steam ID</div>
                  <div className="font-bold text-cyber-blue">killmonger</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 glass rounded-lg p-4 border border-cyber-purple/30"
                whileHover={{ scale: 1.05, borderColor: 'rgb(147, 51, 234)' }}
              >
                <FaDiscord className="text-2xl text-cyber-purple" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Discord</div>
                  <div className="font-bold text-cyber-purple">killmonger.2328</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 flex justify-center gap-4 text-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎮
              </motion.span>
              <span>🤝</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎯
              </motion.span>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default GamingSection