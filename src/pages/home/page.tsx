import SkillsSection from "./skill";
import ProjectsSection from "./project";
import HeroSection from "./hero";
import AboutSection from "./about";
import CTASection from "./cta";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <HeroSection />

      {/* About Preview */}
      <AboutSection />

      {/* Featured Projects */}
      <ProjectsSection />

      {/* Skills */}
      <SkillsSection />

      {/* Call to Action */}
      <CTASection />
    </main>
  );
}