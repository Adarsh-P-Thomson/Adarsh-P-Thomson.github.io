'use client'

import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { FaBriefcase, FaCalendar, FaArrowRight } from 'react-icons/fa';

const ExperienceSection = () => {
  const highlights = [
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Independent Contractor',
      period: 'Sep 2024 – Present',
      description: 'Building scalable web applications and cloud infrastructure for multiple clients',
      impact: '5+ Live Websites Delivered'
    },
    {
      title: 'IEEE Chair & Founder',
      company: 'DSATM IEEE Student Branch',
      period: 'Nov 2024 – Present',
      description: 'Leading technical events and fostering innovation in student community',
      impact: '300+ Students Impacted'
    },
    {
      title: 'Founder President',
      company: 'Maker Space DSATM',
      period: 'Aug 2024 – Present',
      description: 'Created innovation hub for hands-on learning and project development',
      impact: '25+ Projects Mentored'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent to-cyber-dark/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
            Leadership & Experience
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Building solutions, leading teams, and creating impact through technology
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {highlights.map((exp, index) => (
            <AnimatedSection key={exp.title} delay={index * 0.1}>
              <motion.div
                className="glass rounded-lg p-6 h-full"
                whileHover={{ scale: 1.03, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <FaBriefcase className="text-cyber-blue text-xl mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-200 mb-1">{exp.title}</h3>
                    <h4 className="text-cyber-cyan text-sm font-medium mb-2">{exp.company}</h4>
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                      <FaCalendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="pt-3 border-t border-gray-700">
                  <span className="text-cyber-purple font-semibold text-sm">{exp.impact}</span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <div className="glass rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 neon-text-purple">
                Want to Learn More About My Journey?
              </h3>
              <p className="text-gray-300 mb-6">
                Explore my detailed work experience, achievements, and the impact I've made
              </p>
              <motion.a
                href="/experience"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyber-purple text-white font-bold rounded-lg neon-glow hover:bg-cyber-blue transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Full Experience
                <FaArrowRight />
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceSection;