import React from 'react';

const About = ({ data }) => {
  if (!data || data.length === 0) return null;
  const about = data[0];

  return (
    <section className="about" data-dock-section="about">
      <div className="container">
        <h2 data-dock-bind='{"file":"about", "index":0, "key":"title"}'>{about.title}</h2>
        <p data-dock-bind='{"file":"about", "index":0, "key":"content"}'>{about.content}</p>
      </div>
    </section>
  );
};

export default About;