'use client'

import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Reduced application load time by 60% through optimization',
        'Led migration to microservices architecture',
        'Implemented CI/CD pipeline reducing deployment time by 40%'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Co.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects, focusing on modern web technologies and user experience.',
      achievements: [
        'Built 15+ responsive web applications',
        'Integrated third-party APIs and payment systems',
        'Improved code quality with comprehensive testing'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Studio',
      period: '2018 - 2020',
      description: 'Created engaging user interfaces and collaborated with designers to bring creative visions to life.',
      achievements: [
        'Developed pixel-perfect responsive designs',
        'Improved website accessibility scores by 40%',
        'Implemented complex animations and interactions'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent to-cyber-dark/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
            Work Experience
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            My professional journey in the world of software development
          </p>
        </AnimatedSection>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.title} delay={index * 0.1}>
              <motion.div
                className="glass rounded-lg p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {/* Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-cyan" />
                
                <div className="ml-4">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyber-blue mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-400">
                        <span className="flex items-center gap-2">
                          <FaBriefcase />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaCalendar />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-cyber-cyan font-semibold">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
