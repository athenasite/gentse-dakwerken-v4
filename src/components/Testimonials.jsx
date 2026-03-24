import React from 'react';

const Testimonials = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="testimonials" data-dock-section="testimonials" style={{ background: "var(--primary-color)", color: "white" }}>
      <div className="container">
        <h2>Wat Onze Klanten Zeggen</h2>
        <div style={{ display: "flex", overflowX: "auto", gap: "2rem", padding: "1rem 0" }}>
          {data.map((testimonial, index) => (
            <div key={index} style={{ minWidth: "300px", background: "rgba(255,255,255,0.1)", padding: "2rem", borderRadius: "12px" }}>
              <p style={{ fontStyle: "italic", fontSize: "1.1rem" }} data-dock-bind={`{"file":"testimonials", "index":${index}, "key":"content"}`}>"{testimonial.content}"</p>
              <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
                - <span data-dock-bind={`{"file":"testimonials", "index":${index}, "key":"author"}`}>{testimonial.author}</span>
              </div>
              <div style={{ fontSize: "0.8rem", opacity: 0.8 }} data-dock-bind={`{"file":"testimonials", "index":${index}, "key":"role"}`}>{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;