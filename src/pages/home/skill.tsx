import Image from "@/components/image";
import { motion, useMotionValue, useReducedMotion, useAnimationFrame } from "motion/react";

const SPEED = 40; // pixels per second

interface SkillsSectionProps {
    skills: Array<{
        id: number;
        name: string;
        level: string;
        icon: string;
    }>
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
    const reduceMotion = useReducedMotion();

    const x = useMotionValue(0);

    if (!skills || reduceMotion) return null;

    const ITEM_WIDTH = 216; // width of SkillCard + gap
    const TOTAL_WIDTH = skills.length * ITEM_WIDTH;

    // Continuous smooth auto-scroll
    useAnimationFrame((_t, delta) => {
        const moveBy = (SPEED * delta) / 1000;
        const current = x.get();

        if (current <= -TOTAL_WIDTH) {
            x.set(0); // wrap around
        } else {
            x.set(current - moveBy);
        }
    });

    return (
        <section className="container mx-auto px-4 relative overflow-hidden py-16">
            <motion.div
                className="flex w-max gap-4 px-4 cursor-grab active:cursor-grabbing"
                style={{ x }}
                drag="x"
                dragConstraints={{ left: -TOTAL_WIDTH, right: 0 }}
                dragElastic={0.05}
                onDragStart={() => x.stop()} // stop animation while dragging
                onDragEnd={() => { }} // animation continues automatically
            >
                {[...skills, ...skills].map((skill, index) => (
                    <SkillCard key={`${skill.id}-${index}`} skill={skill} />
                ))}
            </motion.div>
        </section>
    );
}

type Skill = {
    id: number;
    name: string;
    level: string;
    icon: string;
};

export function SkillCard({ skill }: { skill: Skill }) {
    return (
        <motion.div
            whileHover={{
                scale: 1.07,
                y: -4,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex w-50 shrink-0 items-center gap-3 rounded-xl border bg-background px-4 py-3 shadow-sm hover:shadow-lg"
        >
            <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="h-8 w-8"
            />

            <div>
                <p className="text-sm font-medium">{skill.name}</p>
                <p className="text-xs text-muted-foreground">{skill.level}</p>
            </div>
        </motion.div>
    );
}