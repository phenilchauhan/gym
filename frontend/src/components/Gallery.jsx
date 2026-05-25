import React from "react";

const Gallery = () => {
  const galleryItems = [
    {
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      label: "Weight Training Area",
    },
    {
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      label: "Cardio Zone",
    },
    {
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
      label: "Yoga Studio",
    },
    {
      img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
      label: "Spin Class Room",
    },
    {
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
      label: "Personal Training",
    },
    {
      img: "https://images.unsplash.com/photo-1570829460005-c840387bb1eb?w=600&h=400&fit=crop",
      label: "Group Classes",
    },
  ];

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <span className="section-tag">Gallery</span>
        <h2 className="section-title">
          Tour Our <span>Facility</span>
        </h2>
        <p className="section-subtitle">
          Explore our premium fitness facility through our gallery. See the
          equipment, spaces, and atmosphere that make Iron Forge unique.
        </p>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div
              className="gallery-item"
              key={i}
              style={{
                background: `url(${item.img}) center/cover no-repeat`,
              }}
            >
              <div className="gallery-label">{item.label}</div>
            </div>
          ))}

          {/* Video Section */}
          <div className="gallery-item gallery-video-item">
            <div className="video-placeholder">
              <span className="play-icon">🎬</span>
              <h3
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "1.4rem",
                  textTransform: "uppercase",
                }}
              >
                Tour Our Gym - Video Walkthrough
              </h3>
              <p>
                Watch our full facility tour and see what Iron Forge Gym has to
                offer — from state-of-the-art equipment to our motivating
                atmosphere.
              </p>
              <div
                style={{
                  width: "100%",
                  maxWidth: "720px",
                  marginTop: "20px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                }}
              >
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/UBMk30rjy0o?si=JfMHLFpj1vYiRPn-"
                  title="Gym Tour Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: "block" }}
                ></iframe>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "12px",
                  color: "var(--text-muted)",
                }}
              >
                🔄 Replace this video with your own gym tour by changing the
                YouTube embed URL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
