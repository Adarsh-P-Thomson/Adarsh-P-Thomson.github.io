'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (could integrate with email service)
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'contact@adarshpthomson.me',
      link: 'mailto:contact@adarshpthomson.me'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'San Francisco, CA',
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
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyber-cyan mb-6">
                Contact Information
              </h3>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="glass rounded-lg p-6 flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-cyber-blue/10 p-4 rounded-lg">
                    <info.icon className="text-cyber-blue text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-200 hover:text-cyber-cyan transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-200">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Visual Element */}
              <motion.div
                className="hidden lg:block mt-12 p-8 glass rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-cyber-purple text-lg italic">
                  "Let's build something amazing together!"
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="glass rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyber-blue focus:outline-none text-gray-200"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyber-blue focus:outline-none text-gray-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyber-blue focus:outline-none text-gray-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyber-blue focus:outline-none text-gray-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-cyber-blue text-cyber-dark font-bold rounded-lg neon-glow hover:bg-cyber-cyan transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
