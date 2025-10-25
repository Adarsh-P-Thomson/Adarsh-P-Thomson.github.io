'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaUsers, FaTrophy, FaCode, FaLeaf } from 'react-icons/fa'

const DetailedExperience = () => {
  const experiences = [
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Independent Contractor',
      period: 'September 2024 – Present',
      location: 'Remote',
      type: 'Freelance',
      description: 'Leading development of scalable web applications and cloud infrastructure for various clients, specializing in rapid deployment and cutting-edge technologies.',
      achievements: [
        'Successfully delivered 5+ production websites with 100% client satisfaction',
        'Implemented AWS and GCP cloud infrastructure solutions reducing costs by 40%',
        'Led cross-functional teams and managed client relationships across multiple projects',
        'Achieved 12-hour delivery record for Barzel Engineering website',
        'Reduced deployment time by implementing CI/CD pipelines'
      ],
      technologies: ['Next.js', 'React', 'Vue.js', 'Node.js', 'AWS', 'GCP', 'Docker', 'Java', 'Spring Boot'],
      icon: FaCode,
      color: 'cyber-blue'
    },
    {
      title: 'Chair & Founder Chair',
      company: 'DSATM IEEE Student Branch | IEEE Computer Society Chapter',
      period: 'November 2024 – Present',
      location: 'Bangalore, India',
      type: 'Leadership',
      description: 'Founded and chair the IEEE Computer Society Student Branch Chapter at DSATM, organizing major technical events and fostering innovation in the student community.',
      achievements: [
        'Founded the IEEE Computer Society Student Branch Chapter at DSATM from scratch',
        'Organized IEEE Capture the Flag competition (December 2024) with 200+ participants',
        'Led the Synthack DSATM IEEE Hackathon (April 2025) featuring industry mentorship',
        'Developed leadership, teamwork, and event management skills',
        'Built partnerships with industry professionals for student mentorship'
      ],
      technologies: ['Event Management', 'Leadership', 'Team Building', 'Public Speaking', 'Project Coordination'],
      icon: FaTrophy,
      color: 'cyber-purple'
    },
    {
      title: 'Founder President',
      company: 'Maker Space DSATM',
      period: 'August 2024 – Present',
      location: 'Bangalore, India',
      type: 'Entrepreneurship',
      description: 'Founded Maker Space DSATM to foster innovation and collaboration among students, creating a platform for hands-on learning and project development.',
      achievements: [
        'Founded the innovation hub from concept to fully operational space',
        'Led the official Inauguration event (October 2024) with 300+ attendees',
        'Organized flagship showcase PitchCraft 2025 (May 2025) for student entrepreneurs',
        'Conducted 15+ workshops on emerging technologies and innovation',
        'Mentored 25+ student projects across various technology domains'
      ],
      technologies: ['Innovation Management', 'Workshop Facilitation', 'Mentoring', 'Entrepreneurship', 'Community Building'],
      icon: FaLeaf,
      color: 'cyber-cyan'
    },
    {
      title: 'Computer Science Student',
      company: 'Dayananda Sagar Academy of Technology and Management',
      period: 'August 2022 – June 2026',
      location: 'Bangalore, India',
      type: 'Education',
      description: 'Pursuing B.E. in Computer Science and Engineering with focus on algorithms, full-stack development, and cloud technologies.',
      achievements: [
        'Maintained 7.7 CGPA while actively participating in extracurricular activities',
        'Completed coursework in Data Structures, Algorithms, DBMS, and Cloud Computing',
        'Developed strong foundation in multiple programming languages',
        'Participated in various hackathons and coding competitions',
        'Built portfolio of personal and academic projects'
      ],
      technologies: ['Java', 'Python', 'C', 'JavaScript', 'Data Structures', 'Algorithms', 'Database Management'],
      icon: FaBriefcase,
      color: 'cyber-green'
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      'cyber-blue': 'text-cyber-blue border-cyber-blue/20 bg-cyber-blue/5',
      'cyber-purple': 'text-cyber-purple border-cyber-purple/20 bg-cyber-purple/5',
      'cyber-cyan': 'text-cyber-cyan border-cyber-cyan/20 bg-cyber-cyan/5',
      'cyber-green': 'text-cyber-green border-cyber-green/20 bg-cyber-green/5'
    }
    return colorMap[color] || colorMap['cyber-blue']
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-cyber-dark/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
            Professional Experience
          </h2>
        </AnimatedSection>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.title} delay={index * 0.1}>
              <motion.div
                className="glass rounded-lg p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Accent Line */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-${exp.color} via-${exp.color} to-${exp.color}`} />
                
                <div className="ml-4">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <exp.icon className={`text-2xl ${getColorClasses(exp.color).split(' ')[0]}`} />
                        <h3 className="text-2xl font-bold text-gray-200">{exp.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(exp.color)}`}>
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-xl text-cyber-cyan font-semibold mb-2">{exp.company}</h4>
                    </div>
                    <div className="text-right text-gray-400">
                      <div className="flex items-center gap-2 mb-1">
                        <FaCalendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-200 mb-3 flex items-center gap-2">
                      <FaTrophy className="text-cyber-yellow" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="text-gray-300 flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.1) + (achIndex * 0.05) }}
                        >
                          <span className={`w-2 h-2 rounded-full ${getColorClasses(exp.color).split(' ')[2]} mt-2 flex-shrink-0`} />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-200 mb-3 flex items-center gap-2">
                      <FaCode className="text-cyber-cyan" />
                      Technologies & Skills
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm ${getColorClasses(exp.color)}`}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.1) + (techIndex * 0.02) }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DetailedExperience