import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, ExternalLink, Briefcase, GraduationCap, Code2, Award } from 'lucide-react';

export default function ResumeModal({ onClose }) {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#09090b] border border-zinc-700 rounded-3xl p-6 sm:p-10 shadow-2xl my-6 max-h-[92vh] overflow-y-auto space-y-6 text-zinc-200 font-sans print:bg-white print:text-black print:p-0 print:border-none print:shadow-none">
        
        {/* Controls Bar (hidden during print) */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
            <span className="text-xs font-mono text-zinc-300 font-bold uppercase tracking-wider">
              ATS Standard Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-white text-zinc-200 hover:text-black border border-zinc-700 text-xs font-mono font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-white transition-all cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Header */}
        <div className="text-center space-y-2 border-b border-zinc-800 pb-6 print:border-zinc-300 print:pb-4">
          <h1 className="text-3xl font-display font-bold text-white print:text-black tracking-tight">
            GANDIKOTA SAI KOWSHIK
          </h1>
          <p className="text-sm font-mono text-zinc-300 print:text-zinc-700 font-semibold">
            Full-Stack AI Developer &bull; Backend Engineer
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-zinc-400 print:text-zinc-700 pt-1">
            <span>Andhra Pradesh, India</span>
            <span>&bull;</span>
            <a href="tel:+917989528212" className="hover:text-white print:text-black">+91 7989528212</a>
            <span>&bull;</span>
            <a href="mailto:saikowshikgandikota@gmail.com" className="hover:text-white print:text-black">saikowshikgandikota@gmail.com</a>
            <span>&bull;</span>
            <a href="https://linkedin.com/in/gandikotasaikowshik" target="_blank" rel="noreferrer" className="hover:text-white print:text-black">LinkedIn</a>
            <span>&bull;</span>
            <a href="https://github.com/GSaikowshik" target="_blank" rel="noreferrer" className="hover:text-white print:text-black">GitHub</a>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-white print:text-zinc-800 border-b border-zinc-800 print:border-zinc-300 pb-1 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
            <span className="font-semibold text-white print:text-black">Vishnu Institute of Technology</span>
            <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">2023 – 2027</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-400 print:text-zinc-700">
            <span>Bachelor of Technology (B.Tech) &bull; Computer Science & Engineering</span>
            <span>Bhimavaram, Andhra Pradesh</span>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-white print:text-zinc-800 border-b border-zinc-800 print:border-zinc-300 pb-1 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience</span>
          </h2>

          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <span className="font-semibold text-white print:text-black">Backend AI Intern &mdash; FlyRank AI</span>
              <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">Jul 2026 – Sep 2026 | Remote</span>
            </div>
            <ul className="text-xs text-zinc-300 print:text-zinc-800 list-disc list-inside space-y-1">
              <li>Architect, scale, and maintain backend infrastructure for AI-powered applications, managing API lifecycle via FastAPI optimization.</li>
              <li>Integrate LLM Orchestration layers, ensuring robust data throughput, low-latency API response, and high availability.</li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <span className="font-semibold text-white print:text-black">AI Web Developer Intern &mdash; InAmigos Foundation</span>
              <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">Jun 2026 – Jun 2026 | Remote</span>
            </div>
            <ul className="text-xs text-zinc-300 print:text-zinc-800 list-disc list-inside space-y-1">
              <li>Executed multiple technical tasks focused on integrating artificial intelligence into web applications, bridging frontend interfaces with backend logic.</li>
              <li>Leveraged AI-augmented engineering practices to deliver functional, user-centric web features.</li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <span className="font-semibold text-white print:text-black">Vibe Coder Intern &mdash; SmartBridge</span>
              <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">May 2026 – Jun 2026 | Remote</span>
            </div>
            <ul className="text-xs text-zinc-300 print:text-zinc-800 list-disc list-inside space-y-1">
              <li>Developed WasteGuideAI (https://waste-guide-ai.vercel.app/) to automate waste sorting intelligence, significantly improving classification accuracy.</li>
              <li>Engineered cross-platform responsive interfaces with seamless backend synchronization.</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-white print:text-zinc-800 border-b border-zinc-800 print:border-zinc-300 pb-1 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Production Projects</span>
          </h2>

          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <span className="font-semibold text-white print:text-black">INSTA REPO | Production Career Workspace</span>
              <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">Aug 2026 | https://instarepo.me</span>
            </div>
            <p className="text-[11px] font-mono text-zinc-400 print:text-zinc-800">
              Tech: React, Tailwind CSS, FastAPI, PostgreSQL (Supabase), Clerk, Gemini API
            </p>
            <ul className="text-xs text-zinc-300 print:text-zinc-800 list-disc list-inside space-y-1">
              <li>Architected and deployed a production-grade AI career workspace for instant ATS-compliant resume and portfolio generation.</li>
              <li>Engineered a high-throughput backend using FastAPI and Supabase PostgreSQL with sub-100ms response latencies and JWT security.</li>
              <li>Integrated Gemini API with strict Pydantic JSON validation to parse unstructured PDF/text into validated schemas.</li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <span className="font-semibold text-white print:text-black">DayZero AI | Startup Market Trend Intelligence</span>
              <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">Mar 2026 | https://dayzeroai.vercel.app</span>
            </div>
            <p className="text-[11px] font-mono text-zinc-400 print:text-zinc-800">
              Tech: React, FastAPI, Supabase, PostgreSQL, Gemini 2.5 Flash
            </p>
            <ul className="text-xs text-zinc-300 print:text-zinc-800 list-disc list-inside space-y-1">
              <li>Developed an AI-powered intelligence platform for startup founders to discover market trends and opportunities in real-time.</li>
              <li>Built asynchronous FastAPI and Supabase database triggers to maintain up-to-the-minute market intelligence feeds.</li>
              <li>Built and shipped end-to-end under intense 48-hour pressure during the GenAI & Agentic Intelligence Hackathon.</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-white print:text-zinc-800 border-b border-zinc-800 print:border-zinc-300 pb-1">
            Technical Skills
          </h2>
          <div className="text-xs space-y-1 text-zinc-300 print:text-zinc-800">
            <p><span className="font-semibold text-white print:text-black">Languages:</span> Python, JavaScript (ES6+), SQL, HTML5, CSS3</p>
            <p><span className="font-semibold text-white print:text-black">Frameworks & Libraries:</span> FastAPI, React.js, Tailwind CSS, Pydantic, Streamlit</p>
            <p><span className="font-semibold text-white print:text-black">AI & GenAI:</span> LLM Orchestration, Google Gemini API, YOLOv8, Prompt Engineering, Deep Learning</p>
            <p><span className="font-semibold text-white print:text-black">Databases & Cloud:</span> PostgreSQL, Supabase, Vercel, Render, Git, GitHub, VS Code</p>
          </div>
        </div>

        {/* Certifications Highlights */}
        <div className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-white print:text-zinc-800 border-b border-zinc-800 print:border-zinc-300 pb-1 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>Key Certifications & Honors</span>
          </h2>
          <div className="text-xs text-zinc-300 print:text-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            <div>&bull; Google & EduSkills: AI-ML Certification</div>
            <div>&bull; Oracle: OCI 2025 Generative AI Professional</div>
            <div>&bull; NVIDIA: Fundamentals of Deep Learning</div>
            <div>&bull; Google: Google Prompting Essentials (Credly)</div>
            <div>&bull; AWS Academy: Generative AI Foundations</div>
            <div>&bull; IBM: Generative AI in Action (Credly)</div>
          </div>
        </div>

      </div>
    </div>
  );
}
