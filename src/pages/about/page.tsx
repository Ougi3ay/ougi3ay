import { useDataContext } from "@/hooks/use-data"
import AboutHero from "./hero";
import AboutBio from "./biography";
import AboutExperience from "./experience";
import AboutEducation from "./education";
import CTASection from "../home/cta";
import AboutInterests from "./interests";

export default function AboutPage() {
  const { data } = useDataContext();
  const about = data?.data?.about;
  const cta = data?.data?.home?.cta;

  if (!about) return null;

  return (
    <div className="flex flex-col gap-24 py-16">
      <AboutHero about={about} />
      <AboutBio about={about} />
      <AboutExperience experiences={about.experiences} />
      <AboutEducation educations={about.educations} />
      <AboutInterests interests={about.interests} />
      <CTASection cta={cta} />
    </div>
  )
}
