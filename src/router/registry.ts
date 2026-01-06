import type { ComponentType, ReactNode } from "react";

// Load all pages and layouts
const pageModules = import.meta.glob("../pages/**/page.tsx", { eager: true });
const layoutModules = import.meta.glob("../pages/**/layout.tsx", { eager: true });

// Define RegistryEntry type
export interface RegistryEntry {
  component: ComponentType;
  layout?: ComponentType<{ children: ReactNode }>;
}

// Main registry
export const Registry: Record<string, RegistryEntry> = {};

// Register pages
Object.entries(pageModules).forEach(([path, mod]: any) => {
  const match = path.match(/pages\/(.+)\/page\.tsx$/);
  if (!match) return;

  const name = match[1].toLowerCase(); // optional lowercase
  Registry[name] = {
    component: mod.default,
  };
});

// Register layouts
Object.entries(layoutModules).forEach(([path, mod]: any) => {
  const match = path.match(/pages\/(.+)\/layout\.tsx$/);
  if (!match) return;

  const name = match[1].toLowerCase();

  // Merge with existing page or fallback to empty component
  Registry[name] = {
    component: Registry[name]?.component ?? (() => null),
    layout: mod.default,
  };
});