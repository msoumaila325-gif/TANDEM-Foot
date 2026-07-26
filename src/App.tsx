import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TrainingPrograms } from './components/TrainingPrograms';
import { AgeCategories } from './components/AgeCategories';
import { CoachingStaff } from './components/CoachingStaff';
import { Facilities } from './components/Facilities';
import { StatsCounter } from './components/StatsCounter';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { LatestNews } from './components/LatestNews';
import { SponsorsTicker } from './components/SponsorsTicker';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { EnrollmentModal } from './components/EnrollmentModal';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('fr'); // Default French for Bamako, Mali
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'why-us', 'programs', 'categories', 'staff', 'facilities', 'gallery', 'news', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExplorePrograms = () => {
    const el = document.getElementById('programs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#1F2937] font-sans antialiased selection:bg-[#1E4E92] selection:text-white">
      {/* Entrance Loading Screen */}
      <LoadingScreen />

      {/* Navigation Bar */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenEnrollment={() => setEnrollmentOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero */}
        <Hero
          lang={lang}
          onOpenEnrollment={() => setEnrollmentOpen(true)}
          onExplorePrograms={handleExplorePrograms}
        />

        {/* 2. Institutional Sponsors Ticker */}
        <SponsorsTicker lang={lang} />

        {/* 3. About Section */}
        <AboutSection lang={lang} />

        {/* 4. Why Choose TFC */}
        <WhyChooseUs lang={lang} />

        {/* 5. Training Programs */}
        <TrainingPrograms
          lang={lang}
          onOpenEnrollment={() => setEnrollmentOpen(true)}
        />

        {/* 6. Animated Stats Bar */}
        <StatsCounter lang={lang} />

        {/* 7. Age Categories (U11-U20) */}
        <AgeCategories
          lang={lang}
          onOpenEnrollment={() => setEnrollmentOpen(true)}
        />

        {/* 8. Coaching Staff */}
        <CoachingStaff lang={lang} />

        {/* 9. Facilities */}
        <Facilities lang={lang} />

        {/* 10. Photo & Highlight Gallery */}
        <Gallery lang={lang} />

        {/* 11. Testimonials */}
        <Testimonials lang={lang} />

        {/* 12. Latest News */}
        <LatestNews lang={lang} />

        {/* 13. FAQ */}
        <FAQSection lang={lang} />

        {/* 14. Contact Section & Map */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Enrollment Trial Pass Modal */}
      <EnrollmentModal
        isOpen={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
        lang={lang}
      />
    </div>
  );
}
