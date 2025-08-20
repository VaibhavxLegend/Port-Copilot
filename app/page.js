import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
  import TechMarquee from '@/components/TechMarquee';
  import Education from '@/components/Education';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <TechMarquee />
      <section id="projects" className="space-y-4">
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-subtitle">A few things I’ve built recently.</p>
  <ProjectsGrid showAll={false} />
      </section>
      <Education />
    </div>
  );
}
