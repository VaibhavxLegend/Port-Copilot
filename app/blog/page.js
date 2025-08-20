import Link from 'next/link';

export const metadata = { title: 'Blog — Vaibhav Jain' };

const posts = [
  {
    slug: 'ai-art-pipeline-notes',
    title: 'Building an AI Art Pipeline: Notes and Lessons',
    date: '2025-08-20',
    excerpt: 'A practical look at model selection, prompt engineering, batching, and curation for generating art at scale.'
  }
];

export default function BlogIndex() {
  return (
    <div className="space-y-6">
      <h1 className="section-title">Blog</h1>
      <ul className="divide-y divide-black/10 dark:divide-white/10 rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5">
        {posts.map(p => (
          <li key={p.slug} className="p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <Link href={`/blog/${p.slug}`} className="text-lg font-semibold hover-underline hover:text-white">
                  {p.title}
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">{p.date}</p>
              </div>
              <span className="text-sm text-gray-500">Read →</span>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-200">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
