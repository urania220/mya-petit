import React from 'react';
import { Language } from '../types';
import { content } from '../content';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;

  const p = content[language].privacyModal;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div
        className="fixed inset-0 bg-[#4c5b72]/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#FFF8F2] w-full max-w-lg p-6 sm:p-10 shadow-2xl border border-[#4c5b72]/20 z-10 my-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#4c5b72] hover:text-[#111] transition-colors cursor-pointer"
          aria-label={p.close}
        >
          <X className="w-5 h-5" />
        </button>

        <h2
          id="privacy-modal-title"
          className="serif text-2xl sm:text-3xl text-[#4c5b72] font-normal uppercase tracking-[0.04em] mb-4 pr-8"
        >
          {p.title}
        </h2>

        <div className="space-y-4 serif text-sm sm:text-base leading-relaxed text-[#4c5b72]/90">
          {p.paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="btn btn-flip"
          >
            <span className="btn-flip__wrap">
              <span>{p.close}</span>
              <span>{p.close}</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
