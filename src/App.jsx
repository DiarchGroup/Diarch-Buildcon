import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import '@/App.css';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFAB } from '@/components/layout/WhatsAppFAB';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';

import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import ProjectDetail from '@/pages/ProjectDetail';
import Capabilities from '@/pages/Capabilities';
import Partnerships from '@/pages/Partnerships';
import Certifications from '@/pages/Certifications';
import About from '@/pages/About';
import News from '@/pages/News';
import Contact from '@/pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App min-h-screen flex flex-col bg-background">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <div className="flex-1 pb-16 lg:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppFAB />
        <MobileBottomBar />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'hsl(217 65% 7%)',
              color: 'hsl(38 33% 96%)',
              border: '1px solid hsl(43 55% 54% / 0.4)',
              borderRadius: '0',
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
