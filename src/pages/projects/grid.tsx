import ProjectCard from "./card";

interface ProjectsGridProps {
  projects: Array<{
    id: number;
    name: string;
    image: string;
    description: string;
    link: string;
  }>;
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}