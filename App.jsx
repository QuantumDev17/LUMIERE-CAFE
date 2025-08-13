import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Terms from './pages/Terms.jsx';
import Privacy from './pages/Privacy.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/contact" element={<Contact />} />
        <Route path="/policies/terms-of-service" element={<Terms />} />
        <Route path="/policies/privacy-policy" element={<Privacy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
