'use client'

import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedSection from '../common/AnimatedSection';
import { 
  FaTrophy, 
  FaStar, 
  FaAward, 
  FaMedal, 
  FaRocket, 
  FaLightbulb, 
  FaCode, 
  FaGamepad,
  FaFire,
  FaGem,
  FaBolt,
  FaMagic
} from 'react-icons/fa';

const HomeAchievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [unlockedCount, setUnlockedCount] = useState(0);
  const controls = useAnimation();

  const achievements = [
    {
      id: 'hackathon',
      icon: FaTrophy,
      title: 'Hackathon Destroyer 🏆',
      shortDesc: 'Dominated multiple hackathons',
      fullDesc: 'Won first place in TechCrunch Hackathon 2023 and secured top 3 positions in 5+ other competitions. Specialized in rapid prototyping and innovative solutions.',
      color: 'cyber-blue',
      bgColor: 'from-cyber-blue/20 to-cyber-blue/5',
      stat: '6 Wins',
      category: 'Competition',
      rarity: 'Legendary',
      xp: 2500,
      unlocked: true,
      particles: '✨🏆⚡',
      funFact: 'Built a working prototype in 8 hours that impressed 200+ developers!'
    },
    {
      id: 'opensource',
      icon: FaCode,
      title: 'Open Source Hero 💻',
      shortDesc: 'Contributing to the dev community',
      fullDesc: 'Active contributor to major open-source projects with 50+ merged pull requests. Helping build the future of technology, one commit at a time.',
      color: 'cyber-purple',
      bgColor: 'from-cyber-purple/20 to-cyber-purple/5',
      stat: '50+ PRs',
      category: 'Community',
      rarity: 'Epic',
      xp: 1800,
      unlocked: true,
      particles: '🚀💜🔮',
      funFact: 'My code is running on thousands of machines worldwide!'
    },
    {
      id: 'excellence',
      icon: FaGem,
      title: 'Excellence Achiever 💎',
      shortDesc: 'University project excellence',
      fullDesc: 'Received the Excellence Award for Final Year Project. Created an innovative solution that impressed both faculty and industry experts.',
      color: 'cyber-cyan',
      bgColor: 'from-cyber-cyan/20 to-cyber-cyan/5',
      stat: 'Top 1%',
      category: 'Academic',
      rarity: 'Rare',
      xp: 1200,
      unlocked: true,
      particles: '💎🌟✨',
      funFact: 'Project was featured in university showcase for 2 consecutive years!'
    },
    {
      id: 'problemsolver',
      icon: FaBolt,
      title: 'Algorithm Ninja ⚡',
      shortDesc: 'Master of problem solving',
      fullDesc: 'Ranked in top 5% on LeetCode with 500+ problems solved. Specializing in dynamic programming, graph algorithms, and system design.',
      color: 'cyber-green',
      bgColor: 'from-cyber-green/20 to-cyber-green/5',
      stat: 'Top 5%',
      category: 'Skills',
      rarity: 'Epic',
      xp: 2000,
      unlocked: true,
      particles: '⚡🧠💚',
      funFact: 'Solved a hard problem in 3 different programming languages in one sitting!'
    },
    {
      id: 'fullstack',
      icon: FaRocket,
      title: 'Full-Stack Wizard 🧙‍♂️',
      shortDesc: 'End-to-end development master',
      fullDesc: 'Built 10+ complete applications from database design to user interface. Proficient in modern tech stacks and cloud architecture.',
      color: 'cyber-pink',
      bgColor: 'from-cyber-pink/20 to-cyber-pink/5',
      stat: '10+ Apps',
      category: 'Development',
      rarity: 'Legendary',
      xp: 3000,
      unlocked: true,
      particles: '🚀🌈🔥',
      funFact: 'Can build a working MVP in 48 hours - coffee included!'
    },
    {
      id: 'innovation',
      icon: FaLightbulb,
      title: 'Innovation Pioneer 💡',
      shortDesc: 'Bleeding-edge technology explorer',
      fullDesc: 'Always experimenting with cutting-edge technologies. First to implement new frameworks and contribute innovative solutions to complex problems.',
      color: 'cyber-orange',
      bgColor: 'from-orange-400/20 to-orange-400/5',
      stat: 'Innovator',
      category: 'Research',
      rarity: 'Unique',
      xp: 2200,
      unlocked: true,
      particles: '💡🔬🌟',
      funFact: 'Created a custom file encryption format that nobody asked for but everyone needed!'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (unlockedCount < achievements.length) {
        setUnlockedCount(prev => prev + 1);
        controls.start({
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
          transition: { duration: 0.6 }
        });
      }
    }, 500);

    return () => clearInterval(timer);
  }, [unlockedCount, achievements.length, controls]);

  const getRarityColor = (rarity) => {
    const colors = {
      'Common': 'text-gray-400',
      'Rare': 'text-cyber-cyan',
      'Epic': 'text-cyber-purple',
      'Legendary': 'text-cyber-blue',
      'Unique': 'text-orange-400'
    };
    return colors[rarity] || 'text-gray-400';
  };

  const totalXP = achievements.reduce((sum, achievement) => sum + achievement.xp, 0);

  return (
    <section id="achievements" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyber-purple rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text-purple">
              🎮 Achievement Unlocked!
            </h2>
            <p className="text-center text-gray-400 mb-6 max-w-2xl mx-auto">
              My journey through the coding universe - collect all achievements!
            </p>
            
            {/* XP Bar */}
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Total XP</span>
                <span className="text-sm font-bold text-cyber-cyan">{totalXP.toLocaleString()}</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyber-purple to-cyber-cyan"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Level: Legendary Developer</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={achievement.id} delay={index * 0.1}>
              <motion.div
                className={`glass rounded-lg p-6 cursor-pointer relative overflow-hidden border-2 border-transparent hover:border-${achievement.color}/50 transition-all duration-300`}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedAchievement(achievement)}
                animate={index < unlockedCount ? controls : {}}
                style={{
                  background: index < unlockedCount 
                    ? `linear-gradient(135deg, ${achievement.bgColor.replace('from-', '').replace(' to-', ', ')})` 
                    : 'rgba(17, 17, 17, 0.5)'
                }}
              >
                {/* Rarity Indicator */}
                <div className="absolute top-2 right-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${getRarityColor(achievement.rarity)} bg-gray-900/50`}>
                    {achievement.rarity}
                  </span>
                </div>

                {/* Achievement Icon */}
                <div className="text-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="inline-block"
                  >
                    <achievement.icon 
                      className={`text-${achievement.color} text-5xl mb-2`} 
                    />
                  </motion.div>
                  <div className="text-2xl">{achievement.particles}</div>
                </div>

                {/* Achievement Info */}
                <h3 className="text-lg font-bold mb-2 text-center">{achievement.title}</h3>
                <p className="text-gray-400 text-sm text-center mb-3">{achievement.shortDesc}</p>
                
                <div className="flex justify-between items-center">
                  <span className={`text-${achievement.color} font-bold`}>
                    {achievement.stat}
                  </span>
                  <span className="text-xs text-cyber-cyan">
                    +{achievement.xp} XP
                  </span>
                </div>

                {/* Unlock Animation */}
                {index < unlockedCount && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/20 to-cyber-cyan/20 rounded-lg" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                      ✨
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Achievement Stats */}
        <AnimatedSection delay={0.8}>
          <div className="glass rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-6 neon-text-cyan">
              🏆 Achievement Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-cyber-blue mb-2">{achievements.length}</div>
                <div className="text-gray-400 text-sm">Achievements Unlocked</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-purple mb-2">{totalXP.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Total Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-cyan mb-2">6</div>
                <div className="text-gray-400 text-sm">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-green mb-2">100%</div>
                <div className="text-gray-400 text-sm">Completion Rate</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedAchievement(null)}
        >
          <motion.div
            className={`glass rounded-lg p-8 max-w-md w-full border-2 border-${selectedAchievement.color}/50`}
            initial={{ scale: 0.5, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <selectedAchievement.icon className={`text-${selectedAchievement.color} text-6xl mx-auto mb-4`} />
              <h3 className="text-2xl font-bold mb-2">{selectedAchievement.title}</h3>
              <span className={`text-sm px-3 py-1 rounded-full ${getRarityColor(selectedAchievement.rarity)} bg-gray-900/50`}>
                {selectedAchievement.rarity} • {selectedAchievement.category}
              </span>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed">{selectedAchievement.fullDesc}</p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
              <h4 className="text-sm font-bold text-cyber-cyan mb-2">Fun Fact:</h4>
              <p className="text-sm text-gray-400">{selectedAchievement.funFact}</p>
            </div>
            
            <div className="flex justify-between items-center">
              <span className={`text-${selectedAchievement.color} font-bold text-lg`}>
                {selectedAchievement.stat}
              </span>
              <span className="text-cyber-cyan font-bold">
                +{selectedAchievement.xp} XP
              </span>
            </div>
            
            <button
              onClick={() => setSelectedAchievement(null)}
              className="w-full mt-6 px-4 py-2 bg-cyber-purple text-white rounded-lg hover:bg-cyber-blue transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HomeAchievements;
