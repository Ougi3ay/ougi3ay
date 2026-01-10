import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


interface HeroSectionProps {
    hero: {
        title: string;
        subtitle: string;
        description: string;
        ctaText?: string;
        ctaLink?: string;
    }
}

export default function HeroSection({ hero }: HeroSectionProps) {
  if (!hero) return null;

  return (
    <section className="container mx-auto px-4 min-h-screen flex flex-col justify-center">
      <HeroContent hero={hero} />
    </section>
  );
}

interface HeroContentProps {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
  };
}

export function HeroContent({ hero }: HeroContentProps) {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        {hero.title}
      </h1>

      <h2 className="mt-4 text-xl md:text-2xl font-semibold text-primary">
        {hero.subtitle}
      </h2>

      <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
        {hero.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button asChild size="lg">
          <Link to={hero.ctaLink || "/projects"} className="text-white">
            {hero.ctaText || "View Projects"}
          </Link>
        </Button>

        <Button variant="outline" asChild size="lg">
          <Link to="/contact">Contact Me</Link>
        </Button>
      </div>
    </div>
  );
}

