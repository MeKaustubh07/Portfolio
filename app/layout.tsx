import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Kaustubh Patange — Software Developer',
  description:
    'Software Developer & Open Source Contributor. Backend systems, AI platforms, and core numerical computing for stdlib. GSoC 2026.',
  keywords: [
    'Kaustubh Patange',
    'Software Developer',
    'Full Stack',
    'Open Source',
    'stdlib',
    'GSoC',
    'Portfolio',
  ],
  openGraph: {
    title: 'Kaustubh Patange — Software Developer',
    description:
      'Backend systems, AI platforms, and open source numerical computing.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
