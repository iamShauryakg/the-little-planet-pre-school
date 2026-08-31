import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { FloatingActions } from './components/common/FloatingActions';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Classes } from './pages/Classes';
import { Activities } from './pages/Activities';
import { Facilities } from './pages/Facilities';
import { Gallery } from './pages/Gallery';
import { Admissions } from './pages/Admissions';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-stone-50/30 text-stone-800 font-sans selection:bg-emerald-200 selection:text-emerald-900">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}
