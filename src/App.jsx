import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Conclusions from "./pages/Conclusions";
import Recomendaciones from "./pages/Recomendaciones";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/conclusions" element={<Conclusions />} />
        <Route path="/recomendaciones" element={<Recomendaciones />} />
      </Routes>
    </BrowserRouter>
  );
}