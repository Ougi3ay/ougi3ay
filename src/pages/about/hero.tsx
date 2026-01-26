import { useTranslation } from "react-i18next";

export default function AboutHero() {
    const { t } = useTranslation();
    return (
        <section className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                About Me
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                {t('about.summary')}
            </p>
        </section>
    );
}