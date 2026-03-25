import React from 'react';
import EditableText from './EditableText';
import EditableLink from './EditableLink';
import EditableMedia from './EditableMedia';

const Hero = ({ data }) => {
  if (!data || data.length === 0) return null;
  const hero = data[0];

  // Map Dock-specific transparency to a usable CSS variable if not already set by Dock directly
  const overlayOpacity = (hero.hero_overlay_transparantie !== undefined) 
    ? hero.hero_overlay_transparantie / 100 
    : 0.5;

  const sectionStyle = {
    '--hero-overlay-start': `rgba(0,0,0,${overlayOpacity})`,
    '--hero-overlay-end': `rgba(0,0,0,${overlayOpacity * 0.6})`,
    minHeight: hero.hero_height ? `${hero.hero_height}px` : '70vh',
    paddingTop: hero.hero_padding_top ? `${hero.hero_padding_top}px` : '0px'
  };

  return (
    <section
      className="hero relative flex items-center bg-slate-800 overflow-hidden"
      data-dock-section="hero"
      style={sectionStyle}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <EditableMedia
          src={hero.bgImage || 'hero-bg.webp'}
          alt="Hero Background"
          className="w-full h-full object-cover"
          cmsBind={{ file: "hero", index: 0, key: "bgImage" }}
        />
      </div>
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none transition-colors duration-500"
        style={{
          background: 'linear-gradient(to bottom, var(--hero-overlay-start), var(--hero-overlay-end))'
        }}
      ></div>

      <div className="container relative z-20 text-[var(--hero-title-color,white)]">
        <EditableText 
          tagName="h1" 
          value={hero.title} 
          cmsBind={{ file: "hero", index: 0, key: "title" }}
          className="text-4xl md:text-5xl font-bold mb-4"
        />
        <EditableText 
          tagName="p" 
          value={hero.subtitle} 
          cmsBind={{ file: "hero", index: 0, key: "subtitle" }}
          className="text-xl md:text-2xl mb-8 opacity-90"
        />
        <EditableLink 
          url={hero.ctaText} 
          cmsBind={{ file: "hero", index: 0, key: "ctaText" }}
          className="btn-primary inline-block relative z-30"
          onClick={(e) => {
            const url = (typeof hero.ctaText === 'object') ? hero.ctaText.url : hero.ctaText;
            if (url && url.startsWith('#')) {
              e.preventDefault();
              document.querySelector(url)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
