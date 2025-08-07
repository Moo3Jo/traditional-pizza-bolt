import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reservieren from './pages/Reservieren';
import Getraenkekarte from './pages/Getraenkekarte';
import Oeffnungszeiten from './pages/Oeffnungszeiten';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservieren" element={<Reservieren />} />
          <Route path="/getraenkekarte" element={<Getraenkekarte />} />
          <Route path="/oeffnungszeiten" element={<Oeffnungszeiten />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;