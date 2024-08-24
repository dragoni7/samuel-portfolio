'use client';
import { ReactNode, useState } from 'react';
import About from './features/About/About';
import Landing from './features/Landing/Landing';
import Navbar from './components/Navbar';
import Projects from './features/Projects/Projects';
import { AnimatePresence } from 'framer-motion';
import Contact from './features/Contact/Contact';
import Skills from './features/Skills/Skills';

export default function Home() {
  const [section, setSection] = useState<string>('Landing');

  function renderSection(): ReactNode {
    switch (section) {
      case 'Landing': {
        return <Landing />;
      }
      case 'About': {
        return <About />;
      }
      case 'Skills': {
        return <Skills />;
      }
      case 'Projects': {
        return <Projects />;
      }
      case 'Contact': {
        return <Contact />;
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      <main className="flex min-h-screen flex-col bg-[#070a1a]">
        <Navbar onNavigate={(newSection: string) => setSection(newSection)} />
        <div className="container mt-32 mx-auto px-12 py-4">{renderSection()}</div>
      </main>
    </AnimatePresence>
  );
}
