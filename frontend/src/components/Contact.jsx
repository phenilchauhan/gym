import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // Uses relative path — in development, the proxy in package.json
      // forwards /api requests to the backend on port 5000
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", message: "Message sent successfully! We'll get back to you soon." });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message || "Something went wrong. Please try again." });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Could not connect to the server. Make sure the backend is running on port 5000.",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactDetails = [
    {
      icon: "📍",
      title: "Our Address",
      value: "123 Fitness Boulevard, Suite 200\nLos Angeles, CA 90001",
    },
    {
      icon: "📞",
      title: "Phone Number",
      value: "+1 (555) 123-4567",
    },
    {
      icon: "✉️",
      title: "Email Address",
      value: "info@ironforgegym.com",
    },
    {
      icon: "🕐",
      title: "Working Hours",
      value: "Mon-Fri: 5AM - 11PM\nSat-Sun: 6AM - 8PM",
    },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">
          Ready to <span>Join?</span>
        </h2>
        <p className="section-subtitle">
          Have questions about memberships, pricing, or want to book a tour?
          We'd love to hear from you. Send us a message or visit us in person.
        </p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Visit us or reach out through any of the channels below. Our team
              is available 24/7 to assist you with any inquiries.
            </p>

            <div className="contact-details">
              {contactDetails.map((detail, i) => (
                <div className="contact-detail" key={i}>
                  <div className="detail-icon">{detail.icon}</div>
                  <div>
                    <h4>{detail.title}</h4>
                    <span style={{ whiteSpace: "pre-line" }}>{detail.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send Us a Message</h3>
            <p>Fill out the form below and we'll respond within 24 hours.</p>

            {status && (
              <div className={`form-status ${status.type}`}>{status.message}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals or any questions you have..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "✉️ Sending..." : "✉️ Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
