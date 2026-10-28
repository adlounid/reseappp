import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CountryPage } from "./pages/CountryPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import "./styles.css";

function App() {
  return <Routes><Route element={<Layout />}><Route path="/" element={<HomePage />} /><Route path="/country/:code" element={<CountryPage />} /><Route path="*" element={<NotFoundPage />} /></Route></Routes>;
}

createRoot(document.getElementById("root")!).render(<StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>);
