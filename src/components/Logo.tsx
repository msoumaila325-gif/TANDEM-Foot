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
    sm: { box: 'w-10 h-11', font: 'text-base', subFont: 'text-[9px]' },
    md: { box: 'w-12 h-14', font: 'text-xl', subFont: 'text-[10px]' },
    lg: { box: 'w-16 h-18', font: 'text-2xl', subFont: 'text-xs' },
    xl: { box: 'w-24 h-28', font: 'text-4xl', subFont: 'text-sm' },
  };

  const dim = sizeDimensions[size];
  const uniqueId = React.useId().replace(/:/g, '_');

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official TANDEM FOOTBALL CLUB Shield Logo */}
      <div className={`relative ${dim.box} flex-shrink-0 group cursor-pointer`}>
        <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-md group-hover:bg-blue-400/30 transition-all duration-300" />
        
        <svg
          viewBox="0 0 200 230"
          className="w-full h-full relative z-10 drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Top Arc Path for TANDEM */}
            <path
              id={`topArc_${uniqueId}`}
              d="M 38,62 A 75,75 0 0,1 162,62"
            />
            {/* Bottom Arc Path for FOOTBALL CLUB */}
            <path
              id={`bottomArc_${uniqueId}`}
              d="M 35,160 A 82,82 0 0,0 165,160"
            />
          </defs>

          {/* Outer Dark Navy Border */}
          <path
            d="M 100,10 L 182,28 C 182,140 142,192 100,218 C 58,192 18,140 18,28 Z"
            fill="#12386E"
          />

          {/* Inner Light Ice-Blue Shield */}
          <path
            d="M 100,18 L 174,34 C 174,134 136,184 100,208 C 64,184 26,134 26,34 Z"
            fill="#E1EEFF"
          />

          {/* Top Arched Text: TANDEM */}
          <text className="font-heading font-black">
            <textPath
              href={`#topArc_${uniqueId}`}
              startOffset="50%"
              textAnchor="middle"
              fill="#12386E"
              fontSize="25"
              fontWeight="900"
              letterSpacing="2.5"
            >
              TANDEM
            </textPath>
          </text>

          {/* Central Football Motif */}
          <g transform="translate(100, 114)">
            {/* Football Outer Boundary */}
            <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#12386E" strokeWidth="3" />

            {/* Central Pentagon */}
            <polygon
              points="0,-12 11,-4 7,9 -7,9 -11,-4"
              fill="#12386E"
            />

            {/* Top Pentagonal Joint & Spoke Lines */}
            <line x1="0" y1="-12" x2="0" y2="-32" stroke="#12386E" strokeWidth="2.5" />
            <polygon points="-8,-31 0,-32 8,-31 0,-22" fill="#12386E" />

            {/* Top Right Joint */}
            <line x1="11" y1="-4" x2="28" y2="-15" stroke="#12386E" strokeWidth="2.5" />
            <polygon points="28,-15 32,-4 23,4 19,-8" fill="#12386E" />

            {/* Bottom Right Joint */}
            <line x1="7" y1="9" x2="20" y2="25" stroke="#12386E" strokeWidth="2.5" />
            <polygon points="20,25 9,31 0,26 12,18" fill="#12386E" />

            {/* Bottom Left Joint */}
            <line x1="-7" y1="9" x2="-20" y2="25" stroke="#12386E" strokeWidth="2.5" />
            <polygon points="-20,25 -9,31 0,26 -12,18" fill="#12386E" />

            {/* Top Left Joint */}
            <line x1="-11" y1="-4" x2="-28" y2="-15" stroke="#12386E" strokeWidth="2.5" />
            <polygon points="-28,-15 -32,-4 -23,4 -19,-8" fill="#12386E" />
          </g>

          {/* Left Laurel Branch */}
          <g fill="#12386E">
            {/* Stem */}
            <path d="M 62,150 C 48,130 48,95 62,75" stroke="#12386E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Leaves */}
            <path d="M 61,146 C 52,143 46,148 50,154 C 55,152 59,149 61,146 Z" />
            <path d="M 55,134 C 44,130 40,137 45,143 C 51,140 54,136 55,134 Z" />
            <path d="M 51,120 C 39,116 36,123 42,129 C 48,126 50,122 51,120 Z" />
            <path d="M 50,105 C 38,100 36,108 42,113 C 48,111 49,107 50,105 Z" />
            <path d="M 52,90 C 41,84 40,92 46,97 C 51,95 52,92 52,90 Z" />
            <path d="M 58,78 C 48,70 48,78 54,82 C 58,80 58,79 58,78 Z" />
            {/* Inner facing leaf tips */}
            <path d="M 61,142 C 67,137 68,144 63,147 Z" />
            <path d="M 55,128 C 62,123 63,130 58,133 Z" />
            <path d="M 52,114 C 59,109 60,116 55,119 Z" />
            <path d="M 52,99 C 59,94 60,101 55,104 Z" />
          </g>

          {/* Right Laurel Branch */}
          <g fill="#12386E">
            {/* Stem */}
            <path d="M 138,150 C 152,130 152,95 138,75" stroke="#12386E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Leaves */}
            <path d="M 139,146 C 148,143 154,148 150,154 C 145,152 141,149 139,146 Z" />
            <path d="M 145,134 C 156,130 160,137 155,143 C 149,140 146,136 145,134 Z" />
            <path d="M 149,120 C 161,116 164,123 158,129 C 152,126 150,122 149,120 Z" />
            <path d="M 150,105 C 162,100 164,108 158,113 C 152,111 151,107 150,105 Z" />
            <path d="M 148,90 C 159,84 160,92 154,97 C 149,95 148,92 148,90 Z" />
            <path d="M 142,78 C 152,70 152,78 146,82 C 142,80 142,79 142,78 Z" />
            {/* Inner facing leaf tips */}
            <path d="M 139,142 C 133,137 132,144 137,147 Z" />
            <path d="M 145,128 C 138,123 137,130 142,133 Z" />
            <path d="M 148,114 C 141,109 140,116 145,119 Z" />
            <path d="M 148,99 C 141,94 140,101 145,104 Z" />
          </g>

          {/* Bottom Arched Text: FOOTBALL CLUB */}
          <text className="font-heading font-black">
            <textPath
              href={`#bottomArc_${uniqueId}`}
              startOffset="50%"
              textAnchor="middle"
              fill="#12386E"
              fontSize="16"
              fontWeight="900"
              letterSpacing="1.2"
            >
              FOOTBALL CLUB
            </textPath>
          </text>
        </svg>
      </div>

      {/* Brand Name Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-extrabold tracking-tight font-heading leading-none ${dim.font} ${
                lightText ? 'text-white' : 'text-[#153E75]'
              }`}
            >
              TANDEM
            </span>
            <span className="font-extrabold tracking-tight font-heading leading-none text-[#2563EB] text-opacity-95">
              FOOTBALL
            </span>
          </div>
          <div className="flex items-center justify-between gap-1 mt-0.5">
            <span
              className={`font-extrabold tracking-[0.25em] uppercase ${dim.subFont} ${
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

