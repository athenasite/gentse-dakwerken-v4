import React from 'react';

const Features = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="features" data-dock-section="features">
      <div className="container">
        <h2>Our Features</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          {data.map((feature, index) => (
            <div key={index} className="feature-card">
              {feature.icon && (
                <img
                  src={feature.icon.startsWith('http') ? feature.icon : `${import.meta.env.BASE_URL}images/${feature.icon}`}
                  alt={feature.title}
                  style={{ width: "64px", height: "64px", marginBottom: "1rem", objectFit: "contain" }}
                  data-dock-bind={`{"file":"features", "index":${index}, "key":"icon"}`}
                />
              )}
              <h3 data-dock-bind={`{"file":"features", "index":${index}, "key":"title"}`}>{feature.title}</h3>
              <p data-dock-bind={`{"file":"features", "index":${index}, "key":"description"}`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;