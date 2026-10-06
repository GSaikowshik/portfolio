import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, CornerDownLeft, Sparkles, Check, Trash2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function TerminalWidget({ onOpenProject, onOpenResume }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: "⚡ Sai Kowshik's AI Terminal [v2.5.0-production] initialized.\nType 'help' or click any quick command chip below to explore my background, stack, and projects."
    }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText) => {
    const cmd = (cmdText || input).trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${cmd}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `AVAILABLE COMMANDS:
  • projects     - View flagship production builds (INSTA REPO & DayZero AI)
  • skills       - List AI, Backend, and Frontend technical arsenal
  • experience   - View internships (FlyRank AI, InAmigos, SmartBridge)
  • education    - Check B.Tech degree at Vishnu Institute of Technology
  • contact      - Direct email, phone, and location credentials
  • resume       - Trigger the full interactive ATS resume preview
  • clear        - Wipe terminal display history`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          text: `FEATURED PRODUCTION BUILDS:
1. INSTA REPO (Production AI Career Workspace)
   • Stack: React, Tailwind CSS, FastAPI, PostgreSQL (Supabase), Clerk Auth, Gemini API
   • URL: https://instarepo.me | Sub-100ms async endpoints & ATS parser.

2. DayZero AI (Startup Market Trend Intelligence)
   • Stack: React, FastAPI, Supabase, Gemini 2.5 Flash
   • URL: https://dayzeroai.vercel.app | 48-hour Agentic Hackathon winning platform.`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          text: `TECHNICAL ARSENAL:
  [AI / GenAI]   : Gemini API, LLM Orchestration, YOLOv8 (CV), Deep Learning, Prompt Engineering
  [Backend]      : FastAPI, Python (AsyncIO), Pydantic v2, RESTful APIs, Microservices
  [Frontend]     : React.js, Tailwind CSS, JavaScript (ES6+), Streamlit, Modern HTML/CSS
  [Databases]    : PostgreSQL, Supabase, SQL, Connection Pooling
  [DevOps/Cloud] : Vercel, Render, Git/GitHub, Linux`
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'response',
          text: `WORK EXPERIENCE & INTERNSHIPS:
1. FlyRank AI (Jul 2026 – Sep 2026) &bull; Backend AI Intern (Remote)
   - Scaled backend infrastructure & API lifecycle via FastAPI optimization.
   - Built LLM Orchestration layers with high throughput.

2. InAmigos Foundation (Jun 2026 – Jun 2026) &bull; AI Web Developer Intern
   - Integrated AI into responsive web application layers.

3. SmartBridge (May 2026 – Jun 2026) &bull; Vibe Coder Intern
   - Built WasteGuideAI for automated waste classification.`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'response',
          text: `ACADEMIC BACKGROUND:
  Degree      : Bachelor of Technology (B.Tech) in Computer Science & Engineering
  Institution : Vishnu Institute of Technology, Bhimavaram, Andhra Pradesh
  Batch       : 2023 - 2027 (Pre-Final Year)`
        });
        break;

      case 'contact':
      case 'hire':
        newHistory.push({
          type: 'response',
          text: `DIRECT CONTACT CHANNELS:
  • Email    : saikowshikgandikota@gmail.com
  • Phone    : +91 7989528212 (WhatsApp enabled)
  • GitHub   : https://github.com/GSaikowshik
  • LinkedIn : https://linkedin.com/in/gandikotasaikowshik
  • Status   : Open to full-stack & AI roles (Remote & On-site)`
        });
        break;

      case 'resume':
        newHistory.push({
          type: 'response',
          text: "Opening interactive ATS resume modal..."
        });
        if (onOpenResume) onOpenResume();
        break;

      case 'clear':
        setHistory([
          {
            type: 'system',
            text: "Terminal display cleared. Ready for next command."
          }
        ]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command '${cmd}' not recognized. Type 'help' to see supported commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  const quickChips = ['projects', 'skills', 'experience', 'contact', 'resume', 'clear'];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal delay={0.05}>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
            Interactive CLI Shell
          </span>
        </div>
        <div className="aurora-card rounded-2xl overflow-hidden border border-zinc-800 bg-[#070709] shadow-2xl shadow-black">
        
        {/* Terminal Title Bar */}
        <div className="bg-[#0a0a0c] border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-zinc-600 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-zinc-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-zinc-400 inline-block"></span>
            </div>
            <span className="ml-3 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-zinc-300" />
              <span>kowshik@portfolio:~ (interactive-cli)</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
              Online
            </span>
          </div>
        </div>

        {/* Console Output Screen */}
        <div className="p-4 sm:p-6 bg-[#050507] min-h-[220px] max-h-[320px] overflow-y-auto font-mono text-xs sm:text-sm space-y-3">
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === 'user' && (
                <div className="text-white font-semibold">{item.text}</div>
              )}
              {item.type === 'system' && (
                <div className="text-zinc-300 whitespace-pre-wrap">{item.text}</div>
              )}
              {item.type === 'response' && (
                <div className="text-zinc-300 whitespace-pre-wrap pl-2 border-l-2 border-zinc-600">{item.text}</div>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400 pl-2 border-l-2 border-rose-500/40">{item.text}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Suggestion Chips */}
        <div className="px-4 py-2.5 bg-[#0a0a0c] border-t border-zinc-800 flex items-center gap-2 overflow-x-auto">
          <span className="text-[11px] font-mono text-zinc-500 whitespace-nowrap">Suggestions:</span>
          {quickChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 hover:text-white text-zinc-300 border border-zinc-800 hover:border-zinc-600 transition-all cursor-pointer whitespace-nowrap"
            >
              ${chip}
            </button>
          ))}
        </div>

        {/* Command Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="p-3 sm:p-4 bg-[#08080a] border-t border-zinc-800 flex items-center gap-3"
        >
          <span className="text-zinc-400 font-mono font-bold pl-2">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'projects', 'skills', or 'contact'..."
            className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-zinc-600"
          />
          <button
            type="submit"
            className="px-3.5 py-2 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-all text-xs font-mono flex items-center gap-1.5 cursor-pointer shadow-sm shadow-white/10"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Run</span>
          </button>
        </form>

        </div>
      </ScrollReveal>
    </section>
  );
}
