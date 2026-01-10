import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ProjectsCTA() {
    return (
        <section className="container mx-auto px-4 pb-28 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
                Want to see more?
            </h2>

            <p className="mt-4 text-muted-foreground">
                Check out my GitHub for more projects and open-source work.
            </p>

            <Button asChild size="lg" className="mt-6">
                <Link to="/contact">Get in touch</Link>
            </Button>
        </section>
    );
}