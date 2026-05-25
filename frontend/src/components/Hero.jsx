import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-particles">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 1.2}s`,
              width: `${3 + Math.random() * 4}px`,
              height: `${3 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="subtitle">🔥 Welcome to Iron Forge</span>
            <h1>
              Transform Your<br />
              <span className="highlight">Body. Transform</span>
              <br />
              Your Life.
            </h1>
            <p>
              Join the most elite fitness community in the city. State-of-the-art
              equipment, expert trainers, and a motivating atmosphere to help you
              crush every goal.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary">
                Get Started Today →
              </a>
              <a href="#gallery" className="btn btn-outline">
                View Gallery
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>500+</h3>
                <p>Active Members</p>
              </div>
              <div className="hero-stat">
                <h3>15+</h3>
                <p>Expert Trainers</p>
              </div>
              <div className="hero-stat">
                <h3>10k+</h3>
                <p>Hours Trained</p>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-placeholder">
              <span className="emoji-bg">💪</span>
              <span className="gym-icon">🏋️</span>
              <p>Iron Forge Gym</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
