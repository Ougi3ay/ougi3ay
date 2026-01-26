import { SkillCard } from "@/components/skill-card";
import type { SkillType } from "@/type";
import { motion, useMotionValue, useReducedMotion, useAnimationFrame } from "motion/react";
import { useTranslation } from "react-i18next";

const SPEED = 40; // pixels per second

export default function SkillsSection() {
    const { t } = useTranslation();

    const reduceMotion = useReducedMotion();

    const skills = t('skill.list', { returnObjects: true }) as SkillType[];

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