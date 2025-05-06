import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage"
import ResumePage from "./pages/ResumePage/ResumePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const locales = {
  en: { title: "EN" }, 
  fr: { title: "FR"}
}

function App() {
 
  return (
    <BrowserRouter>
      <Header locales={locales} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <Footer locales={locales} />
    </BrowserRouter>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...Loading">
    <App />
    </Suspense>
  )
}
