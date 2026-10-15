import React from 'react';
import { experiences } from '../data/experience';
import { Briefcase, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">Work Experience</h2>
          <div className="h-px bg-zinc-800 flex-grow ml-4"></div>
        </div>
      </ScrollReveal>

      <div className="relative pl-6 sm:pl-8 border-l border-zinc-800/80 space-y-10">
        {experiences.map((exp, idx) => (
          <ScrollReveal key={exp.id} delay={idx * 0.12} curtain={true}>
            <div className="relative group">
              {/* Timeline Dot */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-[#050505] shadow-lg group-hover:scale-125 transition-transform ${
                idx === 0 ? 'bg-white shadow-white/30' : 'bg-zinc-500 shadow-zinc-800'
              }`}></div>

              <div className="aurora-card rounded-2xl p-6 sm:p-7 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-zinc-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-zinc-300 font-medium">
                      {exp.company} <span className="text-zinc-500 font-normal">({exp.location})</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-block px-3.5 py-1 rounded-full font-mono text-xs w-fit border ${exp.accentColor}`}>
                      {exp.period}
                    </span>
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                      {exp.statusBadge}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-zinc-300 text-sm list-disc list-inside">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {exp.projectUrl && bullet.includes('WasteGuideAI') ? (
                        <span>
                          Developed{' '}
                          <a 
                            href={exp.projectUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-white hover:text-zinc-300 underline font-semibold inline-flex items-center gap-1"
                          >
                            WasteGuideAI
                            <ExternalLink className="w-3 h-3" />
                          </a>{' '}
                          to automate waste sorting intelligence, significantly improving classification accuracy.
                        </span>
                      ) : (
                        bullet
                      )}
                    </li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
