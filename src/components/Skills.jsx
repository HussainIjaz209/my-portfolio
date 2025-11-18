import React from 'react';

const SkillCircle = ({ skill, percentage }) => {
  return (
    <div className="skill-card">
      <h3 className="skill-name">{skill}</h3>
      <div className="skill-progress" data-value={percentage}>
        <div className="skill-progress-bg"></div>
        <div className="skill-progress-fill"></div>
        <div className="skill-progress-value">
          <div className="skill-percentage">{percentage}<sup className="skill-percent-symbol">%</sup></div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { skill: "React JS", percentage: 95 },
    { skill: "HTML", percentage: 98 },
    { skill: "CSS", percentage: 90 },
    { skill: "Tailwind", percentage: 92 },
    { skill: "Node JS", percentage: 93 },
    { skill: "Express.js", percentage: 90 },
    { skill: "MongoDB,", percentage: 73 },
    { skill: "SQL,", percentage: 92 },
    { skill: "REST APIs", percentage: 97 },
    { skill: "Authentication (JWT)", percentage: 96 },
    { skill: "GitHub", percentage: 90 },
    { skill: "Socket.io (for real-time apps)", percentage: 90 },
    { skill: "Figma", percentage: 92 },
  ];

  return (
    <section className="skills-section " id="skills-section">
      <div className="skills-container">
        <div className="skills-heading" data-aos="fade-up">
          <span className="skills-subheading">Skills</span>
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-description">HTML 5, CSS, Bootstrap, Javascript, React JS, Node JS, Adobe illustrator</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCircle key={index} data-aos="flip-up"  data-aos-delay={index * 100} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;