import { motion } from "framer-motion";

// Pre-generate random positions for particles outside component to avoid Math.random during render
const particlePositions = [...Array(8)].map((_, i) => ({
  id: i,
  initialX: 20 + Math.random() * 60,
  initialY: 20 + Math.random() * 60,
  animateY: [20 + Math.random() * 60, 10 + Math.random() * 40, 20 + Math.random() * 60],
  duration: 4 + Math.random() * 3,
  delay: Math.random() * 2,
}));

export default function ReliabilityControl() {
  return (
    <section className="min-h-screen flex flex-col px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-20 md:py-32 bg-[#0a0a0a]">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-16 mb-16 md:mb-20">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[68px] font-light leading-[0.95] tracking-[-0.02em]"
        >
          <span 
            className="bg-clip-text text-transparent"
            style={{ 
              background: 'linear-gradient(to right, #FFFFFF 0%, #C8C8C8 30%, #909090 60%, #606060 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            BUILT FOR
          </span>
          <br />
          <span 
            className="bg-clip-text text-transparent"
            style={{ 
              background: 'linear-gradient(to right, #A8A8A8 0%, #787878 30%, #585858 60%, #404040 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            AUTONOMOUS
          </span>
          <br />
          <span 
            className="bg-clip-text text-transparent"
            style={{ 
              background: 'linear-gradient(to right, #787878 0%, #585858 30%, #404040 60%, #303030 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            RELIABILITY
          </span>
        </motion.h2>

        {/* Side Caption */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[10px] sm:text-[11px] tracking-[0.08em] uppercase leading-[1.8] max-w-[280px] lg:max-w-[320px] lg:text-right"
          style={{ color: '#6a6a6a' }}
        >
          ORYNTH ENSURES INTELLIGENT SYSTEMS OPERATE WITH PREDICTABLE BEHAVIOR, VERIFIED AUTHORITY, AND ENFORCED RESPONSIBILITY.
        </motion.p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-20">
        {/* Left - Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-end"
        >
          <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-light leading-[1.1] tracking-[-0.02em] mb-4">
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                background: 'linear-gradient(to right, #FFFFFF 0%, #C0C0C0 50%, #909090 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              CONSISTENT
            </span>
            <br />
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                background: 'linear-gradient(to right, #909090 0%, #686868 50%, #484848 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              GUARANTEES
            </span>
          </h3>

          <p 
            className="text-[13px] sm:text-[14px] leading-[1.7] font-light mb-6 max-w-md"
            style={{ color: '#606060' }}
          >
            Identity, permissions, and execution rules remain intact across deployments, updates, and integrations without breaking trust.
          </p>

          {/* CTA Button */}
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] tracking-widest uppercase font-light group"
            style={{ color: '#888888' }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            EXPLORE ORYNTH
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              className="transform transition-transform group-hover:translate-x-1"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Right - Animated Visual Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative aspect-4/3 rounded-lg overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 50%, #080808 100%)',
          }}
        >
          {/* Animated grid pattern */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
            }}
          />
          
          {/* Floating cards animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Card stack */}
            <div className="relative w-48 h-32 sm:w-56 sm:h-36">
              {/* Back card */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [-5, 0, 5, 0, -5],
                  y: [0, -5, 0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #252525 100%)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(-20px) translateX(15px) translateY(15px)',
                }}
              />
              
              {/* Middle card */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{
                  rotateY: [0, -3, 0, 3, 0],
                  rotateX: [3, 0, -3, 0, 3],
                  y: [0, 3, 0, -3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(-10px) translateX(8px) translateY(8px)',
                }}
              />
              
              {/* Front card */}
              <motion.div
                className="absolute inset-0 rounded-lg overflow-hidden"
                animate={{
                  rotateY: [0, 2, 0, -2, 0],
                  rotateX: [-2, 0, 2, 0, -2],
                  y: [0, -3, 0, 3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: 'linear-gradient(135deg, #252525 0%, #303030 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Card content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  {/* Card grid lines */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  
                  {/* Top indicator */}
                  <div className="flex items-center gap-2 relative z-10">
                    <motion.div
                      className="w-2 h-2 rounded-full"
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.9, 1.1, 0.9],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        background: 'radial-gradient(circle, rgba(100,255,150,0.6) 0%, rgba(100,255,150,0.2) 70%)',
                      }}
                    />
                    <span className="text-[8px] tracking-widest uppercase text-white/20">VERIFIED</span>
                  </div>
                  
                  {/* Bottom branding */}
                  <div className="flex items-center gap-2 relative z-10">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ 
                        background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 70%)',
                      }}
                    />
                    <span className="text-[8px] tracking-[0.12em] uppercase text-white/25">ORYNTH</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating particles */}
          {particlePositions.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 rounded-full bg-white/5"
              initial={{
                x: `${particle.initialX}%`,
                y: `${particle.initialY}%`,
              }}
              animate={{
                y: particle.animateY.map(v => `${v}%`),
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom - Fast Integration Callout */}
      <div className="border-t border-white/6 pt-12 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-[13px] sm:text-[14px] leading-[1.7] font-light max-w-md"
          >
            <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, #888888 0%, #707070 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Deploy identity enforcement </span>
            <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, #ECECEC 0%, #C8C8C8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>quickly </span>
            <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, #888888 0%, #707070 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>and integrate trust verification into existing systems </span>
            <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, #ECECEC 0%, #C8C8C8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>without redesigning </span>
            <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, #888888 0%, #707070 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>your architecture.</span>
          </motion.p>

          {/* Right - Time indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center lg:items-center justify-center"
          >
            {/* Clock icon */}
            <div className="mb-4">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>

            {/* Time text */}
            <span 
              className="text-[28px] sm:text-[32px] md:text-[36px] font-light tracking-[-0.02em] bg-clip-text text-transparent"
              style={{ 
                background: 'linear-gradient(to right, #ECECEC 0%, #A0A0A0 50%, #787878 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              MINUTES
            </span>
            <span 
              className="text-[12px] tracking-widest uppercase mt-1 bg-clip-text text-transparent"
              style={{ 
                background: 'linear-gradient(to right, #686868 0%, #484848 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              NOT MONTHS
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
