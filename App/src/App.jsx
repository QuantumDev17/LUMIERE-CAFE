import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";

export default function App() {
  // Set --sbw (scrollbar width) so full-bleed sections align perfectly
  useEffect(() => {
    const setSBW = () => {
      const sbw = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty("--sbw", `${sbw}px`);
    };
    setSBW();
    window.addEventListener("resize", setSBW);
    return () => window.removeEventListener("resize", setSBW);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main style={{
        paddingTop: "calc(var(--header-h, 72px) + 24px)",
        paddingBottom: "64px",
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/policies/terms-of-service" element={<Terms />} />
          <Route path="/policies/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
