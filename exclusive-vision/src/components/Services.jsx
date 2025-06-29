import './Services.css';

const Services = () => {
      const services = [
      {
        title: "Website Development",
        description: "Complete web solutions for modern businesses",
        features: [
          "Static & dynamic websites",
          "E-commerce platforms", 
          "CMS (WordPress, Joomla, Drupal)",
          "SEO-friendly architecture"
        ],
        category: "development"
      },
      {
        title: "Mobile App Development",
        description: "Cross-platform mobile solutions",
        features: [
          "Android app development",
          "Cross-platform apps (Flutter, React Native)",
          "Enterprise mobility solutions"
        ],
        category: "development"
      },
      {
        title: "iOS Development",
        description: "Native iOS applications and Apple ecosystem",
        features: [
          "Native Swift development",
          "iPad & Apple Watch compatibility",
          "App Store publishing & compliance"
        ],
        category: "development"
      },
      {
        title: "UI/UX Design",
        description: "Human-centric design for optimal user experience",
        features: [
          "Wireframing & prototyping",
          "Responsive design for all platforms",
          "Human-centric product design",
          "Figma, Adobe XD, Sketch"
        ],
        category: "design"
      },
      {
        title: "Digital Marketing",
        description: "Strategic online marketing solutions",
        features: [
          "SEO & SEM",
          "Pay-Per-Click (PPC) Campaigns",
          "Email Marketing Automation",
          "Content Marketing & Blogging"
        ],
        category: "marketing"
      },
      {
        title: "Social Media Management",
        description: "Comprehensive social media strategies",
        features: [
          "Strategy & planning",
          "Creatives & branding",
          "Community engagement",
          "Analytics & reporting"
        ],
        category: "marketing"
      },
      {
        title: "AI-Powered Solutions",
        description: "Advanced artificial intelligence integration",
        features: [
          "AI-powered chatbots",
          "Predictive analytics",
          "NLP & machine learning integration",
          "Custom AI tools for automation"
        ],
        category: "technology"
      },
      {
        title: "Custom Software Development",
        description: "Tailored enterprise software solutions",
        features: [
          "CRM, ERP, Custom HRM systems",
          "Desktop software solutions",
          "SaaS product development",
          "Agile development methodologies"
        ],
        category: "development"
      },
      {
        title: "Cloud Computing Services",
        description: "Scalable cloud infrastructure solutions",
        features: [
          "Cloud migration & setup (AWS, Azure, GCP)",
          "Serverless architecture",
          "Cloud security & DevOps"
        ],
        category: "infrastructure"
      },
      {
        title: "Cybersecurity Solutions",
        description: "Comprehensive security and compliance",
        features: [
          "Vulnerability assessments",
          "Endpoint security",
          "Network monitoring",
          "Compliance audits (ISO 27001, GDPR)"
        ],
        category: "security"
      },
      {
        title: "E-Commerce Solutions",
        description: "Complete online store development",
        features: [
          "Custom e-commerce portals",
          "Shopify, Magento, WooCommerce",
          "Payment gateway integration",
          "Inventory & logistics automation"
        ],
        category: "development"
      },
      {
        title: "Data Analytics & BI",
        description: "Intelligent data-driven insights",
        features: [
          "Power BI, Tableau dashboarding",
          "Data warehousing",
          "Real-time reporting solutions",
          "Advanced analytics & KPIs"
        ],
        category: "analytics"
      },
      {
        title: "DevOps & Infrastructure",
        description: "Streamlined development operations",
        features: [
          "CI/CD pipelines",
          "Docker, Kubernetes, Jenkins",
          "Cloud-native infrastructure management"
        ],
        category: "infrastructure"
      },
      {
        title: "IT Training & Certifications",
        description: "Professional development and skill enhancement",
        features: [
          "Tailored training for corporates and individuals",
          "Microsoft Office, Adobe, and Dev tools",
          "Online & in-person bootcamps"
        ],
        category: "training"
      },
      {
        title: "IT Consulting & Project Management",
        description: "Strategic technology consulting",
        features: [
          "Digital Transformation strategy",
          "Agile & Scrum-based project leadership",
          "Vendor management",
          "Technical documentation"
        ],
        category: "consulting"
      }
    ];

  const categories = [
    { name: "All Services", value: "all" },
    { name: "Development", value: "development" },
    { name: "Design", value: "design" },
    { name: "Marketing", value: "marketing" },
    { name: "Technology", value: "technology" },
    { name: "Infrastructure", value: "infrastructure" },
    { name: "Security", value: "security" },
    { name: "Analytics", value: "analytics" },
    { name: "Training", value: "training" },
    { name: "Consulting", value: "consulting" }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Comprehensive IT solutions to drive your digital transformation journey</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.category}`}>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-secondary service-btn">
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 