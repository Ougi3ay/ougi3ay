import ProjectsHero from "./hero";
import ProjectsGrid from "./grid";
import ProjectsCTA from "./cta";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col gap-24">
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsCTA />
    </main>
  );
}