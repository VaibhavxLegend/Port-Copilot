export default function Education() {
  const items = [
    {
      school: 'Your University',
      degree: 'B.Tech in Computer Science',
      years: '2019 — 2023',
      details: 'Focus on web development, data structures, and software engineering.',
    },
    {
      school: 'Your High School',
      degree: 'Senior Secondary (Science)',
      years: '2017 — 2019',
      details: 'Mathematics and Computer Science stream.',
    },
  ];

  return (
    <section id="education" className="space-y-4">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">My academic background.</p>
      <ul className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
        {items.map((ed) => (
          <li key={ed.school} className="p-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <p className="font-semibold">{ed.school}</p>
                <p className="text-sm text-gray-300">{ed.degree}</p>
              </div>
              <p className="text-sm text-gray-400">{ed.years}</p>
            </div>
            <p className="mt-2 text-sm text-gray-400">{ed.details}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
