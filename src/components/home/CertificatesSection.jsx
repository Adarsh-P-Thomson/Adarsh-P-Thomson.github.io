'use client'

import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const CertificatesSection = () => {
  const certificates = [
    {
      name: 'Career Essentials in GitHub Copilot Professional Certificate',
      issuer: 'Github',
      date: '2025',
      url: 'https://www.linkedin.com/learning/certificates/34d88fbf95065a5ec29f58fdf9edecb3b225801cb1caa4eeb0a5a3bf4a37d1ba'
    },
    {
      name: 'Introducing Generative AI with AWS',
      issuer: 'Udacity',
      date: '2025',
      url: 'https://www.udacity.com/certificate/e/2a5a4bd8-3c3d-11f0-a66d-07aa5f3bf8e6'
    },
    {
      name: 'Foundations of Digital Marketing ',
      issuer: 'Udacity',
      date: '2025',
      url: 'https://www.udacity.com/certificate/e/fd968046-b7ba-11ef-9e66-d3060daaa429'
    },
    {
      name: 'JavaScript Foundations Professional Certificate by Mozilla',
      issuer: 'Mozilla',
      date: '2024',
      url: 'https://www.linkedin.com/learning/certificates/a07103aeff5625bb825e792bfb28f23e63fb9614cee988545cf490f430b1c927'
    },
    {
      name: 'OpenEDG Python Institute Certificate of Completion',
      issuer: 'OpenEDG',
      date: '2024',
      url: 'https://www.linkedin.com/learning/certificates/3eafcac4e73a5aa72c86877d7fa5fef9c6875fb82bf2a36faa0aeffc0352958a'
    },
    {
      name: 'Build Your Generative AI Productivity Skills with Microsoft and LinkedIn',
      issuer: 'Microsoft and LinkedIn',
      date: '2024',
      url: 'https://www.linkedin.com/learning/certificates/a358bd798c1e9a276e58bdeb7c7895dcd0b748ea471a35f210a6b4e442eeef1b'
    },
    {
      name: 'Career Essentials in Generative AI by Microsoft and LinkedIn',
      issuer: 'Microsoft and LinkedIn',
      date: '2024',
      url: 'https://www.linkedin.com/learning/certificates/6c3e4d3d7f072bcd6411b923cb8edb1b7ba3896c653001a568a3d7b8672e466d'
    }
    ,
    {
      name: 'Career Essentials in Software Development by Microsoft and LinkedIn',
      issuer: 'Microsoft and LinkedIn',
      date: '2024',
      url: 'https://www.linkedin.com/learning/certificates/38e2cefcb962332d9b042e4ded2dbe8ce305fe307bf02085f8433b3db2563916'
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
