import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Button from "./ui/button";

interface ParticlePosition {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

// Pre-generate random positions outside the component to avoid Math.random during render
const particlePositions: ParticlePosition[] = [...Array(12)].map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 3 + Math.random() * 4,
  delay: Math.random() * 3,
}));

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center", "end start"]
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.3
  });

  // Circle animations - scale up as user scrolls into view
  const circleScale = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0.85, 1, 1.08, 1.02]);
  const circleOpacity = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0.3, 0.8, 1, 0.5]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Blurry circles background - like ParallaxCards with scroll animation */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform"
        style={{ scale: circleScale, opacity: circleOpacity }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Circle 1 - Smallest */}
          <div 
            className="absolute inset-0 rounded-full blur-[1px]" 
            style={{ 
              width: '450px', 
              height: '450px', 
              marginLeft: '-225px', 
              marginTop: '-225px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.07) 40%, rgba(255, 255, 255, 0.05) 70%, transparent 100%)',
            }} 
          />
          
          {/* Circle 2 */}
          <div 
            className="absolute inset-0 rounded-full blur-[2px]" 
            style={{ 
              width: '700px', 
              height: '700px', 
              marginLeft: '-350px', 
              marginTop: '-350px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.06) 40%, rgba(255, 255, 255, 0.04) 70%, transparent 100%)',
            }} 
          />
          
          {/* Circle 3 */}
          <div 
            className="absolute inset-0 rounded-full blur-[3px]" 
            style={{ 
              width: '950px', 
              height: '950px', 
              marginLeft: '-475px', 
              marginTop: '-475px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.04) 30%, rgba(255, 255, 255, 0.02) 60%, transparent 100%)',
            }} 
          />
          
          {/* Circle 4 - Largest */}
          <div 
            className="absolute inset-0 rounded-full blur-[4px]" 
            style={{ 
              width: '1200px', 
              height: '1200px', 
              marginLeft: '-600px', 
              marginTop: '-600px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.025) 25%, rgba(255, 255, 255, 0.015) 55%, transparent 100%)',
            }} 
          />
        </div>
      </motion.div>

      {/* Animated concentric rings background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="absolute w-[85vw] h-[85vw] max-w-[720px] max-h-[720px] rounded-full border border-white/3"
        />
        {/* Middle ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="absolute w-[65vw] h-[65vw] max-w-[560px] max-h-[560px] rounded-full border border-white/4"
        />
        {/* Inner ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="absolute w-[45vw] h-[45vw] max-w-[400px] max-h-[400px] rounded-full border border-white/5"
        />
        {/* Center ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="absolute w-[25vw] h-[25vw] max-w-[220px] max-h-[220px] rounded-full border border-white/6"
        />
        
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 15%, rgba(5, 5, 5, 0.7) 50%, rgba(5, 5, 5, 1) 100%)',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particlePositions.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-white/10"
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating credential cards - hidden on mobile/tablet, shown on large screens */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* Main identity card - left - moved closer */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="absolute left-[8%] xl:left-[12%] top-1/2 -translate-y-[60%]"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotateZ: [-2, 0, -2],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="w-[200px] xl:w-60 aspect-video rounded-xl bg-linear-to-br from-white/8 to-white/2 border border-white/8 backdrop-blur-sm p-5"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Card content */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span className="text-[10px] tracking-widest uppercase text-white/50">Agent Identity</span>
            </div>
            <div className="space-y-2">
              <div className="h-2.5 w-4/5 rounded bg-white/10" />
              <div className="h-2.5 w-3/5 rounded bg-white/5" />
            </div>
            {/* Verified indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
              <span className="text-[8px] tracking-wider uppercase text-white/40">Verified</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Authority token card - right - moved closer */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="absolute right-[8%] xl:right-[12%] top-1/2 translate-y-[5%]"
        >
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotateZ: [2, 0, 2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="w-[180px] xl:w-56 aspect-video rounded-xl bg-linear-to-br from-white/6 to-white/1 border border-white/6 backdrop-blur-sm p-5"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Card content */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <span className="text-[10px] tracking-widest uppercase text-white/50">Authority Token</span>
            </div>
            <div className="space-y-2">
              <div className="h-2.5 w-full rounded bg-white/8" />
              <div className="h-2.5 w-2/3 rounded bg-white/4" />
            </div>
            {/* Tap indicator */}
            <div className="absolute bottom-4 right-4">
              <div className="w-5 h-5 rounded-full border border-white/15 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white/25" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/10 bg-white/2">
            <span className="text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/50">
              START EXPLORING
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[76px] font-light leading-[1.05] tracking-[-0.02em] mb-6 sm:mb-8"
        >
          <span 
            className="bg-clip-text text-transparent"
            style={{ 
              background: 'linear-gradient(to right, #FFFFFF 0%, #E0E0E0 40%, #A0A0A0 80%, #707070 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            EXPLORE
          </span>
          <br />
          <span 
            className="bg-clip-text text-transparent"
            style={{ 
              background: 'linear-gradient(to right, #707070 0%, #A0A0A0 30%, #D0D0D0 60%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ORYNTH
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] font-light max-w-lg px-4 mb-10 sm:mb-12"
          style={{
            background: 'linear-gradient(to bottom, #909090 0%, #606060 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Discover the identity layer designed for autonomous AI systems, enabling trust, authority, and safe interaction across environments.
        </motion.p>

        {/* CTA Buttons - matching About section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
        >
          <Button variant="primary">
            EXPLORE PLATFORM
          </Button>
          
          <Button variant="secondary">
            READ DOCUMENTATION
          </Button>
        </motion.div>
      </div>

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
        }}
      />
    </section>
  );
}
