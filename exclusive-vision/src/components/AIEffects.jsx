import { useEffect, useRef } from 'react';
import './AIEffects.css';

const AIEffects = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const connectionsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    const drawParticle = (particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity + Math.sin(particle.pulse) * 0.1;
      ctx.fillStyle = '#8aafce';
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawConnection = (p1, p2, distance, maxDistance) => {
      const opacity = 1 - (distance / maxDistance);
      ctx.save();
      ctx.globalAlpha = opacity * 0.1;
      ctx.strokeStyle = '#24256d';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.restore();
    };

    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += 0.02;

        // Boundary bounce
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      });
    };

    const drawConnections = () => {
      const maxDistance = 120;
      particlesRef.current.forEach((particle, i) => {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            drawConnection(particle, other, distance, maxDistance);
          }
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateParticles();
      drawConnections();
      
      particlesRef.current.forEach(drawParticle);
      
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="ai-effects">
      <canvas 
        ref={canvasRef}
        className="ai-canvas"
      />
      <div className="ai-floating-elements">
        <div className="ai-orb ai-orb-1"></div>
        <div className="ai-orb ai-orb-2"></div>
        <div className="ai-orb ai-orb-3"></div>
      </div>
    </div>
  );
};

export default AIEffects; 