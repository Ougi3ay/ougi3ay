import { cn } from "@/lib/utils";
import type React from "react";
import { useState } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallback?: string;
    rounded?: boolean;
    lazy?: boolean;
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export default function Image({
    src,
    alt = "",
    className,
    fallback = "/images/fallback.svg",
    rounded = false,
    lazy = true,
    objectFit = "contain",
    ...props
}: ImageProps) {
    const [error, setError] = useState(false);

    const finalSrc = error ? fallback : src;

    return (
        <img
            src={`${import.meta.env.BASE_URL}${finalSrc}`}
            alt={alt}
            loading={lazy ? "lazy" : "eager"}
            onError={() => setError(true)}
            className={cn(
                "block max-w-full",
                rounded && "rounded-full",
                `object-${objectFit}`,
                className
            )}
            {...props}
        />
    )
}