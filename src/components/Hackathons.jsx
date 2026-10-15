import React from 'react';
import { hackathons } from '../data/hackathons';
import { Trophy, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">Hackathons & Competitions</h2>
          <div className="h-px bg-zinc-800 flex-grow ml-4"></div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hackathons.map((h, idx) => (
          <ScrollReveal key={h.id} delay={idx * 0.1} scale={0.97} curtain={true}>
            <div 
              className={`aurora-card rounded-2xl p-6 border-l-4 ${h.borderAccent} flex flex-col justify-between hover:border-zinc-500 transition-all h-full`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-semibold ${h.tagColor}`}>
                    {h.tag}
                  </span>
                  <Trophy className={`w-4 h-4 ${h.tagColor}`} />
                </div>
                <h3 className="text-lg font-display font-bold text-white leading-snug">
                  {h.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {h.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 mt-4">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                  {h.badge}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
