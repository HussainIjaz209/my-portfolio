import React from 'react';

const About = () => {
  const aboutInfo = [
    { label: "Name:", value: "Hussain Ijaz" },
    { label: "Date of birth:", value: "July 06, 2003" },
    { label: "Address:", value: "Manglor Swat Pakistan" },
    { label: "Zip code:", value: "19200" },
    { label: "Email:", value: "hijaz4981@gmail.com" },
    { label: "Phone:", value: "+92 348 5209901" }
  ];

  const interests = [
    { icon: "listening", text: "Music" },
    { icon: "suitcases", text: "Travel" },
    { icon: "video", text: "Movie" },
    { icon: "football", text: "Sports" }
  ];

  return (
    <section className="about-section" id="about-section">
      <div className="about-container">
        <div className="about-row">
          {/* <div className="about-image-col">
            <div className="about-image">
              <div className="about-image-overlay"></div>
              <div className="about-img" style={{ backgroundImage: "url(images/about-1.jpg)" }}></div>
            </div>
          </div> */}
          <div className="about-content-col">
            <div className="about-content" data-aos="fade-right">
              <div className="about-heading">
                <span className="about-subheading">My Intro</span>
                <h2 className="about-title">About Me</h2>
                <p className="about-description">I’m Hussain Ijaz from Swat, Pakistan. I am currently pursuing my Bachelor’s degree in Information Technology at the University of Swat. <br />
                  I’m a Frontend Developer with a passion for designing and coding. I enjoy building clean, responsive, and user-friendly web interfaces.</p>

                <ul className="about-info">
                  {aboutInfo.map((info, index) => (
                    <li key={index} data-aos="fade-up" data-aos-delay={index * 100} className="about-info-item">
                      <span className="about-info-label">{info.label}</span>
                      <span className="about-info-value">{info.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about-interests">
              </div>
            </div>
          </div>
          <div className="about-image-col">
                {interests.map((interest, index) => (
                  <div key={index} data-aos="zoom-in"  data-aos-delay={index * 150} className="about-interest">
                    <div className={`about-interest-icon about-icon-${interest.icon}`}></div>
                    <div className="about-interest-text">{interest.text}</div>
                  </div>
                ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;