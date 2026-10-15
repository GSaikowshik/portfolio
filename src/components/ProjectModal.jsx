import React, { useEffect } from 'react';
import { X, ExternalLink, Cpu, Database, Server, Layout, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
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

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl aurora-card rounded-3xl p-6 sm:p-8 border border-zinc-700 shadow-2xl my-8 max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-white transition-all cursor-pointer z-10"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 pr-10">
          <span className={`text-xs font-mono px-3 py-1 rounded-full border ${project.badgeColor}`}>
            {project.status} &bull; {project.timeline}
          </span>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300">
            {project.subtitle}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
          {project.title}
        </h3>

        {/* Preview Image */}
        <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video bg-black relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-top" 
          />
        </div>

        {/* Overview */}
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
          {project.overview}
        </p>

        {/* System Architecture Specifications */}
        {project.architecture && (
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold flex items-center gap-1.5">
              <Server className="w-4 h-4" />
              <span>System Architecture Breakdown</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
                <span className="text-zinc-400 block text-[10px] uppercase font-bold">Client / Viewport</span>
                <span className="text-zinc-200">{project.architecture.client}</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
                <span className="text-zinc-400 block text-[10px] uppercase font-bold">API Gateway & Logic</span>
                <span className="text-zinc-200">{project.architecture.apiGateway}</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
                <span className="text-zinc-400 block text-[10px] uppercase font-bold">AI & LLM Orchestration</span>
                <span className="text-white font-bold">{project.architecture.aiEngine}</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
                <span className="text-zinc-400 block text-[10px] uppercase font-bold">Auth & Persistence</span>
                <span className="text-zinc-200">{project.architecture.authDatabase}</span>
              </div>
            </div>
          </div>
        )}

        {/* Key Architectural Highlights */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold flex items-center gap-1.5">
            <Cpu className="w-4 h-4" />
            <span>Engineering Highlights & Optimization</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.highlights.map((h, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <h5 className="text-sm font-display font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                  <span>{h.title}</span>
                </h5>
                <p className="text-xs text-zinc-300 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack & Infrastructure */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
            Tech Stack & Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-4">
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-xs font-mono font-bold px-5 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all shadow-lg shadow-white/10"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Launch Live Demo</span>
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-xs font-mono px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub Source</span>
          </a>
        </div>

      </div>
    </div>
  );
}
