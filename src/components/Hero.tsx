import React from 'react';
import { Language } from '../types';
import { content } from '../content';

interface HeroProps {
  language: Language;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onExploreMenu }) => {
  const t = content[language].hero;

  return (
    <section id="home" className="relative w-full pt-[58px] md:pt-[68px] overflow-hidden bg-[#FFF8F2]">
      {/* Split screen container: flex col on mobile, flex row on desktop */}
      <div className="w-full flex flex-col-reverse md:flex-row md:items-stretch">
        
        {/* Left Editorial Panel (~34% width on desktop) */}
        <div className="w-full md:w-[35%] lg:w-[34%] bg-[#FFF8F2] flex flex-col justify-end p-8 sm:p-12 md:p-12 lg:p-16 xl:p-20 z-20 shrink-0">
          <div className="max-w-[480px] md:mb-6 lg:mb-12">
            
            {/* Headline with intentional line breaks and wide letter-spacing */}
            <h1 className="serif text-3xl sm:text-4xl md:text-[38px] lg:text-[44px] xl:text-[50px] leading-[1.12] text-[#4c5b72] tracking-[0.04em] font-normal mb-5 uppercase">
              <span className="block">{t.headlinePart1}</span>
              <span className="block mt-1">{t.headlinePart2}</span>
            </h1>

            {/* Concise Value Description */}
            <p className="serif text-base sm:text-lg md:text-lg lg:text-[19px] leading-[1.55] text-[#4c5b72]/85 font-normal mb-8 max-w-[380px]">
              {t.description}
            </p>

            {/* Primary CTA */}
            <div>
              <button
                onClick={onExploreMenu}
                className="btn btn-flip w-fit"
                aria-label={t.ctaMenu}
              >
                <span className="btn-flip__wrap">
                  <span>{t.ctaMenu}</span>
                  <span>{t.ctaMenu}</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Photography Panel (~66% width on desktop) — Locked landscape 4:3 aspect ratio (横向3:4比例) */}
        <div className="relative w-full md:w-[65%] lg:w-[66%] aspect-[4/3] overflow-hidden bg-[#FFF8F2]">
          
          {/* Authentic Torn-Paper Left Boundary (Desktop) */}
          <div
            className="hidden md:block absolute top-0 left-0 bottom-0 w-[38px] z-20 pointer-events-none"
            style={{
              backgroundImage: 'url(/borders/border-1.webp)',
              backgroundRepeat: 'repeat-y',
              backgroundSize: '100% auto',
              transform: 'translateX(-22px)',
            }}
            aria-hidden="true"
          />

          {/* Authentic Torn-Paper Bottom Boundary (Mobile) */}
          <div
            className="md:hidden absolute bottom-0 left-0 right-0 h-[24px] z-20 pointer-events-none"
            style={{
              backgroundImage: 'url(/borders/border-1-bottom.webp)',
              backgroundRepeat: 'repeat-x',
              backgroundSize: 'auto 100%',
            }}
            aria-hidden="true"
          />

          {/* Hero Food Photography */}
          <img
            src="/mya-assets/hero-beet-toasts.webp"
            alt={t.heroPhotoAlt}
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};
