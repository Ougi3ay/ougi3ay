import NavBar from "@/components/nav-bar";
import { ThemeToggle } from "@/components/theme-toggle";
import { type ReactNode } from "react";

interface RootLayoutProps {
  children?: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-text transition-colors duration-300">
      {/* Navbar + Theme */}
      <header className="border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
        <NavBar />
        <ThemeToggle />
      </header>

      {/* Page content */}
      <main className="flex-1 p-6">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 p-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} My Portfolio
      </footer>
    </div>
  );
}