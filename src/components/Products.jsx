import React from 'react';

const Products = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="products" data-dock-section="products">
      <div className="container">
        <h2>Onze Creaties</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem" }}>
          {data.map((product, index) => (
            <div key={index} className="product-card" style={{ background: "var(--secondary-color)", padding: "1rem", borderRadius: "8px" }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: "4px" }}
                data-dock-bind={`{"file":"products", "index":${index}, "key":"image"}`}
              />
              <h3 style={{ marginTop: "1rem" }} data-dock-bind={`{"file":"products", "index":${index}, "key":"name"}`}>{product.name}</h3>
              <p style={{ fontWeight: "bold", color: "var(--primary-color)" }} data-dock-bind={`{"file":"products", "index":${index}, "key":"price"}`}>{product.price}</p>
              <p style={{ fontSize: "0.9rem" }} data-dock-bind={`{"file":"products", "index":${index}, "key":"description"}`}>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;