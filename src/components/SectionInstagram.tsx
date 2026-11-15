import React, { useRef, useState, useEffect } from 'react';
import { Language } from '../types';
import { content, INSTAGRAM_URL } from '../content';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

interface SectionInstagramProps {
  language: Language;
}

export const SectionInstagram: React.FC<SectionInstagramProps> = ({ language }) => {
  const t = content[language].instagramSection;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const instagramPhotos = [
    {
      id: 'photo-new-poached-eggs',
      image: '/mya-assets/ig-poached-eggs.webp',
      alt: t.photosAlt.poachedEggs,
    },
    {
      id: 'photo-1',
      image: '/mya-assets/02_hero_strawberry_pancakes.webp',
      alt: t.photosAlt.pancakes,
    },
    {
      id: 'photo-2',
      image: '/mya-assets/06_interior_wide_butterfly.webp',
      alt: t.photosAlt.interiorButterfly,
    },
    {
      id: 'photo-3',
      image: '/mya-assets/04_food_savory_pancakes.webp',
      alt: t.photosAlt.savoryBrunch,
    },
    {
      id: 'photo-4',
      image: '/mya-assets/07_interior_pink_mint_counter.webp',
      alt: t.photosAlt.counter,
    },
    {
      id: 'photo-5',
      image: '/mya-assets/03_food_wraps.webp',
      alt: t.photosAlt.wraps,
    },
    {
      id: 'photo-6',
      image: '/mya-assets/08_exterior_terrace.webp',
      alt: t.photosAlt.terrace,
    },
    {
      id: 'photo-7',
      image: '/mya-assets/05_interior_pink_blossom.webp',
      alt: t.photosAlt.blossom,
    },
    {
      id: 'photo-8',
      image: '/mya-assets/11_mint_door_detail.webp',
      alt: t.photosAlt.mintDoor,
    },
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 320;
      const scrollAmount = direction === 'left' ? -(cardWidth + 16) : cardWidth + 16;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 350);
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 320;

        if (scrollLeft >= scrollWidth - clientWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
        }
        setTimeout(checkScroll, 350);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <section
      className="relative w-full my-6 md:my-8 overflow-hidden bg-[#FFF8F2] py-8 md:py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Header */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 text-center mb-6 md:mb-8">
        <div className="inline-flex items-center gap-2 mb-2">
          <Instagram className="w-4 h-4 text-[#4c5b72]" />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.2em] uppercase text-[#4c5b72]/75 hover:text-[#4c5b72] font-medium transition-colors"
          >
            @brunch.mya_petit_cafe
          </a>
        </div>

        <h2 className="serif text-3xl sm:text-4xl md:text-5xl leading-tight text-[#4c5b72] font-normal uppercase tracking-[0.04em]">
          {t.title}
        </h2>
      </div>

      {/* Carousel Wrapper with Left & Right Arrow Controls */}
      <div className="relative w-full max-w-[1700px] mx-auto px-8 sm:px-14">
        
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 bg-[#FFF8F2]/90 border border-[#4c5b72]/30 flex items-center justify-center text-[#4c5b72] transition-all duration-200 ${
            canScrollLeft
              ? 'hover:bg-[#4c5b72] hover:text-white cursor-pointer opacity-100'
              : 'opacity-25 cursor-not-allowed pointer-events-none'
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 bg-[#FFF8F2]/90 border border-[#4c5b72]/30 flex items-center justify-center text-[#4c5b72] transition-all duration-200 ${
            canScrollRight
              ? 'hover:bg-[#4c5b72] hover:text-white cursor-pointer opacity-100'
              : 'opacity-25 cursor-not-allowed pointer-events-none'
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Horizontal Scrolling Carousel Track (5 photos per row on desktop) */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {instagramPhotos.map((photo) => (
            <div
              key={photo.id}
              className="w-[46%] sm:w-[calc((100%-32px)/3)] md:w-[calc((100%-64px)/5)] aspect-square shrink-0 snap-start bg-[#FFF8F2] overflow-hidden"
            >
              <img
                src={photo.image}
                alt={photo.alt}
                className="w-full h-full object-cover select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Outlined CTA Button */}
      <div className="mt-6 md:mt-8 text-center">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-flip"
        >
          <span className="btn-flip__wrap flex items-center gap-2">
            <span>{t.cta}</span>
            <span>{t.cta}</span>
          </span>
        </a>
      </div>

    </section>
  );
};
