import { motion } from "framer-motion";
import { useScrollAnimation } from "../lib/useScrollAnimation";

const features = [
  {
    number: "01",
    title: "Verifiable AI Identity",
    text: "Every model, agent, and system has a verifiable identity before interaction."
  },
  {
    number: "02",
    title: "Permissioned Intelligence",
    text: "Every action is bound to authority defining what a system is allowed to do."
  },
  {
    number: "03",
    title: "Accountable Execution",
    text: "Every decision is traceable to origin ensuring responsibility across workflows."
  },
  {
    number: "04",
    title: "Foundational Infrastructure",
    text: "Orynth operates beneath applications as a shared trust layer across systems."
  }
];

export default function WhatIsOrynth() {
  const { ref, shouldAnimate } = useScrollAnimation({ threshold: 0.3, rootMargin: '-50px' });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-20 md:py-32 bg-[#000000]"
    >
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="will-change-transform flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-12 mb-12 md:mb-16"
      >
        {/* Main Title */}
        <h2 className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] xl:text-[80px] font-light leading-[0.95] tracking-[-0.02em]">
          <span 
            className="bg-clip-text text-transparent"
            style={{ 
              background: 'linear-gradient(to right, #ECECEC 0%, #C8C8C8 30%, #A0A0A0 60%, #787878 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            WHAT IS
          </span>
          <br />
          <span 
            className="bg-clip-text text-transparent"
            style={{ 
              background: 'linear-gradient(to right, #A0A0A0 0%, #787878 30%, #606060 60%, #484848 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ORYNTH
          </span>
        </h2>

        {/* Side Caption */}
        <p
          className="text-[10px] sm:text-[11px] tracking-[0.08em] uppercase leading-[1.8] max-w-[260px] lg:max-w-[280px] lg:text-right pb-1"
          style={{ color: '#6a6a6a' }}
        >
          ORYNTH ENABLES SAFE, INTEROPERABLE, AND TRUSTED AUTONOMY ACROSS AI-DRIVEN SYSTEMS.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {features.map((feature, index) => (
          <motion.div
            key={feature.number}
            initial={{ opacity: 0, y: 30 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="will-change-transform relative border-l border-white/8 pl-5 sm:pl-6 pr-4 sm:pr-8 py-6 sm:py-0 flex flex-col justify-between"
            style={{ minHeight: '240px' }}
          >
            {/* Number */}
            <div 
              className="text-[36px] sm:text-[42px] md:text-[48px] font-light tracking-[-0.02em]"
              style={{ color: 'rgba(255, 255, 255, 0.18)' }}
            >
              {feature.number}
            </div>

            {/* Title and Description */}
            <div>
              <h3 
                className="text-[14px] sm:text-[15px] md:text-[16px] font-medium tracking-[0.02em] mb-3 bg-clip-text text-transparent"
                style={{ 
                  background: 'linear-gradient(to right, #FFFFFF 0%, #E0E0E0 50%, #C8C8C8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-[14px] sm:text-[15px] md:text-[16px] font-light leading-normal tracking-[-0.01em] bg-clip-text text-transparent"
                style={{ 
                  background: 'linear-gradient(to right, #ECECEC 0%, #C8C8C8 30%, #A0A0A0 60%, #787878 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {feature.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
