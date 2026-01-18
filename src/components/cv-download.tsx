import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { CvDocument } from "./cv-document";
import { Button } from "./ui/button";

interface DownloadCVProps {
    data: any;
    fileName?: string;
    className?: string;
}

export const DownloadCV = ({
    data,
    fileName = "Ougi_CV.pdf",
    className = "",
}: DownloadCVProps) => {
    const dataCv = {
        name: data?.meta?.name || "Ougi",
        title: data?.meta?.title || "Full Stack Developer & Data Scientist",
        about: data?.data.about,
        experiences: data?.data.about?.experiences,
        educations: data?.data.about?.educations,
        projects: data?.data.projects,
        skills: data?.data.skills,
        cvOptions: {
            includeExperiences: data?.cvOptions?.includeExperiences ?? true,
            includeEducation: data?.cvOptions?.includeEducation ?? true,
            includeProjects: data?.cvOptions?.includeProjects ?? true,
            includeSkills: data?.cvOptions?.includeSkills ?? true,
        }
    }
    return (
        <PDFDownloadLink
            document={
                <CvDocument data={dataCv} />
            }
            fileName={fileName}
        >
            {({ loading }) => (
                <Button
                    variant="outline"
                    className={`flex items-center gap-2 bg-primary text-white hover:bg-primary/80 hover:text-white ${className}`}
                >
                    <Download size={16} /> {loading ? "Generating..." : "Download CV"}
                </Button>
            )}
        </PDFDownloadLink>
    );
};