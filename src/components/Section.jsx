import React from 'react';
import Hero from './Hero';
import Features from './Features';
import About from './About';
import Products from './Products';
import Testimonials from './Testimonials';
import Team from './Team';
import Contact from './Contact';

const Section = ({ data }) => {
  if (!data) return null;

  return (
    <div className="app-iteration-modern">
      <Hero data={data.hero} />
      <Features data={data.features} />
      <Products data={data.products} />
      <About data={data.about} />
      <Testimonials data={data.testimonials} />
      <Team data={data.team} />
      <Contact data={data.contact} />
    </div>
  );
};

export default Section;