import React, { useEffect, useRef } from 'react';

const Hero = ({ data }) => {
  if (!data || data.length === 0) return null;
  const hero = data[0];
  const sectionRef = useRef(null);

  useEffect(() => {
    const updateHeroStyle = () => {
      if (!sectionRef.current) return;
      const root = document.documentElement;
      
      const start = root.style.getPropertyValue('--hero-overlay-start').trim() || 'rgba(0,0,0,0.5)';
      const end = root.style.getPropertyValue('--hero-overlay-end').trim() || 'rgba(0,0,0,0.2)';
      const color = root.style.getPropertyValue('--hero-title-color').trim() || 'white';
      
      const bgUrl = hero.bgImage 
        ? (hero.bgImage.startsWith('http') ? hero.bgImage : `${import.meta.env.BASE_URL}images/${hero.bgImage}`)
        : `${import.meta.env.BASE_URL}images/hero-bg.webp`;
      
      sectionRef.current.style.backgroundImage = `linear-gradient(${start}, ${end}), url(${bgUrl})`;
      sectionRef.current.style.color = color;
    };

    // Listen for dock messages
    const handleMessage = (e) => {
      if (e.data?.type === 'DOCK_UPDATE_COLOR') {
        requestAnimationFrame(updateHeroStyle);
      }
    };
    window.addEventListener('message', handleMessage);
    
    // Check periodically
    const interval = setInterval(updateHeroStyle, 200);
    
    // Initial
    setTimeout(updateHeroStyle, 50);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearInterval(interval);
    };
  }, [hero.bgImage]);

  const bgUrl = hero.bgImage 
    ? (hero.bgImage.startsWith('http') ? hero.bgImage : `${import.meta.env.BASE_URL}images/${hero.bgImage}`)
    : `${import.meta.env.BASE_URL}images/hero-bg.webp`;

  return (
    <section
      ref={sectionRef}
      className="hero"
      data-dock-section="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${bgUrl})`,
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
