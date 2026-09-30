import React, { useCallback, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { RepositoriesGrid } from './components/RepositoriesGrid';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { GithubSyncModal } from './components/GithubSyncModal';
import { githubService } from './services/github';
import { DEFAULT_GITHUB_USERNAME, FALLBACK_REPOS, FALLBACK_USER } from './data/fallbackData';
import { GithubRepo, GithubUser } from './types/github';

const FEATURED_REPOSITORY_NAMES = [
  'Chachas-Bakery',
  'Pre-Inspected-Used-Cars',
  'Parking-Lot-System',
  'raytracer',
];

function getFeaturedRepos(repos: GithubRepo[], username: string): GithubRepo[] {
  if (username.toLowerCase() === DEFAULT_GITHUB_USERNAME.toLowerCase()) {
    const featured = FEATURED_REPOSITORY_NAMES
      .map((name) => repos.find((repo) => repo.name.toLowerCase() === name.toLowerCase()))
      .filter((repo): repo is GithubRepo => repo !== undefined && !repo.fork);
    if (featured.length > 0) return featured;
  }

  return repos.filter((repo) => !repo.fork).slice(0, 4);
}

export default function App() {
  const [currentUser, setCurrentUser] = useState<GithubUser>(FALLBACK_USER);
  const [repos, setRepos] = useState<GithubRepo[]>(FALLBACK_REPOS);
  const [selectedRepo, setSelectedRepo] = useState<GithubRepo | null>(null);
  const [isSyncModalOpen, setIsSyncModalOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const syncGithubData = useCallback(async (username: string) => {
    setIsSyncing(true);
    try {
      const [user, userRepos] = await Promise.all([
        githubService.fetchUser(username),
        githubService.fetchRepos(username),
      ]);

      setCurrentUser(user);
      setRepos(userRepos);
    } finally {
      setIsSyncing(false);
    }
  }, []);

  useEffect(() => {
    void syncGithubData(DEFAULT_GITHUB_USERNAME).catch((error: unknown) => {
      console.error('Error syncing GitHub profile:', error);
    });
  }, [syncGithubData]);

  const featuredRepos = getFeaturedRepos(repos, currentUser.login);

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/20 selection:text-indigo-200">
      <Navbar
        user={currentUser}
        onOpenSyncModal={() => setIsSyncModalOpen(true)}
        isSyncing={isSyncing}
      />

      <main className="flex-1">
        <Hero
          user={currentUser}
          totalReposCount={currentUser.public_repos}
          onExploreWorks={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
          onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        />

        <FeaturedProjects
          repos={featuredRepos}
          onSelectProject={setSelectedRepo}
        />

        <RepositoriesGrid
          repos={repos}
          username={currentUser.login}
          onOpenRepoDetails={setSelectedRepo}
        />

        <SkillsSection />
        <ContactSection user={currentUser} />
      </main>

      <Footer user={currentUser} />

      <ProjectDetailModal
        repo={selectedRepo}
        onClose={() => setSelectedRepo(null)}
      />

      <GithubSyncModal
        currentUsername={currentUser.login}
        isOpen={isSyncModalOpen}
        onClose={() => setIsSyncModalOpen(false)}
        onSwitchUser={syncGithubData}
      />
    </div>
  );
}
