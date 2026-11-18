import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import About from './components/About';
import Programs from './components/Programs';
import Achievers from './components/Achievers';
import Faculty from './components/Faculty';
import CampusLife from './components/CampusLife';
import Gallery from './components/Gallery';
import AdmissionForm from './components/AdmissionForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [prefilledProgram, setPrefilledProgram] = useState('');

  return (
    <div className="al-ameen-app">
      <Header onOpenLoginModal={() => setIsLoginModalOpen(true)} />

      <main>
        <Hero onOpenLoginModal={() => setIsLoginModalOpen(true)} />
        <StatsCounter />
        <About />
        <Programs onSelectProgram={setPrefilledProgram} />
        <Achievers />
        <Faculty />
        <CampusLife />
        <Gallery />
        <AdmissionForm prefilledProgram={prefilledProgram} />
        <Contact />
      </main>

      <Footer onOpenLoginModal={() => setIsLoginModalOpen(true)} />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}
