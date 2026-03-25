import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './dock-connector.js';
import './index.css';

const App = ({ data: initialData }) => {
  const [data, setData] = useState(initialData || {});

  useEffect(() => {
    const handleMessage = (event) => {
      const { type, file, index, key, value } = event.data;

      if (type === 'DOCK_REQUEST_SYNC') {
        const sourceFile = file || 'site_settings';
        const sourceData = data[sourceFile];
        const row = Array.isArray(sourceData) ? sourceData[index || 0] : sourceData;
        
        window.parent.postMessage({
          type: 'SITE_SYNC_RESPONSE',
          key,
          value: row ? row[key] : null,
          fullRow: row
        }, '*');
      }

      if (type === 'DOCK_UPDATE_TEXT' || type === 'DOCK_UPDATE_COLOR') {
        setData(prev => {
          const newData = { ...prev };
          const targetFile = file || (key.startsWith('header_') ? 'header_settings' : 'site_settings');
          
          if (!newData[targetFile]) {
            newData[targetFile] = (index !== undefined) ? [] : {};
          }

          if (Array.isArray(newData[targetFile])) {
            newData[targetFile] = [...newData[targetFile]];
            const currentItem = newData[targetFile][index || 0];
            
            // 🔥 Fix: if it's a simple array (like section_order) or we're replacing the whole item
            if (typeof currentItem !== 'object' || currentItem === null || key === undefined) {
              newData[targetFile][index || 0] = value;
            } else {
              newData[targetFile][index || 0] = { ...currentItem, [key]: value };
            }
          } else {
            newData[targetFile] = { ...newData[targetFile], [key]: value };
          }
          return newData;
        });
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [data]);

  // 🔥 [v33 Bridge]: Deel actuele data met de Dock-connector
  useEffect(() => {
    if (window.athenaScan) {
      window.athenaScan(data);
    }
  }, [data]);

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] transition-colors duration-500">
      <Header />
      <main>
        <Section data={data} />
      </main>
      <Footer data={data} />
    </div>
  );
};

export default App;