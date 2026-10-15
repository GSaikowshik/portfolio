import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-white transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer"
          aria-label="Close Lightbox"
        >
          <span>Close</span>
          <X className="w-4 h-4" />
        </button>

        {/* Lightbox Image */}
        <div className="rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl max-h-[75vh] flex items-center justify-center">
          <img 
            src={image.src} 
            alt={image.title || 'Expanded Preview'} 
            className="max-h-[75vh] max-w-full object-contain" 
          />
        </div>

        {/* Caption */}
        {image.title && (
          <div className="mt-3 text-center text-sm font-mono text-zinc-300">
            {image.title}
          </div>
        )}
      </div>
    </div>
  );
}
