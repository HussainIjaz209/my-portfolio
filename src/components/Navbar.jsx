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
    { section: "home-section", label: "Home" },
    { section: "about-section", label: "About" },
    { section: "skills-section", label: "Skills" },
    { section: "services-section", label: "Services" },
    { section: "projects-section", label: "Projects" },
    { section: "blog-section", label: "Blog" },
    { section: "contact-section", label: "Contact" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar-custom ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo/Brand */}
        <button
          className="navbar-brand-custom"
          onClick={() => scrollToSection('home-section')}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          Hussain ijaz<span className="brand-dot-custom">.</span>
        </button>

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
                <button
                  className="navbar-link"
                  onClick={() => scrollToSection(item.section)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <span className="navbar-link-text">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;