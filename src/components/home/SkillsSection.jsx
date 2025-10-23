 'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedSection from '../common/AnimatedSection';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaAws,
  FaDatabase, FaCode, FaJava, FaGithub, FaBrain, FaChartLine
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiJavascript,
  SiSpringboot, SiGooglecloud, SiFigma, SiVultr, SiOpenai, SiC
} from 'react-icons/si';

const SkillsSection = () => {
  // Skills data with color mappings
  const skillCategories = [
    {
      title: 'Programming Languages',
      color: 'cyber-blue',
      colorClass: 'text-cyber-blue',
      borderClass: 'border-cyber-blue/20',
      bgClass: 'bg-cyber-blue/5',
      skills: [
        { name: 'Java', icon: FaJava },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Python', icon: FaPython },
        { name: 'C', icon: SiC },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      color: 'cyber-purple',
      colorClass: 'text-cyber-purple',
      borderClass: 'border-cyber-purple/20',
      bgClass: 'bg-cyber-purple/5',
      skills: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Spring Boot', icon: SiSpringboot },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ],
    },
    {
      title: 'Databases',
      color: 'cyber-cyan',
      colorClass: 'text-cyber-cyan',
      borderClass: 'border-cyber-cyan/20',
      bgClass: 'bg-cyber-cyan/5',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MySQL', icon: SiMysql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'SQL', icon: FaDatabase },
      ],
    },
    {
      title: 'Cloud & DevOps',
      color: 'cyber-red',
      colorClass: 'text-cyber-red',
      borderClass: 'border-cyber-red/20',
      bgClass: 'bg-cyber-red/5',
      skills: [
        { name: 'Google Cloud (GCP)', icon: SiGooglecloud },
        { name: 'AWS', icon: FaAws },
        { name: 'Docker', icon: FaDocker },
        { name: 'Git', icon: FaGitAlt },
      ],
    },
    {
      title: 'Tools & Platforms',
      color: 'cyber-blue',
      colorClass: 'text-cyber-blue',
      borderClass: 'border-cyber-blue/20',
      bgClass: 'bg-cyber-blue/5',
      skills: [
        { name: 'Figma', icon: SiFigma },
        { name: 'GitHub', icon: FaGithub },
        { name: 'GCP Cloud SQL', icon: SiGooglecloud },
        { name: 'Vultr', icon: SiVultr },
      ],
    },
    {
      title: 'AI / ML',
      color: 'cyber-cyan',
      colorClass: 'text-cyber-cyan',
      borderClass: 'border-cyber-cyan/20',
      bgClass: 'bg-cyber-cyan/5',
      skills: [
        { name: 'Machine Learning', icon: FaBrain },
        { name: 'Generative AI', icon: SiOpenai },
        { name: 'NLP', icon: FaCode },
        { name: 'Data Analysis', icon: FaChartLine },
      ],
    },
  ];

  // Expand/collapse functionality
  const [expanded, setExpanded] = useState({});
  const toggleExpanded = (title) => setExpanded((s) => ({ ...s, [title]: !s[title] }));

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 neon-text">
            Skills & Expertise
          </h2>
          <p className="text-center text-gray-400 text-sm sm:text-base mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
            Tools I use across full‑stack, cloud, and AI — aligned with my recent projects
          </p>
        </AnimatedSection>

        {/* Responsive Grid - Fluid and Flexible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const isExpanded = !!expanded[category.title];
            const maxVisible = 4;
            const displaySkills = isExpanded ? category.skills : category.skills.slice(0, maxVisible);
            const hasMore = category.skills.length > maxVisible;

            return (
              <AnimatedSection key={category.title} delay={categoryIndex * 0.1}>
                <motion.div
                  className={`glass rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 h-full transition-all duration-300 hover:shadow-xl ${category.borderClass} border`}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  {/* Category Header */}
                  <div className={`mb-5 sm:mb-6 pb-3 sm:pb-4 border-b ${category.borderClass}`}>
                    <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${category.colorClass}`}>
                      {category.title}
                    </h3>
                    <div className={`h-1 w-12 sm:w-16 mt-2 rounded-full ${category.bgClass}`}></div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2 sm:space-y-3">
                    {displaySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className={`group flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-200 border border-white/5 hover:border-white/10 ${category.bgClass} hover:${category.borderClass}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ 
                          x: 6,
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <skill.icon 
                          className={`${category.colorClass} text-xl sm:text-2xl drop-shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200`} 
                        />
                        <span className="text-gray-300 font-medium text-sm sm:text-base leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Expand/Collapse Button */}
                  {hasMore && (
                    <motion.div 
                      className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <button
                        onClick={() => toggleExpanded(category.title)}
                        className={`text-xs sm:text-sm font-medium underline decoration-dotted hover:no-underline transition-all ${category.colorClass} hover:opacity-80 flex items-center gap-1`}
                      >
                        {isExpanded ? (
                          <>
                            <span>Show less</span>
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          </>
                        ) : (
                          <>
                            <span>Show all ({category.skills.length})</span>
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </>
                        )}
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Optional: Skills Summary Footer */}
        <AnimatedSection delay={0.6}>
          <motion.div 
            className="mt-12 sm:mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-xs sm:text-sm">
              {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} skills across {skillCategories.length} categories
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;
