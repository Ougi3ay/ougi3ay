import { motion } from "motion/react";
import Image from "@/components/image";
import type { SkillType } from "@/type";



export function SkillCard({ skill }: { skill: SkillType }) {
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