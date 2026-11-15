import React from 'react';

interface TornPaperFrameProps {
  border?: 1 | 2 | 3 | 4;
}

export const TornPaperFrame: React.FC<TornPaperFrameProps> = ({ border = 1 }) => {
  return (
    <div className="image-wrap-overlay" aria-hidden="true">
      <span className={`image-wrap-overlay-side border-image-${border} image-wrap-overlay_left`} />
      <span className={`image-wrap-overlay-side border-image-${border}-right image-wrap-overlay_right`} />
      <span className={`image-wrap-overlay-side border-image-${border}-top image-wrap-overlay_top`} />
      <span className={`image-wrap-overlay-side border-image-${border}-bottom image-wrap-overlay_bottom`} />
    </div>
  );
};
