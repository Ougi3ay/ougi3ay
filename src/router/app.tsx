import { Route, Routes, } from "react-router-dom";
import { Registry } from "./registry";
import { useDataContext } from "@/hooks/use-data";

export default function AppRouter() {
    const { pages } = useDataContext();

    return (
        <Routes>
            <Route>
                {pages && pages.pages.map((page: any) => {
                    const entry = Registry[page.component.toLowerCase()];
                    if (!entry) {
                        console.warn(`Component for page "${page.component}" not found in Registry.`);
                        return null;
                    }

                    const Page = entry.component;
                    const Layout = entry.layout;
                    const element = Layout ? <Layout><Page /></Layout> : <Page />;

                    return <Route key={page.path} path={page.path} element={element} />;
                })}
            </Route>
        </Routes>
    )
}