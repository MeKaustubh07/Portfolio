'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { profile } from '@/lib/data';
import { Reveal, SectionHeader } from '@/components/Reveal';

const SectionBackdrop = dynamic(() => import('@/components/three/SectionBackdrop'), {
  ssr: false,
});

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'MeKaustubh07',
    href: profile.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'kaustubh-patange',
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* 3D wave backdrop */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <SectionBackdrop />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader num="05" label="Let's Connect" title="Get In Touch" />

        <Reveal>
          <p className="max-w-2xl text-stone-400 text-sm sm:text-base leading-relaxed -mt-6 mb-12">
            Open to internships, freelance work, open source collaboration, and interesting
            engineering problems. Inbox always open — I&apos;ll get back fast.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <motion.a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ y: -6 }}
                className="card-border glass rounded-2xl p-6 flex flex-col gap-4 group h-full"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 border border-accent/25">
                    <c.icon size={19} className="text-accent-soft" />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-mist group-hover:text-accent-soft group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-widest uppercase text-mist">{c.label}</p>
                  <p className="mt-1 text-sm sm:text-[15px] text-white font-medium break-all">{c.value}</p>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 text-center">
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-void font-display font-semibold text-base sm:text-lg shadow-lg shadow-accent/25 hover:brightness-110 transition-all"
            >
              Say Hello <Mail size={18} />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
