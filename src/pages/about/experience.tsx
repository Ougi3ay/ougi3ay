interface Props {
    experiences: {
        id: number;
        role: string;
        company: string;
        description: string;
    }[];
}

export default function AboutExperience({ experiences }: Props) {
    if (!experiences?.length) return null;

    return (
        <section className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>

            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="rounded-xl border p-6">
                        <h3 className="font-semibold">
                            {exp.role} — {exp.company}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}