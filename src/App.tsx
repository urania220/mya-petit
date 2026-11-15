import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { content } from './content';
import { Header } from './components/Header';
import { NavigationOverlay } from './components/NavigationOverlay';
import { Hero } from './components/Hero';
import { SectionAtmosphere } from './components/SectionAtmosphere';
import { SectionEditorial } from './components/SectionEditorial';
import { SectionGatherings } from './components/SectionGatherings';
import { SectionTripAdvisor } from './components/SectionTripAdvisor';
import { SectionInstagram } from './components/SectionInstagram';
import { SectionVisit } from './components/SectionVisit';
import { MenuPage } from './components/MenuPage';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const path = window.location.pathname.toLowerCase();
  if (path === '/pt' || path.startsWith('/pt/')) return 'pt';
  return 'en';
}

function getInitialView(): 'home' | 'menu' {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  if (
    hash.startsWith('#/menu') ||
    hash === '#menu' ||
    path === '/menu' ||
    path === '/en/menu' ||
    path === '/pt/menu'
  ) {
    return 'menu';
  }
  return 'home';
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'menu'>(getInitialView);

  // Sync browser back/forward & hash changes (preserving backward compatibility with #menu / #/menu)
  useEffect(() => {
    const syncFromUrl = () => {
      const path = window.location.pathname.toLowerCase();
      if (path === '/pt' || path.startsWith('/pt/')) {
        setLanguage('pt');
      } else if (path === '/en' || path.startsWith('/en/')) {
        setLanguage('en');
      }

      const hash = window.location.hash.toLowerCase();
      if (
        hash.startsWith('#/menu') ||
        hash === '#menu' ||
        path === '/menu' ||
        path === '/en/menu' ||
        path === '/pt/menu'
      ) {
        setCurrentView('menu');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', syncFromUrl);
    window.addEventListener('popstate', syncFromUrl);
    return () => {
      window.removeEventListener('hashchange', syncFromUrl);
      window.removeEventListener('popstate', syncFromUrl);
    };
  }, []);

  // Dynamically update <html lang>, <title>, and SEO <meta> tags when language or view changes
  useEffect(() => {
    const seo = content[language].seo;
    document.documentElement.lang = language === 'pt' ? 'pt-PT' : 'en';

    const title = currentView === 'menu' ? seo.menuTitle : seo.homeTitle;
    const description = currentView === 'menu' ? seo.menuDescription : seo.homeDescription;

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }, [language, currentView]);

  const navigateTo = (view: 'home' | 'menu', anchor?: string) => {
    setCurrentView(view);
    const nextUrl =
      view === 'menu'
        ? `/${language}/menu`
        : anchor
        ? `/${language}/${anchor}`
        : `/${language}/`;

    window.history.pushState(null, '', nextUrl);

    if (view === 'menu') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (anchor) {
      setTimeout(() => {
        const elem = document.querySelector(anchor);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Switch PT / EN cleanly while preserving exact scroll position
  const toggleLanguage = () => {
    const nextLang: Language = language === 'en' ? 'pt' : 'en';
    setLanguage(nextLang);
    const nextPath = currentView === 'menu' ? `/${nextLang}/menu` : `/${nextLang}/`;
    const currentHash = window.location.hash;
    window.history.replaceState(null, '', `${nextPath}${currentHash}`);
  };

  const handleVisitClick = () => {
    if (currentView !== 'home') {
      navigateTo('home', '#visit');
      return;
    }
    const elem = document.querySelector('#visit');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F2] text-[#4c5b72] selection:bg-[#F1D4D9] selection:text-[#191719] relative">
      {/* Header */}
      <Header
        language={language}
        onToggleLanguage={toggleLanguage}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        currentView={currentView}
        onNavigate={navigateTo}
      />

      {/* Navigation Drawer Overlay */}
      <NavigationOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        language={language}
        onToggleLanguage={toggleLanguage}
        onNavigate={navigateTo}
      />

      {/* Main Content: Independent Menu Page or Editorial Homepage */}
      {currentView === 'menu' ? (
        <MenuPage
          language={language}
          onToggleLanguage={toggleLanguage}
          onBackToHome={() => navigateTo('home')}
        />
      ) : (
        <main>
          {/* Section 01: Hero */}
          <Hero
            language={language}
            onExploreMenu={() => navigateTo('menu')}
          />

          {/* Section 02: Our Café & Terrace (Brand Story & Founder Vanessa Ferreira) */}
          <SectionAtmosphere language={language} />

          {/* Section 03 & 04: Order Online & Signature Brunch */}
          <SectionEditorial
            language={language}
            onExploreBrunch={() => navigateTo('menu')}
          />

          {/* Section 05: Good Food, Good Company */}
          <SectionGatherings
            language={language}
            onVisitClick={handleVisitClick}
          />

          {/* Section 06: TripAdvisor Reviews */}
          <SectionTripAdvisor language={language} />

          {/* Section 07: Instagram Gallery */}
          <SectionInstagram language={language} />

          {/* Section 08: Visit Mya Petit Café */}
          <SectionVisit language={language} />
        </main>
      )}

      {/* Section 09: Footer */}
      <Footer
        language={language}
        onNavigate={navigateTo}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        language={language}
      />
    </div>
  );
}
