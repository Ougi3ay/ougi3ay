import { useDataContext } from "@/hooks/use-data";
import ProjectsHero from "./hero";
import ProjectsGrid from "./grid";
import ProjectsCTA from "./cta";

export default function ProjectsPage() {
  const { data } = useDataContext();
  const projects = data?.data?.projects;

  if (!projects) return null;

  return (
    <main className="flex flex-col gap-24">
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
      <ProjectsCTA />
    </main>
  );
}