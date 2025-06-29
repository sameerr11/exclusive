import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Exclusive Vision';
  
  useEffect(() => {
    let timeoutId;
    
    const typeText = () => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
        timeoutId = setTimeout(typeText, 150); // Typing speed
      } else {
        setIsTyping(false);
        timeoutId = setTimeout(() => {
          eraseText();
        }, 2000); // Pause before erasing
      }
    };
    
    const eraseText = () => {
      if (typedText.length > 0) {
        setTypedText(typedText.slice(0, -1));
        timeoutId = setTimeout(eraseText, 100); // Erasing speed
      } else {
        setIsTyping(true);
        timeoutId = setTimeout(typeText, 500); // Pause before retyping
      }
    };
    
    if (isTyping && typedText.length < fullText.length) {
      timeoutId = setTimeout(typeText, 150);
    } else if (!isTyping && typedText.length > 0) {
      timeoutId = setTimeout(eraseText, 100);
    } else if (typedText.length === 0) {
      timeoutId = setTimeout(typeText, 500);
    }
    
    return () => clearTimeout(timeoutId);
  }, [typedText, isTyping, fullText]);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-tech-bg">
        <div className="circuit-pattern"></div>
        <div className="data-nodes">
          <div className="node node-1"></div>
          <div className="node node-2"></div>
          <div className="node node-3"></div>
          <div className="node node-4"></div>
          <div className="node node-5"></div>
        </div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="typing-text">
              {typedText}
              <span className="typing-cursor">|</span>
            </span>
          </h1>
          <p className="hero-subtitle">Where Vision Meets Innovation</p>
          <button onClick={scrollToServices} className="btn btn-primary hero-cta">
            <span>Explore Services</span>
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 