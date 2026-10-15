import React, { useState, useEffect } from 'react';
import { positionsOfResponsibility } from '../data/por';
import { ChevronLeft, ChevronRight, Maximize2, Award, Gift, Eye } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function PoRShowcase({ onOpenLightbox }) {
  const [activeOrg, setActiveOrg] = useState('unstop');
  const [filterType, setFilterType] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentPoR = positionsOfResponsibility.find(p => p.id === activeOrg) || positionsOfResponsibility[0];
  
  const filteredItems = currentPoR.items.filter(item => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  // Reset current index when org or filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeOrg, filterType]);

  // Autoplay slideshow
  useEffect(() => {
    if (filteredItems.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [filteredItems.length]);

  const activeItem = filteredItems[currentIndex] || filteredItems[0];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev + 1) % filteredItems.length);
  };

  return (
    <section id="por" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Positions of Responsibility
            </h2>
            <div className="h-px bg-zinc-800 w-16 hidden sm:block"></div>
          </div>

          {/* Organization Switcher Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#09090b] border border-zinc-800 text-xs font-mono">
            {positionsOfResponsibility.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveOrg(p.id)}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeOrg === p.id
                    ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {p.organization} ({p.items.length})
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1} curtain={true}>
        <div className="aurora-card rounded-2xl overflow-hidden border border-white/10 flex flex-col lg:flex-row gap-0">
        
        {/* Left: Interactive Media Showcase Slider */}
        <div className="lg:w-7/12 relative bg-[#050505] overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 min-h-[340px] sm:min-h-[420px] flex items-center justify-center group/slider">
          
          {activeItem && (
            <div 
              className="relative w-full h-full min-h-[340px] sm:min-h-[420px] cursor-pointer flex items-center justify-center p-4 sm:p-6"
              onClick={() => onOpenLightbox(activeItem.src, activeItem.title)}
              title="Click to expand fullscreen"
            >
              {/* Blurred Ambient Mirror Backdrop */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <img 
                  src={activeItem.src} 
                  alt="" 
                  className="w-full h-full object-cover filter blur-3xl scale-125 opacity-30 brightness-75"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Crisp Foreground Image */}
              <div className="relative z-10 max-h-[320px] sm:max-h-[380px] max-w-full flex items-center justify-center">
                <img 
                  src={activeItem.src} 
                  alt={activeItem.title} 
                  className="max-h-[320px] sm:max-h-[380px] max-w-full object-contain rounded-xl shadow-2xl border border-white/10 filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Tag & Counter */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-20">
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/20 text-[11px] font-mono font-semibold flex items-center gap-1.5">
                  {activeItem.type === 'certificate' ? <Award className="w-3.5 h-3.5 text-zinc-300" /> : <Gift className="w-3.5 h-3.5 text-zinc-400" />}
                  <span>{activeItem.tag}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-zinc-300 border border-white/10 text-[11px] font-mono">
                  {currentIndex + 1} / {filteredItems.length}
                </span>
              </div>

              {/* Hover Click to Expand Badge */}
              <div className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[11px] font-mono text-white border border-white/20 flex items-center gap-1.5 opacity-0 group-hover/slider:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Expand Fullscreen</span>
              </div>

              {/* Slider Controls */}
              {filteredItems.length > 1 && (
                <>
                  <button 
                    onClick={handlePrev} 
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/75 hover:bg-white text-white hover:text-black border border-white/10 transition-all opacity-80 hover:opacity-100 z-20 cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={handleNext} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/75 hover:bg-white text-white hover:text-black border border-white/10 transition-all opacity-80 hover:opacity-100 z-20 cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Right: Organization Details & Thumbnails */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className={`text-xs font-mono px-3 py-1 rounded-lg border ${currentPoR.tagColor}`}>
                {currentPoR.period}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {currentPoR.type}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-white">
                {currentPoR.title}
              </h3>
              <p className="text-sm font-semibold text-zinc-400 mt-0.5">
                {currentPoR.organization}
              </p>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed">
              {currentPoR.description}
            </p>

            {/* Filter by Type */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className="text-zinc-400 text-[11px]">Filter Assets:</span>
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${filterType === 'all' ? 'bg-zinc-800 text-white font-bold border border-zinc-700' : 'text-zinc-400 hover:text-white'}`}
                >
                  All ({currentPoR.items.length})
                </button>
                <button
                  onClick={() => setFilterType('certificate')}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${filterType === 'certificate' ? 'bg-zinc-800 text-white font-bold border border-zinc-700' : 'text-zinc-400 hover:text-white'}`}
                >
                  Certificates
                </button>
                <button
                  onClick={() => setFilterType('swag')}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${filterType === 'swag' ? 'bg-zinc-800 text-white font-bold border border-zinc-700' : 'text-zinc-400 hover:text-white'}`}
                >
                  Swag & Kit
                </button>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-2 pt-2 max-h-[140px] overflow-y-auto pr-1">
              {filteredItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden border transition-all cursor-pointer bg-zinc-900 ${
                    currentIndex === idx 
                      ? 'border-white ring-2 ring-white/30 scale-105' 
                      : 'border-white/10 opacity-70 hover:opacity-100 hover:border-zinc-500'
                  }`}
                  title={item.title}
                >
                  <img src={item.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Verified Campus Representative</span>
            <span className="text-zinc-400 font-bold">&bull; Active Track</span>
          </div>
        </div>

      </div>
      </ScrollReveal>
    </section>
  );
}
