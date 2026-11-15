import React from 'react';
import { Language } from '../types';
import { content } from '../content';
import { TornPaperFrame } from './TornPaperFrame';

interface SectionGatheringsProps {
  language: Language;
  onVisitClick: () => void;
}

export const SectionGatherings: React.FC<SectionGatheringsProps> = ({
  language,
  onVisitClick,
}) => {
  const t = content[language].section3;

  return (
    <section className="relative w-full max-w-[1600px] mx-auto my-12 md:my-28 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden">
      
      {/* Background botanical accents */}
      <img
        src="/decorative/bg-3.webp"
        alt=""
        className="bg-botanical top-4 right-10 hidden md:block opacity-10"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
        
        {/* Left Column (50%): Romantic Interior / Counter Image with Torn Paper Borders */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/5] sm:aspect-[3/4] bg-[#FFF8F2] overflow-hidden">
            <TornPaperFrame border={1} />
            <img
              src="/mya-assets/07_interior_pink_mint_counter.webp"
              alt={t.photoAlt}
              className="w-full h-full object-cover select-none"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Right Column (50%): Centered Editorial Block */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="max-w-[440px] text-center md:text-left">
            <h2 className="serif text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] leading-[1.18] text-[#4c5b72] font-normal mb-5 uppercase tracking-[0.04em]">
              {t.title}
            </h2>
            <p className="serif text-base sm:text-lg leading-[1.65] text-[#4c5b72]/85 font-normal mb-8">
              {t.body}
            </p>
            <div>
              <button
                onClick={onVisitClick}
                className="btn btn-flip"
                aria-label={t.cta}
              >
                <span className="btn-flip__wrap">
                  <span>{t.cta}</span>
                  <span>{t.cta}</span>
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
