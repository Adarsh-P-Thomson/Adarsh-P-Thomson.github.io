'use client'

import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaAws,
  FaDatabase, FaCode
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql,
  SiGraphql, SiRedis, SiKubernetes, SiNextdotjs
} from 'react-icons/si';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'cyber-blue',
      skills: [
        { name: 'React', icon: FaReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ]
    },
    {
      title: 'Backend',
      color: 'cyber-purple',
      skills: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Python', icon: FaPython },
        { name: 'GraphQL', icon: SiGraphql },
        { name: 'REST APIs', icon: FaCode },
      ]
    },
    {
      title: 'Database',
      color: 'cyber-cyan',
      skills: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Redis', icon: SiRedis },
        { name: 'SQL', icon: FaDatabase },
      ]
    },
    {
      title: 'DevOps',
      color: 'cyber-red',
      skills: [
        { name: 'Docker', icon: FaDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'AWS', icon: FaAws },
        { name: 'Git', icon: FaGitAlt },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
            Skills & Expertise
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 0.1}>
              <div className="glass rounded-lg p-6 h-full">
                <h3 className={`text-2xl font-bold mb-6 text-${category.color}`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-4 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-all"
                      whileHover={{ x: 10, scale: 1.05 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <skill.icon className={`text-${category.color} text-2xl`} />
                      <span className="text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
