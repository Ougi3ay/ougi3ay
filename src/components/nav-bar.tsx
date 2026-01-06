import { useDataContext } from "@/hooks/use-data";
import { NavLink } from "react-router-dom";


export default function NavBar() {
    const { data, pages } = useDataContext();

    return (
        <nav>
            <div>
                <span className="text-lg font-bold text-brand">
                    {data && data.title ? data.title : 'My App'}
                </span>
            </div>
            <div>
                <div>
                    {pages && pages.pages.map((page: any) => (
                        <NavLink
                            key={page.path}
                            to={page.path}
                            className={({ isActive }) =>
                                `
                                px-3 py-2 rounded-md text-sm transition
                                ${isActive ? 'bg-brand text-surface' : 'text-text hover:bg-brand/10'}
                                `
                            }
                        >
                            {page.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}