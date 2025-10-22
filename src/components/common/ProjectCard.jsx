'use client'

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, githubUrl, liveUrl, image }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass rounded-lg overflow-hidden group cursor-pointer"
    >
      {/* Project Image */}
      {image && (
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent" />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 neon-text">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
        
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-3 py-1 rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Links */}
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyber-cyan hover:text-cyber-blue transition-colors"
            >
              <FaGithub size={20} />
              <span>Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyber-purple hover:text-cyber-blue transition-colors"
            >
              <FaExternalLinkAlt size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
