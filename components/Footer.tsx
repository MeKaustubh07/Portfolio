'use client';

import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-mist order-2 sm:order-1">
          © {new Date().getFullYear()} Kaustubh Patange. Built with Next.js, Three.js & Framer Motion.
        </p>
        <div className="flex items-center gap-5 order-1 sm:order-2">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"
            className="text-mist hover:text-accent-soft transition-colors"><Github size={17} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="text-mist hover:text-accent-soft transition-colors"><Linkedin size={17} /></a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"
            className="text-mist hover:text-accent-soft transition-colors"><Code2 size={17} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"
            className="text-mist hover:text-accent-soft transition-colors"><Mail size={17} /></a>
        </div>
      </div>
    </footer>
  );
}
