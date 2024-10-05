import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-item">
            <h3>Amazon Clone</h3>
            <p>A replica of the Amazon website built using React.</p>
          </div>
          <div className="project-item">
            <h3>Airbnb Clone</h3>
            <p>A clone of the Airbnb website created with HTML, CSS, and JavaScript.</p>
          </div>
          <div className="project-item">
            <h3>Portfolio Website</h3>
            <p>This personal portfolio website built with Tailwind CSS and React.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
