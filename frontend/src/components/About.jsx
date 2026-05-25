import React from "react";

const About = () => {
  const features = [
    { icon: "🏋️", text: "Modern Equipment" },
    { icon: "👨‍🏫", text: "Expert Trainers" },
    { icon: "🧘", text: "Yoga & Cardio" },
    { icon: "🥗", text: "Nutrition Plans" },
    { icon: "🚿", text: "Premium Locker Rooms" },
    { icon: "🅿️", text: "Free Parking" },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <span className="section-tag">About Us</span>
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-placeholder">
              <span className="big-emoji">🏛️</span>
              <span className="icon-center">💪</span>
              <span>Iron Forge Gym Interior</span>
            </div>
            <div className="experience-badge">
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>

          <div className="about-text">
            <h3>More Than Just a <span style={{ color: "#f97316" }}>Gym</span></h3>
            <p>
              At Iron Forge Gym, we believe fitness is a lifestyle. Founded in 2014,
              we've grown from a small local gym into a premier fitness destination
              with state-of-the-art equipment, certified trainers, and a community
              that pushes you to be your best every single day.
            </p>
            <p>
              Whether you're a seasoned athlete or just starting your fitness journey,
              our diverse range of programs and supportive environment ensures you'll
              achieve results you never thought possible.
            </p>

            <div className="about-features">
              {features.map((feature, i) => (
                <div className="about-feature" key={i}>
                  <span className="feature-icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="hero-btns" style={{ marginTop: "32px" }}>
              <a href="#contact" className="btn btn-primary">
                Visit Us Today →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
