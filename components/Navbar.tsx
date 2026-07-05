'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { navLinks, profile } from '@/lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-16 sm:h-[72px]">
        <a href="#home" className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
          KP<span className="text-accent-soft">.</span>
        </a>

        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[13px] tracking-wide text-mist hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"
            className="text-mist hover:text-accent-soft transition-colors">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="text-mist hover:text-accent-soft transition-colors">
            <Linkedin size={18} />
          </a>
          <a
            href="#contact"
            className="font-mono text-xs px-4 py-2 rounded-full border border-accent/40 text-accent-soft hover:bg-accent/10 transition-colors"
          >
            HIRE ME ↗
          </a>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass overflow-hidden border-t border-line"
          >
            <ul className="px-6 py-4 space-y-1">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 font-mono text-sm text-slate-300 hover:text-accent-soft border-b border-line/50"
                  >
                    {l.label}
                    <span className="text-accent-soft/60 text-xs">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
              <li className="flex items-center gap-5 pt-4 pb-1">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-mist">
                  <Github size={20} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-mist">
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
