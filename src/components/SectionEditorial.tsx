import React from 'react';
import { Language } from '../types';
import { content, UBER_EATS_URL } from '../content';
import { TornPaperFrame } from './TornPaperFrame';

interface SectionEditorialProps {
  language: Language;
  onExploreBrunch: () => void;
}

export const SectionEditorial: React.FC<SectionEditorialProps> = ({
  language,
  onExploreBrunch,
}) => {
  const t = content[language].section2;

  return (
    <section className="relative w-full max-w-[1600px] mx-auto my-12 md:my-28 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden">
      
      {/* Background botanical accents */}
      <img
        src="/decorative/bg-1.webp"
        alt=""
        className="bg-botanical top-8 right-6 hidden md:block opacity-10"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <img
        src="/decorative/bg-2.webp"
        alt=""
        className="bg-botanical top-16 left-4 hidden lg:block opacity-10"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />

      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start relative z-10">
        
        {/* Left Column (md:w-7/12) — Order Online & Takeaway */}
        <div className="w-full md:w-7/12 flex flex-col">
          {/* Wide Editorial Photo */}
          <div className="relative aspect-[16/11] sm:aspect-[16/10] bg-[#FFF8F2] overflow-hidden mb-8">
            <TornPaperFrame border={3} />
            <img
              src="/mya-assets/03_food_wraps.webp"
              alt={t.orderPhotoAlt}
              className="w-full h-full object-cover select-none"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Text Block */}
          <div className="max-w-[480px]">
            <h2 className="serif text-2xl sm:text-3xl md:text-[34px] leading-[1.2] text-[#4c5b72] font-normal mb-4 uppercase tracking-[0.04em]">
              {t.orderTitle}
            </h2>
            <p className="serif text-base sm:text-lg leading-[1.65] text-[#4c5b72]/85 font-normal mb-7">
              {t.orderBody}
            </p>
            <a
              href={UBER_EATS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-flip w-full md:w-auto text-center"
              aria-label={t.orderCta}
            >
              <span className="btn-flip__wrap">
                <span>{t.orderCta}</span>
                <span>{t.orderCta}</span>
              </span>
            </a>
          </div>
        </div>

        {/* Right Column (md:w-5/12) — Signature Brunch (Staggered Downward mt-8 md:mt-36) */}
        <div className="w-full md:w-5/12 flex flex-col md:mt-28 lg:mt-36">
          {/* Editorial Photo: compact 4:3 on mobile (<768px), tall 3:4 on desktop */}
          <div className="relative aspect-[4/3] md:aspect-[3/4] bg-[#FFF8F2] overflow-hidden mb-8">
            <TornPaperFrame border={4} />
            <img
              src="/mya-assets/04_food_savory_pancakes.webp"
              alt={t.brunchPhotoAlt}
              className="w-full h-full object-cover select-none"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Text Block */}
          <div className="max-w-[420px]">
            <h2 className="serif text-2xl sm:text-3xl md:text-[34px] leading-[1.2] text-[#4c5b72] font-normal mb-4 uppercase tracking-[0.04em]">
              {t.brunchTitle}
            </h2>
            <p className="serif text-base sm:text-lg leading-[1.65] text-[#4c5b72]/85 font-normal mb-7">
              {t.brunchBody}
            </p>
            <button
              onClick={onExploreBrunch}
              className="btn btn-flip w-full md:w-auto text-center"
              aria-label={t.brunchCta}
            >
              <span className="btn-flip__wrap">
                <span>{t.brunchCta}</span>
                <span>{t.brunchCta}</span>
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
