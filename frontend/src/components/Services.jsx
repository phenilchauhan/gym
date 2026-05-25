import React from "react";

const Services = () => {
  const services = [
    {
      icon: "🏋️",
      title: "Strength Training",
      desc: "Full access to free weights, plate-loaded machines, and cable stations. Build raw power and muscle with top-tier equipment.",
      price: "$29/mo",
    },
    {
      icon: "❤️",
      title: "Cardio Zone",
      desc: "Premium treadmills, spin bikes, rowing machines, and stair climbers. Track your progress with integrated fitness monitors.",
      price: "$39/mo",
    },
    {
      icon: "🧘",
      title: "Group Classes",
      desc: "Yoga, Zumba, HIIT, Pilates, and more. Expert-led group sessions that keep you motivated and accountable.",
      price: "$49/mo",
    },
    {
      icon: "👨‍🏫",
      title: "Personal Training",
      desc: "One-on-one coaching with certified trainers. Custom workout plans tailored to your specific goals and fitness level.",
      price: "$79/mo",
    },
    {
      icon: "🥗",
      title: "Nutrition Coaching",
      desc: "Custom meal plans, macro tracking, and dietary guidance from certified nutritionists to complement your training.",
      price: "$59/mo",
    },
    {
      icon: "🏆",
      title: "Premium Membership",
      desc: "Everything included: unlimited classes, personal training sessions, nutrition coaching, sauna access, and more.",
      price: "$99/mo",
    },
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <span className="section-tag">Our Services</span>
        <h2 className="section-title">
          Choose Your <span>Plan</span>
        </h2>
        <p className="section-subtitle">
          Flexible membership options designed to fit your lifestyle and fitness goals.
          All plans include free locker access and complimentary towel service.
        </p>

        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="price">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
