import { Routes, Route } from "react-router-dom";
import RootLayout from "@/pages/layout";

import HomePage from "@/pages/home/page";
import AboutPage from "@/pages/about/page";
import ContactPage from "@/pages/contact/page";
import ProjectsPage from "@/pages/projects/page";
import SkillsPage from "@/pages/skills/page";
import { useTranslation } from "react-i18next";

const components = {
  Home: <HomePage />,
  About: <AboutPage />,
  Contact: <ContactPage />,
  Projects: <ProjectsPage />,
  Skills: <SkillsPage />,
};

export default function AppRoutes() {

  const { t } = useTranslation();
  const pages = t('home.pages', { returnObjects: true }) as Array<{ name: string; path: string }>;

  return (
    <Routes>
      <Route element={<RootLayout />}>
        {pages.map((page) => (
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