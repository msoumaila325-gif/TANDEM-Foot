import React from 'react';
import { logoImg } from '../image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  lightText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  lightText = true,
  className = ''
}) => {
  const sizeDimensions = {
    sm: { img: 'w-10 h-10', font: 'text-base', subFont: 'text-[9px]' },
    md: { img: 'w-12 h-12', font: 'text-xl', subFont: 'text-[10px]' },
    lg: { img: 'w-16 h-16', font: 'text-2xl', subFont: 'text-xs' },
    xl: { img: 'w-24 h-24', font: 'text-4xl', subFont: 'text-sm' },
  };

  const dim = sizeDimensions[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official TANDEM FOOTBALL CLUB Logo Image */}
      <div className={`relative ${dim.img} flex-shrink-0 group cursor-pointer`}>
        <img
          src={logoImg}
          alt="Tandem Football Club Logo"
          className="w-full h-full object-contain rounded-xl drop-shadow-md group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Brand Name Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-bold tracking-tight font-heading leading-none ${
                lightText ? 'text-white' : 'text-[#153E75]'
              } ${dim.font}`}
            >
              TANDEM
            </span>
            <span className={`font-bold tracking-tight font-heading leading-none text-[#2563EB] text-opacity-95 ${dim.font}`}>
              FOOTBALL
            </span>
          </div>
          <div className="flex items-center justify-between gap-1 mt-0.5">
            <span
              className={`font-semibold tracking-[0.22em] uppercase ${dim.subFont} ${
                lightText ? 'text-[#DCEBFF]/90' : 'text-[#1E4E92]'
              }`}
            >
              CLUB • BAMAKO
            </span>
          </div>
        </div>
      )}
    </div>
  );
};


