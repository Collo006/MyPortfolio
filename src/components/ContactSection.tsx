import React from 'react';
import { ArrowUpRight, Github, Mail } from 'lucide-react';
import { GithubUser } from '../types/github';

interface ContactSectionProps {
  user: GithubUser;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ user }) => (
  <section id="contact" className="py-20 border-t border-white/[0.08]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl rounded-2xl bg-[#0f1118] border border-white/[0.1] p-7 sm:p-9">
        <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase font-mono mb-2">
          Contact
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
          Let&apos;s connect.
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mt-4">
          Reach out through GitHub. Public contact details are shown only when they are available on the profile.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          {user.email && (
            <a
              href={`mailto:${user.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          )}
        </div>
      </div>
    </div>
  </section>
);
