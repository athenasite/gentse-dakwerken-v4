import React from 'react';

const Footer = ({ data }) => {
  if (!data || !data.site_settings || !data.site_settings[0]) return null;
  const settings = data.site_settings[0];
  const contact = data.contact ? data.contact[0] : {};
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#1a1a1a", color: "white", padding: "4rem 2rem" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem" }}>
        <div>
          <h3 data-dock-bind='{"file":"site_settings", "index":0, "key":"company_name"}'>{settings.company_name}</h3>
          <p data-dock-bind='{"file":"site_settings", "index":0, "key":"tagline"}'>{settings.tagline}</p>
        </div>
        <div>
          <h4>Openingsuren</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}>
            {/* Keeping it simple for now, openingHours could be a table if needed */}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p style={{ fontSize: "0.9rem" }}>
            <span data-dock-bind='{"file":"contact", "index":0, "key":"address"}'>{contact.address}</span><br />
            <span data-dock-bind='{"file":"contact", "index":0, "key":"phone"}'>{contact.phone}</span><br />
            <span data-dock-bind='{"file":"contact", "index":0, "key":"email"}'>{contact.email}</span>
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "3rem", fontSize: "0.8rem", borderTop: "1px solid #333", paddingTop: "2rem" }}>
        © {currentYear} <span data-dock-bind='{"file":"site_settings", "index":0, "key":"company_name"}'>{settings.company_name}</span>. All rights reserved. <br />
        <small>Powered by Auto-F | Generation 2 AI Factory</small>
      </div>
    </footer>
  );
};

export default Footer;