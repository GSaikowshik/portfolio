import React from 'react';
import { ArrowUp, Mail, PlayCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer({ onReplayIntro }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800 py-10 text-xs font-mono text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p>&copy; {new Date().getFullYear()} Gandikota Sai Kowshik. All rights reserved.</p>
          <div className="flex items-center gap-3 mt-1.5">
            <span className="text-[11px] text-zinc-600">
              Engineered with React 19, Vite, Tailwind CSS v4 & Framer Motion.
            </span>
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="text-[11px] text-zinc-400 hover:text-white hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                title="Replay 2-second cinematic intro"
              >
                <PlayCircle className="w-3.5 h-3.5" />
                <span>Replay Intro</span>
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://linkedin.com/in/gandikotasaikowshik" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/GSaikowshik" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:saikowshikgandikota@gmail.com" 
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-500 text-zinc-400 hover:text-white transition-all cursor-pointer ml-2"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
