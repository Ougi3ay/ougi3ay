import { ModeToggle } from "@/components/mode-toggle";
import { useDataContext } from "@/hooks/use-data";

export default function Home() {
    const { data } = useDataContext();
    console.log('Home page data:', data);
    return (
        <div className="p-8 flex flex-col gap-4">
            <h1>Welcome to the Home Page</h1>
            <ModeToggle />
            <div>
                <h2>Data Loaded:</h2>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    )
}