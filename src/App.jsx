import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Fallback to Home for now; add other pages later */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}