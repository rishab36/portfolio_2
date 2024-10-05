import React from 'react';
import './HeroSection.css'; // Ensure this file exists

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h2>Welcome to My Portfolio</h2>
        <p>I’m a web developer passionate about building interactive web experiences.</p>
        <a href="#projects" className="cta-btn">View My Work</a>
      </div>
    </section>
  );
};

export default HeroSection;
