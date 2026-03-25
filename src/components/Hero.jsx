import React, { useState, useEffect } from 'react';

const Hero = ({ data }) => {
  if (!data || data.length === 0) return null;
  const hero = data[0];

  const [overlayStyles, setOverlayStyles] = useState({
    start: 'rgba(0,0,0,0.5)',
    end: 'rgba(0,0,0,0.2)',
    color: 'white'
  });

  useEffect(() => {
    const updateOverlays = () => {
      const root = document.documentElement;
      const start = root.style.getPropertyValue('--hero-overlay-start').trim() || 'rgba(0,0,0,0.5)';
      const end = root.style.getPropertyValue('--hero-overlay-end').trim() || 'rgba(0,0,0,0.2)';
      const color = root.style.getPropertyValue('--hero-title-color').trim() || 'white';
      setOverlayStyles({ start, end, color });
    };

    updateOverlays();
    window.addEventListener('message', (e) => {
      if (e.data?.type === 'DOCK_UPDATE_COLOR') {
        setTimeout(updateOverlays, 10);
      }
    });
    const observer = new MutationObserver(updateOverlays);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
    return () => { window.removeEventListener('message', updateOverlays); observer.disconnect(); };
  }, []);

  return (
    <section
      className="hero"
      data-dock-section="hero"
      style={{
        backgroundImage: `linear-gradient(${overlayStyles.start}, ${overlayStyles.end}), url(${hero.bgImage ? (hero.bgImage.startsWith('http') ? hero.bgImage : `${import.meta.env.BASE_URL}images/${hero.bgImage}`) : `${import.meta.env.BASE_URL}images/hero-bg.webp`})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        color: overlayStyles.color
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
