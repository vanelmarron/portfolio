import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage"
import ResumePage from "./pages/ResumePage/ResumePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
