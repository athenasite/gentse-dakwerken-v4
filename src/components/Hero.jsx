import React from 'react';

const Hero = ({ data }) => {
  if (!data || data.length === 0) return null;
  const hero = data[0];

  return (
    <section
      className="hero"
      data-dock-section="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${hero.bgImage || 'hero-bg.webp'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        color: "white"
      }}
    >
      <div className="container">
        <h1 data-dock-bind='{"file":"hero", "index":0, "key":"title"}'>{hero.title}</h1>
        <p data-dock-bind='{"file":"hero", "index":0, "key":"subtitle"}'>{hero.subtitle}</p>
        <button data-dock-bind='{"file":"hero", "index":0, "key":"ctaText"}'>{hero.ctaText}</button>
      </div>
    </section>
  );
};

export default Hero;
