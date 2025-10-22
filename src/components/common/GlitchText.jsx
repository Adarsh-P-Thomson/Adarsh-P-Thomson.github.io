import { useState, useEffect } from 'react';

const GlitchText = ({ text, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`glitch-text ${isGlitching ? 'animate-glitch' : ''} ${className}`}
      data-text={text}
    >
      {text}
    </span>
  );
};

export default GlitchText;
