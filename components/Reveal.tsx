'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  label,
  title,
  num,
}: {
  label: string;
  title: string;
  num: string;
}) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <p className="section-label mb-3 flex items-center gap-3">
        <span className="text-accent-soft/50">/{num}</span>
        <span className="inline-block h-px w-10 bg-accent-soft/60" />
        {label}
      </p>
      <h2 className="section-heading">{title}</h2>
    </Reveal>
  );
}
