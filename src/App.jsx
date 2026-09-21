import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import About from './components/About';
import Programs from './components/Programs';
import Mission30 from './components/Mission30';
import Achievers from './components/Achievers';
import Faculty from './components/Faculty';
import CampusLife from './components/CampusLife';
import Gallery from './components/Gallery';
import AdmissionForm from './components/AdmissionForm';
import NoticeBoard from './components/NoticeBoard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [prefilledProgram, setPrefilledProgram] = useState('');

  const handleOpenLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginModalOpen(false);
  };

  const handleSelectProgram = (programTitle) => {
    setPrefilledProgram(programTitle);
  };

  return (
    <div className="al-ameen-app">
      {/* Sticky Header with Notice Bar & Navigation */}
      <Header onOpenLoginModal={handleOpenLogin} />

      {/* Main Content Sections */}
      <main>
        {/* High-Impact Hero Section */}
        <Hero onOpenLoginModal={handleOpenLogin} />

        {/* Key Statistics & Official Recognition Ribbon */}
        <StatsCounter />

        {/* About Academy & Principal's Message */}
        <About />

        {/* Academic Offerings & Streams */}
        <Programs onSelectProgram={handleSelectProgram} />

        {/* Flagship Mission 30 NEET / JEE Batch */}
        <Mission30 onApplyClick={handleSelectProgram} />

        {/* Wall of Fame, Medical Selections & Board Results */}
        <Achievers />

        {/* Distinguished Faculty Members */}
        <Faculty />

        {/* Campus Life, Hostels & Laboratories */}
        <CampusLife />

        {/* Authentic Photo Gallery & Glimpses */}
        <Gallery />

        {/* Online Admission Registration Form */}
        <AdmissionForm prefilledProgram={prefilledProgram} />

        {/* Circulars, Notice Board & FAQs */}
        <NoticeBoard onOpenLoginModal={handleOpenLogin} />

        {/* Campus Location, Contact Details & Google Map */}
        <Contact onOpenLoginModal={handleOpenLogin} />
      </main>

      {/* Footer with Affiliation Details & Quick Links */}
      <Footer onOpenLoginModal={handleOpenLogin} />

      {/* Portal Login Gateway Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLogin} />
    </div>
  );
}
