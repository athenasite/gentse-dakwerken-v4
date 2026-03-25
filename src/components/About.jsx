import React from 'react';
import EditableText from './EditableText';

const About = ({ data }) => {
  if (!data || data.length === 0) return null;
  const about = data[0];

  return (
    <section className="about py-16" data-dock-section="about">
      <div className="container">
        <EditableText 
          tagName="h2" 
          value={about.title} 
          cmsBind={{ file: "about", index: 0, key: "title" }}
          className="text-3xl font-bold mb-6 text-center"
        />
        <EditableText 
          tagName="p" 
          value={about.content} 
          cmsBind={{ file: "about", index: 0, key: "content" }}
          className="text-lg leading-relaxed max-w-3xl mx-auto"
        />
      </div>
    </section>
  );
};

export default About;