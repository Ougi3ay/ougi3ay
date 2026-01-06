import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/use-theme";
import AppLayout from "./pages/layout";
import AppRouter from "./router/app";


export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}