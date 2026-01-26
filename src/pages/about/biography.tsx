import { useTranslation } from "react-i18next";

export default function AboutBio() {
    const { t } = useTranslation();
    return (
        <section className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>

            <p className="text-muted-foreground leading-relaxed">
                {t('about.content')}
            </p>

            <div className="mt-6 rounded-xl border bg-muted/50 p-6">
                <h3 className="font-semibold mb-2">My Mission</h3>
                <p className="text-sm text-muted-foreground">
                    {t('about.mission')}
                </p>
            </div>
        </section>
    );
}