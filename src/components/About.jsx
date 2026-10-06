import React from 'react';
import { GraduationCap, MapPin, Code2, Cpu, Sparkles, Terminal, ShieldAlert } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Behind the Code
          </h2>
          <div className="h-px bg-zinc-800 flex-grow ml-4"></div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.08} scale={0.98}>
        <div className="blueprint-card rounded-2xl p-6 sm:p-9 relative overflow-hidden space-y-6">
          {/* Top Micro-Badges */}
          <div className="flex flex-wrap items-center gap-2.5 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 text-zinc-200 font-mono text-xs border border-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            Full-Stack AI Developer
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 font-mono text-xs border border-zinc-700">
            <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
            B.Tech CSE &bull; Vishnu Institute of Technology (2023 - 2027)
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 text-zinc-300 font-mono text-xs border border-zinc-700">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            Andhra Pradesh, India
          </span>
        </div>

        {/* Narrative & Anti-Slop Manifesto */}
        <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed relative z-10">
          <p>
            I am a <span className="text-white font-semibold">Full-Stack AI Developer</span> and a Computer Science student at <span className="text-white font-medium">Vishnu Institute of Technology (2023 - 2027)</span>. Based in Andhra Pradesh, I specialize in high-throughput <span className="text-white font-semibold">FastAPI backends, responsive React frontends, and PostgreSQL databases</span> with deeply integrated Generative AI microservices.
          </p>
          
          {/* Engineering Truth Callout */}
          <ScrollReveal delay={0.12} curtain={true}>
            <div className="p-4 sm:p-5 rounded-xl bg-[#08080a] border border-zinc-700 shadow-xl shadow-black space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-200 uppercase">
                <Terminal className="w-4 h-4 text-zinc-400" />
                <span>Engineering Philosophy</span>
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-mono">
                "AI tools help me write boilerplate code in minutes. But real software engineering is about <span className="text-white font-bold">database connection pooling</span>, <span className="text-zinc-200 font-bold">strict Pydantic schema validation</span>, <span className="text-zinc-300 font-bold">async concurrency</span>, and keeping <span className="text-white font-bold">p99 latency under 85ms</span>. AI prototypes are cheap; resilient, maintainable production software requires human architectural discipline."
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800 relative z-10">
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
            <div className="text-white text-xs font-mono font-bold flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-zinc-400" />
              <span>Low-Latency AI</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              FastAPI async pipelines with Pydantic JSON validation guarantees for rapid LLM inference.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
            <div className="text-zinc-200 text-xs font-mono font-bold flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-zinc-400" />
              <span>Robust Full-Stack</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Modular React architectures, connection-pooled PostgreSQL, and clean decoupled services.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
            <div className="text-zinc-300 text-xs font-mono font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-zinc-400" />
              <span>Rapid Production MVPs</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              From ideation to deployment in days with strict security, JWT authentication, and automated CI/CD.
            </p>
          </div>
        </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
