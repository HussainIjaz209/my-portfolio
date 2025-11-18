import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faGlobe 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    
    // Create mailto link that opens user's email client
    const mailtoLink = `mailto:hijaz4981@gmail.com?subject=Website Contact: ${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0ASubject: ${encodeURIComponent(subject)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setSubmitStatus('success');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Clear status after 5 seconds
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const contactInfo = [
    { 
      icon: faMapMarkerAlt, 
      label: "Address:", 
      value: "Manglor Swat KPK Pakistan" 
    },
    { 
      icon: faPhone, 
      label: "Phone:", 
      value: "+92 348 5209901", 
      link: "tel://+923485209901" 
    },
    { 
      icon: faEnvelope, 
      label: "Email:", 
      value: "hijaz4981@gmail.com", 
      link: "mailto:hijaz4981@gmail.com" 
    },
    { 
      icon: faGlobe, 
      label: "Website", 
      value: "Coming Soon", 
      link: "#" 
    }
  ];

  return (
    <section className="contact-section" id="contact-section">
      <div className="contact-container">
        <div className="contact-heading" data-aos="fade-up">
          <span className="contact-subheading">Contact us</span>
        </div>

        <div className="contact-layout">
          <form onSubmit={handleSubmit} data-aos="fade-right" className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                className="form-input" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                className="form-input" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject"
                className="form-input" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                className="form-input form-textarea" 
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            
            {submitStatus === 'success' && (
              <div className="status-message success-message">
                ✅ Your email client is opening. Please send the pre-filled email to contact me.
              </div>
            )}

            <div className="form-group">
              <button type="submit" className="submit-button">
                Send Message <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </form>

          <div className="contact-info" data-aos="fade-left" data-aos-delay="200">
            {contactInfo.map((info, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={info.icon} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">{info.label}</span>
                  {info.link ? (
                    <a href={info.link} className="contact-value">{info.value}</a>
                  ) : (
                    <span className="contact-value">{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;