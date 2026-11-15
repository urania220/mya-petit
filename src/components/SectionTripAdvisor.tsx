import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { content, TRIPADVISOR_URL } from '../content';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface SectionTripAdvisorProps {
  language: Language;
}

export interface VerifiedReview {
  id: string;
  author: string;
  tripTypeEn: string;
  tripTypePt: string;
  dateEn: string;
  datePt: string;
  rating: number;
  title: string;
  text: string;
}

const VERIFIED_REVIEWS: VerifiedReview[] = [
  {
    id: 'ta-1',
    author: 'DiveShark',
    tripTypeEn: 'Friends',
    tripTypePt: 'Amigos',
    dateEn: 'July 23, 2026',
    datePt: '23 de julho de 2026',
    rating: 5,
    title: 'Wonderful option for breakfast/brunch!',
    text: 'Mya is an excellent breakfast/brunch option in Funchal! I ate there several times during my visit to Madeira and was never disappointed in what I ordered. The toasts (served with salad) are very tasty and my friends enjoyed the chicken burger, mango smoothie and Mya brunch. The drinks are fantastic. They make a pink hot chocolate and a coffee drink with an espresso ice cube in the shape of a bear. Cuteness overload, but worth it for the food.',
  },
  {
    id: 'ta-2',
    author: 'Memmi P',
    tripTypeEn: 'Family',
    tripTypePt: 'Família',
    dateEn: 'September 28, 2026',
    datePt: '28 de setembro de 2026',
    rating: 5,
    title: 'Best brunch in Funchal',
    text: 'Best brunch in town! Place it self is adorable eye candy and always busy. Service is excellent and the staff is very friendly and polite. The food is amazing. Everything is fresh the flavours go together so well. You can choose if you want something healthy or sweet or both! Best place for slow holiday mornings. We loved it!',
  },
  {
    id: 'ta-3',
    author: 'kperkins38',
    tripTypeEn: 'Couples',
    tripTypePt: 'Casal',
    dateEn: 'February 9, 2025',
    datePt: '9 de fevereiro de 2025',
    rating: 5,
    title: 'Adorable Brunch Spot in Funchal - Great Food, Not a Local Gem!',
    text: 'As a tourist I love this place, but definitely not a "local" spot.\nGreat and super cute place to have brunch if you are in Funchal. The menu offers a variety of options for all tastes (including vegan and vegetarian). There are toasts, sandwiches & more! Also a great drink menu with things like hot chocolate, juices, smoothies, etc. They can also make your coffee "pink" for an up-charge (.80 euros, which was very reasonable compared to US standards - I didn\'t do this, but if you\'re into that it is cool).\nThis was my 2nd time coming here and I got the same dish both times, so I must have thought it was that good! I got the Mya toast (beet hummus, avocado, poached eggs, feta). My husband got the avocado toast with sundried tomatoes and it was super flavorful!\nInside and outside seating, but pretty small seating areas, so if it is a busier time of year I would recommend going early to make sure you get a table.\nThe portions are a good size for brunch and the coffee is delicious! I also love the immunity shot. Would definitely visit if in Madeira again.',
  },
  {
    id: 'ta-4',
    author: 'Alex',
    tripTypeEn: 'Family',
    tripTypePt: 'Família',
    dateEn: 'December 14, 2023',
    datePt: '14 de dezembro de 2023',
    rating: 5,
    title: 'Fantástico!!',
    text: 'Local muiito bonito e rosa!\nA decoração é muito fofinha e querida. Fomos recebidas muito bem e com simpatia.\nA comida é muito, muito boa. Os sumos naturais também, assim como a selecção dada no menu.\nAcessível a vegetarianos - recomendo uma visita a este local muito agradável!',
  },
  {
    id: 'ta-5',
    author: 'Elaine L',
    tripTypeEn: 'Couples',
    tripTypePt: 'Casal',
    dateEn: 'May 7, 2026',
    datePt: '7 de maio de 2026',
    rating: 5,
    title: 'Très bon dejeuner',
    text: 'Magnifiques assiettes avec beaucoup de fruits\nBel accueil\nJe recommande!',
  },
  {
    id: 'ta-6',
    author: 'annick f',
    tripTypeEn: 'Solo',
    tripTypePt: 'Sozinho',
    dateEn: 'April 8, 2025',
    datePt: '8 de abril de 2025',
    rating: 5,
    title: 'Belle expérience',
    text: "Trouvé par hasard, ambiance très girly, l'endroit est mignon. J'ai pris des œufs brouillés, servis avec des toasts et un peu de salade. Le tout était très bon. Le jus du jour était un multifruit.",
  },
  {
    id: 'ta-7',
    author: 'Mobile44724561167',
    tripTypeEn: 'Couples',
    tripTypePt: 'Casal',
    dateEn: 'March 28, 2025',
    datePt: '28 de março de 2025',
    rating: 5,
    title: 'Parfait !',
    text: "Au top ! La nourriture est géniale, grand choix.\nL'accueil adorable. Un coup de cœur pour la serveuse mais ils sont tous sympa.\nNous y avons mangé plusieurs fois.\nMerci à eux.",
  },
  {
    id: 'ta-8',
    author: 'Kirkadk',
    tripTypeEn: 'Couples',
    tripTypePt: 'Casal',
    dateEn: 'October 27, 2024',
    datePt: '27 de outubro de 2024',
    rating: 5,
    title: 'Perfect spot',
    text: "Really cute restaurant.\nThe food was really nice and staff were really friendly.\nWe had the French toast, scrambled egg and mushroom, juice of the day and Ginger shot.\nWould have come back but it's was closed on our last day (sunday).",
  },
  {
    id: 'ta-9',
    author: 'Kadi',
    tripTypeEn: 'Family',
    tripTypePt: 'Família',
    dateEn: 'September 16, 2024',
    datePt: '16 de setembro de 2024',
    rating: 5,
    title: 'Top',
    text: 'Super süße Einrichtung und sehr freundlicher Service.\nDas Frühstück war sehr lecker, man hat eine tolle Auswahl zwischen süß und salzigen Gerichten.',
  },
  {
    id: 'ta-10',
    author: 'Wubbien',
    tripTypeEn: 'Family',
    tripTypePt: 'Família',
    dateEn: 'August 14, 2024',
    datePt: '14 de agosto de 2024',
    rating: 5,
    title: 'Best!',
    text: 'Off road... from all the tourist places ...friendly staff and nice fresh food for lunch or brunch during the day! Eye for detail!',
  },
];

export const SectionTripAdvisor: React.FC<SectionTripAdvisorProps> = ({ language }) => {
  const t = content[language].reviewsSection;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [stage, setStage] = useState<'visible' | 'exiting' | 'blank' | 'entering'>('visible');
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const timerIdsRef = useRef<number[]>([]);
  const isTransitioningRef = useRef(false);

  const clearAllTimers = () => {
    timerIdsRef.current.forEach((id) => clearTimeout(id));
    timerIdsRef.current = [];
  };

  const triggerTransition = (targetIndex: number, dir: 'next' | 'prev') => {
    if (isTransitioningRef.current && targetIndex === currentIndex) return;

    clearAllTimers();
    isTransitioningRef.current = true;
    setDirection(dir);
    setCurrentIndex(targetIndex);
    setStage('exiting');

    const t1 = window.setTimeout(() => {
      setDisplayedIndex(targetIndex);
      setStage('blank');

      const t2 = window.setTimeout(() => {
        setStage('entering');

        const t3 = window.setTimeout(() => {
          setStage('visible');
          isTransitioningRef.current = false;
        }, 350);
        timerIdsRef.current.push(t3);
      }, 100);
      timerIdsRef.current.push(t2);
    }, 350);
    timerIdsRef.current.push(t1);
  };

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + VERIFIED_REVIEWS.length) % VERIFIED_REVIEWS.length;
    triggerTransition(nextIdx, 'prev');
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % VERIFIED_REVIEWS.length;
    triggerTransition(nextIdx, 'next');
  };

  const handleSelectDot = (idx: number) => {
    if (idx === currentIndex) return;
    triggerTransition(idx, idx > currentIndex ? 'next' : 'prev');
  };

  useEffect(() => {
    if (isPaused || VERIFIED_REVIEWS.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  useEffect(() => {
    return () => clearAllTimers();
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  const getCardClasses = () => {
    switch (stage) {
      case 'visible':
        return 'opacity-100 translate-x-0 transition-all duration-[350ms] ease-out pointer-events-auto';
      case 'exiting':
        return `opacity-0 ${
          direction === 'next' ? '-translate-x-12' : 'translate-x-12'
        } transition-all duration-[350ms] ease-out pointer-events-none`;
      case 'blank':
        return `opacity-0 ${
          direction === 'next' ? 'translate-x-12' : '-translate-x-12'
        } transition-none pointer-events-none`;
      case 'entering':
        return 'opacity-100 translate-x-0 transition-all duration-[350ms] ease-out pointer-events-auto';
      default:
        return 'opacity-100 translate-x-0';
    }
  };

  const activeReview = VERIFIED_REVIEWS[displayedIndex] || VERIFIED_REVIEWS[0];

  return (
    <section
      id="reviews"
      className="relative w-full max-w-[1600px] mx-auto mt-12 md:mt-16 mb-6 md:mb-8 px-4 sm:px-8 md:px-14 overflow-hidden"
    >
      {/* Background botanical illustration accent */}
      <img
        src="/decorative/bg-1.webp"
        alt=""
        className="bg-botanical top-0 right-4 hidden md:block opacity-10"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />

      {/* Single Review Carousel Container */}
      <div
        className="relative max-w-3xl mx-auto px-2 sm:px-6 md:px-14 py-4 z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Left Arrow (Desktop only) */}
        <button
          onClick={handlePrev}
          className="hidden md:block absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 p-2 text-[#4c5b72]/60 hover:text-[#4c5b72] hover:bg-[#4c5b72]/10 rounded-full transition-colors z-20 cursor-pointer"
          aria-label={language === 'pt' ? 'Avaliação anterior' : 'Previous review'}
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Navigation Right Arrow (Desktop only) */}
        <button
          onClick={handleNext}
          className="hidden md:block absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 p-2 text-[#4c5b72]/60 hover:text-[#4c5b72] hover:bg-[#4c5b72]/10 rounded-full transition-colors z-20 cursor-pointer"
          aria-label={language === 'pt' ? 'Avaliação seguinte' : 'Next review'}
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Horizontal Transition Window */}
        <div className="w-full min-h-[260px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
          <div className={`w-full flex flex-col items-center text-center px-2 sm:px-6 ${getCardClasses()}`}>
            {/* Quote Icon */}
            <Quote className="w-9 h-9 sm:w-10 sm:h-10 text-[#4c5b72]/20 mb-4" />

            {/* 5 Light Pink Small Stars (#EFA5B5) */}
            <div className="flex items-center justify-center gap-1.5 mb-4">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#EFA5B5] text-[#EFA5B5]"
                />
              ))}
            </div>

            {/* Review Title */}
            <h3 className="serif text-xl sm:text-2xl md:text-3xl text-[#4c5b72] font-medium mb-4 italic tracking-wide">
              "{activeReview.title}"
            </h3>

            {/* Original Verbatim Review Text (clamped to max 4 lines with ...) */}
            <p className="serif text-base sm:text-lg leading-relaxed text-[#4c5b72]/90 max-w-2xl mb-6 whitespace-pre-line line-clamp-4">
              {activeReview.text}
            </p>

            {/* Author, Trip Type & Date */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-[#4c5b72]/70 pt-4 w-full max-w-md justify-center">
              <span className="font-semibold text-[#4c5b72] uppercase tracking-wider">
                {activeReview.author}
              </span>
              <span className="hidden sm:inline opacity-40">·</span>
              <span>
                {language === 'pt' ? activeReview.tripTypePt : activeReview.tripTypeEn}
              </span>
              <span className="hidden sm:inline opacity-40">·</span>
              <span className="text-[#4c5b72]/50 italic">
                {language === 'pt' ? activeReview.datePt : activeReview.dateEn}
              </span>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {VERIFIED_REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectDot(idx)}
              className={`h-2 transition-all duration-500 rounded-full cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 bg-[#EFA5B5]'
                  : 'w-2 bg-[#4c5b72]/30 hover:bg-[#EFA5B5]/60'
              }`}
              aria-label={
                language === 'pt' ? `Ir para a avaliação ${idx + 1}` : `Go to review ${idx + 1}`
              }
            />
          ))}
        </div>
      </div>

      {/* Outlined TripAdvisor External Link CTA */}
      <div className="mt-8 px-2 md:px-0 text-center relative z-10">
        <a
          href={TRIPADVISOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-flip w-fit"
        >
          <span className="btn-flip__wrap">
            <span>{t.cta}</span>
            <span>{t.cta}</span>
          </span>
        </a>
      </div>
    </section>
  );
};
