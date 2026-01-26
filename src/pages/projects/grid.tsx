import type { ProjectType } from "@/type";
import ProjectCard from "./card";
import { useTranslation } from "react-i18next";

export default function ProjectsGrid() {
  const { t } = useTranslation();

  const projects = t('project.list', { returnObjects: true }) as ProjectType[];
  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.sort((a, b) => b.id - a.id).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}