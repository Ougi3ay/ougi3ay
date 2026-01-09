import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type DataMap = Record<string, any>;

interface DataContextType {
  data: DataMap | null;
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
  files?: string[]; // allow multiple JSON files
}

export const DataProvider = ({ children, files = ["data.json", "meta.json"] }: DataProviderProps) => {
  const [data, setData] = useState<DataMap | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadAll() {
      try {
        const results: DataMap = {};

        // Fetch all files in parallel
        await Promise.all(
          files.map(async (file) => {
            const res = await fetch(`${import.meta.env.BASE_URL}${file}`);
            if (!res.ok) throw new Error(`Failed to load ${file}`);
            results[file.replace(".json", "")] = await res.json();
          })
        );

        setData(results);
      } catch (err: any) {
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    }

    loadAll();
  }, []);

  if (loading) return <div>Loading...</div>; // or your spinner
  if (error) return <div className="text-red-500">{error}</div>;

  return <DataContext.Provider value={{ data, loading, error }}>{children}</DataContext.Provider>;
};