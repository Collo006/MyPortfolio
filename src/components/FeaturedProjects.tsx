import React from 'react';
import { ArrowUpRight, GitFork, Star } from 'lucide-react';
import { GithubRepo } from '../types/github';

interface FeaturedProjectsProps {
  repos: GithubRepo[];
  onSelectProject: (repo: GithubRepo) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  repos,
  onSelectProject,
}) => (
  <section id="featured" className="py-20 border-t border-white/[0.08]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase font-mono mb-2">
            Selected public repositories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Projects
          </h2>
        </div>
        <p className="text-sm text-slate-400 max-w-md">
          Project names, languages, descriptions, and activity are synced from GitHub.
        </p>
      </div>

      {repos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {repos.map((repo) => (
            <article
              key={repo.id}
              className="rounded-2xl bg-[#0f1118] border border-white/[0.1] hover:border-indigo-500/40 transition-colors p-6 flex flex-col gap-5"
            >
              <div className="space-y-2">
                <div className="text-xs text-indigo-300 font-mono">
                  {repo.language || 'Public repository'}
                  {repo.fork && ' · Fork'}
                </div>
                <h3 className="text-xl font-bold text-white font-display">{repo.name}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {repo.description || 'Open the repository on GitHub to explore the project.'}
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" /> {repo.forks_count}
                  </span>
                  <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>
                <button
                  onClick={() => onSelectProject(repo)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 hover:text-white transition-colors"
                >
                  Details <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-white/[0.08] bg-[#0f1118] p-6 text-sm text-slate-400">
          No public repositories are available for this profile yet.
        </p>
      )}
    </div>
  </section>
);
