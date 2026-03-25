import React from 'react';
import EditableText from './EditableText';
import EditableMedia from './EditableMedia';

const Team = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="team py-16 bg-gray-50" data-dock-section="team">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center text-[var(--color-primary)]">
          Ons Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((member, index) => (
            <div key={index} className="team-card bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden text-center hover:shadow-md transition">
              <div className="w-full aspect-square overflow-hidden bg-gray-100">
                <EditableMedia
                  src={member.image || 'placeholder-user.jpg'}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  cmsBind={{ file: "team", index: index, key: "image" }}
                />
              </div>
              <div className="p-6">
                <EditableText 
                  tagName="h3" 
                  value={member.name} 
                  cmsBind={{ file: "team", index: index, key: "name" }}
                  className="text-xl font-bold mb-1"
                />
                <EditableText 
                  tagName="p" 
                  value={member.role} 
                  cmsBind={{ file: "team", index: index, key: "role" }}
                  className="text-[var(--color-accent)] mb-3 font-medium"
                />
                <EditableText 
                  tagName="p" 
                  value={member.bio} 
                  cmsBind={{ file: "team", index: index, key: "bio" }}
                  className="text-sm text-gray-500 line-clamp-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;