import React, { useState } from 'react';
import { ArrowRight, FileText, Check, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { motion } from 'framer-motion';

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('saikowshikgandikota@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[88vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-6xl mx-auto overflow-hidden">
      
      {/* Ambient Dark Black & Zinc Glow Orbs */}
      <div className="fixed top-0 left-1/4 w-[35rem] h-[35rem] bg-white/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse duration-1000"></div>
      <div className="fixed top-1/3 right-10 w-[30rem] h-[30rem] bg-zinc-700/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-10 left-1/3 w-[28rem] h-[28rem] bg-zinc-800/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full relative z-10">
        
        {/* Left Column: Intro & Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 text-center lg:text-left space-y-6 order-2 lg:order-1"
        >
          {/* Status & Location Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span>Available for Full-Stack & AI Roles</span>
            <span className="text-zinc-600 hidden sm:inline">&bull;</span>
            <span className="text-zinc-400 hidden sm:inline">India &bull; Remote</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="text-aurora">Gandikota Sai Kowshik</span>
            </h1>
            <p className="text-lg sm:text-xl font-medium text-zinc-300 font-display flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span>Full-Stack AI Developer</span>
              <span className="text-zinc-600 hidden sm:inline">&bull;</span>
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400">
                FastAPI &bull; React &bull; GenAI Systems
              </span>
            </p>
          </div>

          {/* Clean Description */}
          <p className="text-zinc-400 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed font-normal">
            Specializing in scalable Generative AI architectures, LLM orchestration, high-throughput FastAPI backends, and responsive React applications with sub-100ms response latencies.
          </p>

          {/* Unified Action Bar & Socials */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <a 
              href="#projects" 
              className="px-5 py-2.5 rounded-xl bg-white text-black font-bold text-xs font-mono hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg shadow-white/10"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button 
              onClick={onOpenResume}
              className="px-5 py-2.5 rounded-xl bg-zinc-900 text-zinc-200 hover:text-white hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 font-semibold text-xs font-mono transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              <span>Resume / CV</span>
            </button>

            <a 
              href="#contact" 
              className="px-4 py-2.5 rounded-xl bg-zinc-900/60 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800 font-medium text-xs font-mono transition-all"
            >
              Contact Me
            </a>

            <div className="h-5 w-px bg-zinc-800 hidden sm:block mx-1"></div>

            <div className="flex items-center gap-2">
              <a 
                href="https://github.com/GSaikowshik" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-all" 
                aria-label="GitHub"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/gandikotasaikowshik" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-all" 
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <button 
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-all cursor-pointer" 
                aria-label="Copy Email"
                title={copiedEmail ? "Copied!" : "Copy Email"}
              >
                {copiedEmail ? <Check className="w-4 h-4 text-white" /> : <Mail className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Prominent Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative group">
            {/* Ambient Dark Glow Backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-white/10 via-zinc-600/15 to-transparent rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition duration-500"></div>
            
            {/* Circular Avatar Frame */}
            <div className="relative w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 lg:w-84 lg:h-84 rounded-full p-2 bg-gradient-to-tr from-zinc-400 via-zinc-700 to-zinc-900 shadow-2xl shadow-black">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#050505]">
                <img 
                  src="./1000117524.jpg" 
                  alt="Gandikota Sai Kowshik" 
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = './assets/Profile.jpeg';
                  }}
                />
              </div>
            </div>

            {/* Floating Status Pill */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#050505]/95 border border-zinc-800 flex items-center gap-2 shadow-2xl backdrop-blur-md whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              <span className="text-[11px] font-mono text-zinc-200 font-bold tracking-wider">OPEN TO WORK</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
