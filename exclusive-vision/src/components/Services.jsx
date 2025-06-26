import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      icon: "🌐"
    },
    {
      title: "App Development", 
      description: "Native and cross-platform mobile applications that deliver seamless functionality across all devices.",
      icon: "📱"
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns to boost your online presence and drive meaningful engagement.",
      icon: "📈"
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>We offer comprehensive digital solutions to help your business thrive in the modern world</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="btn btn-secondary service-btn">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 