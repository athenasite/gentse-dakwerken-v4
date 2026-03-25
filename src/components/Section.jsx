import React from 'react';
import Hero from './Hero';
import Features from './Features';
import About from './About';
import Products from './Products';
import Testimonials from './Testimonials';
import Team from './Team';
import Contact from './Contact';

const componentMap = {
  hero: Hero,
  features: Features,
  about: About,
  products: Products,
  testimonials: Testimonials,
  team: Team,
  contact: Contact
};

const Section = ({ data }) => {
  if (!data) return null;

  const sectionOrder = data._section_order || data.section_order || [
    'hero', 'features', 'products', 'about', 'testimonials', 'team', 'contact'
  ];
  
  const sectionSettings = data._section_settings || data.section_settings || {};

  return (
    <div className="app-iteration-modern">
      {sectionOrder.map((sectionName) => {
        const Component = componentMap[sectionName];
        if (!Component) return null; // Skip unknown or _site_settings
        
        const sectionData = data[sectionName];
        if (!sectionData) return null;

        const currentSettings = sectionSettings[sectionName] || {};
        const sectionBgColor = currentSettings.backgroundColor || null;
        const sectionStyle = sectionBgColor ? { backgroundColor: sectionBgColor } : {};

        return (
          <div key={sectionName} style={sectionStyle} className="transition-colors duration-300">
            <Component data={sectionData} siteSettings={data.site_settings || data._site_settings} />
          </div>
        );
      })}
    </div>
  );
};

export default Section;