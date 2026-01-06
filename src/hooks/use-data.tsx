import { createContext, useContext, useEffect, useState } from "react";

export default function useData<T = any>(filename: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`${import.meta.env.BASE_URL}${filename}`);
                const json = await res.json();
                setData(json);
            } catch (err) {
                setError("Failed to load data");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [filename]);

    return { data, loading, error };
}

export const DataContext = createContext<any>(null);

export function useDataContext() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useDataContext must be used within a DataProvider");
    }
    return context;
}

export function DataProvider({ children }: { children: React.ReactNode }) {
    const { data, loading, error } = useData('data.json');
    const { data: pages, loading: pagesLoading, error: pagesError } = useData('pages.json');

    if (loading || pagesLoading) {
        return <div>Loading...</div>;
    }

    if (error || pagesError) {
        return <div>Error loading data</div>;
    }

    return (
        <DataContext.Provider value={{
            data,
            pages
        }}>
            {children}
        </DataContext.Provider>
    )
}
