import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CinematicIntro from './components/CinematicIntro';
import TerminalWidget from './components/TerminalWidget';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import Hackathons from './components/Hackathons';
import PoRShowcase from './components/PoRShowcase';
import Certifications from './components/Certifications';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageLightbox from './components/ImageLightbox';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Smooth Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mouse spotlight tracking effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const handleOpenLightbox = (src, title) => {
    setLightboxImage({ src, title });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 antialiased selection:bg-white selection:text-black relative">
      
      {/* 2-Second Cinematic Blurred Intro Sequence */}
      <AnimatePresence>
        {showIntro && (
          <CinematicIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Top Laser Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-zinc-500 via-white to-zinc-400 z-40 origin-left shadow-sm shadow-white/30" 
        style={{ scaleX }} 
      />

      {/* Navigation Bar with Active Section Spy */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Viewport with Background Unblur Transition */}
      <motion.main 
        animate={{ 
          filter: showIntro ? 'blur(16px)' : 'blur(0px)',
          opacity: showIntro ? 0.7 : 1
        }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative pt-6"
      >
        <Hero onOpenResume={() => setResumeOpen(true)} />
        
        {/* Interactive CLI Terminal / Avatar Assistant */}
        <TerminalWidget 
          onOpenProject={handleOpenProject}
          onOpenResume={() => setResumeOpen(true)}
        />
        
        {/* Destination Section: Behind the Code (About) */}
        <About />
        
        <Skills />
        <Experience />
        
        {/* Flagship Projects: INSTA REPO & DayZero AI with Pipeline Simulator */}
        <Projects onOpenProject={handleOpenProject} />
        
        <Hackathons />
        
        {/* Positions of Responsibility (Unstop & LetsUpgrade) */}
        <PoRShowcase onOpenLightbox={handleOpenLightbox} />
        
        {/* 15x Verified Certifications */}
        <Certifications />
        
        {/* Live GitHub Metrics */}
        <GitHubStats />
        
        {/* Working Contact Dispatcher */}
        <Contact />
      </motion.main>

      {/* Global Footer */}
      <Footer onReplayIntro={() => setShowIntro(true)} />

      {/* Interactive Project Architecture Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* ATS Resume View & Print Modal */}
      {resumeOpen && (
        <ResumeModal onClose={() => setResumeOpen(false)} />
      )}

      {/* Image Lightbox Modal for PoR and Certificates */}
      {lightboxImage && (
        <ImageLightbox 
          image={lightboxImage} 
          onClose={() => setLightboxImage(null)} 
        />
      )}

    </div>
  );
}
