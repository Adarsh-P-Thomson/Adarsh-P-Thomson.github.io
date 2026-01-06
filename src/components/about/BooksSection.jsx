'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { FaBook, FaSearch, FaHeart, FaBrain } from 'react-icons/fa'

const BooksSection = () => {
  const bookCategories = [
    {
      icon: FaSearch,
      title: "Mystery & Detective",
      books: ["Complete Sherlock Holmes", "Hardy Boys Series", "Secret Seven"],
      description: "Because who doesn't love a good mystery? 🕵️‍♂️",
      color: "cyber-blue",
      emoji: "🔍"
    },
    {
      icon: FaBrain,
      title: "Self-Help & Strategy",
      books: ["The Art of War - Sun Tzu", "Meditations - Marcus Aurelius", "Atomic Habits"],
      description: "Leveling up my mindset and strategies! 🧠",
      color: "cyber-purple",
      emoji: "🎯"
    }
  ]

  const funFacts = [
    "I've read more Hardy Boys books than I've written unit tests (working on that ratio) 🕵️",
    "Sherlock Holmes taught me debugging before I even knew what a bug was 🐛",
    "I finish books faster than I finish side projects... wait, that's too real 📚",
    "Sun Tzu's strategies work surprisingly well in code reviews 🎯"
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-cyber-dark/10">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="neon-text-blue">I Love Books</span> 
              <span className="text-gray-400"> (Weird, I Know!) 📚</span>
            </h2>
            <div className="glass rounded-lg p-6 max-w-3xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed">
                Yep, I'm a <span className="text-cyber-cyan font-bold">nerd</span> and proud of it! 🤓 
                While other kids were outside playing, I was inside solving mysteries with 
                <span className="text-cyber-purple font-semibold"> Sherlock Holmes</span> and 
                <span className="text-cyber-blue font-semibold"> Hardy Boys</span>. 
                Now I apply the same detective skills to hunt down bugs in my code! 
              </p>
              <motion.div
                className="mt-4 text-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🕵️‍♂️➡️💻
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {bookCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.3}>
              <motion.div
                className={`glass rounded-lg p-8 border-2 border-${category.color}/20 hover:border-${category.color}/40 transition-all duration-300`}
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <category.icon className={`text-3xl text-${category.color}`} />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-200">{category.title}</h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                  <span className="text-3xl">{category.emoji}</span>
                </div>

                <div className="space-y-3">
                  {category.books.map((book, bookIndex) => (
                    <motion.div
                      key={book}
                      className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (bookIndex * 0.1) }}
                      whileHover={{ x: 10 }}
                    >
                      <FaBook className={`text-${category.color} flex-shrink-0`} />
                      <span className="text-gray-300 font-medium">{book}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6}>
          <div className="glass rounded-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8 neon-text-cyan">
              Book Nerd Confessions 🤫
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-900/30 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-cyber-cyan text-xl flex-shrink-0">📖</span>
                  <p className="text-gray-300">{fact}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-lg text-gray-400 mb-4">
                Currently Reading: <span className="text-cyber-purple font-semibold">Clean Code by Robert Martin</span>
              </p>
              <div className="text-2xl">📚➕💻=🚀</div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default BooksSection