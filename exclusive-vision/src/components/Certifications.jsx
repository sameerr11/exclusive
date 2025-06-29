import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Developer Associate",
      category: "Cloud & Development",
      provider: "Microsoft"
    },
    {
      title: "Microsoft Certified Solutions Developer (MCSD)",
      category: "Development",
      provider: "Microsoft"
    },
    {
      title: "Oracle Certified Java Programmer (OCJP)",
      category: "Programming",
      provider: "Oracle"
    },
    {
      title: "AWS Certified Developer - Associate",
      category: "Cloud & Development",
      provider: "AWS"
    },
    {
      title: "Google Associate Android Developer",
      category: "Mobile Development",
      provider: "Google"
    },
    {
      title: "Apple Certified iOS Developer",
      category: "Mobile Development",
      provider: "Apple"
    },
    {
      title: "Adobe Certified Expert (ACE)",
      category: "Design & Creative",
      provider: "Adobe"
    },
    {
      title: "Adobe Certified Professional in Visual Design",
      category: "Design & Creative",
      provider: "Adobe"
    },
    {
      title: "Adobe XD Certification",
      category: "UI/UX Design",
      provider: "Adobe"
    },
    {
      title: "Figma UX Design Certificate",
      category: "UI/UX Design",
      provider: "Figma"
    },
    {
      title: "Google Ads Search Certification",
      category: "Digital Marketing",
      provider: "Google"
    },
    {
      title: "AWS Certified Solutions Architect",
      category: "Cloud Architecture",
      provider: "AWS"
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      category: "Cybersecurity",
      provider: "EC-Council"
    },
    {
      title: "Microsoft Office Specialist (MOS)",
      category: "Productivity",
      provider: "Microsoft"
    }
  ];

  const categories = [
    "Cloud & Development",
    "Development", 
    "Programming",
    "Mobile Development",
    "Design & Creative",
    "UI/UX Design",
    "Digital Marketing",
    "Cloud Architecture",
    "Cybersecurity",
    "Productivity"
  ];

  // Group certifications by category
  const groupedCertifications = categories.reduce((acc, category) => {
    acc[category] = certifications.filter(cert => cert.category === category);
    return acc;
  }, {});

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <div className="certifications-header">
          <h2>Our Certifications</h2>
          <p>Exclusive Vision is powered by a highly certified team, ensuring top-tier professionalism and global standards</p>
        </div>

        <div className="certifications-content">
          <div className="certifications-intro">
            <div className="intro-card">
              <h3>Professional Excellence</h3>
              <p>
                Our team holds industry-leading certifications across multiple domains, 
                from cloud computing and software development to cybersecurity and digital marketing. 
                These credentials ensure we deliver solutions that meet the highest global standards.
              </p>
            </div>
          </div>

          <div className="certifications-grid">
            {Object.entries(groupedCertifications).map(([category, certs]) => 
              certs.length > 0 && (
                <div key={category} className="certification-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="certification-list">
                    {certs.map((cert, index) => (
                      <div key={index} className="certification-item">
                        <div className="cert-badge">
                          <span className="cert-checkmark">✓</span>
                        </div>
                        <div className="cert-details">
                          <h5>{cert.title}</h5>
                          <span className="cert-provider">{cert.provider}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 