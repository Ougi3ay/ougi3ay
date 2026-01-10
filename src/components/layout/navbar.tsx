import { useDataContext } from "@/hooks/use-data"
import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { cn } from "@/lib/utils";


export default function Navbar() {
    const { data } = useDataContext();
    const { pathname } = useLocation();
    const [ _open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold text-primary tracking-tight hover:opacity-90">
                    {data?.meta?.logo?.text || "MyLogo"}
                    <span className="text-primary">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {data?.meta?.pages?.map((item: any) => (
                        <Link
                            to={item.path}
                            key={item.name}
                            // className="text-sm font-medium text-muted-foreground hover:text-primary"
                            className={
                                cn(
                                    "text-sm font-medium transition-colors",
                                    pathname === item.path
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-primary"
                                )
                            }
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ModeToggle />
                </nav>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu size={20} className="text-primary"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <SheetHeader>
                            <VisuallyHidden>
                                <SheetTitle>Navigation Menu</SheetTitle>
                                <SheetDescription>
                                    Mobile navigation menu
                                </SheetDescription>
                            </VisuallyHidden>
                        </SheetHeader>
                        <div className="flex flex-col gap-4 mt-8">
                            {data?.meta?.pages?.map((item: any) => (
                                <Link
                                    to={item.path}
                                    key={item.name}
                                    onClick={() => setOpen(false)}
                                    // className="text-lg font-medium"
                                    className={
                                        cn(
                                            "rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-accent",
                                            pathname === item.path && "bg-accent text-primary"
                                        )
                                    }
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-6 border-t py-6 px-4 flex justify-between items-center">
                            <div>Appearance</div><ModeToggle />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}