import { Routes, Route } from "react-router-dom";
import { useDataContext } from "@/hooks/use-data";
import RootLayout from "@/pages/layout";

import HomePage from "@/pages/home/page";
import AboutPage from "@/pages/about/page";
import ContactPage from "@/pages/contact/page";
import ProjectsPage from "@/pages/projects/page";
import SkillsPage from "@/pages/skills/page";

const components = {
  Home: <HomePage />,
  About: <AboutPage />,
  Contact: <ContactPage />,
  Projects: <ProjectsPage />,
  Skills: <SkillsPage />,
};

export default function AppRoutes() {
  const { data } = useDataContext();

  if (!data) return null;

  return (
    <Routes>
      <Route element={<RootLayout />}>
        {data.meta.pages.map((page: any) => (
          <Route
            key={page.path}
            path={page.path}
            element={components[page.name as keyof typeof components]}
          />
        ))}
      </Route>
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}