import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <span>About Us Image</span>
            </div>
          </div>
          <div className="about-text">
            <h2>About Exclusive Vision</h2>
            <p>
              At Exclusive Vision, we are dedicated to transforming ideas into digital reality. 
              Our team of passionate professionals combines creativity with cutting-edge technology 
              to deliver exceptional solutions that drive business growth.
            </p>
            <p>
              With years of experience in web development, mobile applications, and digital marketing, 
              we understand what it takes to create compelling digital experiences that resonate with 
              your target audience and achieve your business objectives.
            </p>
            <p>
              Our mission is simple: to provide innovative, reliable, and scalable solutions that 
              help our clients stay ahead in the competitive digital landscape. We believe that 
              every project is unique, and we tailor our approach to meet your specific needs.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 