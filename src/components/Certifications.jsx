import React, { useState } from 'react';
import { certifications } from '../data/certifications';
import { ExternalLink, Award, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'GenAI', 'AI & ML', 'Full-Stack', 'Deep Learning', 'Cloud'];

  const filteredCerts = certifications.filter(cert => {
    if (activeCategory === 'all') return true;
    return cert.category === activeCategory;
  });

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Certifications & Badges
            </h2>
            <div className="h-px bg-zinc-800 w-16 hidden sm:block"></div>
          </div>

          {/* Filter Badges */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#09090b] border border-zinc-800 text-xs font-mono">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? `All (${certifications.length})` : cat}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredCerts.map((cert, idx) => (
          <ScrollReveal 
            key={cert.id} 
            delay={Math.min(idx * 0.05, 0.35)} 
            scale={0.97}
            curtain={true}
          >
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`aurora-card rounded-2xl p-5 hover:border-zinc-500 hover:-translate-y-1 transition-all flex flex-col justify-between group border-l-2 ${cert.accentColor} h-full`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400 font-semibold">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {cert.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-base group-hover:text-zinc-300 transition-colors flex items-center justify-between gap-2">
                  <span>{cert.title}</span>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors flex-shrink-0" />
                </h3>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-300 group-hover:text-white underline flex items-center gap-1">
                  Verify Credential &rarr;
                </span>
                <span className="text-[10px] text-zinc-500 font-mono">
                  {cert.tag}
                </span>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
