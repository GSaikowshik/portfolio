import React, { useState, useEffect } from 'react';
import { GitPullRequest, Star, GitFork, ExternalLink, Code } from 'lucide-react';
import { GithubIcon } from './Icons';
import ScrollReveal from './ScrollReveal';

export default function GitHubStats() {
  const [userStats, setUserStats] = useState({
    public_repos: 32,
    followers: 1,
    following: 4,
    login: 'GSaikowshik',
    html_url: 'https://github.com/GSaikowshik'
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/GSaikowshik')
      .then(res => res.json())
      .then(data => {
        if (data && data.public_repos !== undefined) {
          setUserStats(data);
        }
      })
      .catch(() => {
        // Fallback to initial values
      });
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal curtain={true}>
        <div className="aurora-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white">
                Live GitHub Activity & Metrics
              </h3>
              <p className="text-xs font-mono text-zinc-400">
                github.com/GSaikowshik &bull; Active Engineering Track
              </p>
            </div>
          </div>

          <a
            href="https://github.com/GSaikowshik"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-500 text-xs font-mono text-zinc-300 hover:text-white transition-all w-fit"
          >
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
            <span className="text-xs font-mono text-zinc-400 block">Public Repos</span>
            <span className="text-2xl font-display font-extrabold text-white">
              {userStats.public_repos}+
            </span>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
            <span className="text-xs font-mono text-zinc-400 block">Core Languages</span>
            <span className="text-lg font-display font-bold text-white">
              Python &bull; React &bull; JS
            </span>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
            <span className="text-xs font-mono text-zinc-400 block">Primary Focus</span>
            <span className="text-lg font-display font-bold text-zinc-200">
              GenAI & Microservices
            </span>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
            <span className="text-xs font-mono text-zinc-400 block">Status</span>
            <span className="text-lg font-display font-bold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Shipping Weekly
            </span>
          </div>
        </div>

        {/* GitHub Contribution Ribbon */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400 border-t border-zinc-800">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-zinc-400" />
            <span>Open Source Repositories & Full-Stack Projects</span>
          </div>
          <span className="text-zinc-500">Live API Synchronized</span>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
