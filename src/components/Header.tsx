import React from 'react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onOpenBooking?: () => void;
  currentView?: 'home' | 'menu';
  onNavigate?: (view: 'home' | 'menu') => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  isMenuOpen,
  onToggleMenu,
  currentView = 'home',
  onNavigate,
}) => {

  return (
    <header className="fixed top-0 left-0 w-full h-[58px] md:h-[68px] bg-[#FFF8F2] z-50 transition-all">
      <div className="relative w-full h-full max-w-[1700px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Left: Minimal Hamburger Menu Toggle */}
        <div className="flex items-center gap-4 z-20">
          <button
            onClick={onToggleMenu}
            className="group flex items-center p-2 text-[#4c5b72] hover:text-[#111] transition-colors focus:outline-none cursor-pointer"
            aria-label={language === 'pt' ? 'Abrir menu de navegação' : 'Toggle navigation menu'}
          >
            <div className="w-6 h-3 relative flex flex-col justify-between">
              <span
                className={`w-full h-[1.5px] bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
                }`}
              />
              <span
                className={`w-full h-[1.5px] bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-[5.5px]' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Center: Brand Logo Horizontally Centered */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <a
            href={language === 'pt' ? '/pt/' : '/en/'}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="block focus:outline-none cursor-pointer"
            aria-label={language === 'pt' ? 'Mya Petit Café — Início' : 'Mya Petit Café Home'}
          >
            <img
              src="/mya-assets/mya_logo_transparent.webp"
              alt={language === 'pt' ? 'Logótipo do Mya Petit Café' : 'Mya Petit Café Logo'}
              className="h-10 md:h-12 w-auto object-contain select-none"
              decoding="async"
            />
          </a>
        </div>

        {/* Right: Language switch */}
        <div className="flex items-center gap-3 md:gap-5 z-20">
          {/* PT / EN Language Switch */}
          <button
            onClick={onToggleLanguage}
            className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#4c5b72] hover:text-[#111] transition-colors px-2 py-1 border border-transparent hover:border-[#4c5b72]/30 rounded-none cursor-pointer"
            title={language === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'}
            aria-label={language === 'pt' ? 'Mudar idioma entre Português e Inglês' : 'Switch language between Portuguese and English'}
          >
            <span className={language === 'pt' ? 'font-bold underline underline-offset-4' : 'opacity-60'}>PT</span>
            <span className="mx-1 opacity-40">/</span>
            <span className={language === 'en' ? 'font-bold underline underline-offset-4' : 'opacity-60'}>EN</span>
          </button>
        </div>
      </div>
    </header>
  );
};
