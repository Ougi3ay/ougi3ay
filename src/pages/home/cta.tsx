import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";



export default function CTASection() {
    const { t } = useTranslation();

    return (
        <section className="container mx-auto px-4 pb-28 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
                {t('home.cta.title')}
            </h2>

            <p className="mt-4 text-muted-foreground">
                {t('home.cta.description')}
            </p>

            <Button asChild size="lg" className="mt-6 text-white">
                <Link to={t('home.cta.buttonLink') || "/contact"}>
                    {t('home.cta.buttonText') || "Contact Me"}
                </Link>
            </Button>
        </section>
    );
}