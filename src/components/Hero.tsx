import React from 'react';
import { ArrowRight, Github, MapPin, Building } from 'lucide-react';
import { GithubUser } from '../types/github';

interface HeroProps {
  user: GithubUser;
  totalReposCount: number;
  onExploreWorks: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  user,
  totalReposCount,
  onExploreWorks,
  onContactClick,
}) => (
  <section id="top" className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-indigo-600/[0.08] blur-[120px] rounded-full pointer-events-none -z-10" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-8 space-y-7">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-400">
            {user.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {user.location}
              </span>
            )}
            {user.company && (
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                {user.company}
              </span>
            )}
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-indigo-300 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              @{user.login}
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-400">
              Developer Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.05] text-balance">
              {user.name || user.login}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              {user.bio || 'Explore my public projects and recent work on GitHub.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreWorks}
              className="px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2"
            >
              <span>Explore my projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onContactClick}
              className="px-5 py-3 text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-lg transition-colors"
            >
              Get in touch
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 flex lg:justify-end">
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 p-4 rounded-2xl bg-[#0f1118] border border-white/[0.1] hover:border-indigo-500/40 transition-colors"
          >
            <img
              src={user.avatar_url}
              alt={`${user.name || user.login} GitHub avatar`}
              className="w-16 h-16 rounded-full border border-white/10"
            />
            <div>
              <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                GitHub profile
              </div>
              <div className="text-xs text-slate-400 mt-1">{totalReposCount} public repositories</div>
              <div className="text-xs text-slate-500 mt-1">{user.followers} followers</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);
