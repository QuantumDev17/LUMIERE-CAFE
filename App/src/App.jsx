<<<<<<< HEAD
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
=======
// src/App.jsx
import React from "react";
import { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
>>>>>>> origin/main

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import EBoutique from "./pages/EBoutique.jsx";
import Contact from "./pages/Contact.jsx";
<<<<<<< HEAD
import Cakes from "./pages/products/Cakes.jsx";
import PersonalDesserts from "./pages/products/PersonalDesserts.jsx";
import OneBite from "./pages/products/OneBite.jsx";
import Pastries from "./pages/products/Pastries.jsx";
import Bread from "./pages/products/Bread.jsx";
import BakeryShelf from "./pages/products/BakeryShelf.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function MainContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <main style={{ paddingTop: isHome ? 0 : "var(--header-h, 72px)", paddingBottom: 80 }}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e-boutique" element={<EBoutique />} />
        <Route path="/contact" element={<Contact />} />
        {/* redirect any old links */}
        <Route path="/pages/contact" element={<Navigate to="/contact" replace />} />

        <Route path="/cakes" element={<Cakes />} />
        <Route path="/personal-desserts" element={<PersonalDesserts />} />
        <Route path="/onebite" element={<OneBite />} />
        <Route path="/pastries" element={<Pastries />} />
        <Route path="/bread" element={<Bread />} />
        <Route path="/bakery-shelf" element={<BakeryShelf />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}
=======
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
>>>>>>> origin/main

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

<<<<<<< HEAD
  const onHeaderHeight = (h) =>
    document.documentElement.style.setProperty("--header-h", `${h}px`);

  return (
    <BrowserRouter>
      <Header onHeight={onHeaderHeight} />
      <MainContent />
=======
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
>>>>>>> origin/main
      <Footer />
    </BrowserRouter>
  );
}
