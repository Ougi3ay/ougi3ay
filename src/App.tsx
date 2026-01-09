import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/use-theme";
import { DataProvider } from "./hooks/use-data";
import AppRoutes from "./routes";


export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <DataProvider>
          <AppRoutes />
        </DataProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}