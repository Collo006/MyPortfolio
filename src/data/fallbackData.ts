import { ArticleItem, GithubRepo, GithubUser, ResearchInterest } from '../types/github';

export const DEFAULT_GITHUB_USERNAME = 'Collo006';

export const FALLBACK_USER: GithubUser = {
  login: 'Collo006',
  id: 101322113,
  avatar_url: 'https://avatars.githubusercontent.com/u/101322113?v=4',
  html_url: 'https://github.com/Collo006',
  name: 'Collins Kipruto',
  company: null,
  blog: null,
  location: null,
  email: null,
  hireable: true,
  bio: 'Front-End Web Developer | HTML, CSS, JavaScript | Learning React, Next.js & Tailwind CSS | Passionate about building responsive, user-friendly apps',
  twitter_username: null,
  public_repos: 57,
  public_gists: 0,
  followers: 5,
  following: 11,
  created_at: '2022-03-10T08:47:11Z',
  updated_at: '2026-09-30T19:14:04Z',
};

const createFallbackRepo = (
  id: number,
  name: string,
  description: string | null,
  language: string | null,
  createdAt: string,
  updatedAt: string,
  defaultBranch: string,
): GithubRepo => {
  const fullName = `${DEFAULT_GITHUB_USERNAME}/${name}`;
  const htmlUrl = `https://github.com/${fullName}`;
  return {
    id,
    name,
    full_name: fullName,
    private: false,
    html_url: htmlUrl,
    description,
    fork: false,
    url: `https://api.github.com/repos/${fullName}`,
    created_at: createdAt,
    updated_at: updatedAt,
    pushed_at: updatedAt,
    git_url: `git://github.com/${fullName}.git`,
    ssh_url: `git@github.com:${fullName}.git`,
    clone_url: `${htmlUrl}.git`,
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language,
    forks_count: 0,
    open_issues_count: 0,
    default_branch: defaultBranch,
  };
};

export const FALLBACK_REPOS: GithubRepo[] = [
  createFallbackRepo(
    1317155570,
    'Chachas-Bakery',
    'Go-based bakery management and online ordering system. The repository README describes inventory, orders, payments, and business reporting.',
    'Go',
    '2026-07-30T10:44:13Z',
    '2026-08-04T11:43:52Z',
    'main',
  ),
  createFallbackRepo(
    1162479496,
    'Pre-Inspected-Used-Cars',
    'Responsive used-car and motorbike browsing experience built with React, Next.js, TypeScript, and Tailwind CSS.',
    'TypeScript',
    '2026-02-20T10:09:33Z',
    '2026-08-17T08:13:55Z',
    'master',
  ),
  createFallbackRepo(
    1291005757,
    'Parking-Lot-System',
    'Collaborative parking discovery and management project.',
    null,
    '2026-07-06T12:19:50Z',
    '2026-07-06T12:32:34Z',
    'main',
  ),
  createFallbackRepo(
    1261228309,
    'raytracer',
    'Go ray-tracing project that renders a PPM image.',
    'Go',
    '2026-06-06T12:08:46Z',
    '2026-06-06T12:51:21Z',
    'main',
  ),
  createFallbackRepo(
    1272268934,
    'ascii-art',
    null,
    'Go',
    '2026-06-17T12:55:53Z',
    '2026-06-17T13:03:54Z',
    'master',
  ),
];

export const SKILLS_DATA = [
  {
    category: 'Front-End Foundations',
    description: 'Profile-listed skills and current learning interests.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
  },
  {
    category: 'Learning',
    description: 'Technologies Collins lists as currently learning.',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'GitHub Projects',
    description: 'Languages observed in public repositories.',
    skills: ['TypeScript', 'Go'],
  },
];

export const ARTICLES: ArticleItem[] = [];

export const RESEARCH_INTERESTS: ResearchInterest[] = [];

export function generateSampleContributions(): Array<Array<{ date: string; count: number; level: number }>> {
  return [];
}
