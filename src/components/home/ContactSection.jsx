'use client'

import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import socialProfiles from '../../../onlineprofiles.json';

const ContactSection = () => {
  const getIconComponent = (iconName) => {
    const icons = {
      FaGithub,
      FaLinkedin, 
      FaInstagram,
      FaYoutube,
      FaTwitter
    };
    return icons[iconName] || FaGithub;
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'adarshpthomson7@gmail.com',
      link: 'mailto:adarshpthomson7@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 9036844542',
      link: 'tel:+919036844542'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Bangalore, India',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-cyber-dark/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Ready to collaborate? Visit my dedicated contact page for detailed ways to reach me!
          </p>
        </AnimatedSection>

        {/* Quick Contact Info */}
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="glass rounded-lg p-6 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-cyber-blue/10 p-4 rounded-lg w-fit mx-auto mb-4">
                    <info.icon className="text-cyber-blue text-3xl" />
                  </div>
                  <h4 className="text-gray-400 text-sm mb-2">{info.title}</h4>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-gray-200 hover:text-cyber-cyan transition-colors font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-200 font-medium">{info.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={0.3}>
            <motion.div
              className="text-center p-8 glass rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-gray-300 text-lg mb-6">Connect with me on social media</h4>
              <div className="flex justify-center gap-6 mb-8">
                {socialProfiles.socialProfiles.map((profile, index) => {
                  const IconComponent = getIconComponent(profile.icon);
                  return (
                    <motion.a
                      key={profile.name}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyber-cyan transition-colors p-3 rounded-lg hover:bg-cyber-cyan/10"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      title={profile.name}
                    >
                      <IconComponent size={24} />
                    </motion.a>
                  );
                })}
              </div>

              {/* Call to Action */}
              <motion.div
                className="pt-6 border-t border-gray-700"
              >
                <p className="text-gray-300 mb-6">
                  For detailed contact options and collaboration opportunities
                </p>
                <motion.a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-cyber-purple text-white font-bold rounded-lg neon-glow hover:bg-cyber-blue transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Contact Page
                </motion.a>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                className="mt-8 p-6"
                animate={{ y: [0, -10] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <p className="text-cyber-purple text-lg italic">
                  "Let's build something amazing together!"
                </p>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
