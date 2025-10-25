'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaBriefcase, FaCode, FaCloud, FaRocket } from 'react-icons/fa'

const FreelanceSection = () => {
  const contactDetails = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'adarshpthomson7@gmail.com',
      link: 'mailto:adarshpthomson7@gmail.com',
      description: 'Best for project inquiries'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 9036844542',
      link: 'tel:+919036844542',
      description: 'Direct line for urgent matters'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'Adarsh P Thomson',
      link: 'https://www.linkedin.com/in/adarsh-p-thomson-81990b259/',
      description: 'Professional networking'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: '@Adarsh-P-Thomson',
      link: 'https://github.com/Adarsh-P-Thomson',
      description: 'Check out my code'
    }
  ]

  const services = [
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'React, Node.js, Next.js, Vue.js'
    },
    {
      icon: FaCloud,
      title: 'Cloud Architecture',
      description: 'AWS, GCP, Docker, CI/CD'
    },
    {
      icon: FaBriefcase,
      title: 'Project Leadership',
      description: 'Team management, client relations'
    },
    {
      icon: FaRocket,
      title: 'Rapid Deployment',
      description: '12-hour delivery possible'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-cyber-dark/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text-purple">
              🚀 Want to Hire Me as a Freelancer?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I specialize in building stunning, scalable web applications and cloud infrastructure. 
              From concept to deployment, I'll bring your vision to life with cutting-edge technology.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <service.icon className="text-4xl text-cyber-blue mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-200 mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Contact Details */}
        <AnimatedSection delay={0.4}>
          <div className="glass rounded-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8 neon-text">
              Let's Discuss Your Project
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactDetails.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  className="flex items-start gap-4 p-6 bg-cyber-dark/20 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-all"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-cyber-blue/20 p-3 rounded-lg">
                    <contact.icon className="text-cyber-blue text-xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-200 font-semibold mb-1">{contact.title}</h4>
                    <a 
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-cyber-cyan hover:text-cyber-blue transition-colors text-lg font-medium block"
                    >
                      {contact.value}
                    </a>
                    <p className="text-gray-400 text-sm mt-1">{contact.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Call to Action */}
            <motion.div
              className="text-center mt-12 p-8 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 rounded-lg border border-cyber-purple/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-2xl font-bold text-cyber-purple mb-4">Ready to Get Started?</h4>
              <p className="text-gray-300 mb-6">
                I respond to all inquiries within 24 hours. Let's turn your ideas into reality!
              </p>
              <motion.a
                href="mailto:adarshpthomson7@gmail.com?subject=Freelance Project Inquiry"
                className="inline-block px-8 py-4 bg-cyber-purple text-white font-bold rounded-lg neon-glow hover:bg-cyber-blue transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Project Inquiry
              </motion.a>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default FreelanceSection