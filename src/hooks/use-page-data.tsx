import { useEffect, useState } from "react";


export default function usePageData(filename: string = "pages.json") {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.BASE_URL}/${filename}`);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching page data:", error);
                setData([]);
            }
        }

        fetchData();
    }, [filename]);

    return data;
}