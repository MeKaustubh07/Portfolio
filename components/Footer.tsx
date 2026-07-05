'use client';

import { Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-mist order-2 sm:order-1">
          © {new Date().getFullYear()} Kaustubh Patange. Built with Next.js, Three.js & Framer Motion.
        </p>
        <a
          href="/resume.pdf"
          download="Kaustubh_Patange_Resume.pdf"
          className="order-1 sm:order-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/40 font-mono text-xs text-accent-soft hover:bg-accent/10 transition-colors"
        >
          <Download size={14} /> DOWNLOAD RESUME
        </a>
      </div>
    </footer>
  );
}
