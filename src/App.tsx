import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/use-theme";
import AppRoutes from "./routes";
import { Toaster } from "./components/ui/sonner";
import './i18n';


export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Toaster />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}