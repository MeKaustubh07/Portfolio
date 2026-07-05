'use client';

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-xs text-mist text-center sm:text-left">
          © {new Date().getFullYear()} Kaustubh Patange. Built with Next.js, Three.js & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
