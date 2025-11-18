import React from 'react';

const HireMe = () => {
  return (
    <section className="hireme-section">
      <div className="hireme-container">
        {/* Floating Elements */}
        <div className="hireme-floating hireme-floating-1">💼</div>
        <div className="hireme-floating hireme-floating-2">🌟</div>
        <div className="hireme-floating hireme-floating-3">🚀</div>

        <div className="hireme-row">
          <div className="hireme-content">
            <h2>Got a Project on Your Mind?</h2>
            <p>Every great idea deserves to be built with passion and precision. Whether you're shaping a startup, crafting a digital product, or bringing a business vision to life — I’m here to turn concepts into clean, modern, and user-friendly experiences. Let’s build something amazing together.</p>
            <p className="mb-0">
              <a href="#contact-section" className="hireme-button">
                Contact me
              </a>
            </p>
          </div>
          {/* <div className="hireme-image">
            <img src="images/author.png" className="hireme-img" alt="Hussain Ijaz" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HireMe;



