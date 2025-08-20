"use client";
const tech = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind', 'Vercel'];

export default function TechMarquee() {
  return (
    <div className="relative overflow-x-hidden border-y border-white/10 py-4">
      <div className="animate-marquee whitespace-nowrap">
        {tech.concat(tech).map((t, i) => (
          <span key={i} className="mx-6 text-gray-400">{t}</span>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
