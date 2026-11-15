import React from 'react';
import { Language } from '../types';
import { printedMenuData, PrintedDishItem } from '../data/printedMenuContent';
import {
  BestSellerHeartIcon,
  VeganCircleIcon,
  VegetarianDiamondIcon,
  BlackCatIcon,
  NotchedFrameBox,
} from './MenuIcons';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const UBER_EATS_STORE_URL =
  'https://www.ubereats.com/pt-en/store/mya-petit-cafe/OyW8DAQfX--zE7WPuH_XYQ?srsltid=AYCX9vKiAxNaiYi3ydO5xrZRiELINm-B1vyxl5adVsK4GcP11vOhaqVI';

interface MenuPageProps {
  language: Language;
  onToggleLanguage?: () => void;
  onBackToHome: () => void;
}

const DishEntry: React.FC<{ item: PrintedDishItem }> = ({ item }) => (
  <div className="mb-3.5 last:mb-0">
    <div className="flex flex-wrap items-center gap-1.5 leading-snug">
      <span className="text-[14px] sm:text-[15px] font-extrabold tracking-[0.01em] text-[#1A7F78] uppercase">
        {item.name}
      </span>
      {item.note && (
        <span className="text-[12.5px] font-medium text-[#1A7F78]">
          {item.note}
        </span>
      )}
      {item.isVegan && <VeganCircleIcon className="w-[18px] h-[18px]" />}
      {item.isVeg && <VegetarianDiamondIcon className="w-[18px] h-[18px]" />}
      {item.isBestSeller && <BestSellerHeartIcon className="w-5 h-4" />}
    </div>
    {item.description && (
      <p className="text-[12.5px] sm:text-[13px] leading-[1.35] text-[#222222] font-normal whitespace-pre-line mt-0.5">
        {item.description}
      </p>
    )}
  </div>
);

const PinkSectionTitle: React.FC<{
  title: string;
  subtitle?: string;
  className?: string;
}> = ({ title, subtitle, className = '' }) => (
  <div className={`text-center mb-3.5 ${className}`}>
    <h2 className="menu-section-heading text-[21px] sm:text-[24px] font-semibold tracking-[0.04em] text-[#EFA5B5] uppercase leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-[10.5px] sm:text-[11px] text-[#222222] font-normal leading-tight mt-0.5">
        {subtitle}
      </p>
    )}
  </div>
);

const PhotoCardPink: React.FC<{
  src: string;
  label: string;
  alt: string;
}> = ({ src, label, alt }) => (
  <div className="bg-[#F4B4C2] p-2 pb-1.5 flex flex-col justify-between h-full">
    <div className="w-full aspect-[3/2] overflow-hidden bg-[#FFF8F2]">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover select-none"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="flex items-center justify-center gap-1 pt-1.5 pb-0.5">
      <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#1A7F78] tracking-[0.02em] uppercase">
        {label}
      </span>
      <BestSellerHeartIcon className="w-4 h-3.5" />
    </div>
  </div>
);

export const MenuPage: React.FC<MenuPageProps> = ({
  language,
  onBackToHome,
}) => {
  const m = printedMenuData[language];

  return (
    <div className="min-h-screen bg-[#F5ECE8]/70 text-[#222222] pt-[58px] md:pt-[68px] relative">
      {/* Subtle site-consistent navigation bar */}
      <div className="sticky top-[58px] md:top-[68px] z-30 bg-[#FFF8F2]/95 backdrop-blur-sm border-b border-[#4c5b72]/15">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          {/* Back to Homepage */}
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-medium text-[#4c5b72] hover:text-[#111] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{language === 'pt' ? 'Voltar ao Início' : 'Back to Home'}</span>
          </button>

          {/* Right Quick Action: Uber Eats */}
          <a
            href={UBER_EATS_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1A7F78] hover:text-[#111] transition-colors"
          >
            <span>Uber Eats</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Replicated Paper Sheets Container */}
      <div className="max-w-[980px] mx-auto px-3 sm:px-6 py-8 md:py-12 flex flex-col gap-10 md:gap-14">
        
        {/* ============================================================ */}
        {/* SHEET 1: MYA LOGO, TO START, TOASTS, BRUNCH COMBOS, BURGERS, WRAPS */}
        {/* ============================================================ */}
        <article
          aria-label={language === 'pt' ? 'Menu Página 1' : 'Menu Page 1'}
          className="menu-sheet bg-white shadow-[0_10px_35px_rgba(76,91,114,0.09)] px-6 sm:px-10 md:px-14 pt-6 pb-8 border border-[#e9e3dc]"
        >
            {/* Top 2-Column Section: Logo + To Start (Left) | Toasts (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              
              {/* Left Column: Mya Logo + To Start + Extras */}
              <div>
                {/* Handwritten Official Brand Logo */}
                <div className="flex justify-center mb-2">
                  <img
                    src="/mya-assets/mya_logo_transparent.webp"
                    alt="Mya Petit Café"
                    className="h-24 sm:h-28 md:h-32 w-auto object-contain select-none"
                    decoding="async"
                  />
                </div>

                <PinkSectionTitle title={m.toStartTitle} className="mb-4" />

                <div className="mb-5">
                  {m.toStartItems.map((item) => (
                    <DishEntry key={item.name} item={item} />
                  ))}
                </div>

                {/* EXTRAS underlined sub-section */}
                <div className="mt-4">
                  <h3 className="text-[13px] font-bold uppercase text-[#1A7F78] underline underline-offset-2 mb-1">
                    {m.toStartExtrasTitle}
                  </h3>
                  <ul className="text-[12.5px] sm:text-[13px] text-[#222222] leading-[1.4]">
                    {m.toStartExtras.map((extra) => (
                      <li key={extra}>{extra}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Toasts */}
              <div className="md:pt-4">
                <PinkSectionTitle title={m.toastsTitle} subtitle={m.toastsSubtitle} />
                <div>
                  {m.toastsItems.map((item) => (
                    <DishEntry key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Row 1: POWER BRUNCH | GOOD MORNING */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-6">
              {/* POWER BRUNCH Box */}
              <NotchedFrameBox variant="pink" className="px-4 py-3.5 text-center flex flex-col justify-center">
                <h3 className="text-[17px] sm:text-[19px] font-extrabold text-[#1A7F78] uppercase tracking-[0.02em] mb-1">
                  {m.powerBrunchTitle}
                </h3>
                <p className="text-[12px] sm:text-[12.5px] text-[#222222] leading-[1.35]">
                  {m.powerBrunchLines.topDesc}
                </p>
                <p className="text-[13px] sm:text-[14px] font-semibold text-[#191719] uppercase tracking-[0.02em] mt-1">
                  {m.powerBrunchLines.pancakesLabel}
                </p>
                <p className="text-[12px] sm:text-[12.5px] text-[#222222] leading-[1.3]">
                  {m.powerBrunchLines.pancakesSub}
                </p>
                <p className="text-[13px] sm:text-[14px] font-semibold text-[#191719] uppercase tracking-[0.02em] mt-1">
                  {m.powerBrunchLines.shotLabel}
                </p>
                <p className="text-[13px] sm:text-[14px] font-semibold text-[#191719] uppercase tracking-[0.02em] mt-1">
                  {m.powerBrunchLines.drinksLabel}
                </p>
              </NotchedFrameBox>

              {/* GOOD MORNING Box */}
              <NotchedFrameBox variant="pink" className="px-4 py-3.5 text-center flex flex-col justify-center">
                <h3 className="text-[17px] sm:text-[19px] font-extrabold text-[#1A7F78] uppercase tracking-[0.02em] mb-1">
                  {m.goodMorningTitle}
                </h3>
                <p className="text-[12px] sm:text-[12.5px] text-[#222222] leading-[1.3]">
                  {m.goodMorningLines.mainDesc}
                </p>
                <p className="text-[12.5px] font-extrabold text-[#1A7F78] uppercase my-0.5">
                  {m.goodMorningLines.orLabel}
                </p>
                <div className="flex items-start justify-center gap-1.5">
                  <span className="inline-flex items-center gap-0.5 shrink-0 mt-0.5">
                    <VeganCircleIcon className="w-[16px] h-[16px]" />
                    <VegetarianDiamondIcon className="w-[16px] h-[16px]" />
                  </span>
                  <p className="text-[11.5px] sm:text-[12px] text-[#222222] leading-[1.3] text-left sm:text-center">
                    {m.goodMorningLines.veganDesc}
                  </p>
                </div>
                <p className="text-[13px] sm:text-[14px] font-semibold text-[#191719] uppercase tracking-[0.02em] mt-1.5">
                  {m.goodMorningLines.drinksLabel}
                </p>
              </NotchedFrameBox>
            </div>

            {/* Middle Row 2: Siri Photo | MYA BRUNCH Box | Mya Photo */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 mt-4 items-stretch">
              <div className="md:col-span-3">
                <PhotoCardPink
                  src="/mya-assets/menu-crops/siri.webp"
                  label={m.siriCardLabel}
                  alt={language === 'pt' ? 'Tosta Siri com salmão fumado' : 'Siri Smoked Salmon Toast'}
                />
              </div>

              <div className="md:col-span-6">
                <NotchedFrameBox
                  variant="pink"
                  className="px-4 py-3 text-center h-full flex flex-col justify-center"
                >
                  <h3 className="text-[17px] sm:text-[19px] font-extrabold text-[#1A7F78] uppercase tracking-[0.02em] mb-0.5">
                    {m.myaBrunchTitle}
                  </h3>
                  <p className="text-[12.5px] text-[#191719] font-medium">
                    {m.myaBrunchLines.eggsLabel}
                  </p>
                  <p className="text-[12px] text-[#222222]">
                    {m.myaBrunchLines.eggsSub}
                  </p>
                  <p className="text-[13px] font-semibold text-[#191719] uppercase mt-1">
                    {m.myaBrunchLines.pancakesLabel}
                  </p>
                  <p className="text-[12px] text-[#222222]">
                    {m.myaBrunchLines.pancakesSub}
                  </p>
                  <p className="text-[13px] sm:text-[14px] font-semibold text-[#191719] uppercase mt-1">
                    {m.myaBrunchLines.drinksLabel}
                  </p>
                </NotchedFrameBox>
              </div>

              <div className="md:col-span-3">
                <PhotoCardPink
                  src="/mya-assets/menu-crops/mya.webp"
                  label={m.myaCardLabel}
                  alt={language === 'pt' ? 'Tosta Mya com húmus de beterraba' : 'Mya Beet Hummus Toast'}
                />
              </div>
            </div>

            {/* Bottom 2-Column Section: HAMBURGUERS (Left) | WRAPS (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-7 items-start">
              {/* Left: Hamburguers */}
              <div>
                <PinkSectionTitle
                  title={m.hamburguersTitle}
                  subtitle={m.hamburguersSubtitle}
                />
                <div>
                  {m.hamburguersItems.map((item) => (
                    <DishEntry key={item.name} item={item} />
                  ))}
                </div>
                <p className="text-right text-[11px] font-semibold text-[#1A7F78] mt-1">
                  {m.hamburguersFootnote}
                </p>
              </div>

              {/* Right: Wraps */}
              <div>
                <PinkSectionTitle
                  title={m.wrapsTitle}
                  subtitle={m.wrapsSubtitle}
                />
                <div>
                  {m.wrapsItems.map((item) => (
                    <DishEntry key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </div>

          </article>

        {/* ============================================================ */}
        {/* SHEET 2: BOWLS, SWEETS, PANCAKES, MY WAY, LEGEND & ALLERGENS */}
        {/* ============================================================ */}
        <article
          aria-label={language === 'pt' ? 'Menu Página 2' : 'Menu Page 2'}
          className="menu-sheet bg-white shadow-[0_10px_35px_rgba(76,91,114,0.09)] px-6 sm:px-10 md:px-14 pt-8 pb-8 border border-[#e9e3dc]"
        >
            {/* Top 2-Column Section: BOWLS (Left) | SWEETS / DOCES (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              
              {/* Left Column: BOWLS */}
              <div>
                <PinkSectionTitle title={m.bowlsTitle} subtitle={m.bowlsSubtitle} />

                <div className="mb-4">
                  {m.bowlsItems.map((item) => (
                    <DishEntry key={item.name} item={item} />
                  ))}
                </div>

                {/* *EXTRAS */}
                <div className="mt-4 mb-4">
                  <h3 className="text-[13px] font-bold uppercase text-[#1A7F78] underline underline-offset-2 mb-1">
                    {m.bowlsExtrasTitle}
                  </h3>
                  <ul className="text-[12.5px] sm:text-[13px] text-[#222222] leading-[1.4]">
                    {m.bowlsExtras.map((extra) => (
                      <li key={extra}>{extra}</li>
                    ))}
                  </ul>
                </div>

                {/* CHOOSE YOUR SAUCE / MOLHOS À ESCOLHA Box */}
                <NotchedFrameBox variant="teal" className="px-4 py-2.5 text-center">
                  <h3 className="menu-section-heading text-[14px] sm:text-[15px] font-semibold tracking-[0.03em] text-[#EFA5B5] uppercase">
                    {m.chooseSauceTitle}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#222222] mt-0.5">
                    {m.chooseSauceOptions}
                  </p>
                </NotchedFrameBox>
              </div>

              {/* Right Column: SWEETS / DOCES */}
              <div>
                <PinkSectionTitle title={m.sweetsTitle} className="mb-2" />

                {/* Black Cat icon + Teal Subheader */}
                <div className="flex items-start gap-1.5 mb-3">
                  <BlackCatIcon className="w-7 h-7 -ml-1 -mt-0.5" />
                  <h3 className="text-[13.5px] sm:text-[14px] font-extrabold uppercase text-[#1A7F78] leading-[1.2] whitespace-pre-line">
                    {m.sweetsShowcaseHeading}
                  </h3>
                </div>

                {/* Sweets items */}
                <div className="mb-3">
                  {m.sweetsItems.map((item) => (
                    <DishEntry key={item.name} item={item} />
                  ))}
                </div>

                {/* Footnotes */}
                <div className="text-[11.5px] sm:text-[12px] text-[#222222] leading-[1.35] mb-4">
                  {m.sweetsFootnotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>

                {/* 2 Photo Cards: CHICKEN BOWL | TOFFEE */}
                <div className="grid grid-cols-2 gap-3.5">
                  <PhotoCardPink
                    src="/mya-assets/menu-crops/chicken-bowl.webp"
                    label={m.bowlCardLabel}
                    alt={language === 'pt' ? 'Bowl de Frango' : 'Chicken Bowl'}
                  />
                  <PhotoCardPink
                    src="/mya-assets/menu-crops/toffee.webp"
                    label={m.toffeeCardLabel}
                    alt={language === 'pt' ? 'Panquecas Toffee' : 'Toffee Pancakes'}
                  />
                </div>
              </div>
            </div>

            {/* Middle/Lower Section: PANCAKES / PANQUECAS */}
            <div className="mt-7">
              <PinkSectionTitle
                title={m.pancakesTitle}
                subtitle={m.pancakesSubtitle}
                className="mb-4"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
                {/* Left Column: 5 Pancakes */}
                <div>
                  {m.pancakesItems.map((item) => (
                    <DishEntry key={item.name} item={item} />
                  ))}
                </div>

                {/* Right Column: MY WAY ! Pink Notched Box */}
                <NotchedFrameBox variant="pink" className="px-5 py-4">
                  <div className="text-center mb-3">
                    <h3 className="text-[14px] sm:text-[15px] font-extrabold text-[#1A7F78] uppercase tracking-[0.03em]">
                      {m.myWayTitle}
                    </h3>
                    <p className="text-[11px] text-[#222222] mt-0.5">
                      {m.myWaySubtitle}
                    </p>
                  </div>

                  <div className="text-[12px] sm:text-[12.5px] text-[#222222] leading-[1.4]">
                    <p className="mb-1.5">{m.myWayBaseLine}</p>
                    <p className="mb-1.5">{m.myWayChooseLine}</p>
                    <ul className="space-y-1.5">
                      {m.myWayBullets.map((line) => (
                        <li key={line} className="flex items-start gap-1.5">
                          <span className="text-[#222222] leading-[1.3] select-none">•</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NotchedFrameBox>
              </div>
            </div>

            {/* Bottom Two Boxes: Legend Box (Left) | Allergens Box (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-6 items-stretch">
              {/* Legend Box */}
              <NotchedFrameBox
                variant="teal"
                className="px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <VeganCircleIcon className="w-[22px] h-[22px]" />
                    <span className="text-[10px] font-semibold text-[#222222] uppercase tracking-[0.01em]">
                      {m.legendVegan}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <VegetarianDiamondIcon className="w-[22px] h-[22px]" />
                    <span className="text-[10px] font-semibold text-[#222222] uppercase tracking-[0.01em]">
                      {m.legendVeg}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:pr-4">
                  <BestSellerHeartIcon className="w-6 h-5" />
                  <span className="text-[10px] font-semibold text-[#222222] uppercase tracking-[0.01em]">
                    {m.legendBestSeller}
                  </span>
                </div>
              </NotchedFrameBox>

              {/* Allergens Box */}
              <NotchedFrameBox
                variant="teal"
                className="px-4 py-3 text-center flex flex-col justify-center"
              >
                <p className="text-[11px] sm:text-[11.5px] font-semibold text-[#222222] uppercase leading-snug">
                  {m.allergensTitle}
                </p>
                <p className="text-[11px] sm:text-[11.5px] text-[#222222] leading-snug mt-0.5">
                  {m.allergensSubtitle}
                </p>
              </NotchedFrameBox>
            </div>

          </article>

        {/* Bottom Site Callout Bar (Consistent with homepage CTA style) */}
        <div className="bg-[#FFF8F2] border border-[#4c5b72]/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="serif text-xl sm:text-2xl text-[#4c5b72] uppercase tracking-[0.03em]">
              {language === 'pt'
                ? 'Pronto para saborear no Mya Petit Café?'
                : 'Ready to taste Mya Petit Café?'}
            </h3>
            <p className="serif text-sm text-[#4c5b72]/75 mt-1">
              {language === 'pt'
                ? 'Visite-nos na Rua das Hortas n.º 15 ou faça o seu pedido no Uber Eats.'
                : 'Visit us at Rua das Hortas n.º 15, Funchal or order delivery via Uber Eats.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={UBER_EATS_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-flip"
            >
              <span className="btn-flip__wrap">
                <span>{language === 'pt' ? 'PEDIR NO UBER EATS' : 'ORDER ON UBER EATS'}</span>
                <span>{language === 'pt' ? 'PEDIR NO UBER EATS' : 'ORDER ON UBER EATS'}</span>
              </span>
            </a>

            <a
              href="tel:+351291634523"
              className="btn btn-flip"
            >
              <span className="btn-flip__wrap">
                <span>{language === 'pt' ? 'LIGAR PARA RESERVAR' : 'CALL TO RESERVE'}</span>
                <span>{language === 'pt' ? 'LIGAR PARA RESERVAR' : 'CALL TO RESERVE'}</span>
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
