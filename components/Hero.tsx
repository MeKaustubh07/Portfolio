'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code2 } from 'lucide-react';
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
    <span className="font-mono text-accent-cyan">
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* 3D scene */}
      <div className="absolute inset-0 md:left-1/3 opacity-80 md:opacity-100 pointer-events-none md:pointer-events-auto">
        <HeroScene isMobile={isMobile} />
      </div>

      {/* radial fade so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-transparent md:via-void/60 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-void to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-3xl"
        >
          <p className="section-label mb-5 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-accent-soft/60" />
            Hello, I&apos;m
          </p>

          <h1 className="font-display font-bold tracking-tight text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
            Kaustubh
            <br />
            <span className="text-gradient">Patange</span>
          </h1>

          <div className="mt-6 text-base sm:text-lg md:text-xl text-mist h-8">
            <Typewriter />
          </div>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="group relative px-6 py-3 rounded-full bg-accent text-white font-medium text-sm sm:text-base overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-accent/40 text-accent-soft font-medium text-sm sm:text-base hover:bg-accent/10 transition-colors"
            >
              Get in Touch
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
