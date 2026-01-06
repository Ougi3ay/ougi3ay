import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";


export default function App() {
  return (
    <BrowserRouter basename="/ougi">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}