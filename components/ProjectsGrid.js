const projects = [
  {
    title: 'Project One',
    description: 'A feature-rich web application demonstrating modern UI and API integration.',
    tags: ['Next.js', 'Tailwind', 'API'],
    href: '#',
  },
  {
    title: 'Project Two',
    description: 'A performance-focused app with great Lighthouse scores and accessibility.',
    tags: ['React', 'Performance', 'A11y'],
    href: '#',
  },
  {
    title: 'Project Three',
    description: 'A useful tool solving a real-world workflow problem.',
    tags: ['Node.js', 'UX', 'Tooling'],
    href: '#',
  },
  {
    title: 'Project Four',
    description: 'An experimental UI with micro-interactions and motion.',
    tags: ['Animation', 'Tailwind'],
    href: '#',
  },
];

export default function ProjectsGrid({ showAll = false }) {
  const items = showAll ? projects : projects.slice(0, 4);
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((p) => (
  <a key={p.title} href={p.href} className="group rounded-xl border border-black/10 dark:border-white/10 p-5 hover:border-brand-400/30 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] hover:shadow-lg hover:shadow-brand-500/10 transform hover:-translate-y-0.5 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold transition-colors group-hover:text-white">{p.title}</h3>
              <p className="mt-2 text-gray-400">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300 transition-colors group-hover:border-brand-400/30 group-hover:text-white">{t}</span>
                ))}
              </div>
            </div>
            <span className="text-gray-500 transition-transform group-hover:translate-x-0.5 group-hover:text-white">→</span>
          </div>
        </a>
      ))}
    </div>
  );
}
