import React from 'react';
import EditableText from './EditableText';
import EditableMedia from './EditableMedia';

const Features = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="features py-16 bg-gray-50" data-dock-section="features">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center text-[var(--color-primary)]">
          Onze specialiteiten
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((feature, index) => (
            <div key={index} className="feature-card p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-16 h-16 mb-4 overflow-hidden rounded-lg">
                <EditableMedia
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                  cmsBind={{ file: "features", index: index, key: "icon" }}
                />
              </div>
              <EditableText
                tagName="h3"
                value={feature.title}
                cmsBind={{ file: "features", index: index, key: "title" }}
                className="text-xl font-bold mb-3"
              />
              <EditableText
                tagName="p"
                value={feature.description}
                cmsBind={{ file: "features", index: index, key: "description" }}
                className="text-gray-600"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;