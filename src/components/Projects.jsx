import React from 'react';

const ProjectCard = ({ image, title, category, link }) => {
  return (
    <div className="project-card">
      <div 
        className="project-image"
        style={{backgroundImage: `url(${image})`}}
      ></div>
      <div className="project-overlay"></div>
      <div className="project-content">
        <h3 className="project-title">
          <a href={link}>{title}</a>
        </h3>
        <span className="project-category">{category}</span>
      </div>
      <a href={link}  className="project-action">
        visit ➜
      </a>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      image: "images/work-1.jpg",
      title: "Recipe website Discover, Plan, Cook",
      category: "Web Application",
      link: "https://meal-planning-opal.vercel.app/"
    },
    {
      image: "images/work-2.jpg",
      title: "Project Management Tool",
      category: "Web Application",
      link: "https://crude-operations-flame.vercel.app/"
    },
    {
      image: "images/work-3.jpg",
      title: "Movie Showcase",
      category: "Web Development",
      link: "https://hussainijaz209.github.io/Movie-trailers-Showcase/"
    },
    {
      image: "images/work-4.jpg",
      title: "Chess Game",
      category: "Backend Development",
      link: "https://chess-game-1epq.vercel.app/"
    },
    {
      image: "images/work-5.jpg",
      title: "Custom Portfolio Website",
      category: "Web Development",
      link: "https://hassan-portfolio-nine.vercel.app/"
    },
    {
      image: "images/work-6.jpg",
      title: "School Management System",
      category: "Web Development",
      link: "https://oks-kappa.vercel.app/"
    },
    // {
    //   image: "images/work-7.jpg",
    //   title: "Fitness Tracking App",
    //   category: "Mobile Development",
    //   link: "/projects/fitness-app"
    // },
    // {
    //   image: "images/work-8.jpg",
    //   title: "Educational Platform",
    //   category: "E-Learning Solutions",
    //   link: "/projects/educational-platform"
    // }
  ];

  return (
    <section className="projects-section" id="projects-section">
      <div className="projects-container">
        <div className="projects-heading" data-aos="fade-up">
          <span className="projects-subheading">Accomplishments</span>
          <h2 className="projects-title">Our Projects</h2>
          <p className="projects-description">
            We take pride in delivering innovative and impactful solutions. From web design to full-stack development, 
            our projects are crafted with precision, creativity, and cutting-edge technology.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              data-aos="fade-up"  
              data-aos-delay={index * 100} 
              {...project} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;