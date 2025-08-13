// src/App.jsx
import React from "react";
import { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import EBoutique from "./pages/EBoutique.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import Cakes from "./pages/Cakes.jsx";
import PersonalDesserts from "./pages/PersonalDesserts.jsx";
import OneBite from "./pages/OneBite.jsx";
import Pastries from "./pages/Pastries.jsx";
import Bread from "./pages/Bread.jsx";
import Delicatessen from "./pages/Delicatessen.jsx";
import BakeryShelf from "./pages/BakeryShelf.jsx";

export default function App() {
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
      <main style={{ paddingTop: "var(--header-h, 72px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/e-boutique" element={<EBoutique />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/policies/terms-of-service" element={<Terms />} />
          <Route path="/policies/privacy-policy" element={<Privacy />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/personal-desserts" element={<PersonalDesserts />} />
          <Route path="/onebite" element={<OneBite />} />
          <Route path="/pastries" element={<Pastries />} />
          <Route path="/bread" element={<Bread />} />
          <Route path="/delicatessen" element={<Delicatessen />} />
          <Route path="/bakery-shelf" element={<BakeryShelf />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
