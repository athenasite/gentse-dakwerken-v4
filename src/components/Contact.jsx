import React from 'react';
import EditableText from './EditableText';
import EditableLink from './EditableLink';

const Contact = ({ data, siteSettings = {} }) => {
  if (!data || data.length === 0) return null;
  const contact = data[0];
  // Convert siteSettings array to object if necessary or just use the first item
  const settings = Array.isArray(siteSettings) ? (siteSettings[0] || {}) : (siteSettings || {});

  return (
    <section className="contact py-16 bg-white" data-dock-section="contact">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="w-full md:w-1/3 space-y-8">
            <div>
              <EditableText 
                tagName="h2" 
                value={contact.title} 
                cmsBind={{ file: "contact", index: 0, key: "title" }}
                className="text-3xl font-bold mb-4 text-[var(--color-primary)]"
              />
              <EditableText 
                tagName="p" 
                value={contact.subtitle} 
                cmsBind={{ file: "contact", index: 0, key: "subtitle" }}
                className="text-gray-600 leading-relaxed"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-location-dot mt-1 text-[var(--color-accent)]"></i>
                <div>
                  <h4 className="font-bold text-gray-900">Adres</h4>
                  <EditableText 
                    tagName="p" 
                    value={settings.adres} 
                    cmsBind={{ file: "site_settings", index: 0, key: "adres" }}
                    className="text-gray-600"
                  />
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-phone mt-1 text-[var(--color-accent)]"></i>
                <div>
                  <h4 className="font-bold text-gray-900">Telefoon</h4>
                  <EditableText 
                    tagName="p" 
                    value={settings.telefoon} 
                    cmsBind={{ file: "site_settings", index: 0, key: "telefoon" }}
                    className="text-gray-600"
                  />
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-envelope mt-1 text-[var(--color-accent)]"></i>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <EditableText 
                    tagName="p" 
                    value={settings.email} 
                    cmsBind={{ file: "site_settings", index: 0, key: "email" }}
                    className="text-gray-600"
                  />
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-building mt-1 text-[var(--color-accent)]"></i>
                <div>
                  <h4 className="font-bold text-gray-900">Bedrijfsgegevens</h4>
                  <EditableText 
                    tagName="p" 
                    value={settings.btw_nummer} 
                    cmsBind={{ file: "site_settings", index: 0, key: "btw_nummer" }}
                    className="text-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Stuur ons een bericht</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition" placeholder="Uw naam" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition" placeholder="Uw email" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Onderwerp</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition" placeholder="Onderwerp van uw bericht" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
                <textarea rows="4" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition" placeholder="Hoe kunnen we u helpen?"></textarea>
              </div>
              <button className="w-full bg-[var(--color-button-bg)] text-white font-bold py-3 px-6 rounded shadow hover:opacity-90 transition">
                Verstuur Bericht
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;