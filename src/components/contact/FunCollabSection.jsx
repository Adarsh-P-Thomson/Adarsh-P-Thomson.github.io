'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { 
  FaDiscord, FaInstagram, FaTwitter, FaYoutube, FaGithub, 
  FaGamepad, FaCode, FaHeart, FaFire, FaRocket, FaStar 
} from 'react-icons/fa'
import { SiTwitch, SiSteam } from 'react-icons/si'
import socialProfiles from '../../../onlineprofiles.json'

const FunCollabSection = () => {
  const funContacts = [
    {
      icon: FaDiscord,
      title: 'Discord',
      value: 'stark1ll3r',
      link: '#',
      description: 'Gaming & coding sessions',
      color: 'text-purple-400'
    },
    {
      icon: FaInstagram,
      title: 'Instagram',
      value: '@_stark1ll3r_',
      link: 'https://www.instagram.com/_stark1ll3r_/',
      description: 'Life behind the code',
      color: 'text-pink-400'
    },
    {
      icon: FaTwitter,
      title: 'Twitter',
      value: '@adarsh_p_t',
      link: 'https://x.com/adarsh_p_t',
      description: 'Tech thoughts & memes',
      color: 'text-blue-400'
    },
    {
      icon: FaYoutube,
      title: 'YouTube',
      value: 'HarbingerCodes',
      link: 'https://www.youtube.com/@HarbingerCodes',
      description: 'Coding tutorials & vlogs',
      color: 'text-red-400'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: '@Adarsh-P-Thomson',
      link: 'https://github.com/Adarsh-P-Thomson',
      description: 'Open source collaboration',
      color: 'text-gray-300'
    },
    {
      icon: SiSteam,
      title: 'Steam',
      value: 'stark1ll3r',
      link: '#',
      description: 'Gaming together',
      color: 'text-blue-300'
    }
  ]

  const activities = [
    {
      icon: FaGamepad,
      title: 'Gaming',
      description: 'FPS, Strategy, Co-op adventures',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaCode,
      title: 'Coding',
      description: 'Open source projects, hackathons',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Brainstorming next big ideas',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaStar,
      title: 'Learning',
      description: 'New tech, courses, experiments',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cyber-dark/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text-cyan">
              🎮 Want to Have Some Fun Together?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Life's too short to just work! Let's game together, collaborate on cool projects, 
              or just chat about the latest tech trends. I'm always up for new adventures!
            </p>
          </div>
        </AnimatedSection>

        {/* Activities Grid */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                className={`glass rounded-lg p-6 text-center relative overflow-hidden`}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-5`}></div>
                <activity.icon className="text-4xl text-cyber-cyan mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-200 mb-2">{activity.title}</h3>
                <p className="text-gray-400 text-sm">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Fun Contact Details */}
        <AnimatedSection delay={0.4}>
          <div className="glass rounded-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8 neon-text">
              Let's Connect & Have Fun! 🔥
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {funContacts.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  className="p-6 bg-cyber-dark/20 rounded-lg border border-cyber-cyan/20 hover:border-cyber-cyan/40 transition-all text-center group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <contact.icon className={`text-4xl ${contact.color} mx-auto`} />
                  </motion.div>
                  <h4 className="text-gray-200 font-semibold mb-2">{contact.title}</h4>
                  <a 
                    href={contact.link !== '#' ? contact.link : undefined}
                    target={contact.link.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`${contact.color} hover:text-cyber-cyan transition-colors text-lg font-medium block mb-2 ${contact.link === '#' ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    {contact.value}
                  </a>
                  <p className="text-gray-400 text-sm">{contact.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Fun Call to Action */}
            <motion.div
              className="text-center mt-12 p-8 bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 rounded-lg border border-cyber-cyan/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/5 to-transparent"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <h4 className="text-2xl font-bold text-cyber-cyan mb-4 flex items-center justify-center gap-2">
                <FaHeart className="text-red-400" />
                Ready for Some Epic Adventures?
                <FaFire className="text-orange-400" />
              </h4>
              <p className="text-gray-300 mb-6">
                Drop me a message on any platform! Whether it's a midnight gaming session, 
                brainstorming a crazy project idea, or just geeking out about the latest tech - I'm in! 🚀
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="https://www.instagram.com/_stark1ll3r_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram className="inline mr-2" />
                  DM on Instagram
                </motion.a>
                <motion.a
                  href="https://x.com/adarsh_p_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter className="inline mr-2" />
                  Tweet Me
                </motion.a>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default FunCollabSection