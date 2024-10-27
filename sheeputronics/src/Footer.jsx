const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <div className="flex items-center mb-4">
              <img
                src="/Rectangle 2.png"
                alt="Sheeputronics Logo"
                className="h-10 mr-2"
              />
              <h2 className="text-2xl font-bold">Sheeputronics</h2>
            </div>
            <p className="text-sm">
              Sheeputronics is an eCommerce platform dedicated to providing
              high-quality electronic components at competitive prices.
              Sheeputronics combines reliability with affordability.
            </p>
            <p className="tuplespace-title">© TurpleSpace 2024</p>
          </div>
          {/* Quick Links */}
          <div className="quick-links">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="footer-titles">
              <li>
                <a href="#" className="links-inside">
                  Homepage
                </a>
              </li>
              <li>
                <a href="#" className="links-inside">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="links-inside">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="links-inside">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div className="support-ft">
            <h3 className="support-ft-h3">Support</h3>
            <ul className="support-ft-links">
              <li>
                <a href="#" className="links-inside">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="links-inside">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="links-inside">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="links-inside">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div className="Resources-ft">
            <h3 className="Resources-ft-h3">Resources</h3>
            <ul className="Resources-ft-links">
              <li>
                <a href="#" className="links-inside">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="links-inside">
                  Product Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="links-inside">
                  Community Forum
                </a>
              </li>
              <li>
                <a href="#" className="links-inside">
                  User Testimonials
                </a>
              </li>
            </ul>
          </div>
          {/* Socials */}
          <div className="socials-ft">
            <h3 className="socials-ft-h3">Socials</h3>
            <ul className="socials-ft-links">
              <li>
                <a href="#" className="links-inside">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="links-inside">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="links-inside">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="links-inside">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
