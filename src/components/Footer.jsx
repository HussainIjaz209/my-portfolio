import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  const links = [
    { href: "#home-section", text: "Home" },
    { href: "#about-section", text: "About" },
    { href: "#services-section", text: "Services" },
    { href: "#projects-section", text: "Projects" },
    { href: "#contact-section", text: "Contact" }
  ];

  const services = [
    "Web Design",
    "Web Development",
    "Business Strategy",
    "Data Analysis",
    "Graphic Design"
  ];

  const socialLinks = [
    { icon: "whatsapp", href: "https://wa.me/qr/HUGLS22NBYNXK1", platform: "whatsapp" },
    { icon: "facebook", href: "https://www.facebook.com/share/xtXVmDuwHZ4bLmM7/", platform: "facebook" },
    { icon: "linkedin", href: "https://www.linkedin.com/in/hussain-ijaz-56b53233b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", platform: "Linkedin" }
  ];

  // Back to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-grid">
            {/* About Section */}
            <div className="footer-widget">
              <h2 className="footer-heading">Let's talk about</h2>
              <p className="footer-about">
                I'm passionate about helping businesses grow. Whether you're looking to build a custom website,
                analyze business performance, or implement new digital strategies, let's discuss how I can help you.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-widget">
              <h2 className="footer-heading">Links</h2>
              <ul className="footer-list">
                {links.map((link, index) => (
                  <li key={index} className="footer-list-item">
                    <a href={link.href} className="footer-link">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-widget">
              <h2 className="footer-heading">Services</h2>
              <ul className="footer-list">
                {services.map((service, index) => (
                  <li key={index} className="footer-list-item">
                    <a href="#services-section" className="footer-link">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-widget">
              <h2 className="footer-heading">Have Questions?</h2>
              <ul className="footer-contact">
                <li className="footer-contact-item">
                  <div className="contact-icon"><FontAwesomeIcon icon={faWhatsapp} /></div>
                  <div className="contact-text">
                    Moh:Mazeed Khail. Manglor, Swat, KPK, Pakistan
                  </div>
                </li>
                <li className="footer-contact-item">
                  <div className="contact-icon"><FontAwesomeIcon icon={faPhone} /></div>
                  <div className="contact-text">
                    <a href="tel:+923485209901" className="contact-link">
                      +92 348 5209901
                    </a>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <div className="contact-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                  <div className="contact-text">
                    <a href="mailto:hijaz4981@gmail.com" className="contact-link">
                      hijaz4981@gmail.com
                    </a>
                  </div>
                </li>
              </ul>

              {/* Social Links */}
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link social-${social.platform}`}
                  >
                    {social.icon === 'whatsapp' && <FontAwesomeIcon icon={faWhatsapp} />}
                    {social.icon === 'facebook' && <FontAwesomeIcon icon={faFacebook} />}
                    {social.icon === 'linkedin' && <FontAwesomeIcon icon={faLinkedin} />}

                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="copyright">
              Copyright &copy; {currentYear} All rights reserved | This is my official website{" "}
              <span className="heart">❤️</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
};

export default Footer;