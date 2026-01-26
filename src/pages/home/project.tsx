import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import ProjectCard from "../projects/card";
import type { ProjectType } from "@/type";

export default function ProjectsSection() {

    const { t } = useTranslation();

    const projects = t('project.list', { returnObjects: true }) as ProjectType[];

    return (
        <section className="container mx-auto px-4 min-h-screen flex flex-col justify-center">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold">Featured Projects</h2>
                <Button asChild variant="ghost">
                    <Link to="/projects">View all</Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.sort((a, b) => b.id - a.id).slice(0, 3).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}