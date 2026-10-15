import React from 'react';
import { skillCategories } from '../data/skills';
import { Sparkles, Server, Layout, Database, Wrench, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  const getIcon = (name) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Server': return <Server className="w-6 h-6" />;
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">Technical Arsenal</h2>
          <div className="h-px bg-zinc-800 flex-grow ml-4"></div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <ScrollReveal 
            key={cat.id} 
            delay={idx * 0.08}
            scale={0.96}
            curtain={true}
          >
            <div className={`blueprint-card rounded-2xl p-6 sm:p-7 border-t-2 ${cat.accentBorder} flex flex-col justify-between hover:border-zinc-500 transition-all group h-full`}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl ${cat.iconBg} shadow-lg group-hover:scale-110 transition-transform`}>
                    {getIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-zinc-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">{cat.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-xl border transition-all cursor-default ${cat.badgeStyle}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor}`}></span>
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
