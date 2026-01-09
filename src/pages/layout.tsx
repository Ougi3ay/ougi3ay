import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}