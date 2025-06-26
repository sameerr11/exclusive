import './Hero.css';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Exclusive Vision</h1>
          <p className="hero-subtitle">Where Vision Meets Innovation</p>
          <button onClick={scrollToServices} className="btn btn-primary hero-cta">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 