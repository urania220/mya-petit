import React from 'react';
import { Language } from '../types';
import {
  content,
  UBER_EATS_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  TIKTOK_URL,
  X_URL,
} from '../content';
import { Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  language: Language;
  onNavigate?: (view: 'home' | 'menu', anchor?: string) => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onOpenPrivacy,
}) => {
  const t = content[language].footer;
  const nav = content[language].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchorLink = (e: React.MouseEvent, anchor: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home', anchor);
    } else {
      const elem = document.querySelector(anchor);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#F5ECE8] text-[#4c5b72] pt-10 md:pt-14 pb-12 px-6 sm:px-10 md:px-16 lg:px-20 z-10">
      
      {/* Background subtle texture / watermark */}
      <img
        src="/decorative/bg-1.webp"
        alt=""
        className="absolute top-0 right-0 w-80 h-80 opacity-5 pointer-events-none"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 pb-14">
          
          {/* Left Column: Logo & Short Brand Intro (5 cols) */}
          <div className="md:col-span-5 max-w-[440px]">
            <a
              href={language === 'pt' ? '/pt/' : '/en/'}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-block mb-4 focus:outline-none"
              aria-label="Mya Petit Café"
            >
              <img
                src="/mya-assets/mya_logo_transparent.webp"
                alt="Mya Petit Café"
                className="h-14 sm:h-16 w-auto object-contain select-none"
                loading="lazy"
                decoding="async"
              />
            </a>

            <p className="serif text-base sm:text-lg leading-relaxed text-[#4c5b72]/85">
              {t.brandIntro}
            </p>
          </div>

          {/* Right Column: Quick Links, Delivery, and Social Media (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#4c5b72] mb-4">
                {t.quickLinks}
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm serif">
                <li>
                  <a
                    href={language === 'pt' ? '/pt/menu' : '/en/menu'}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('menu');
                      }
                    }}
                    className="hover:text-[#111] transition-colors font-medium"
                  >
                    {nav.menu}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => handleAnchorLink(e, '#about')}
                    className="hover:text-[#111] transition-colors"
                  >
                    {nav.about}
                  </a>
                </li>
                <li>
                  <a
                    href="#visit"
                    onClick={(e) => handleAnchorLink(e, '#visit')}
                    className="hover:text-[#111] transition-colors"
                  >
                    {nav.visit}
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    onClick={(e) => handleAnchorLink(e, '#reviews')}
                    className="hover:text-[#111] transition-colors"
                  >
                    {nav.reviews}
                  </a>
                </li>
              </ul>
            </div>

            {/* Delivery & Ordering */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#4c5b72] mb-4">
                {t.deliveryTitle}
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm serif">
                <li>
                  <a
                    href={UBER_EATS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#111] transition-colors"
                  >
                    Uber Eats
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#4c5b72] mb-4">
                {t.socialTitle}
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm serif">
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#267F79] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#EFA5B5] shrink-0" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#267F79] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#4c5b72] fill-current shrink-0" aria-hidden="true">
                      <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.5l.5-3H13V9.5c0-.28.22-.5.5-.5z" />
                    </svg>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#267F79] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#4c5b72] fill-current shrink-0" aria-hidden="true">
                      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                    </svg>
                    <span>TikTok</span>
                  </a>
                </li>
                <li>
                  <a
                    href={X_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#267F79] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#4c5b72] fill-current shrink-0" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>X</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Privacy Policy, and Back to top */}
        <div className="pt-8 border-t border-[#4c5b72]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4c5b72]/75">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2">
            <span>
              © {new Date().getFullYear()} · {t.rights}
            </span>
            <span className="hidden sm:inline opacity-40">·</span>
            <button
              onClick={onOpenPrivacy}
              className="underline underline-offset-4 hover:text-[#111] transition-colors cursor-pointer"
            >
              {t.privacyPolicy}
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#111] transition-colors tracking-widest uppercase text-[11px] cursor-pointer"
            aria-label={t.backToTop}
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
