import React from 'react';

interface CtaButtonsProps {
  isLight?: boolean;
}

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export const CtaButtons: React.FC<CtaButtonsProps> = ({ isLight = false }) => {
  const primaryButtonClass = isLight
    ? 'bg-brand-cream text-brand-charcoal hover:bg-opacity-90'
    : 'bg-brand-gold text-white hover:bg-opacity-90';
  
  const secondaryButtonClass = isLight
    ? 'border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-charcoal'
    : 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white';

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full">
      <a href="#" className={`flex items-center justify-center w-full sm:w-auto px-8 py-3 text-sm font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${primaryButtonClass}`}>
        <PhoneIcon />
        APPEL DÉCOUVERTE
      </a>
      <a href="#" className={`w-full sm:w-auto px-8 py-3 text-sm font-semibold border-2 rounded-full transition-colors duration-300 text-center ${secondaryButtonClass}`}>
        CONSULTATION SUR PLACE
      </a>
    </div>
  );
};