export type SkillType = {
    id: number;
    name: string;
    level: string;
    icon: string;
};

export type ExperienceType = {
    id: number;
    role: string;
    company: string;
    description: string;
    image?: string;
    link?: string;
}

export type EducationType = {
    id: number;
    degree: string;
    institution: string;
    year: string;
    description: string;
    image?: string;
    location?: string;
}

export type ProjectType = {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
}