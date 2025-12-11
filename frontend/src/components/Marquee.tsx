export default function Marquee() {
  // Content sequence for the marquee
  const items = [
    'RECOGNIZED',
    'VERIFIED',
    'CREDIBLE',
    'INTEROPERABLE',
    'TRUSTED',
  ];

  return (
    <section className="orynth-marquee w-full overflow-hidden relative py-2 md:py-3">
      {/* Vertical gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.04) 100%)',
        }}
      />

      {/* Fade masks at corners for blurred effect */}
      <div 
        className="absolute inset-y-0 left-0 w-40 md:w-56 lg:w-72 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0) 100%)',
          zIndex: 20,
        }}
      />
      <div 
        className="absolute inset-y-0 right-0 w-40 md:w-56 lg:w-72 pointer-events-none"
        style={{
          background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0) 100%)',
          zIndex: 20,
        }}
      />

      {/* Marquee track wrapper with specified styles */}
      <div 
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          placeItems: 'center',
          margin: '0px',
          padding: '8px 0px',
          listStyleType: 'none',
          opacity: 1,
          overflow: 'hidden',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Marquee track - contains two identical sequences for smooth infinite loop */}
        <div className="marquee-track">
          {[...Array(2)].map((_, seqIndex) => (
            <div key={`sequence-${seqIndex}`} className="marquee-sequence">
              {items.map((text, index) => (
                <div key={`item-${seqIndex}-${index}`} className="marquee-item">
                  <span className="marquee-text">{text}</span>
                  <img 
                    src="/Transparent logo 1.png" 
                    alt="Orynth" 
                    className="marquee-logo"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Marquee track - flex row holding all sequences */
        .marquee-track {
          display: inline-flex;
          align-items: center;
          width: max-content;
          animation: marqueeScroll 25s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }

        /* Sequence wrapper */
        .marquee-sequence {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
        }

        /* Item container - wraps text + logo as a unit */
        .marquee-item {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
        }

        /* Orynth logo */
        .marquee-logo {
          height: 2rem;
          width: auto;
          flex-shrink: 0;
          filter: brightness(2.3) grayscale(0.75) contrast(0.65);
          margin-left: 0.625rem;
          margin-right: 0.625rem;
        }

        @media (min-width: 640px) {
          .marquee-logo {
            height: 2.25rem;
            filter: brightness(2.4) grayscale(0.75) contrast(0.65);
            margin-left: 0.75rem;
            margin-right: 0.75rem;
          }
        }

        @media (min-width: 768px) {
          .marquee-logo {
            height: 2.5rem;
            filter: brightness(2.5) grayscale(0.75) contrast(0.65);
            margin-left: 1rem;
            margin-right: 1rem;
          }
        }

        /* Text styling - matching hero font style but thinner */
        .marquee-text {
          font-size: 2.5rem;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: #000000;
          text-transform: uppercase;
          line-height: 1;
          filter: brightness(2.3) grayscale(0.75) contrast(0.65);
          flex-shrink: 0;
          white-space: nowrap;
        }

        @media (min-width: 640px) {
          .marquee-text {
            font-size: 3rem;
            letter-spacing: 0.03em;
            filter: brightness(2.4) grayscale(0.75) contrast(0.65);
          }
        }

        @media (min-width: 768px) {
          .marquee-text {
            font-size: 3.5rem;
            letter-spacing: 0.04em;
            filter: brightness(2.5) grayscale(0.75) contrast(0.65);
          }
        }

        /* Animation - seamless infinite scroll */
        @keyframes marqueeScroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
