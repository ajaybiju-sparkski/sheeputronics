const Footer2 = () => {
  return (
    <footer className="footer-bg footer-text footer-padding">
      <div className="footer-container">
        <div className="footer-flex footer-justify">
          {/* Logo and Description */}
          <div className="footer-section footer-section-margin">
            <div className="footer-logo-container footer-logo-margin">
              <img
                src="/Rectangle 2.png"
                alt="Sheeputronics Logo"
                className="footer-logo"
              />
              <h2 className="footer-title">Sheeputronics</h2>
            </div>
            <p className="footer-description">
              Sheeputronics is an eCommerce platform dedicated to providing
              high-quality electronic components at competitive prices.
              Sheeputronics combines reliability with affordability.
            </p>
            <p className="footer-copyright">© TurpleSpace 2024</p>
          </div>
          <div className="footer-fq">
            {/* Quick Links */}
            <div className="footer-quick-links">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-link-list">
                <li>
                  <a href="#" className="footer-link">
                    Homepage
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* Support */}
            <div className="footer-support">
              <h3 className="footer-heading">Support</h3>
              <ul className="footer-link-list">
                <li>
                  <a href="#" className="footer-link">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Order Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            {/* Resources */}
            <div className="footer-resources">
              <h3 className="footer-heading">Resources</h3>
              <ul className="footer-link-list">
                <li>
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Product Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Community Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    User Testimonials
                  </a>
                </li>
              </ul>
            </div>
            {/* Socials */}
            <div className="footer-socials">
              <h3 className="footer-heading">Socials</h3>
              <ul className="footer-link-list">
                <li>
                  <a href="#" className="footer-link">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
