import { Mail, MapPin, Github } from "lucide-react";

interface ContactInfoProps {
    contact: {
        email: string;
        github: string;
        location: string;
    };
}

export default function ContactInfo({ contact }: ContactInfoProps) {
    return (
        <section className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Get in Touch
            </h1>

            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                I’m open to collaboration and new opportunities. Reach out via email,
                GitHub, or visit my location.
            </p>

            <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-8">
                {/* Email */}
                <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary" />
                    <a href={`mailto:${contact.email}`} className="text-lg hover:text-primary">
                        {contact.email}
                    </a>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-3">
                    <Github className="w-6 h-6 text-primary" />
                    <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary">
                        GitHub
                    </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span className="text-lg">{contact.location}</span>
                </div>
            </div>
        </section>
    );
}