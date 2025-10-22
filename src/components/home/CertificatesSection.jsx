'use client'

import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const CertificatesSection = () => {
  const certificates = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      url: '#'
    },
    {
      name: 'Professional Scrum Master',
      issuer: 'Scrum.org',
      date: '2023',
      url: '#'
    },
    {
      name: 'React Advanced Patterns',
      issuer: 'Frontend Masters',
      date: '2022',
      url: '#'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      url: '#'
    },
    {
      name: 'Docker & Kubernetes',
      issuer: 'Linux Foundation',
      date: '2021',
      url: '#'
    },
    {
      name: 'Full-Stack Web Development',
      issuer: 'Coursera',
      date: '2021',
      url: '#'
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-gradient-to-b from-cyber-dark/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
            Certifications
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Professional certifications and continuous learning
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <AnimatedSection key={cert.name} delay={index * 0.05}>
              <motion.a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-lg p-6 block group hover:border-cyber-cyan border border-transparent transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <FaCertificate className="text-cyber-cyan text-3xl" />
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-cyber-cyan transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-cyber-blue">
                  {cert.name}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
