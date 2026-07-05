'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Briefcase } from 'lucide-react';
import { experience } from '@/lib/data';
import { Reveal, SectionHeader } from '@/components/Reveal';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader num="01" label="Where I've Worked" title="Experience" />

        <div className="relative ml-3 sm:ml-6 border-l border-accent/25 space-y-12 sm:space-y-16">
          {experience.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.12} className="relative pl-8 sm:pl-12">
              {/* timeline node */}
              <span className="absolute -left-[9px] top-1.5 flex h-[17px] w-[17px] items-center justify-center">
                <span className="absolute h-full w-full rounded-full bg-accent/30 animate-ping" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-accent-soft" />
              </span>

              <div className="card-border glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-white flex items-center gap-2 flex-wrap">
                      <Briefcase size={18} className="text-accent-soft shrink-0" />
                      {exp.role}
                    </h3>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-accent-cyan hover:text-white transition-colors font-mono text-sm"
                    >
                      @{exp.company} <ExternalLink size={13} />
                    </a>
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-mist whitespace-nowrap">{exp.period}</span>
                </div>

                <ul className="mt-5 space-y-3">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-sm sm:text-[15px] text-slate-400 leading-relaxed">
                      <span className="text-accent-soft mt-1.5 text-[8px]">◆</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <motion.span
                      key={t}
                      whileHover={{ scale: 1.08 }}
                      className="font-mono text-[11px] px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent-soft"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
