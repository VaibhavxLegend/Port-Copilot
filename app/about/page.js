export const metadata = { title: 'About — Your Name' };

export default function AboutPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>About</h1>
      <p>
        I’m a software developer focused on building delightful web experiences.
        This site showcases selected projects, writing, and ways to reach me.
      </p>
      <h2>Skills</h2>
      <ul>
        <li>JavaScript / TypeScript, React, Next.js</li>
        <li>Node.js, REST, GraphQL</li>
        <li>CSS, Tailwind, Accessibility</li>
        <li>Testing, CI/CD, Cloud</li>
      </ul>
    </div>
  );
}
