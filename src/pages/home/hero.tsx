import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 min-h-screen flex flex-col justify-center">
      <HeroContent />
    </section>
  );
}

export function HeroContent() {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        {t('home.hero.title')}
      </h1>

      <h2 className="mt-4 text-xl md:text-2xl font-semibold text-primary">
        {t('home.hero.subtitle')}
      </h2>

      <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
        {t('home.hero.description')}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button asChild size="lg">
          <Link to={t('home.hero.ctaLink') || "/projects"} className="text-white">
            {t('home.hero.ctaText') || "View Projects"}
          </Link>
        </Button>

        <Button variant="outline" asChild size="lg">
          <Link to="/contact">Contact Me</Link>
        </Button>
      </div>
    </div>
  );
}

