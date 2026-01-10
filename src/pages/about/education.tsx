interface Props {
    educations: {
        id: number;
        degree: string;
        institution: string;
        year: string;
        details: string;
    }[];
}

export default function AboutEducation({ educations }: Props) {
    if (!educations?.length) return null;

    return (
        <section className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>

            <div className="space-y-6">
                {educations.map((edu, index) => (
                    <div key={index} className="rounded-xl border p-6">
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">
                            {edu.institution} · {edu.year}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {edu.details}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}