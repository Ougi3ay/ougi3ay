import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Highlight {
    title: string;
    description: string;
}

interface AboutSectionProps {
    about: {
        summary: string;
        highlights?: Highlight[];
        ctaText?: string;
        link?: string;
        personalNote?: string;
    };
}

export default function AboutSection({ about }: AboutSectionProps) {
    if (!about) return null;

    return (
        <section className="container mx-auto px-4 pb-28">
            <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>

                <p className="mt-4 text-muted-foreground leading-relaxed">{about.summary}</p>

                {about.highlights && (
                    <ul className="mt-6 space-y-4">
                        {about.highlights.map((item, idx) => (
                            <li key={idx}>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                )}

                {about.personalNote && (
                    <p className="mt-6 text-sm italic text-muted-foreground">{about.personalNote}</p>
                )}

                <Button asChild variant="link" className="mt-6 px-0">
                    <Link to={about.link || "/about"}>
                        {about.ctaText || "Read More"} <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}