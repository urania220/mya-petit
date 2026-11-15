import React from 'react';

export const BestSellerHeartIcon: React.FC<{ className?: string }> = ({
  className = 'w-4 h-3.5',
}) => (
  <svg
    viewBox="0 0 32 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block align-middle shrink-0 ${className}`}
    aria-label="Best Seller"
  >
    {/* Back soft pink wing/heart layer */}
    <path
      d="M17.5 6.2C19.6 2.8 24.4 2.6 26.8 5.6C29.1 8.4 28.4 13.1 24.8 16.5C21.6 19.5 16.8 22.3 15.8 22.8C15.5 23 15.2 22.8 15.1 22.5C14.7 21.1 14.3 18.2 14.6 15.2C14.8 12.1 15.8 8.9 17.5 6.2Z"
      fill="#F4A0B6"
    />
    {/* Front vivid pink heart */}
    <path
      d="M12.2 21.6C12.2 21.6 3.5 15.9 2.2 9.9C1.2 5.4 4.4 2 8.2 2.2C10.5 2.3 12.2 3.9 12.9 5.5C13.8 3.6 15.8 2.1 18.2 2.4C21.8 2.8 24.2 6.4 22.9 10.6C21.2 16 12.2 21.6 12.2 21.6Z"
      fill="#E94E77"
    />
    {/* Subtle highlight */}
    <path
      d="M5.6 6.4C6.2 5.1 7.6 4.5 8.8 4.8"
      stroke="#FFD1DE"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export const VeganCircleIcon: React.FC<{ className?: string }> = ({
  className = 'w-[18px] h-[18px]',
}) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block align-middle shrink-0 ${className}`}
    aria-label="Vegan"
  >
    {/* Tiny leaf sprout on top */}
    <path
      d="M15.5 4.8C15.8 2.6 18.2 1.6 19.6 2.7C20.2 3.8 18.4 5.8 15.5 4.8Z"
      fill="#659B5E"
    />
    <circle cx="14" cy="15" r="10.5" fill="#659B5E" />
    <text
      x="14"
      y="17.2"
      textAnchor="middle"
      fill="#FFFFFF"
      fontSize="6.5"
      fontWeight="600"
      fontStyle="italic"
      fontFamily="Georgia, serif"
    >
      Vegan
    </text>
  </svg>
);

export const VegetarianDiamondIcon: React.FC<{ className?: string }> = ({
  className = 'w-[18px] h-[18px]',
}) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block align-middle shrink-0 ${className}`}
    aria-label="Vegetarian"
  >
    <rect
      x="14"
      y="2.2"
      width="16.6"
      height="16.6"
      rx="2.4"
      transform="rotate(45 14 2.2)"
      fill="#D7A172"
    />
    <text
      x="14"
      y="15.8"
      textAnchor="middle"
      fill="#FFFFFF"
      fontSize="4.6"
      fontWeight="600"
      fontStyle="italic"
      fontFamily="Georgia, serif"
    >
      Vegetarian
    </text>
  </svg>
);

export const BlackCatIcon: React.FC<{ className?: string }> = ({
  className = 'w-6 h-6',
}) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block shrink-0 ${className}`}
    aria-hidden="true"
  >
    {/* Left & right ears + round head tilted slightly */}
    <path
      d="M8 14L6 5L14 10.5C15.3 10.1 16.7 10 18.2 10.2L26 6L24.5 14.8C26.4 17 27 20.1 25.6 23C24 26.2 21.2 29.8 17.4 30.8C13.5 31.8 10 29.5 8.2 25.5C6.8 22.3 6.8 17.5 8 14Z"
      fill="#191719"
    />
    {/* Eyes peeking slightly */}
    <circle cx="14.5" cy="18.2" r="1.4" fill="#FFFFFF" />
    <circle cx="20.5" cy="18.8" r="1.4" fill="#FFFFFF" />
    <circle cx="14.7" cy="18.2" r="0.6" fill="#191719" />
    <circle cx="20.6" cy="18.8" r="0.6" fill="#191719" />
  </svg>
);

interface NotchedFrameBoxProps {
  variant?: 'pink' | 'teal';
  className?: string;
  children: React.ReactNode;
}

/**
 * Vintage ticket-corner notched rectangle matching Mya Petit Café's printed menu frames.
 */
export const NotchedFrameBox: React.FC<NotchedFrameBoxProps> = ({
  variant = 'pink',
  className = '',
  children,
}) => {
  const borderColor = variant === 'pink' ? '#EEB7C3' : '#6EA39E';
  const notchBorder = variant === 'pink' ? '#EEB7C3' : '#6EA39E';

  return (
    <div
      className={`relative bg-white ${className}`}
      style={{ border: `1.5px solid ${borderColor}` }}
    >
      {/* Four inward curved ticket notches covering the sharp corners */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[1.5px] -left-[1.5px] w-2.5 h-2.5 bg-white"
        style={{
          borderRight: `1.5px solid ${notchBorder}`,
          borderBottom: `1.5px solid ${notchBorder}`,
          borderBottomRightRadius: '100%',
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[1.5px] -right-[1.5px] w-2.5 h-2.5 bg-white"
        style={{
          borderLeft: `1.5px solid ${notchBorder}`,
          borderBottom: `1.5px solid ${notchBorder}`,
          borderBottomLeftRadius: '100%',
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[1.5px] -left-[1.5px] w-2.5 h-2.5 bg-white"
        style={{
          borderRight: `1.5px solid ${notchBorder}`,
          borderTop: `1.5px solid ${notchBorder}`,
          borderTopRightRadius: '100%',
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[1.5px] -right-[1.5px] w-2.5 h-2.5 bg-white"
        style={{
          borderLeft: `1.5px solid ${notchBorder}`,
          borderTop: `1.5px solid ${notchBorder}`,
          borderTopLeftRadius: '100%',
        }}
      />
      {children}
    </div>
  );
};

export const MenuSocialIconsRow: React.FC = () => (
  <div className="flex items-center justify-center gap-2 mt-2">
    {/* Instagram */}
    <a
      href="https://www.instagram.com/brunch.mya_petit_cafe/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="w-6 h-6 rounded-full bg-[#111] text-white flex items-center justify-center hover:bg-[#267F79] transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    </a>
    {/* Facebook */}
    <span
      aria-label="Facebook"
      className="w-6 h-6 rounded-full bg-[#111] text-white flex items-center justify-center"
    >
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
        <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.5l.5-3H13V9.5c0-.28.22-.5.5-.5z" />
      </svg>
    </span>
    {/* TikTok */}
    <span
      aria-label="TikTok"
      className="w-6 h-6 rounded-full bg-[#111] text-white flex items-center justify-center"
    >
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
        <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
      </svg>
    </span>
    {/* X */}
    <span
      aria-label="X"
      className="w-6 h-6 rounded-full bg-[#111] text-white flex items-center justify-center"
    >
      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    </span>
    {/* Google+ */}
    <span
      aria-label="Google+"
      className="w-6 h-6 rounded-full bg-[#111] text-white flex items-center justify-center text-[10px] font-bold tracking-tighter"
    >
      G+
    </span>
  </div>
);
