'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects } from '@/lib/data';
import { Reveal, SectionHeader } from '@/components/Reveal';

function TiltCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -6;
    const ry = (px - 0.5) * 8;
    setTransform(`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.01,1.01,1.01)`);
    setGlow({ x: px * 100, y: py * 100 });
  };

  const onLeave = () => setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');

  return (
    <Reveal delay={index * 0.1}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ transform, transition: 'transform 0.2s ease-out' }}
        className="group relative card-border glass rounded-3xl p-6 sm:p-10 overflow-hidden"
      >
        {/* pointer glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, ${project.accent}14, transparent 45%)`,
          }}
        />

        <div className="relative flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
          {/* big number */}
          <span
            className="font-display font-bold text-6xl sm:text-8xl leading-none opacity-15 select-none shrink-0"
            style={{ color: project.accent }}
          >
            {project.num}
          </span>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {project.name}
              </h3>
              <Sparkles size={18} style={{ color: project.accent }} />
            </div>
            <p className="mt-1 font-mono text-xs sm:text-sm tracking-wide" style={{ color: project.accent }}>
              {project.subtitle}
            </p>

            <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] sm:text-xs px-3 py-1 rounded-full border text-slate-300"
                  style={{ borderColor: `${project.accent}40`, background: `${project.accent}0d` }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-void"
                style={{ background: project.accent }}
              >
                Live Demo <ExternalLink size={15} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-600 text-sm text-slate-300 hover:border-slate-400 transition-colors"
              >
                <Github size={15} /> Source
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader num="02" label="What I've Built" title="Featured Projects" />
        <div className="space-y-8 sm:space-y-12">
          {projects.map((p, i) => (
            <TiltCard key={p.name} project={p} index={i} />
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <a
            href="https://github.com/MeKaustubh07?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-mist hover:text-accent-soft transition-colors"
          >
            More on GitHub <ExternalLink size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
