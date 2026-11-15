import React from 'react';
import { Language } from '../types';
import { content, GOOGLE_MAPS_DIRECTIONS_URL } from '../content';
import { MapPin, Clock, ExternalLink, Phone } from 'lucide-react';
import { TornPaperFrame } from './TornPaperFrame';

interface SectionVisitProps {
  language: Language;
}

export const SectionVisit: React.FC<SectionVisitProps> = ({ language }) => {
  const t = content[language].visitSection;

  return (
    <section
      id="visit"
      className="relative w-full max-w-[1600px] mx-auto mt-6 md:mt-8 mb-6 md:mb-8 px-6 sm:px-10 md:px-16 lg:px-20"
    >
      <div className="bg-[#FFF8F2] p-6 sm:p-10 md:p-14 relative overflow-hidden">
        
        {/* Botanical watermark */}
        <img
          src="/decorative/bg-3.webp"
          alt=""
          className="absolute -right-10 -bottom-10 w-72 h-72 opacity-5 pointer-events-none"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Left Column: Info & Details (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#4c5b72]/65 font-medium block mb-3">
              {t.eyebrow}
            </span>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl leading-tight text-[#4c5b72] font-normal mb-6 uppercase tracking-[0.04em]">
              {t.title}
            </h2>

            {/* Practical Info List */}
            <div className="flex flex-col gap-6 pt-2 mb-10 text-left">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4c5b72] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#4c5b72] mb-1">
                    {t.addressTitle}
                  </h4>
                  <p className="serif text-base font-medium text-[#4c5b72]">
                    {t.placeName}
                  </p>
                  <p className="serif text-base text-[#4c5b72]/85">
                    {t.addressVal}
                  </p>
                  <p className="serif text-base text-[#4c5b72]/85">
                    {t.addressPostal}
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#4c5b72] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#4c5b72] mb-1">
                    {t.phoneTitle}
                  </h4>
                  <a
                    href="tel:+351291634523"
                    className="serif text-base text-[#4c5b72]/85 hover:text-[#267F79] transition-colors block"
                  >
                    {t.phoneVal}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#4c5b72] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#4c5b72] mb-1">
                    {t.hoursTitle}
                  </h4>
                  <p className="serif text-sm sm:text-base text-[#4c5b72]/85">
                    {t.hoursMonSat}
                  </p>
                  <p className="serif text-sm sm:text-base text-[#4c5b72]/85">
                    {t.hoursSun}
                  </p>
                </div>
              </div>
            </div>

            {/* Real Action Buttons: 2-column grid on mobile, flex row on desktop */}
            <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:items-center md:gap-4">
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-flip w-full md:w-auto !px-1.5 sm:!px-4 md:!px-9 !text-[8.5px] min-[390px]:!text-[9.5px] sm:!text-[11px] !tracking-[0.03em] min-[390px]:!tracking-[0.06em] md:!tracking-[0.15em] text-center"
              >
                <span className="btn-flip__wrap">
                  <span>{t.getDirections}</span>
                  <span>{t.getDirections}</span>
                </span>
              </a>

              <a
                href="tel:+351291634523"
                className="btn btn-flip w-full md:w-auto !px-1.5 sm:!px-4 md:!px-9 !text-[8.5px] min-[390px]:!text-[9.5px] sm:!text-[11px] !tracking-[0.03em] min-[390px]:!tracking-[0.06em] md:!tracking-[0.15em] text-center"
              >
                <span className="btn-flip__wrap">
                  <span>{t.callToReserve}</span>
                  <span>{t.callToReserve}</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Torn Paper Edge Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] md:aspect-[4/5] w-full bg-[#FFF8F2] overflow-hidden">
              <TornPaperFrame border={1} />
              <iframe
                title={
                  language === 'pt'
                    ? 'Mapa de localização do Mya Petit Café no Funchal'
                    : 'Mya Petit Café Location Map in Funchal'
                }
                src="https://maps.google.com/maps?q=Rua+das+Hortas+15,+Funchal&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Clean Location Badge without unverified ratings */}
              <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                <div className="bg-[#FFF8F2]/95 backdrop-blur-xs p-2.5 border border-[#4c5b72]/20 flex items-center justify-between gap-2 pointer-events-auto">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-[#E84C55]/15 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#E84C55]" />
                    </div>
                    <div className="min-w-0">
                      <div className="serif text-xs font-semibold text-[#4c5b72] truncate">
                        Mya Petit Café
                      </div>
                      <div className="text-[10px] text-[#4c5b72]/70 truncate">
                        Rua das Hortas n.º 15, Funchal
                      </div>
                    </div>
                  </div>
                  <a
                    href={GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-[#4c5b72] text-white hover:bg-[#374355] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{t.viewOnMaps}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
