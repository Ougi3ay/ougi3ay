import { ThemeToggle } from "@/components/theme-toggle";
import usePageData from "@/hooks/use-page-data";

export default function Home() {
    const data = usePageData('pages.json');
    console.log("Page Data:", data);
    return (
        <div className="p-8 flex flex-col gap-4">
            <h1>Welcome to the Home Page</h1>
            <ThemeToggle />
        </div>
    )
}