'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code2, Download } from 'lucide-react';
import { profile } from '@/lib/data';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
});

const roles = ['Backend Systems', 'Open Source · stdlib', 'AI / RAG Platforms', 'GSoC 2026'];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx % roles.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDeleting(true), 1400);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === '') {
            setDeleting(false);
            setIdx((i) => i + 1);
          }
        }
      },
      deleting ? 35 : 70
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return (
    <span className="font-mono text-accent-sage">
      {text}
      <span className="animate-pulse-glow">▊</span>
    </span>
  );
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D scene — fixed so the lattice persists behind the whole page */}
      <div className="fixed inset-0 md:left-1/3 opacity-80 md:opacity-100 pointer-events-none">
        <HeroScene isMobile={isMobile} />
      </div>

      {/* readability dim — fixed so it matches the fixed lattice with no seam */}
      <div className="fixed inset-0 bg-gradient-to-r from-void via-void/80 to-transparent md:via-void/60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-7 relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden ring-2 ring-accent/50 ring-offset-4 ring-offset-void shadow-lg shadow-accent/20"
          >
            <Image
              src="/profile.jpg"
              alt="Kaustubh Patange"
              fill
              sizes="(max-width: 640px) 96px, 112px"
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border border-accent-sage/40 bg-accent-sage/10 font-mono text-[11px] sm:text-xs tracking-wide text-accent-sage hover:bg-accent-sage/20 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent-sage animate-ping opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-sage" />
            </span>
            FOR FREELANCE — CONTACT ME ↗
          </motion.a>

          <p className="section-label mb-5 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-accent-soft/60" />
            Hello, I&apos;m
          </p>

          <h1 className="font-display font-bold tracking-tight text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
            Kaustubh
            <br />
            <span className="text-accent-soft">Patange</span>
          </h1>

          <div className="mt-6 text-base sm:text-lg md:text-xl text-mist h-8">
            <Typewriter />
          </div>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-stone-400 leading-relaxed max-w-xl">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-accent text-void font-medium text-sm sm:text-base transition-all hover:scale-105 hover:brightness-110"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-accent/40 text-accent-soft font-medium text-sm sm:text-base hover:bg-accent/10 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download="Kaustubh_Patange_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent-sage/40 text-accent-sage font-medium text-sm sm:text-base hover:bg-accent-sage/10 transition-colors"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {[
              { href: profile.github, icon: Github, label: 'GitHub' },
              { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
              { href: profile.leetcode, icon: Code2, label: 'LeetCode' },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -4, scale: 1.15 }}
                className="text-mist hover:text-accent-soft transition-colors"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.a
        href="#experience"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist hover:text-accent-soft"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
