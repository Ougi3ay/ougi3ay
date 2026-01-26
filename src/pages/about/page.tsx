import AboutHero from "./hero";
import AboutBio from "./biography";
import AboutExperience from "./experience";
import AboutEducation from "./education";
import CTASection from "../home/cta";
import AboutInterests from "./interests";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 py-16">
      <AboutHero />
      <AboutBio />
      <AboutExperience />
      <AboutEducation />
      <AboutInterests />
      <CTASection />
    </div>
  )
}
