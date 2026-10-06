import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ExternalLink, Layers, Play, CheckCircle2, Code2, Cpu, Database, Server, RefreshCw } from 'lucide-react';
import { GithubIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Projects({ onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('stack'); // 'stack' (curtain reveal) or 'grid'
  
  // Pipeline simulation state
  const [activeSimulation, setActiveSimulation] = useState({
    instarepo: { isRunning: false, currentStep: 0, completed: false, latency: 0 },
    dayzero: { isRunning: false, currentStep: 0, completed: false, latency: 0 }
  });

  // Schema viewer toggle state
  const [showSchema, setShowSchema] = useState({
    instarepo: false,
    dayzero: false
  });

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.categories.includes(activeFilter);
  });

  const runSimulation = (projectId) => {
    setActiveSimulation(prev => ({
      ...prev,
      [projectId]: { isRunning: true, currentStep: 1, completed: false, latency: 14 }
    }));

    setTimeout(() => {
      setActiveSimulation(prev => ({
        ...prev,
        [projectId]: { isRunning: true, currentStep: 2, completed: false, latency: 28 }
      }));
    }, 700);

    setTimeout(() => {
      setActiveSimulation(prev => ({
        ...prev,
        [projectId]: { isRunning: true, currentStep: 3, completed: false, latency: 68 }
      }));
    }, 1500);

    setTimeout(() => {
      setActiveSimulation(prev => ({
        ...prev,
        [projectId]: { isRunning: false, currentStep: 4, completed: true, latency: 79 }
      }));
    }, 2200);
  };

  const getPipelineSteps = (projectId) => {
    if (projectId === 'instarepo') {
      return [
        { label: 'Ingest Client Payload', detail: 'Multipart PDF / Text Stream' },
        { label: 'Pydantic v2 Validation', detail: 'Strict Type Guarantee' },
        { label: 'Gemini 2.5 Structured Extraction', detail: 'Zero-Shot JSON Mode' },
        { label: 'Supabase DB Pool Commit', detail: 'Async PostgreSQL Write' }
      ];
    } else {
      return [
        { label: 'Ingest Market Stream', detail: 'Trend Keywords & Feeds' },
        { label: 'FastAPI Scoring Engine', detail: 'Momentum Vector Filter' },
        { label: 'Gemini Opportunity Synthesis', detail: 'Structured Gap Matrix' },
        { label: 'Supabase DB Synchronization', detail: 'Real-time Feed Broadcast' }
      ];
    }
  };

  const getSchemaSnippet = (projectId) => {
    if (projectId === 'instarepo') {
      return `class WorkExperience(BaseModel):
    company: str = Field(description="Employer name")
    role: str = Field(description="Job title")
    metrics: List[str] = Field(description="Quantifiable bullet achievements")
    start_date: str = Field(pattern=r"^[A-Z][a-z]{2} \\d{4}$")
    end_date: Optional[str] = Field(default="Present")

class ResumeSchema(BaseModel):
    candidate_name: str
    contact: ContactSchema
    skills: List[str]
    work_history: List[WorkExperience]
    ats_score_estimate: float = Field(ge=0.0, le=100.0)`;
    } else {
      return `class MarketSignal(BaseModel):
    keyword: str
    velocity_score: float = Field(ge=0.0, le=1.0)
    sentiment: Literal["bullish", "neutral", "bearish"]
    unmet_pain_points: List[str]
    competitor_count: int
    validation_timestamp: datetime = Field(default_factory=datetime.utcnow)`;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header with Telemetry Tag */}
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                Production Workspaces
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Controls: Category Filter Tabs & Curtain View Toggle */}
          <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-auto">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#09090b] border border-zinc-800 text-xs font-mono">
              <button
                onClick={() => setViewMode('stack')}
                className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'stack'
                    ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Curtain Sticky Stack Reveal"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Curtain Stack</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Side-by-Side Grid View"
              >
                <span>Grid</span>
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#09090b] border border-zinc-800 text-xs font-mono">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  activeFilter === 'all' 
                    ? 'bg-white text-black font-bold shadow-md shadow-white/10' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                All ({projects.length})
              </button>
              <button
                onClick={() => setActiveFilter('genai')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  activeFilter === 'genai' 
                    ? 'bg-white text-black font-bold shadow-md shadow-white/10' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                GenAI
              </button>
              <button
                onClick={() => setActiveFilter('fullstack')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  activeFilter === 'fullstack' 
                    ? 'bg-white text-black font-bold shadow-md shadow-white/10' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Full-Stack
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {viewMode === 'stack' ? (
        /* CURTAIN STICKY STACK REVEAL MODE */
        <div className="space-y-12 sm:space-y-16 relative pb-12">
          {filteredProjects.map((project, idx) => {
            const sim = activeSimulation[project.id];
            const steps = getPipelineSteps(project.id);
            const isSchemaOpen = showSchema[project.id];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 55, scale: 0.95, filter: 'blur(16px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: 'transform, opacity, filter' }}
                className={`blueprint-card rounded-3xl overflow-hidden border border-white/10 relative group transition-all duration-500 ${
                  idx === 0 
                    ? 'sticky top-24 sm:top-28 z-10 shadow-2xl bg-[#09090b]' 
                    : 'sticky top-28 sm:top-36 z-20 shadow-[0_-25px_60px_rgba(0,0,0,0.95)] border-t-2 border-zinc-700 bg-[#09090b]'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Column: Browser Header + Live Screenshot + Pipeline Simulator (7 cols) */}
                  <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-zinc-800 bg-[#050505] flex flex-col justify-between">
                    
                    {/* Browser Preview Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 bg-[#09090b]/90">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-600"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-500"></span>
                      </div>
                      <div className="px-3 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        <span>{project.liveUrl.replace('https://', '')}</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">p99: &lt;85ms</span>
                    </div>

                    {/* Screenshot Frame */}
                    <div 
                      className="relative overflow-hidden aspect-[16/9] bg-black cursor-pointer group-hover:opacity-95 transition-opacity"
                      onClick={() => onOpenProject(project)}
                      title="Click to view full architecture deep-dive"
                    >
                      <img 
                        src={project.image} 
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                        loading="lazy"
                        onError={(e) => {
                          if (project.fallbackImage) e.target.src = project.fallbackImage;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                      
                      {/* Floating Action Pill */}
                      <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-xl bg-black/85 backdrop-blur-md text-[11px] font-mono text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
                        <Layers className="w-3.5 h-3.5 text-zinc-300" />
                        <span>Open Architecture Specs</span>
                      </div>
                    </div>

                    {/* INTERACTIVE WORKBENCH: Live Architecture Pipeline Simulator */}
                    <div className="p-4 sm:p-5 bg-[#09090b] border-t border-zinc-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-zinc-300" />
                          <span className="text-xs font-mono text-white font-bold uppercase tracking-wide">Live Pipeline Simulator</span>
                        </div>

                        <button
                          onClick={() => runSimulation(project.id)}
                          disabled={sim.isRunning}
                          className="px-3 py-1 rounded-lg bg-zinc-800 hover:bg-white text-zinc-200 hover:text-black border border-zinc-700 text-[11px] font-mono transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                        >
                          {sim.isRunning ? (
                            <>
                              <RefreshCw className="w-3 h-3 animate-spin" />
                              <span>Executing ({sim.latency}ms)...</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3 h-3 fill-current" />
                              <span>Simulate Pipeline</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Step Sequence Visualizer */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[10px]">
                        {steps.map((step, sIdx) => {
                          const stepNum = sIdx + 1;
                          const isActive = sim.currentStep === stepNum;
                          const isDone = sim.currentStep > stepNum || sim.completed;

                          return (
                            <div 
                              key={sIdx}
                              className={`p-2 rounded-lg border transition-all ${
                                isActive 
                                  ? 'bg-white/10 border-white text-white ring-1 ring-white/30 scale-[1.02]' 
                                  : isDone
                                  ? 'bg-zinc-900 border-zinc-700 text-zinc-200'
                                  : 'bg-zinc-950/60 border-zinc-800 text-zinc-500'
                              }`}
                            >
                              <div className="font-bold flex items-center gap-1">
                                <span>#{stepNum}</span>
                                {isDone && <CheckCircle2 className="w-2.5 h-2.5 text-zinc-300" />}
                              </div>
                              <div className="truncate mt-0.5">{step.label}</div>
                            </div>
                          );
                        })}
                      </div>

                      {sim.completed && (
                        <div className="text-[11px] font-mono text-zinc-200 bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-700 flex items-center justify-between">
                          <span>✓ Pipeline Finished: Status 200 OK</span>
                          <span className="font-bold">{sim.latency}ms round-trip</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Details, Highlights, Schema & Actions (5 cols) */}
                  <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between space-y-5 bg-[#09090b]/95">
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                          {project.subtitle}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">{project.timeline}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-zinc-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {project.overview}
                      </p>

                      {/* Technical Highlights */}
                      <div className="space-y-2 pt-1">
                        {project.highlights.slice(0, 2).map((h, hIdx) => (
                          <div key={hIdx} className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-0.5">
                            <div className="text-xs font-mono font-bold text-zinc-200 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                              <span>{h.title}</span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed pl-5">{h.desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Pydantic Schema Inspector */}
                      <div className="border border-zinc-800 rounded-xl overflow-hidden bg-black/80">
                        <button
                          onClick={() => setShowSchema(prev => ({ ...prev, [project.id]: !prev[project.id] }))}
                          className="w-full px-4 py-2 text-left flex items-center justify-between text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer bg-zinc-900/60"
                        >
                          <span className="flex items-center gap-2">
                            <Code2 className="w-3.5 h-3.5 text-zinc-400" />
                            <span>{isSchemaOpen ? 'Hide' : 'Inspect'} Pydantic v2 Schema</span>
                          </span>
                          <span className="text-[10px] text-zinc-500">{isSchemaOpen ? '▲ Close' : '▼ View Code'}</span>
                        </button>

                        {isSchemaOpen && (
                          <pre className="p-3.5 font-mono text-[11px] text-zinc-300 overflow-x-auto bg-[#050505] border-t border-zinc-800 leading-relaxed">
                            <code>{getSchemaSnippet(project.id)}</code>
                          </pre>
                        )}
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onOpenProject(project)}
                        className="flex items-center gap-1.5 text-xs font-mono font-semibold px-4 py-2.5 rounded-xl bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-white border border-zinc-700 transition-all cursor-pointer"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Architecture Deep-Dive</span>
                      </button>

                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1.5 text-xs font-mono font-semibold px-4 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all shadow-md shadow-white/10"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>

                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1.5 text-xs font-mono px-3.5 py-2.5 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 transition-all"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Repo</span>
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        /* SIDE-BY-SIDE GRID VIEW MODE */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, idx) => {
            const sim = activeSimulation[project.id];
            const steps = getPipelineSteps(project.id);
            const isSchemaOpen = showSchema[project.id];

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 35, scale: 0.96, filter: 'blur(14px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: 'transform, opacity, filter' }}
                className="blueprint-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-zinc-700 relative group bg-[#09090b]"
              >
                {/* Browser Preview Header */}
                <div className="border-b border-zinc-800 bg-[#050505]">
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 bg-[#09090b]/90">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-600"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-500"></span>
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      <span>{project.liveUrl.replace('https://', '')}</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">p99: &lt;85ms</span>
                  </div>

                  {/* Screenshot Frame */}
                  <div 
                    className="relative overflow-hidden aspect-video bg-black cursor-pointer group-hover:opacity-95 transition-opacity"
                    onClick={() => onOpenProject(project)}
                    title="Click to view full architecture deep-dive"
                  >
                    <img 
                      src={project.image} 
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy"
                      onError={(e) => {
                        if (project.fallbackImage) e.target.src = project.fallbackImage;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                    
                    {/* Floating Action Pill */}
                    <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-xl bg-black/85 backdrop-blur-md text-[11px] font-mono text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
                      <Layers className="w-3.5 h-3.5 text-zinc-300" />
                      <span>Open Architectural Specs</span>
                    </div>
                  </div>
                </div>

                {/* Main Content Details */}
                <div className="p-7 space-y-5 flex-grow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{project.timeline}</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Technical Highlights */}
                  <div className="space-y-2 pt-1">
                    {project.highlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-0.5">
                        <div className="text-xs font-mono font-bold text-zinc-200 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                          <span>{h.title}</span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed pl-5">{h.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* INTERACTIVE WORKBENCH 1: Live Architecture Pipeline Simulator */}
                  <div className="p-4 rounded-xl bg-[#09090b] border border-zinc-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-zinc-300" />
                        <span className="text-xs font-mono text-white font-bold uppercase">Pipeline Telemetry</span>
                      </div>

                      <button
                        onClick={() => runSimulation(project.id)}
                        disabled={sim.isRunning}
                        className="px-3 py-1 rounded-lg bg-zinc-800 hover:bg-white text-zinc-200 hover:text-black border border-zinc-700 text-[11px] font-mono transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        {sim.isRunning ? (
                          <>
                            <RefreshCw className="w-3 h-3 animate-spin" />
                            <span>Executing ({sim.latency}ms)...</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3 h-3 fill-current" />
                            <span>Simulate Pipeline</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Step Sequence Visualizer */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[10px]">
                      {steps.map((step, sIdx) => {
                        const stepNum = sIdx + 1;
                        const isActive = sim.currentStep === stepNum;
                        const isDone = sim.currentStep > stepNum || sim.completed;

                        return (
                          <div 
                            key={sIdx}
                            className={`p-2 rounded-lg border transition-all ${
                              isActive 
                                ? 'bg-white/10 border-white text-white ring-1 ring-white/30 scale-[1.02]' 
                                : isDone
                                ? 'bg-zinc-900 border-zinc-700 text-zinc-200'
                                : 'bg-zinc-950/60 border-zinc-800 text-zinc-500'
                            }`}
                          >
                            <div className="font-bold flex items-center gap-1">
                              <span>#{stepNum}</span>
                              {isDone && <CheckCircle2 className="w-2.5 h-2.5 text-zinc-300" />}
                            </div>
                            <div className="truncate mt-0.5">{step.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    {sim.completed && (
                      <div className="text-[11px] font-mono text-zinc-200 bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-700 flex items-center justify-between animate-in fade-in">
                        <span>✓ Pipeline Finished: Status 200 OK</span>
                        <span className="font-bold">{sim.latency}ms round-trip</span>
                      </div>
                    )}
                  </div>

                  {/* INTERACTIVE WORKBENCH 2: Pydantic Schema Inspector Toggle */}
                  <div className="border border-zinc-800 rounded-xl overflow-hidden bg-black/80">
                    <button
                      onClick={() => setShowSchema(prev => ({ ...prev, [project.id]: !prev[project.id] }))}
                      className="w-full px-4 py-2 text-left flex items-center justify-between text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer bg-zinc-900/60"
                    >
                      <span className="flex items-center gap-2">
                        <Code2 className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{isSchemaOpen ? 'Hide' : 'Inspect'} Pydantic v2 Schema Model</span>
                      </span>
                      <span className="text-[10px] text-zinc-500">{isSchemaOpen ? '▲ Close' : '▼ View Code'}</span>
                    </button>

                    {isSchemaOpen && (
                      <pre className="p-4 font-mono text-[11px] text-zinc-300 overflow-x-auto bg-[#050505] border-t border-zinc-800 leading-relaxed">
                        <code>{getSchemaSnippet(project.id)}</code>
                      </pre>
                    )}
                  </div>
                </div>
                
                {/* Card Footer Actions */}
                <div className="p-7 pt-0 border-t border-zinc-800 flex flex-wrap items-center gap-3 mt-auto">
                  <button
                    onClick={() => onOpenProject(project)}
                    className="flex items-center gap-1.5 text-xs font-mono font-semibold px-4 py-2.5 rounded-xl bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-white border border-zinc-700 transition-all cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Architecture Deep-Dive</span>
                  </button>

                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-xs font-mono font-semibold px-4 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all shadow-md shadow-white/10"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>

                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-xs font-mono px-3.5 py-2.5 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 transition-all"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Repo</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}
