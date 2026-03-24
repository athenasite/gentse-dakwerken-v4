import React from 'react';

const Team = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="team" data-dock-section="team">
      <div className="container">
        <h2>Ontmoet Ons Team</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem" }}>
          {data.map((member, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <img
                src={member.image}
                alt={member.name}
                style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", marginBottom: "1rem" }}
                data-dock-bind={`{"file":"team", "index":${index}, "key":"image"}`}
              />
              <h3 data-dock-bind={`{"file":"team", "index":${index}, "key":"name"}`}>{member.name}</h3>
              <p style={{ color: "var(--primary-color)", fontWeight: "bold" }} data-dock-bind={`{"file":"team", "index":${index}, "key":"role"}`}>{member.role}</p>
              <p style={{ fontSize: "0.9rem" }} data-dock-bind={`{"file":"team", "index":${index}, "key":"bio"}`}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;