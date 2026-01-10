import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "@/components/image";

interface ProjectsSectionProps {
    projects: Array<{
        id: number;
        name: string;
        description: string;
        image: string;
        link: string;
    }>;
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    if (!projects || projects.length === 0) return null;

    return (
        <section className="container mx-auto px-4 min-h-screen flex flex-col justify-center">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold">Featured Projects</h2>
                <Button asChild variant="ghost">
                    <Link to="/projects">View all</Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <PorjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}


interface ProjectCardProps {
    project: {
        id: number;
        name: string;
        description: string;
        image: string;
        link: string;
    };
}

export function PorjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="mb-6">
            <AspectRatio ratio={16 / 9}>
                <Image src={project.image} alt={project.name} className={`h-full w-full object-cover`} />
            </AspectRatio>
            <CardContent>
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                <Button asChild variant="link" className="mt-4 px-0">
                    <Link to={project.link} target="_blank">
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}