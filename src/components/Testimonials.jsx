import React from 'react';
import EditableText from './EditableText';
import EditableMedia from './EditableMedia';

const Testimonials = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="testimonials py-16" data-dock-section="testimonials">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center text-[var(--color-primary)]">
          Wat Onze Klanten Zeggen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((testimonial, index) => (
            <div key={index} className="testimonial-card p-8 bg-white border border-gray-100 shadow-sm rounded-lg relative flex flex-col">
              <i className="fa-solid fa-quote-left absolute top-6 left-6 text-4xl text-gray-100 z-0"></i>
              <div className="relative z-10 flex-grow">
                <EditableText 
                  tagName="div" 
                  value={testimonial.stars || "★★★★★"} 
                  cmsBind={{ file: "testimonials", index: index, key: "stars" }}
                  className="text-[#FBBF24] text-xl mb-4 tracking-widest"
                />
                <EditableText 
                  tagName="p" 
                  value={testimonial.quote || testimonial.content} 
                  cmsBind={{ file: "testimonials", index: index, key: "quote" }}
                  className="text-gray-700 italic text-lg mb-6 leading-relaxed"
                />
              </div>
              <div className="border-t border-gray-100 pt-6 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm flex-shrink-0">
                  <EditableMedia
                    src={testimonial.image || 'placeholder-user.jpg'}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    cmsBind={{ file: "testimonials", index: index, key: "image" }}
                  />
                </div>
                <div>
                  <EditableText 
                    tagName="h4" 
                    value={testimonial.author} 
                    cmsBind={{ file: "testimonials", index: index, key: "author" }}
                    className="font-bold text-gray-900"
                  />
                  {testimonial.role && (
                    <EditableText 
                      tagName="p" 
                      value={testimonial.role} 
                      cmsBind={{ file: "testimonials", index: index, key: "role" }}
                      className="text-sm text-gray-500"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;