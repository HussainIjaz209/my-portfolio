import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home-section", label: "Home" },
    { href: "#about-section", label: "About" },
    { href: "#skills-section", label: "Skills" },
    { href: "#services-section", label: "Services" },
    { href: "#projects-section", label: "Projects" },
    { href: "#blog-section", label: "Blog" },
    { href: "#contact-section", label: "Contact" }
  ];

  return (
    <nav className={`navbar-custom ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo/Brand */}
        <a className="navbar-brand-custom" href="#home-section">
          Hussain ijaz<span className="brand-dot-custom">.</span>
        </a>
        
        {/* Hamburger Menu */}
        <button 
          className={`navbar-toggler-custom ${isOpen ? 'active' : ''}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="toggler-bar"></span>
          <span className="toggler-bar"></span>
          <span className="toggler-bar"></span>
        </button>

        {/* Navigation Menu */}
        <div className={`navbar-collapse-custom ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-menu">
            {navItems.map((item, index) => (
              <li key={index} className="navbar-item">
                <a 
                  href={item.href} 
                  className="navbar-link"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="navbar-link-text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;