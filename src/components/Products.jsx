import React from 'react';
import EditableText from './EditableText';
import EditableMedia from './EditableMedia';

const Products = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="products py-16" data-dock-section="products">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center text-[var(--color-primary)]">
          Onze Diensten &amp; Producten
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((product, index) => (
            <div key={index} className="product-card flex flex-col md:flex-row bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="w-full md:w-2/5 h-48 md:h-auto">
                <EditableMedia
                  src={product.image || 'placeholder.jpg'}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  cmsBind={{ file: "products", index: index, key: "image" }}
                />
              </div>
              <div className="p-6 w-full md:w-3/5 flex flex-col justify-center">
                <EditableText 
                  tagName="h3" 
                  value={product.title} 
                  cmsBind={{ file: "products", index: index, key: "title" }}
                  className="text-2xl font-bold mb-3"
                />
                <EditableText 
                  tagName="p" 
                  value={product.description} 
                  cmsBind={{ file: "products", index: index, key: "description" }}
                  className="text-gray-600 mb-4"
                />
                {product.price && (
                  <div className="text-[var(--color-accent)] font-bold text-lg mt-auto">
                    {product.price}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;