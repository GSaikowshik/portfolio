import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Terminal, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Hackathons', href: '#hackathons', id: 'hackathons' },
    { name: 'Ambassador', href: '#por', id: 'por' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy
      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'aurora-nav shadow-2xl shadow-black/80 py-3' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-white via-zinc-400 to-zinc-700 p-[1.5px] shadow-lg shadow-white/5 group-hover:scale-105 transition-transform overflow-hidden">
            <img 
              src="./1000117524.jpg" 
              alt="Sai Kowshik" 
              className="w-full h-full object-cover object-top rounded-[10px]" 
              onError={(e) => {
                e.target.style.display = 'none';
                const el = document.getElementById('nav-initials-react');
                if (el) el.style.display = 'flex';
              }} 
            />
            <div id="nav-initials-react" className="w-full h-full bg-[#050505] rounded-[10px] hidden items-center justify-center text-white font-mono font-bold text-sm">
              GK
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors text-base leading-tight">
              Gandikota Sai Kowshik
            </span>
            <span className="text-[11px] font-mono text-zinc-400 tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              Full-Stack AI Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation with Active Scroll-Spy */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-mono font-medium text-zinc-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`py-1.5 px-2 rounded-lg transition-all relative ${
                  isActive 
                    ? 'text-white font-bold bg-zinc-800/90 border border-white/20' 
                    : 'hover:text-white hover:bg-zinc-900/80'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          
          {/* Resume CTA */}
          <button 
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 text-zinc-200 hover:text-white border border-zinc-700 hover:border-zinc-500 text-xs font-mono transition-all cursor-pointer shadow-md shadow-black"
            title="Preview and download ATS resume"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-300" />
            <span>Resume</span>
          </button>

          {/* Contact Button */}
          <a 
            href="#contact" 
            className="px-4 py-2 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-all shadow-md shadow-white/10 text-xs font-mono"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Action & Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button 
            onClick={onOpenResume}
            className="p-2 rounded-lg aurora-card text-zinc-200 border border-zinc-700 text-xs font-mono flex items-center gap-1"
            title="Resume"
          >
            <FileText className="w-4 h-4" />
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2 rounded-lg text-zinc-400 hover:text-white focus:outline-none" 
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden aurora-card border-x-0 border-t border-b px-6 py-5 space-y-2 mt-2 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-white font-mono py-1.5 text-xs"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-xl aurora-card text-zinc-200 font-mono text-xs flex items-center justify-center gap-2 border border-zinc-700"
            >
              <FileText className="w-4 h-4 text-zinc-300" />
              <span>View & Download ATS Resume</span>
            </button>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 rounded-xl bg-white text-black font-bold text-xs font-mono hover:bg-zinc-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
