import { useDataContext } from "@/hooks/use-data";
import SkillsSection from "./skill";
import ProjectsSection from "./project";
import HeroSection from "./hero";
import AboutSection from "./about";
import CTASection from "./cta";

export default function HomePage() {
  const { data } = useDataContext();

  const home = data?.data?.home;
  const projects = data?.data?.projects;
  const skills = data?.data?.skills;

  if (!home) return null;

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <HeroSection hero={home.hero} />

      {/* About Preview */}
      <AboutSection about={home.about} />

      {/* Featured Projects */}
      <ProjectsSection projects={projects} />

      {/* Skills */}
      <SkillsSection skills={skills} />

      {/* Call to Action */}
      <CTASection cta={home.cta} />
    </main>
  );
}