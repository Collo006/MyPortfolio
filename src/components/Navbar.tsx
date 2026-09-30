import React from 'react';
import { Github, RefreshCw } from 'lucide-react';
import { GithubUser } from '../types/github';

interface NavbarProps {
  user: GithubUser;
  onOpenSyncModal: () => void;
  isSyncing: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ user, onOpenSyncModal, isSyncing }) => (
  <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#090a0f]/85 border-b border-white/[0.08]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#top" className="text-lg font-semibold tracking-tight text-white hover:text-indigo-300 transition-colors font-display">
        {user.name || user.login}
      </a>

      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
        <a href="#featured" className="hover:text-white transition-colors">Projects</a>
        <a href="#repositories" className="hover:text-white transition-colors">Repositories</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </nav>

      <div className="flex items-center gap-2">
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="p-2 text-slate-300 hover:text-white rounded-md border border-white/[0.08] bg-white/[0.04]"
          aria-label={`Open ${user.login} GitHub profile`}
        >
          <Github className="w-4 h-4" />
        </a>
        <button
          onClick={onOpenSyncModal}
          title="Switch GitHub profile"
          className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-md transition-colors"
        >
          <span>@{user.login}</span>
          <RefreshCw className={`w-3 h-3 text-slate-400 ${isSyncing ? 'animate-spin' : ''}`} />
        </button>
      </div>
    </div>
  </header>
);
