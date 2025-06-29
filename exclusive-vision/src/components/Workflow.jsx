import './Workflow.css';

const Workflow = () => {
  const workflowSteps = [
    {
      number: "01",
      title: "Requirement Gathering",
      description: "Understand business needs",
      details: "We start by deeply understanding your business objectives, target audience, and specific requirements to ensure our solution aligns perfectly with your goals."
    },
    {
      number: "02", 
      title: "Research & Analysis",
      description: "Technical & user-centric feasibility",
      details: "Our team conducts thorough technical research and user experience analysis to determine the most effective approach and technologies for your project."
    },
    {
      number: "03",
      title: "Design & Prototyping", 
      description: "Visual and functional layout",
      details: "We create intuitive designs and interactive prototypes that showcase the user interface and experience before development begins."
    },
    {
      number: "04",
      title: "Development & Testing",
      description: "Agile sprints and QA cycles", 
      details: "Using agile methodologies, we develop your solution in iterative sprints with continuous testing to ensure quality and functionality."
    },
    {
      number: "05",
      title: "Deployment & Training",
      description: "Smooth launch and client enablement",
      details: "We handle the complete deployment process and provide comprehensive training to ensure your team can effectively use the new solution."
    },
    {
      number: "06",
      title: "Support & Optimization",
      description: "Ongoing maintenance & upgrades",
      details: "Our relationship continues with ongoing support, maintenance, and optimization to keep your solution running at peak performance."
    }
  ];

  return (
    <section id="workflow" className="workflow section">
      <div className="container">
        <div className="workflow-header">
          <h2>Our Workflow</h2>
          <p>A proven 6-step process that ensures project success from concept to completion</p>
        </div>

        <div className="workflow-content">
          <div className="workflow-image">
            <div className="workflow-visual">
              <div className="workflow-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.2 8.5L20 9L14 15L15.8 21L12 18L8.2 21L10 15L4 9L10.8 8.5L12 2Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Collaborative Process</h3>
              <p>
                Every project follows our structured methodology, ensuring transparency, 
                quality, and timely delivery while keeping you involved at every stage.
              </p>
            </div>
          </div>

          <div className="workflow-steps">
            {workflowSteps.map((step, index) => (
              <div key={index} className="workflow-step">
                <div className="step-number">
                  <span>{step.number}</span>
                </div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                  <p className="step-details">{step.details}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow; 