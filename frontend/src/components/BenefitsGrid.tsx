import { motion } from "framer-motion";

const benefits = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: ["Verifiable", " Identity"],
    description: "Every AI system carries a cryptographically verifiable identity that can be checked before interaction or execution."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: ["Permissioned", " Actions"],
    description: "Actions are executed only within explicit authority boundaries, reducing misuse and unintended behavior."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
    title: ["Accountable", " Decisions"],
    description: "Every decision is traceable to its origin, enabling responsibility without manual monitoring."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    title: ["Cross-System", " Interoperability"],
    description: "Identities remain consistent across platforms, tools, and ecosystems without custom integrations."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: ["Safer", " Automation"],
    description: "Autonomous workflows operate with built-in safeguards instead of relying on assumptions or trust gaps."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    title: ["Infrastructure-Level", " Trust"],
    description: "Trust is embedded beneath applications, not added later as a patch or feature."
  }
];

export default function BenefitsGrid() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-20 md:py-32 bg-[#000000]">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-16 mb-16 md:mb-20">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] xl:text-[80px] font-light leading-[0.95] tracking-[-0.02em]"
        >
          <span 
            className="bg-clip-text text-transparent"
            style={{ 
              background: 'linear-gradient(to right, #ECECEC 0%, #C8C8C8 30%, #A0A0A0 60%, #787878 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            BENEFITS OF
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
        </motion.h2>

        {/* Side Caption */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[10px] sm:text-[11px] tracking-[0.08em] uppercase leading-[1.8] max-w-[280px] lg:max-w-[320px] lg:text-right pb-2"
          style={{ color: '#6a6a6a' }}
        >
          ORYNTH ENABLES TRUST AT THE IDENTITY LAYER, ALLOWING AUTONOMOUS SYSTEMS TO OPERATE SAFELY, PREDICTABLY, AND AT SCALE.
        </motion.p>
      </div>

      {/* Benefits Grid - 3x2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 * index, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#000000] p-6 sm:p-8 md:p-10 flex flex-col"
          >
            {/* Icon */}
            <div className="text-white/30 mb-6">
              {benefit.icon}
            </div>

            {/* Title */}
            <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-light mb-3 tracking-[-0.01em]">
              <span 
                className="bg-clip-text text-transparent"
                style={{ 
                  background: 'linear-gradient(to right, #ECECEC 0%, #C8C8C8 50%, #A0A0A0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {benefit.title[0]}
              </span>
              <span 
                className="bg-clip-text text-transparent"
                style={{ 
                  background: 'linear-gradient(to right, #787878 0%, #585858 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {benefit.title[1]}
              </span>
            </h3>

            {/* Description */}
            <p 
              className="text-[13px] sm:text-[14px] leading-[1.6] font-light bg-clip-text text-transparent"
              style={{ 
                background: 'linear-gradient(to right, #888888 0%, #686868 50%, #585858 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
