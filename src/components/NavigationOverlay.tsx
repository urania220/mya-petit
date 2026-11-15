import React from 'react';
import { Language } from '../types';
import { content, UBER_EATS_URL } from '../content';
import { X, ExternalLink } from 'lucide-react';

interface NavigationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onToggleLanguage: () => void;
  onNavigate?: (view: 'home' | 'menu', anchor?: string) => void;
}

export const NavigationOverlay: React.FC<NavigationOverlayProps> = ({
  isOpen,
  onClose,
  language,
  onToggleLanguage,
  onNavigate,
}) => {
  const t = content[language].nav;

  if (!isOpen) return null;

  const handleNavClick = (anchor: string) => {
    onClose();
    if (onNavigate) {
      onNavigate('home', anchor);
    } else {
      const elem = document.querySelector(anchor);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuClick = () => {
    onClose();
    if (onNavigate) {
      onNavigate('menu');
    } else {
      window.location.hash = '#/menu';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex transition-all duration-300">
      {/* Background Mask */}
      <div
        className="fixed inset-0 bg-[#4c5b72]/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Navigation Drawer Container */}
      <div className="relative w-full max-w-[560px] h-full bg-[#FFF8F2] shadow-2xl flex flex-col p-8 md:p-14 z-10 overflow-y-auto">
        {/* Top bar inside drawer: Close + Language */}
        <div className="flex items-center justify-between pb-6">
          <button
            onClick={onClose}
            className="group flex items-center gap-2 text-[#4c5b72] hover:text-[#111] transition-colors cursor-pointer"
            aria-label={t.close}
          >
            <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase">
              {t.close}
            </span>
          </button>

          <button
            onClick={onToggleLanguage}
            className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#4c5b72] hover:text-[#111] transition-colors px-2 py-1 border border-[#4c5b72]/20 cursor-pointer"
            title="Switch language / Mudar idioma"
          >
            <span className={language === 'pt' ? 'font-bold underline underline-offset-4' : 'opacity-60'}>PT</span>
            <span className="mx-1 opacity-40">/</span>
            <span className={language === 'en' ? 'font-bold underline underline-offset-4' : 'opacity-60'}>EN</span>
          </button>
        </div>

        {/* Center: Main Editorial Navigation Links */}
        <nav className="my-10 flex flex-col gap-6 md:gap-7">
          <button
            onClick={() => handleNavClick('#home')}
            className="text-left text-3xl md:text-4xl serif font-normal text-[#4c5b72] hover:text-[#111] transition-colors hover:translate-x-2 transform duration-200 cursor-pointer"
          >
            {t.home}
          </button>
          <button
            onClick={handleMenuClick}
            className="text-left text-3xl md:text-4xl serif font-normal text-[#4c5b72] hover:text-[#111] transition-colors hover:translate-x-2 transform duration-200 cursor-pointer"
          >
            {t.menu}
          </button>
          <button
            onClick={() => handleNavClick('#about')}
            className="text-left text-3xl md:text-4xl serif font-normal text-[#4c5b72] hover:text-[#111] transition-colors hover:translate-x-2 transform duration-200 cursor-pointer"
          >
            {t.about}
          </button>
          <button
            onClick={() => handleNavClick('#reviews')}
            className="text-left text-3xl md:text-4xl serif font-normal text-[#4c5b72] hover:text-[#111] transition-colors hover:translate-x-2 transform duration-200 cursor-pointer"
          >
            {t.reviews}
          </button>
          <button
            onClick={() => handleNavClick('#visit')}
            className="text-left text-3xl md:text-4xl serif font-normal text-[#4c5b72] hover:text-[#111] transition-colors hover:translate-x-2 transform duration-200 cursor-pointer"
          >
            {t.visit}
          </button>
          <a
            href={UBER_EATS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-left text-3xl md:text-4xl serif font-normal text-[#4c5b72] hover:text-[#111] transition-colors hover:translate-x-2 transform duration-200"
          >
            <span>{t.uberEats}</span>
            <ExternalLink className="w-5 h-5 opacity-60" />
          </a>
        </nav>
      </div>
    </div>
  );
};
