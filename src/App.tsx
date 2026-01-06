import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/use-theme";
import AppRouter from "./router/app";


export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}