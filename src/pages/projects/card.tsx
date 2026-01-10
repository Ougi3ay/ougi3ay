import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "@/components/image";

interface ProjectCardProps {
    project: {
        id: number;
        name: string;
        image: string;
        description: string;
        link: string;
    };
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="group overflow-hidden">
            {/* Image */}
            <div className="aspect-video overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <CardContent className="p-6">
                <h3 className="text-lg font-semibold">
                    {project.name}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                </p>

                <Button
                    asChild
                    variant="link"
                    className="mt-4 px-0"
                >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                </Button>
            </CardContent>
        </Card>
    );
}