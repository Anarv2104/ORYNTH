import { motion } from "framer-motion";
import Button from "./ui/button";
import { useScrollAnimation } from "../lib/useScrollAnimation";

export default function About() {
  const { ref, shouldAnimate } = useScrollAnimation({ threshold: 0.25, rootMargin: '-30px' });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-20 md:py-32 relative overflow-hidden"
    >
      {/* Deep gradient background with vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, #080808 0%, #040404 40%, #000000 100%)',
        }}
      />
      
      {/* Subtle vertical gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)',
          zIndex: 1,
        }}
      />
      
      {/* Vertical gradient lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.06) 15%, rgba(255, 255, 255, 0.06) 85%, rgba(255, 255, 255, 0) 100%),
            linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.06) 15%, rgba(255, 255, 255, 0.06) 85%, rgba(255, 255, 255, 0) 100%),
            linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.06) 15%, rgba(255, 255, 255, 0.06) 85%, rgba(255, 255, 255, 0) 100%),
            linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.06) 15%, rgba(255, 255, 255, 0.06) 85%, rgba(255, 255, 255, 0) 100%),
            linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.06) 15%, rgba(255, 255, 255, 0.06) 85%, rgba(255, 255, 255, 0) 100%)
          `,
          backgroundSize: '1px 100%, 1px 100%, 1px 100%, 1px 100%, 1px 100%',
          backgroundPosition: '20% 0, 35% 0, 50% 0, 65% 0, 80% 0',
          backgroundRepeat: 'no-repeat',
          zIndex: 2,
        }}
      />
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          zIndex: 3,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="will-change-transform relative z-10 flex flex-col items-center"
      >
        {/* Badge */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/10 bg-transparent">
            <span className="text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/50">
              ABOUT
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Mission Statement */}
          <h2
            className="text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-light leading-[1.3] tracking-[-0.01em] px-4 mb-8 bg-clip-text text-transparent"
            style={{ 
              background: 'linear-gradient(to right, #ECECEC 0%, #C8C8C8 30%, #A0A0A0 60%, #787878 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            OUR MISSION IS TO ESTABLISH A GLOBAL STANDARD
            <br />
            FOR TRUST, IDENTITY, AND AUTHENTICITY IN AI SYSTEMS
            <br />
            ENSURING THAT AUTONOMOUS INTELLIGENCE OPERATES
            <br />
            WITH VERIFIED ORIGIN, PURPOSE, AND AUTHORITY.
          </h2>

          {/* Secondary Text */}
          <h3
            className="text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-light leading-[1.3] tracking-[-0.01em] px-4 mb-12 md:mb-16 bg-clip-text text-transparent"
            style={{ 
              background: 'linear-gradient(to right, #ECECEC 0%, #C8C8C8 30%, #A0A0A0 60%, #787878 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ORYNTH ENABLES A FUTURE WHERE INTELLIGENT
            <br />
            SYSTEMS CAN INTEROPERATE, COLLABORATE, AND
            <br />
            TRANSACT RESPONSIBLY, FORMING THE FOUNDATION
            <br />
            OF SYNTHETIC INTELLIGENT ECONOMIES.
          </h3>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-12 md:mb-16 px-4">
            <Button variant="primary">
              EXPLORE ORYNTH
            </Button>
            
            <Button variant="secondary">
              DISCOVER PRICING
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
