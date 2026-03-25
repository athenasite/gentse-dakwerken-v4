import React from 'react';
import { useDisplayConfig } from './DisplayConfigContext';

/**
 * EditableMedia (Docked Track)
 * Passive wrapper that binds to the Athena Dock.
 */
export default function EditableMedia({ src, alt, className, cmsBind, ...props }) {
  const { isFieldVisible } = useDisplayConfig() || {};
  
  // Visibility Check
  if (isFieldVisible && cmsBind && !isFieldVisible(cmsBind.file, cmsBind.key)) {
    return null;
  }

  const actualSrc = (typeof src === 'object' && src !== null) ? (src.text || src.src || src.url || '') : src;

  let baseEnv = import.meta.env.BASE_URL || '/';
  if (baseEnv === './') {
    baseEnv = window.location.pathname.endsWith('/') ? './' : '';
  }

  // Ensure baseEnv ends with a slash if it's not empty, but only if actualSrc doesn't start with one
  const cleanBase = (baseEnv && !baseEnv.endsWith('/')) ? `${baseEnv}/` : baseEnv;
  
  const finalSrc = (actualSrc && !actualSrc.startsWith('http') && !actualSrc.startsWith('/') && !actualSrc.startsWith('data:'))
    ? `${cleanBase}${actualSrc.startsWith('images/') ? '' : 'images/'}${actualSrc}`.replace(/([^:])\/+/g, '$1/')
    : actualSrc;

  if (import.meta.env.DEV) {
    console.log(`[EditableMedia] "${cmsBind?.key || 'unknown'}": ${actualSrc} -> ${finalSrc}`);
  }

  const isVideo = src && (src.endsWith('.mp4') || src.endsWith('.webm'));

  const renderMedia = () => {
    if (isVideo) return <video src={finalSrc} className={className} autoPlay muted loop playsInline {...props} />;
    if (!src) return <div className={`bg-slate-200 flex items-center justify-center text-slate-400 ${className}`}>🖼️</div>;
    return <img src={finalSrc} alt={alt} className={className} {...props} />;
  };

  
  const dockBind = cmsBind ? JSON.stringify({
    file: cmsBind.file,
    index: cmsBind.index || 0,
    key: cmsBind.key
  }) : null;

  return (
    <div
      className={`relative group ${className} cursor-pointer hover:ring-2 hover:ring-blue-400/40 rounded-sm transition-all duration-200`}
      data-dock-bind={dockBind}
      data-dock-type="media"
      title={cmsBind ? `Klik om "${cmsBind.key}" te bewerken in de Dock` : undefined}
    >
      {renderMedia()}
    </div>
  );
}
