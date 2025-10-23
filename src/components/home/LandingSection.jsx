'use client'

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import GlitchText from '../common/GlitchText';

const LandingSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-xl md:text-2xl text-cyber-cyan mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <GlitchText text="Adarsh P Thomson" className="neon-text" />
          </h1>
          
          <motion.div
            className="text-2xl md:text-4xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-cyber-purple">Software Developer</span>
            <span className="mx-3">|</span>
            <span className="text-cyber-cyan">Tech Enthusiast</span>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            As a Cloud Engineer and motivated SDE, I architect and execute innovative solutions,
            transforming ambitious ideas into reality.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-cyber-blue text-cyber-dark font-bold rounded-lg neon-glow hover:bg-cyber-cyan transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-cyber-purple text-cyber-purple font-bold rounded-lg hover:bg-cyber-purple/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyber-cyan cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default LandingSection;
