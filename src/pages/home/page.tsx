import { ModeToggle } from "@/components/mode-toggle"

export default function HomePage() {
    return (
        <div className="p-8 flex flex-col gap-4">
            <h1>Welcome to the Home Page</h1>
            <ModeToggle />
            <div>
            </div>
        </div>
    )
}