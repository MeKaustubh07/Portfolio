'use client';

import { GraduationCap, BookOpen, Award, ExternalLink } from 'lucide-react';
import { education, achievements } from '@/lib/data';
import { Reveal, SectionHeader } from '@/components/Reveal';

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader num="04" label="Learning & Recognition" title="Education & Achievements" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* education card */}
          <Reveal>
            <div className="card-border glass rounded-2xl p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 border border-accent/25">
                  <GraduationCap size={20} className="text-accent-soft" />
                </span>
                <h3 className="font-display text-xl font-semibold text-white">Education</h3>
              </div>

              <h4 className="font-display text-lg sm:text-xl font-semibold text-white">
                {education.school}
              </h4>
              <p className="mt-1 text-sm text-mist">{education.location}</p>
              <p className="mt-4 text-sm sm:text-[15px] text-stone-300">{education.degree}</p>
              <p className="mt-1 text-sm text-stone-400">{education.minor}</p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-accent-sage/10 border border-accent-sage/30 text-accent-sage">
                  CGPA {education.cgpa}
                </span>
                <span className="font-mono text-xs text-mist">{education.period}</span>
              </div>

              <div className="mt-7 pt-6 border-t border-line">
                <p className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-accent-soft mb-4">
                  <BookOpen size={14} /> Related Coursework
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {education.coursework.map((c) => (
                    <p key={c} className="flex items-center gap-2 text-sm text-stone-400">
                      <span className="text-accent-soft text-[8px]">◆</span> {c}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* achievements */}
          <div className="space-y-5">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={0.08 * (i + 1)}>
                <div className="card-border glass rounded-2xl p-5 sm:p-6 flex items-start gap-4 group">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-clay/10 border border-accent-clay/25 mt-0.5">
                    <Award size={17} className="text-accent-clay" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-display font-semibold text-white">{a.title}</h4>
                      <a
                        href={a.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-accent-sage hover:text-white transition-colors whitespace-nowrap"
                      >
                        {a.linkLabel} <ExternalLink size={11} />
                      </a>
                    </div>
                    <p className="mt-1.5 text-sm text-stone-400 leading-relaxed">{a.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
