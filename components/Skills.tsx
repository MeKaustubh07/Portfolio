'use client';

import { motion } from 'framer-motion';
import { Code2, Layers, Brain, Wrench } from 'lucide-react';
import { skills } from '@/lib/data';
import { Reveal, SectionHeader } from '@/components/Reveal';

const icons = [Code2, Layers, Brain, Wrench];

const marqueeItems = skills.flatMap((s) => s.items);

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader num="03" label="My Toolbox" title="Technical Skills" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={group.category} delay={i * 0.1}>
                <div className="card-border glass rounded-2xl p-6 sm:p-8 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 border border-accent/25">
                      <Icon size={18} className="text-accent-soft" />
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="font-mono text-xs sm:text-[13px] px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-stone-300 hover:border-accent/40 hover:text-accent-soft transition-colors cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* marquee strip */}
      <div className="mt-16 sm:mt-20 relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-void to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-void to-transparent z-10" />
        <div className="flex overflow-hidden border-y border-line py-4">
          <div className="flex shrink-0 animate-marquee gap-8 pr-8">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-mono text-sm text-mist/60 whitespace-nowrap flex items-center gap-8">
                {item} <span className="text-accent-soft/40">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
