export const profile = {
  name: 'Kaustubh Patange',
  role: 'Software Developer & Open Source Contributor',
  tagline:
    'Building high-performance backend systems, AI-powered platforms, and contributing core numerical computing to open source.',
  phone: '+91 9307410320',
  email: 'kaustubh.mp007@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kaustubh-patange-b12835291/',
  github: 'https://github.com/MeKaustubh07',
  leetcode: 'https://leetcode.com/u/kaustubh007/',
  location: 'Solapur, Maharashtra, India',
};

export const education = {
  school: 'Walchand Institute of Technology',
  location: 'Solapur, Maharashtra, India',
  degree: 'B.Tech in Computer Science and Engineering',
  minor: 'Minor in Electronics & Telecommunication Engineering',
  cgpa: '8.98',
  period: 'Aug 2023 — Apr 2027',
  coursework: [
    'Linear Algebra',
    'Digital System Design',
    'Database Management Systems',
    'Scientific Computing',
    'Distributed Systems',
    'Data Structures & Algorithms',
  ],
};

export const experience = [
  {
    company: 'stdlib-js/stdlib',
    role: 'Google Summer of Code Contributor',
    period: 'May 2026 — Present',
    link: 'https://github.com/stdlib-js/google-summer-of-code/issues/205',
    points: [
      'Extending Level 2 and Level 3 BLAS routines (real and complex precision) with JavaScript, C, and Fortran implementations for near-native numerical performance in Node.js.',
      'Implementing a three-layer API architecture (CBLAS-compatible interface, strided-array compute kernels, and ndarray wrappers) with loop unrolling and cache-friendly memory-access optimizations.',
    ],
    tags: ['JavaScript', 'C', 'Fortran', 'Node.js', 'BLAS'],
  },
  {
    company: 'stdlib-js/stdlib',
    role: 'Core Contributor',
    period: 'Nov 2025 — Apr 2026',
    link: 'https://github.com/stdlib-js/stdlib',
    points: [
      'Shipped 128 merged PRs spanning BLAS routines, statistical reductions, and native C add-ons, each with full test suites, benchmarks, and documentation.',
      'Designed 60+ ndarray API packages and numerically stable computation kernels in JavaScript and C; reviewed community PRs to enforce strict API design, testing, and documentation standards.',
    ],
    tags: ['JavaScript', 'C', 'Node.js', 'Numerical Computing', 'Open Source'],
  },
  {
    company: 'Nexentia',
    role: 'Software Developer',
    period: 'Jul 2025 — Sep 2025',
    link: 'https://www.linkedin.com/company/nexentia-in/posts/?feedView=all',
    points: [
      'Engineered scalable backend services and secure REST APIs (Node.js, Express, PostgreSQL) for a Warehouse Management System powering inventory tracking, order processing, and fulfillment workflows.',
      'Designed normalized relational schemas with indexing and ACID-compliant transactions to guarantee stock consistency under concurrent order operations; implemented JWT authentication and role-based access control.',
    ],
    tags: ['Next.js', 'Express', 'PostgreSQL', 'REST APIs'],
  },
];

export const projects = [
  {
    num: '01',
    name: 'CoSketch',
    subtitle: 'Real-time Collaborative Whiteboard',
    description:
      'Low-latency real-time collaboration system using persistent WebSocket connections to synchronize canvas operations across multiple concurrent users. Event-driven canvas state architecture for drawing, shape transformations, and persistent workspace management.',
    stack: ['Next.js', 'TypeScript', 'WebSockets', 'PostgreSQL'],
    live: 'https://co-sketch-ecru.vercel.app/',
    code: 'https://github.com/MeKaustubh07/CoSketch',
    accent: '#a8bd8f',
  },
  {
    num: '02',
    name: 'Corpora',
    subtitle: 'Multimodal Agentic RAG Platform',
    description:
      'Multi-tenant agentic RAG pipeline using LangGraph with hybrid vector search (dense + BM25, RRF fusion) and cross-encoder reranking — streaming citation-grounded answers over SSE at 31ms p95 retrieval latency. Async ingestion, CLIP text-to-image search, CI-gated retrieval evals, Clerk JWT multi-tenancy, and Langfuse observability.',
    stack: ['Next.js', 'LangGraph', 'Qdrant', 'PostgreSQL', 'Redis'],
    live: 'https://corpora-xi.vercel.app/',
    code: 'https://github.com/MeKaustubh07/Corpora',
    accent: '#c47a52',
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Fortran'],
  },
  {
    category: 'Frameworks',
    items: ['Express.js', 'Node.js', 'EJS', 'FastAPI', 'React.js', 'Next.js', 'TailwindCSS', 'Bootstrap'],
  },
  {
    category: 'AI & ML',
    items: ['PyTorch', 'OpenCV', 'LangChain', 'LangGraph', 'pgvector', 'Pinecone', 'Pandas'],
  },
  {
    category: 'Tools & Infra',
    items: ['Bash', 'REST API', 'Postman', 'Git', 'Docker', 'AWS', 'Kafka', 'Redis', 'MongoDB', 'Supabase', 'PostgreSQL', 'SQL'],
  },
];

export const achievements = [
  {
    title: 'LeetCode',
    detail: 'Solved 200+ data structure and algorithm problems.',
    link: 'https://leetcode.com/u/kaustubh007/',
    linkLabel: 'Profile',
  },
  {
    title: 'stdlib Member',
    detail: 'Member of the numerical library stdlib on GitHub.',
    link: 'https://github.com/stdlib-js/stdlib',
    linkLabel: 'Repository',
  },
  {
    title: 'NPTEL Certification',
    detail: 'Programming with Generative AI (Aug — Oct 2025).',
    link: 'https://drive.google.com/file/d/1-zN8Gxmnq5S4PSVZPvqMEsFZuBSUXPpA/view?usp=sharing',
    linkLabel: 'Certificate',
  },
  {
    title: 'Infosys Springboard',
    detail: 'Agile Scrum Certification (May 2026).',
    link: 'https://drive.google.com/file/d/1Ts5yiCCfG0jg3e6VYl33A_S_wrl5y6V4/view?usp=sharing',
    linkLabel: 'Certificate',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
