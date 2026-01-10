interface Props {
    about: {
        content: string;
        mission: string;
    };
}

export default function AboutBio({ about }: Props) {
    return (
        <section className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>

            <p className="text-muted-foreground leading-relaxed">
                {about.content}
            </p>

            {about.mission && (
                <div className="mt-6 rounded-xl border bg-muted/50 p-6">
                    <h3 className="font-semibold mb-2">My Mission</h3>
                    <p className="text-sm text-muted-foreground">
                        {about.mission}
                    </p>
                </div>
            )}
        </section>
    );
}