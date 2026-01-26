import Image from "@/components/image";
import type { EducationType } from "@/type";
import { useTranslation } from "react-i18next";


export default function AboutEducation() {

    const { t } = useTranslation();
    const educations = t('about.educations', { returnObjects: true }) as EducationType[];

    return (
        <section className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>

            <div className="space-y-6">
                {educations.map((edu) => (
                    <div
                        key={edu.id}
                        className="flex items-start space-x-4 rounded-xl border p-6 hover:shadow-lg transition"
                    >
                        {edu.image && (
                            <Image
                                src={edu.image}
                                alt={`${edu.institution} logo`}
                                className="w-24 h-24 object-contain rounded"
                            />
                        )}
                        <div>
                            <h3 className="font-semibold text-lg">{edu.degree}</h3>
                            <p className="text-sm text-muted-foreground">
                                {edu.institution} · {edu.year}{" "}
                                {edu.location && (
                                    <a
                                        href={edu.location}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline ml-1"
                                    >
                                        [Location]
                                    </a>
                                )}
                            </p>
                            <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}