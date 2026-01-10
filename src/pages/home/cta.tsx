import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
    cta: {
        title: string;
        description?: string;
        buttonText?: string;
        buttonLink?: string;
    };
}

export default function CTASection({ cta }: CTASectionProps) {
    if (!cta) return null;

    return (
        <section className="container mx-auto px-4 pb-28 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
                {cta.title}
            </h2>

            {cta.description && (
                <p className="mt-4 text-muted-foreground">
                    {cta.description}
                </p>
            )}

            <Button asChild size="lg" className="mt-6 text-white">
                <Link to={cta.buttonLink || "/contact"}>
                    {cta.buttonText || "Contact Me"}
                </Link>
            </Button>
        </section>
    );
}