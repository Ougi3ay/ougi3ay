import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "@/components/image";
import type { ProjectType } from "@/type";

interface Props {
    project: ProjectType;
}

export default function ProjectCard({ project }: Props) {
    return (
        <Card>
            <AspectRatio ratio={16 / 9}>
                <Image
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover"
                />
            </AspectRatio>

            <CardContent>
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                </p>

                <Button asChild variant="link" className="mt-4 px-0">
                    <Link to={project.link} target="_blank">
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}