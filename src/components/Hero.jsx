import React from 'react';
import EditableText from './EditableText';
import EditableLink from './EditableLink';
import EditableMedia from './EditableMedia';

const Hero = ({ data }) => {
  if (!data || data.length === 0) return null;
  const hero = data[0];

  return (
    <section
      className="hero relative flex items-center min-h-[70vh] bg-slate-800 overflow-hidden"
      data-dock-section="hero"
    >
      <div className="absolute inset-0 z-0">
        <EditableMedia
          src={hero.bgImage || 'hero_bg_gentse_dakwerken.png'}
          alt="Hero Background"
          className="w-full h-full object-cover"
          cmsBind={{ file: "hero", index: 0, key: "bgImage" }}
        />
      </div>
      
      {/* Dynamic Overlay using standard variables updated by dock */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(var(--hero-overlay-start, rgba(0,0,0,0.5)), var(--hero-overlay-end, rgba(0,0,0,0.2)))'
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
          url="#" 
          label={hero.ctaText} 
          cmsBind={{ file: "hero", index: 0, key: "ctaText" }}
          className="btn-primary inline-block"
        />
      </div>
    </section>
  );
};

export default Hero;
