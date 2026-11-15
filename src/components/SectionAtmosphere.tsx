import React from 'react';
import { Language } from '../types';
import { content } from '../content';
import { TornPaperFrame } from './TornPaperFrame';

interface SectionAtmosphereProps {
  language: Language;
}

export const SectionAtmosphere: React.FC<SectionAtmosphereProps> = ({
  language,
}) => {
  const t = content[language].section1;

  return (
    <section
      id="about"
      className="relative w-full max-w-[1600px] mx-auto my-12 md:my-28 px-6 sm:px-10 md:px-16 lg:px-20 overflow-x-clip md:overflow-hidden"
    >
      {/* Background cat & floral watermark illustration */}
      <img
        src="/mya-assets/story-cat-watermark.webp"
        alt=""
        className="bg-botanical !w-[204px] !h-[204px] top-0 right-4 hidden md:block object-contain mix-blend-multiply brightness-105 contrast-125"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <img
        src="/decorative/bg-2.webp"
        alt=""
        className="bg-botanical bottom-6 left-6 hidden lg:block opacity-10"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />

      <div className="flex flex-col md:flex-row items-center relative z-10 gap-10 md:gap-0">
        
        {/* Left: Two Staggered Photo Cards with Authentic Torn-Paper Framing & Tape */}
        <div className="w-full md:w-2/3 flex gap-4 sm:gap-8 px-5 md:px-0 pt-4 pb-6 md:py-0">
          
          {/* Card 1: Exterior Sunny Terrace */}
          <div className="w-1/2 relative -rotate-3 md:rotate-0">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] bg-[#FFF8F2] overflow-hidden">
              <TornPaperFrame border={1} />
              <img
                src="/mya-assets/08_exterior_terrace.webp"
                alt={t.terraceAlt}
                className="w-full h-full object-cover select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Card 2: Intimate Floral Dining Space (Staggered Downward) */}
          <div className="w-1/2 relative translate-y-4 md:translate-y-0 md:mt-16 lg:mt-24 rotate-3 md:rotate-0">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] bg-[#FFF8F2] overflow-hidden">
              <TornPaperFrame border={2} />
              <img
                src="/mya-assets/06_interior_wide_butterfly.webp"
                alt={t.interiorAlt}
                className="w-full h-full object-cover select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Authentic Washi Tape accent */}
            <div className="tape-1" aria-hidden="true" />
          </div>
        </div>

        {/* Right: Editorial Brand Story */}
        <div className="w-full md:w-1/3 flex flex-col justify-center md:pl-12 lg:pl-16 mt-4 md:mt-0">
          <div id="story" className="max-w-[440px]">
            <h2 className="serif text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] leading-[1.18] text-[#4c5b72] font-normal mb-5 uppercase tracking-[0.04em]">
              {t.title}
            </h2>
            <p className="serif text-base sm:text-lg leading-[1.65] text-[#4c5b72]/90 font-normal mb-4">
              {t.bodyPrimary}
            </p>
            <p className="serif text-base sm:text-lg leading-[1.65] text-[#4c5b72]/85 font-normal">
              {t.bodySecondary}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
