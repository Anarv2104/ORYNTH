import { motion } from 'framer-motion';
import { useScrollAnimation } from '../lib/useScrollAnimation';

export default function IdentityGap() {
  const { ref, shouldAnimate } = useScrollAnimation({ threshold: 0.25, rootMargin: '-30px' });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-20 md:py-32 bg-[#000000]"
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="will-change-transform mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/10 bg-transparent">
          <span className="text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/50">
            THE PROBLEM
          </span>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        {/* First paragraph */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="will-change-transform text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-light leading-[1.3] tracking-[-0.01em] px-4 mb-8 bg-clip-text text-transparent"
          style={{ 
            background: 'linear-gradient(to right, #ECECEC 0%, #C8C8C8 30%, #A0A0A0 60%, #787878 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          AI SYSTEMS ARE BECOMING AUTONOMOUS
          <br />
          AND INTERACTING WITH THE REAL WORLD.
        </motion.h2>

        {/* Second paragraph */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
          className="will-change-transform text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-light leading-[1.3] tracking-[-0.01em] px-4 mb-8 bg-clip-text text-transparent"
          style={{ 
            background: 'linear-gradient(to right, #ECECEC 0%, #C8C8C8 30%, #A0A0A0 60%, #787878 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          YET THERE IS NO RELIABLE WAY TO VERIFY
          <br />
          WHO AN AI SYSTEM IS,
          <br />
          WHAT IT IS ALLOWED TO DO,
          <br />
          OR WHETHER ITS OUTPUTS CAN BE TRUSTED.
        </motion.h3>

        {/* Third paragraph */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.26, ease: [0.23, 1, 0.32, 1] }}
          className="will-change-transform text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-light leading-[1.3] tracking-[-0.01em] px-4 mb-8 bg-clip-text text-transparent"
          style={{ 
            background: 'linear-gradient(to right, #ECECEC 0%, #C8C8C8 30%, #A0A0A0 60%, #787878 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          WITHOUT IDENTITY, INTELLIGENCE BECOMES RISKY.
          <br />
          MISTAKES CANNOT BE TRACED. ABUSE CANNOT BE PREVENTED.
        </motion.h3>

        {/* Fourth paragraph */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.34, ease: [0.23, 1, 0.32, 1] }}
          className="will-change-transform text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-light leading-[1.3] tracking-[-0.01em] px-4 bg-clip-text text-transparent"
          style={{ 
            background: 'linear-gradient(to right, #ECECEC 0%, #C8C8C8 30%, #A0A0A0 60%, #787878 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          THIS MAKES SAFE SCALING OF
          <br />
          AUTONOMOUS SYSTEMS EXTREMELY HARD.
        </motion.h3>
      </div>
    </section>
  );
}
