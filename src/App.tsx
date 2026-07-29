import React, { useState, useEffect } from 'react';
import { Language, PageRoute } from './types';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { PageHeader } from './components/PageHeader';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TrainingPrograms } from './components/TrainingPrograms';
import { AgeCategories } from './components/AgeCategories';
import { CoachingStaff } from './components/CoachingStaff';
import { Facilities } from './components/Facilities';
import { StatsCounter } from './components/StatsCounter';
import { MediaSection } from './components/MediaSection';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { SponsorsTicker } from './components/SponsorsTicker';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { EnrollmentModal } from './components/EnrollmentModal';
import { ScoutingHub } from './components/ScoutingHub';
import { PartnershipsSection } from './components/PartnershipsSection';
import { AcademyBentoSections } from './components/AcademyBentoSections';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('fr'); // Default French for Bamako, Mali
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  const handlePageChange = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExplorePrograms = () => {
    setCurrentPage('programmes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#1F2937] font-sans antialiased selection:bg-[#1E4E92] selection:text-white">
      {/* Entrance Loading Screen */}
      <LoadingScreen />

      {/* Persistent Multi-Page Floating Navbar */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenEnrollment={() => setEnrollmentOpen(true)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* Dynamic Multi-Page Router */}
      <main>
        {currentPage === 'home' && (
          <>
            <Hero
              lang={lang}
              onOpenEnrollment={() => setEnrollmentOpen(true)}
              onExplorePrograms={handleExplorePrograms}
            />
            <SponsorsTicker lang={lang} />
            <AboutSection lang={lang} />
            <StatsCounter lang={lang} />
            <WhyChooseUs
              lang={lang}
              onOpenEnrollment={() => setEnrollmentOpen(true)}
            />
            <Facilities
              lang={lang}
              onOpenEnrollment={() => setEnrollmentOpen(true)}
            />
            <CoachingStaff lang={lang} />
            <MediaSection lang={lang} showGallery={false} />
            <Testimonials lang={lang} />
          </>
        )}

        {currentPage === 'academie' && (
          <>
            <PageHeader
              page="academie"
              lang={lang}
              onPageChange={handlePageChange}
              onOpenEnrollment={() => setEnrollmentOpen(true)}
            />
            <AcademyBentoSections
              lang={lang}
              onOpenEnrollment={() => setEnrollmentOpen(true)}
            />
            <CoachingStaff lang={lang} />
            <Facilities
              lang={lang}
              onOpenEnrollment={() => setEnrollmentOpen(true)}
            />
            <Gallery lang={lang} />
          </>
        )}

        {currentPage === 'scouting' && (
          <>
            <PageHeader
              page="scouting"
              lang={lang}
              onPageChange={handlePageChange}
              onOpenEnrollment={() => setEnrollmentOpen(true)}
            />
            <ScoutingHub
              lang={lang}
              onOpenEnrollment={() => setEnrollmentOpen(true)}
            />
            <PartnershipsSection lang={lang} />
          </>
        )}

        {currentPage === 'programmes' && (
          <>
            <PageHeader
              page="programmes"
              lang={lang}
              onPageChange={handlePageChange}
              onOpenEnrollment={() => setEnrollmentOpen(true)}
            />
            <TrainingPrograms
              lang={lang}
              onOpenEnrollment={() => setEnrollmentOpen(true)}
            />
            <AgeCategories
              lang={lang}
              onOpenEnrollment={() => setEnrollmentOpen(true)}
            />
            <FAQSection lang={lang} />
          </>
        )}

        {currentPage === 'media' && (
          <>
            <PageHeader
              page="media"
              lang={lang}
              onPageChange={handlePageChange}
              onOpenEnrollment={() => setEnrollmentOpen(true)}
            />
            <MediaSection
              lang={lang}
              onOpenEnrollment={() => setEnrollmentOpen(true)}
              onPageChange={handlePageChange}
            />
          </>
        )}

        {currentPage === 'contact' && (
          <>
            <PageHeader
              page="contact"
              lang={lang}
              onPageChange={handlePageChange}
              onOpenEnrollment={() => setEnrollmentOpen(true)}
            />
            <ContactSection lang={lang} />
            <FAQSection lang={lang} />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer lang={lang} onPageChange={handlePageChange} />

      {/* Enrollment Trial Pass Modal */}
      <EnrollmentModal
        isOpen={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
        lang={lang}
      />
    </div>
  );
}

