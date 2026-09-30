import React from 'react';
import { ArrowUp, Github } from 'lucide-react';
import { GithubUser } from '../types/github';

interface FooterProps {
  user: GithubUser;
}

export const Footer: React.FC<FooterProps> = ({ user }) => (
  <footer className="border-t border-white/[0.08] bg-[#07080c] py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
      <div className="space-y-1 text-center sm:text-left">
        <div className="text-sm font-semibold text-white font-display">{user.name || user.login}</div>
        <div className="text-xs text-slate-500 font-mono">Portfolio powered by GitHub · © {new Date().getFullYear()}</div>
      </div>
      <div className="flex items-center gap-5 text-xs text-slate-400">
        <a href={user.html_url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
          <Github className="w-3.5 h-3.5" />
          GitHub
        </a>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors flex items-center gap-1.5">
          <ArrowUp className="w-3.5 h-3.5" />
          Top
        </button>
      </div>
    </div>
  </footer>
);
