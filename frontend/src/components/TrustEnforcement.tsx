import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: ["Cryptographic", " Verification"],
    description: "All identities and assertions are validated using cryptographic proofs, ensuring authenticity and integrity."
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: ["Authority", " Validation"],
    description: "Execution is allowed only when permissions align with declared identity and approved intent."
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
      </svg>
    ),
    title: ["Misuse", " Prevention"],
    description: "Unauthorized actions are blocked at runtime, reducing impersonation and systemic risk."
  }
];

// Pre-generated star positions to avoid Math.random during render
const starPositions = [...Array(20)].map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 50,
  duration: 3 + Math.random() * 4,
  delay: Math.random() * 5,
}));

// Star particles component using pre-generated positions
function StarParticles() {
  return (
    <>
      {starPositions.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-0.5 h-0.5 rounded-full bg-white/10"
          initial={{
            x: `${star.x}%`,
            y: `${star.y}%`,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

// Animated mountain-like layers
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #151515 40%, #1a1a1a 60%, #0f0f0f 100%)',
        }}
      />
      
      {/* Animated fog/mist layers */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 20% 60%, rgba(40,40,40,0.4) 0%, transparent 50%)',
          backgroundSize: '200% 100%',
        }}
      />
      
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 80% 70%, rgba(50,50,50,0.3) 0%, transparent 50%)',
          backgroundSize: '200% 100%',
        }}
      />

      {/* Mountain silhouette layers */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[60%]"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `
            polygon(0% 100%, 0% 70%, 10% 55%, 20% 65%, 30% 45%, 40% 60%, 50% 40%, 60% 55%, 70% 35%, 80% 50%, 90% 40%, 100% 55%, 100% 100%)
          `,
          clipPath: 'polygon(0% 100%, 0% 70%, 10% 55%, 20% 65%, 30% 45%, 40% 60%, 50% 40%, 60% 55%, 70% 35%, 80% 50%, 90% 40%, 100% 55%, 100% 100%)',
          backgroundColor: 'rgba(25, 25, 25, 0.8)',
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[50%]"
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        style={{
          clipPath: 'polygon(0% 100%, 0% 80%, 15% 60%, 25% 70%, 35% 50%, 45% 65%, 55% 45%, 65% 60%, 75% 50%, 85% 65%, 95% 55%, 100% 70%, 100% 100%)',
          backgroundColor: 'rgba(20, 20, 20, 0.9)',
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[40%]"
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        style={{
          clipPath: 'polygon(0% 100%, 0% 75%, 20% 55%, 30% 70%, 40% 50%, 50% 65%, 60% 55%, 70% 70%, 85% 50%, 100% 65%, 100% 100%)',
          backgroundColor: 'rgba(15, 15, 15, 0.95)',
        }}
      />

      {/* Animated particles/stars */}
      <StarParticles />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </div>
  );
}

export default function TrustEnforcement() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 w-full max-w-md mx-4 sm:mx-6 rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(15,15,15,0.95) 0%, rgba(10,10,10,0.98) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="p-8 sm:p-10">
          {/* Card Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-[24px] sm:text-[28px] md:text-[32px] font-light leading-[1.1] tracking-[-0.02em] mb-8"
          >
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                background: 'linear-gradient(to right, #FFFFFF 0%, #C8C8C8 50%, #A0A0A0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              TRUST
            </span>
            <br />
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                background: 'linear-gradient(to right, #A0A0A0 0%, #787878 50%, #585858 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              ENFORCEMENT
            </span>
            <br />
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                background: 'linear-gradient(to right, #787878 0%, #585858 50%, #404040 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              LAYER
            </span>
          </motion.h2>

          {/* Divider */}
          <div 
            className="w-full h-px mb-8"
            style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.02))' }}
          />

          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + (index * 0.1), ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, amount: 0.5 }}
                className="relative"
              >
                {/* Icon */}
                <div 
                  className="mb-2"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-[14px] sm:text-[15px] font-light mb-1.5 tracking-[-0.01em]">
                  <span 
                    className="bg-clip-text text-transparent"
                    style={{ 
                      background: 'linear-gradient(to right, #ECECEC 0%, #C8C8C8 50%, #A0A0A0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {feature.title[0]}
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
                    {feature.title[1]}
                  </span>
                </h3>

                {/* Description */}
                <p 
                  className="text-[12px] sm:text-[13px] leading-[1.6] font-light bg-clip-text text-transparent"
                  style={{ 
                    background: 'linear-gradient(to right, #787878 0%, #606060 50%, #505050 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {feature.description}
                </p>

                {/* Divider between items */}
                {index < features.length - 1 && (
                  <div 
                    className="w-full h-px mt-6"
                    style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.06), rgba(255,255,255,0.01))' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
