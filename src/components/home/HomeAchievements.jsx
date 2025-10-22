'use client'

import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { FaTrophy, FaStar, FaAward, FaMedal } from 'react-icons/fa';

const HomeAchievements = () => {
  const achievements = [
    {
      icon: FaTrophy,
      title: 'Hackathon Winner',
      description: 'First place in TechCrunch Hackathon 2023',
      color: 'cyber-blue',
      stat: '1st Place'
    },
    {
      icon: FaStar,
      title: 'Open Source Contributor',
      description: 'Active contributor to major open-source projects',
      color: 'cyber-purple',
      stat: '50+ PRs'
    },
    {
      icon: FaAward,
      title: 'Best Project Award',
      description: 'University Final Year Project Excellence Award',
      color: 'cyber-cyan',
      stat: 'Excellence'
    },
    {
      icon: FaMedal,
      title: 'Code Champion',
      description: 'Top 5% on LeetCode problem solving',
      color: 'cyber-red',
      stat: 'Top 5%'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text-purple">
            Achievements
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Milestones and recognitions along my journey
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={achievement.title} delay={index * 0.1}>
              <motion.div
                className="glass rounded-lg p-6 text-center h-full flex flex-col items-center justify-center"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <achievement.icon 
                  className={`text-${achievement.color} text-5xl mb-4`} 
                />
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{achievement.description}</p>
                <span className={`text-${achievement.color} font-bold text-lg`}>
                  {achievement.stat}
                </span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAchievements;
