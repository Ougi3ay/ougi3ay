import Image from "@/components/image";
import type { ExperienceType } from "@/type";
import { useTranslation } from "react-i18next";

export default function AboutExperience() {
    const { t } = useTranslation();

    const experiences = t('about.experiences', { returnObjects: true }) as ExperienceType[];

    return (
        <section className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>

            <div className="space-y-6">
                {experiences.map((exp) => (
                    <a
                        key={exp.id}
                        href={exp.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-xl border p-6 hover:shadow-lg transition"
                    >
                        <div className="flex items-center space-x-4">
                            {exp.image && (
                                <Image
                                    src={exp.image}
                                    alt={`${exp.company} logo`}
                                    className="w-24 h-24 object-contain rounded"
                                />
                            )}
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-lg">
                                    {exp.role} — {exp.company}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}