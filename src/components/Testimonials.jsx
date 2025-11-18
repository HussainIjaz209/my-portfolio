import React from 'react';
import Slider from 'react-slick';

const Testimonials = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  const testimonials = Array(5).fill({
    text: "Working with Hussain was an absolute pleasure! His attention to detail and creative approach transformed our vision into a stunning reality. The website exceeded our expectations!",
    name: "Roger Scott",
    position: "Marketing Manager",
    image: "images/person_1.jpg"
  });

  return (
    <section className="testimonials-section" id="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-heading">
          <span className="testimonials-subheading">Testimonies</span>
          <h2 className="testimonials-title">What clients say about us</h2>
        </div>
        <div className="testimonials-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div 
                      className="testimonial-avatar"
                      style={{backgroundImage: `url(${testimonial.image})`}}
                    ></div>
                    <div className="testimonial-info">
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <span className="testimonial-position">{testimonial.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;