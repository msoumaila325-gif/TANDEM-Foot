import React from 'react';

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
    sm: { box: 'w-10 h-12', font: 'text-base', subFont: 'text-[9px]' },
    md: { box: 'w-14 h-16', font: 'text-xl', subFont: 'text-[10px]' },
    lg: { box: 'w-18 h-20', font: 'text-2xl', subFont: 'text-xs' },
    xl: { box: 'w-28 h-32', font: 'text-4xl', subFont: 'text-sm' },
  };

  const dim = sizeDimensions[size];
  const uniqueId = React.useId().replace(/:/g, '_');

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Official TANDEM FOOTBALL CLUB Shield Logo */}
      <div className={`relative ${dim.box} flex-shrink-0 group cursor-pointer`}>
        <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-md group-hover:bg-blue-400/30 transition-all duration-300" />
        
        <svg
          viewBox="0 0 200 230"
          className="w-full h-full relative z-10 drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Top Arc Path for TANDEM */}
            <path
              id={`topArc_${uniqueId}`}
              d="M 32,68 A 78,78 0 0,1 168,68"
            />
            {/* Bottom Arc Path for FOOTBALL CLUB */}
            <path
              id={`bottomArc_${uniqueId}`}
              d="M 32,168 A 82,82 0 0,0 168,168"
            />

            {/* Diagonal Stripes Pattern */}
            <pattern
              id={`diagStripes_${uniqueId}`}
              width="24"
              height="24"
              patternTransform="rotate(45 0 0)"
              patternUnits="userSpaceOnUse"
            >
              <line x1="0" y1="0" x2="0" y2="24" stroke="#E6F0FF" strokeWidth="12" />
              <line x1="12" y1="0" x2="12" y2="24" stroke="#C4DCFF" strokeWidth="12" />
            </pattern>
          </defs>

          {/* Outer Shield Background / Border */}
          <path
            d="M 100,6 L 186,26 C 186,146 144,198 100,224 C 56,198 14,146 14,26 Z"
            fill="#0F3875"
          />

          {/* White Outer Outline */}
          <path
            d="M 100,10 L 180,28 C 180,142 140,192 100,218 C 60,192 20,142 20,28 Z"
            fill="#FFFFFF"
          />

          {/* Inner Light Shield with Diagonal Stripes */}
          <path
            d="M 100,16 L 174,33 C 174,136 136,184 100,208 C 64,184 26,136 26,33 Z"
            fill={`url(#diagStripes_${uniqueId})`}
          />

          {/* Top Arched Text: TANDEM */}
          <text className="font-heading font-black">
            <textPath
              href={`#topArc_${uniqueId}`}
              startOffset="50%"
              textAnchor="middle"
              fill="#0F3875"
              fontSize="26"
              fontWeight="900"
              letterSpacing="2.8"
            >
              TANDEM
            </textPath>
          </text>

          {/* Central Football Motif */}
          <g transform="translate(100, 112)">
            {/* Football Outer Circle */}
            <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#0F3875" strokeWidth="3.5" />

            {/* Central Pentagon */}
            <polygon
              points="0,-12 11,-4 7,9 -7,9 -11,-4"
              fill="#0F3875"
            />

            {/* Top Pentagonal Joint & Spoke Lines */}
            <line x1="0" y1="-12" x2="0" y2="-32" stroke="#0F3875" strokeWidth="2.5" />
            <polygon points="-8,-31 0,-32 8,-31 0,-22" fill="#0F3875" />

            {/* Top Right Joint */}
            <line x1="11" y1="-4" x2="28" y2="-15" stroke="#0F3875" strokeWidth="2.5" />
            <polygon points="28,-15 32,-4 23,4 19,-8" fill="#0F3875" />

            {/* Bottom Right Joint */}
            <line x1="7" y1="9" x2="20" y2="25" stroke="#0F3875" strokeWidth="2.5" />
            <polygon points="20,25 9,31 0,26 12,18" fill="#0F3875" />

            {/* Bottom Left Joint */}
            <line x1="-7" y1="9" x2="-20" y2="25" stroke="#0F3875" strokeWidth="2.5" />
            <polygon points="-20,25 -9,31 0,26 -12,18" fill="#0F3875" />

            {/* Top Left Joint */}
            <line x1="-11" y1="-4" x2="-28" y2="-15" stroke="#0F3875" strokeWidth="2.5" />
            <polygon points="-28,-15 -32,-4 -23,4 -19,-8" fill="#0F3875" />
          </g>

          {/* Left Laurel Branch Wreath */}
          <g fill="#0F3875">
            <path d="M 62,148 C 46,128 46,95 62,75" stroke="#0F3875" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 61,144 C 52,141 46,146 50,152 C 55,150 59,147 61,144 Z" />
            <path d="M 55,132 C 44,128 40,135 45,141 C 51,138 54,134 55,132 Z" />
            <path d="M 51,118 C 39,114 36,121 42,127 C 48,124 50,120 51,118 Z" />
            <path d="M 50,103 C 38,98 36,106 42,111 C 48,109 49,105 50,103 Z" />
            <path d="M 52,88 C 41,82 40,90 46,95 C 51,93 52,90 52,88 Z" />
            <path d="M 58,76 C 48,68 48,76 54,80 C 58,78 58,77 58,76 Z" />
            {/* Inner facing leaf tips */}
            <path d="M 61,140 C 67,135 68,142 63,145 Z" />
            <path d="M 55,126 C 62,121 63,128 58,131 Z" />
            <path d="M 52,112 C 59,107 60,114 55,117 Z" />
            <path d="M 52,97 C 59,92 60,99 55,102 Z" />
          </g>

          {/* Right Laurel Branch Wreath */}
          <g fill="#0F3875">
            <path d="M 138,148 C 154,128 154,95 138,75" stroke="#0F3875" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 139,144 C 148,141 154,146 150,152 C 145,150 141,147 139,144 Z" />
            <path d="M 145,132 C 156,128 160,135 155,141 C 149,138 146,134 145,132 Z" />
            <path d="M 149,118 C 161,114 164,121 158,127 C 152,124 150,120 149,118 Z" />
            <path d="M 150,103 C 162,98 164,106 158,111 C 152,109 151,105 150,103 Z" />
            <path d="M 148,88 C 159,82 160,90 154,95 C 149,93 148,90 148,88 Z" />
            <path d="M 142,76 C 152,68 152,76 146,80 C 142,78 142,77 142,76 Z" />
            {/* Inner facing leaf tips */}
            <path d="M 139,140 C 133,135 132,142 137,145 Z" />
            <path d="M 145,126 C 138,121 137,128 142,131 Z" />
            <path d="M 148,112 C 141,107 140,114 145,117 Z" />
            <path d="M 148,97 C 141,92 140,99 145,102 Z" />
          </g>

          {/* Bottom Horizontal Text: FOOTBALL CLUB */}
          <text
            x="100"
            y="172"
            fill="#0F3875"
            fontSize="15"
            fontWeight="900"
            fontFamily="System-UI, sans-serif"
            textAnchor="middle"
            letterSpacing="1.5"
          >
            FOOTBALL CLUB
          </text>

          {/* Bottom Dot - 2024 - Dot */}
          <circle cx="72" cy="188" r="3.5" fill="#0F3875" />
          <text
            x="100"
            y="192"
            fill="#0F3875"
            fontSize="13"
            fontWeight="900"
            fontFamily="System-UI, sans-serif"
            textAnchor="middle"
            letterSpacing="1"
          >
            2024
          </text>
          <circle cx="128" cy="188" r="3.5" fill="#0F3875" />
        </svg>
      </div>

      {/* Brand Name Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-bold tracking-tight font-heading leading-none ${dim.font} ${
                lightText ? 'text-white' : 'text-[#153E75]'
              }`}
            >
              TANDEM
            </span>
            <span className="font-bold tracking-tight font-heading leading-none text-[#2563EB] text-opacity-95">
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

