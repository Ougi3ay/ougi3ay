import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/use-theme";
import { DataProvider } from "./hooks/use-data";
import AppRoutes from "./routes";
import { Toaster } from "./components/ui/sonner";


export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Toaster/>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <DataProvider>
          <AppRoutes />
        </DataProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}