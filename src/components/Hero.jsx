import React from 'react';

const Hero = () => {
  return (
    <section id="home-section" className="hero-section">
      <div className="hero-container">
        <div className="hero-row">
          <div className="hero-col-left">
            <div className="hero-content">
              <span className="hero-subheading">
                Hello! I'm Hussain Ijaz
              </span>

              <h1 className="hero-title">
                IT Professional & <span className="hero-highlight">Full-Stack Developer</span>
              </h1>

              <p style={{color: "white"}}>
                Passionate about Web Development, Artificial Intelligence, and Cybersecurity.
              </p>
              <div className="hero-buttons">
                <a href="#contact-section" className="hero-btn hero-btn-primary">Hire me</a>
                <a href="/My-euro-pass-CV.pdf" className="hero-btn hero-btn-outline">Download CV</a>
              </div>
            </div>
          </div>
          <div className="hero-col-right">
            <div className="hero-image">
              <img
                src="/images/bg_1.png"
                alt="Hussain Ijaz"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;