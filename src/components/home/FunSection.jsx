import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { FaGamepad, FaSpaceShuttle, FaFilm, FaBook, FaJedi } from 'react-icons/fa';

const FunSection = () => {
  const interests = [
    {
      icon: FaGamepad,
      title: 'Gaming',
      description: 'Cyberpunk 2077, Star Wars games, and competitive FPS',
      color: 'cyber-blue'
    },
    {
      icon: FaJedi,
      title: 'Star Wars Fan',
      description: 'May the Force be with you, always',
      color: 'cyber-purple'
    },
    {
      icon: FaFilm,
      title: 'Sci-Fi Movies',
      description: 'Blade Runner, The Matrix, Interstellar',
      color: 'cyber-cyan'
    },
    {
      icon: FaSpaceShuttle,
      title: 'Space Enthusiast',
      description: 'Fascinated by space exploration and astronomy',
      color: 'cyber-red'
    },
    {
      icon: FaBook,
      title: 'Tech Reading',
      description: 'Constantly learning about new technologies',
      color: 'cyber-blue'
    }
  ];

  const funFacts = [
    "I can code for 12 hours straight with just coffee ☕",
    "My dream is to work at SpaceX 🚀",
    "I've watched every Star Wars movie at least 5 times 🎬",
    "I built my first website at age 14 💻"
  ];

  return (
    <section id="fun" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text-purple">
            Beyond Code
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            What I do when I'm not coding (which is rare!)
          </p>
        </AnimatedSection>

        {/* Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {interests.map((interest, index) => (
            <AnimatedSection key={interest.title} delay={index * 0.1}>
              <motion.div
                className="glass rounded-lg p-6"
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <interest.icon className={`text-${interest.color} text-4xl mb-4`} />
                <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                <p className="text-gray-400 text-sm">{interest.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Fun Facts */}
        <AnimatedSection>
          <div className="glass rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-cyber-cyan text-center">
              Fun Facts About Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-900/30 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-cyber-blue text-2xl font-bold">
                    {index + 1}
                  </span>
                  <p className="text-gray-300">{fact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FunSection;
