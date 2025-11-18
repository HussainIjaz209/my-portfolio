import React from 'react';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faUser, faCoffee, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const CounterItem = ({ number, text, icon }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="counter-item">
      <div className="counter-card">
        <div className={`counter-icon `}>
          <FontAwesomeIcon
            icon={
              icon === "suitcase" ? faSuitcase :
              icon === "coffee" ? faCoffee :
              icon === "users" ? faUser :
              icon === "calendar" ? faCalendar : null
            }
            size="1x"
          />
        </div>
        <div className="counter-text">
          <strong className="counter-number" ref={ref}>
            {inView && <CountUp end={number} duration={2} />}
          </strong>
          <span className="counter-label">{text}</span>
        </div>
      </div>
    </div>
  );
};

const Counter = () => {
  const counters = [
    { number: 6, text: "Project Complete", icon: "suitcase" },
    { number: 6, text: "Happy Clients", icon: "users" },
    { number: 4, text: "Cups of coffee", icon: "coffee" },
    { number: 1, text: "Years experienced", icon: "calendar" }
  ];

  return (
    <section className="counter-section" id="section-counter">
      <div className="counter-container">
        <div className="counter-row">
          {counters.map((counter, index) => (
            <CounterItem key={index} {...counter} data-aos="fade-up" data-aos-delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;