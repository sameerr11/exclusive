import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo">
              <h3>Exclusive Vision</h3>
              <p className="footer-slogan">Where Vision Meets Innovation</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">Web Development</a></li>
                  <li><a href="#services">App Development</a></li>
                  <li><a href="#services">Digital Marketing</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#careers">Careers</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Connect</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="Facebook">📘</a>
                  <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
                  <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
                  <a href="#" className="social-icon" aria-label="Instagram">📷</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {currentYear} Exclusive Vision. All rights reserved.</p>
            </div>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 