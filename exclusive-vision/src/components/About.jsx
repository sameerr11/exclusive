import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        {/* About Us Section */}
        <div className="about-content">
          <div className="about-card">
            <div className="about-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.2 8.5L20 9L14 15L15.8 21L12 18L8.2 21L10 15L4 9L10.8 8.5L12 2Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h2>About Us</h2>
            <div className="about-description">
              <p>
                <strong>Founded in Tripoli, Lebanon</strong>, Exclusive Vision is a premier end-to-end IT solutions company, 
                redefining the digital experience across the globe. We specialize in delivering cutting-edge, 
                customized, and scalable technology solutions that drive innovation and business success.
              </p>
              <p>
                Whether you're a startup, SME, or enterprise, Exclusive Vision empowers you to lead in your 
                digital transformation journey.
              </p>
              <p>
                With a passionate team of developers, designers, analysts, strategists, and certified professionals, 
                we bring technology and creativity together to build the future.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="vision-mission-section">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Vision</h3>
              <p>
                To be the region's most trusted IT solutions partner by delivering futuristic, 
                intelligent, and human-centered technology solutions.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Mission</h3>
              <p>
                To empower businesses through excellence in digital services, leveraging innovation, 
                certified expertise, and next-gen technologies to solve real-world challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="core-values-section">
          <h2 className="section-title">Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon innovation">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.2 8.5L20 9L14 15L15.8 21L12 18L8.2 21L10 15L4 9L10.8 8.5L12 2Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Innovation First</h4>
              <p>We lead with creativity and the latest technologies.</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon trust">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Integrity & Trust</h4>
              <p>Transparent and honest relationships with clients.</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon excellence">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.5 7L22 8L17 13L18.5 20L12 16.5L5.5 20L7 13L2 8L8.5 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Excellence</h4>
              <p>World-class quality in every line of code and pixel.</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon customer">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Customer-Centricity</h4>
              <p>Solutions built for your business goals.</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon agility">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Agility</h4>
              <p>Fast, flexible, and adaptive to ever-evolving demands.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 