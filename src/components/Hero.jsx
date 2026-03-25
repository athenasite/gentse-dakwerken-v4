import React from 'react';

const Hero = ({ data }) => {
  if (!data || data.length === 0) return null;
  const hero = data[0];

  const overlayStart = getComputedStyle(document.documentElement).getPropertyValue('--hero-overlay-start').trim() || 'rgba(0,0,0,0.5)';
  const overlayEnd = getComputedStyle(document.documentElement).getPropertyValue('--hero-overlay-end').trim() || 'rgba(0,0,0,0.2)';

  return (
    <section
      className="hero"
      data-dock-section="hero"
      style={{
        backgroundImage: `linear-gradient(${overlayStart}, ${overlayEnd}), url(${hero.bgImage ? (hero.bgImage.startsWith('http') ? hero.bgImage : `${import.meta.env.BASE_URL}images/${hero.bgImage}`) : `${import.meta.env.BASE_URL}images/hero-bg.webp`})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        color: "var(--hero-title-color, white)"
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
