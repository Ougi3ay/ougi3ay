interface Props {
    about: {
        summary: string;
    };
}

export default function AboutHero({ about }: Props) {
    return (
        <section className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                About Me
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                {about.summary}
            </p>
        </section>
    );
}