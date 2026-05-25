import React from "react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const programs = [
    { label: "Strength Training", href: "#services" },
    { label: "Cardio Fitness", href: "#services" },
    { label: "Yoga Classes", href: "#services" },
    { label: "Personal Training", href: "#services" },
    { label: "Nutrition Plans", href: "#services" },
  ];

  const hours = [
    { day: "Mon - Fri", time: "5:00 AM - 11:00 PM" },
    { day: "Saturday", time: "6:00 AM - 8:00 PM" },
    { day: "Sunday", time: "6:00 AM - 8:00 PM" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo-text">
              💪 Iron<span style={{ color: "#fff", WebkitTextFillColor: "#fff" }}>Forge</span>
            </span>
            <p>
              Transform your body and mind at Iron Forge Gym. Premium equipment,
              expert trainers, and a community that pushes you to be your best.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="Twitter/X">🐦</a>
              <a href="#" aria-label="YouTube">🎥</a>
              <a href="#" aria-label="TikTok">🎵</a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Programs</h4>
            <ul className="footer-links">
              {programs.map((prog) => (
                <li key={prog.label}>
                  <a href={prog.href}>{prog.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Hours</h4>
            <div className="footer-hours">
              {hours.map((h) => (
                <p key={h.day}>
                  <span className="day">{h.day}</span>
                  <span className="time">{h.time}</span>
                </p>
              ))}
            </div>
            <p style={{ color: "#a0a0a0", fontSize: "0.85rem", marginTop: "16px" }}>
              📍 123 Fitness Boulevard, Suite 200<br />
              Los Angeles, CA 90001
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} <span>Iron Forge Gym</span>. All rights reserved.
            Built with 💪 for champions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
