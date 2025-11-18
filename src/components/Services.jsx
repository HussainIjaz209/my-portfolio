import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <FontAwesomeIcon icon={``} />
      <div className="service-content">
        <h3 className="service-name">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: "design",
      title: "Web Design",
      description: "Crafting beautiful and responsive websites that leave a lasting impression."
    },
    {
      icon: "app",
      title: "Web Application",
      description: "We build scalable and dynamic web applications tailored to your Business needs."
    },
    {
      icon: "web",
      title: "Web Development",
      description: "Our team delevers high-quality websites that ensure a seamless user experience."
    }
  ];

  return (
    <section className="services-section" id="services-section">
      <div className="services-container">
        <div className="services-heading" data-aos="fade-up">
          <span className="services-subheading">What I Excel At</span>
          <h2 className="services-title">Delivering high-quality services for my clients</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} data-aos="zoom-in" data-aos-delay={index * 100} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;