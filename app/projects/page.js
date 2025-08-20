import ProjectsGrid from '@/components/ProjectsGrid';

export const metadata = { title: 'Projects — Your Name' };

export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <h1 className="section-title">Projects</h1>
      <p className="section-subtitle">Browse more of my work below.</p>
      <ProjectsGrid showAll />
    </div>
  );
}
