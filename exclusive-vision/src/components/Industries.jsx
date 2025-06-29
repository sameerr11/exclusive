import './Industries.css';

const Industries = () => {
  const industries = [
    {
      name: "Healthcare",
      description: "Digital solutions for hospitals, clinics, and medical practices",
      icon: "🏥"
    },
    {
      name: "Education",
      description: "Learning management systems and educational technology",
      icon: "🎓"
    },
    {
      name: "Finance",
      description: "FinTech solutions, banking systems, and financial analytics",
      icon: "💰"
    },
    {
      name: "Retail & E-commerce",
      description: "Online stores, inventory management, and customer experiences",
      icon: "🛍️"
    },
    {
      name: "Real Estate",
      description: "Property management, listing platforms, and virtual tours",
      icon: "🏢"
    },
    {
      name: "Manufacturing",
      description: "Industrial automation, supply chain, and production systems",
      icon: "🏭"
    },
    {
      name: "Tourism & Hospitality",
      description: "Booking systems, travel platforms, and guest management",
      icon: "✈️"
    },
    {
      name: "NGOs & Government",
      description: "Public service platforms and non-profit management systems",
      icon: "🏛️"
    },
    {
      name: "Media & Entertainment",
      description: "Content management, streaming platforms, and digital media",
      icon: "🎬"
    }
  ];

  return (
    <section id="industries" className="industries section">
      <div className="container">
        <div className="industries-header">
          <h2>Industries We Serve</h2>
          <p>Delivering tailored technology solutions across diverse sectors worldwide</p>
        </div>

        <div className="industries-content">
          <div className="industries-intro">
            <div className="intro-text">
              <h3>Diverse Expertise</h3>
              <p>
                Our extensive experience spans multiple industries, allowing us to understand 
                unique sector challenges and deliver specialized solutions that drive growth 
                and innovation across various business domains.
              </p>
            </div>
            <div className="global-visual">
              <div className="globe-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12h20" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon">
                  <span>{industry.icon}</span>
                </div>
                <div className="industry-content">
                  <h4>{industry.name}</h4>
                  <p>{industry.description}</p>
                </div>
                <div className="industry-overlay">
                  <div className="overlay-content">
                    <h4>{industry.name}</h4>
                    <p>{industry.description}</p>
                    <div className="learn-more">
                      <span>Explore Solutions</span>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries; 