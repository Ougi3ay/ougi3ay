import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useDataContext } from "@/hooks/use-data"
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
    const { data } = useDataContext();

    const hero = data?.data?.home?.hero;
    const about = data?.data?.about;
    const projects = data?.data?.projects;
    const skills = data?.data?.skills;
    console.log(skills)

    return (
        <div className="flex flex-col gap-28">
            {/* Hero Section */}
            <section className="container mx-auto px-4 pt-28">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        {hero?.title}
                    </h1>
                </div>

                <h2 className="mt-4 text-xl md:text-2xl font-semibold text-primary">
                    {hero?.subtitle}
                </h2>

                <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                    {hero?.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <Button asChild size="lg">
                        <Link to={hero?.ctaLink || "/projects"} className="text-white">
                            {hero?.ctaText || "View Projects"}
                        </Link>
                    </Button>

                    <Button variant="outline" asChild size="lg">
                        <Link to="/contact">
                            Contact Me
                        </Link>
                    </Button>
                </div>
            </section>

            { /* About Preview */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                    {about?.summary || "I’m a passionate developer focused on building scalable systems and intuitive user experiences."}
                </p>
                <Button asChild variant="link" className="mt-4 px-0">
                    <Link to="/about">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </Button>
            </section>

            {/* Projects preview */}
            <section className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-semibold">
                        Featured Projects
                    </h2>
                    <Button asChild variant="ghost">
                        <Link to="/projects">View all</Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects?.map((project: any) => (
                        <Card key={project.id} className="mb-6">
                            <AspectRatio ratio={16 / 9}>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="h-full w-full object-cover"
                                />
                            </AspectRatio>
                            <CardContent>
                                <h3 className="font-semibold text-lg">
                                    {project.name}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {project.description}
                                </p>
                                <Button asChild variant="link" className="mt-4 px-0">
                                    <Link to={`/projects/${project.id}`}>
                                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-6">Skills</h2>

                <div className="flex flex-wrap gap-3">
                    {skills?.map((skill: any) => (
                        <div key={skill.id} className="flex items-center gap-2 rounded-md border px-3 py-2 bg-background hover:bg-accent transition">
                            <img
                                src={skill.icon}
                                alt={skill.name + " icon"}
                                className="h-6 w-6"
                            />
                            <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="container mx-auto px-4 pb-28 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Let’s work together
                </h2>
                <p className="mt-4 text-muted-foreground">
                    Have a project idea or need help building something great?
                </p>

                <Button asChild size="lg" className="mt-6">
                    <Link to="/contact">Get in touch</Link>
                </Button>
            </section>
        </div>
    )
}