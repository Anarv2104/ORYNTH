import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ParallaxCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center", "end start"]
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 18,
    mass: 0.2
  });

  // Scroll-based transformations - cards start stacked, then drift apart far enough to reveal middle card
  // Bottom card (card1) - drifts down and left (counter-clockwise rotation)
  const card1Rotate = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, -10, -15, -15]);
  const card1TranslateX = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, -100, -200, -260]);
  const card1TranslateY = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, 205, 410, 570]);
  const card1Scale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 1.05, 1.02, 0.8]);
  const card1Opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0]);

  // Middle card (card2) - stays centered, minimal movement
  const card2Rotate = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, 0, 0, 0]);
  const card2TranslateX = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, 0, 0, 0]);
  const card2TranslateY = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, 0, 0, 0]);
  const card2Scale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 1.03, 1.01, 0.8]);
  const card2Opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0]);

  // Top card (card3) - drifts up and right (clockwise rotation)
  const card3Rotate = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, 10, 15, 15]);
  const card3TranslateX = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, 100, 200, 260]);
  const card3TranslateY = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, -205, -410, -570]);
  const card3Scale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 1.08, 1.05, 0.8]);
  const card3Opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0]);

  // Sync circle parallax with card drift - circles become visible as cards drift
  const circleOpacity = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, 0.4, 1, 0.3]);
  const circleScale = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0.95, 1, 1.05, 1]);

  return (
    <section ref={sectionRef} className="min-h-[180vh] flex items-center justify-center px-6 pt-0 pb-32 relative overflow-x-hidden bg-[#000000]">
      {/* Background Layer - 4 Radial Circles synced with card drift */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform"
        style={{ opacity: circleOpacity, scale: circleScale }}
      >
        {/* Noise Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        
        {/* 4 Concentric Circles - Small to Large with increasing fade */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Circle 1 - Smallest (least fade) */}
          <div 
            className="absolute inset-0 rounded-full blur-[1px]" 
            style={{ 
              width: '400px', 
              height: '400px', 
              marginLeft: '-200px', 
              marginTop: '-200px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.10) 40%, rgba(255, 255, 255, 0.08) 70%, transparent 100%)',
            }} 
          />
          
          {/* Circle 2 */}
          <div 
            className="absolute inset-0 rounded-full blur-[2px]" 
            style={{ 
              width: '600px', 
              height: '600px', 
              marginLeft: '-300px', 
              marginTop: '-300px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.08) 40%, rgba(255, 255, 255, 0.05) 70%, transparent 100%)',
            }} 
          />
          
          {/* Circle 3 */}
          <div 
            className="absolute inset-0 rounded-full blur-[3px]" 
            style={{ 
              width: '900px', 
              height: '900px', 
              marginLeft: '-450px', 
              marginTop: '-450px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.03) 60%, transparent 100%)',
            }} 
          />
          
          {/* Circle 4 - Largest (most fade) */}
          <div 
            className="absolute inset-0 rounded-full blur-xs" 
            style={{ 
              width: '1200px', 
              height: '1200px', 
              marginLeft: '-600px', 
              marginTop: '-600px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.04) 20%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)',
            }} 
          />
        </div>
      </motion.div>

      <div
        ref={containerRef}
        className="relative w-full max-w-[600px] h-[360px] md:h-[420px] z-10"
        style={{ perspective: "1000px" }}
      >
        {/* Card 1 - Bottom (drifts down-left) */}
        <motion.div
          className="absolute inset-0 rounded-3xl backdrop-blur-xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
            x: card1TranslateX,
            y: card1TranslateY,
            scale: card1Scale,
            opacity: card1Opacity,
            rotateZ: card1Rotate,
          }}
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent 70%)",
              }}
            />
          </div>
        </motion.div>

        {/* Card 2 - Middle (stays centered with content) */}
        <motion.div
          className="absolute inset-0 rounded-3xl backdrop-blur-xl flex flex-col items-center justify-center p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow:
              "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
            x: card2TranslateX,
            y: card2TranslateY,
            scale: card2Scale,
            opacity: card2Opacity,
            rotateZ: card2Rotate,
          }}
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12), transparent 60%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Description */}
            <p className="text-white/60 text-sm md:text-base max-w-lg mx-auto tracking-wide leading-relaxed">
              The future of AI identity management. Secure, decentralized, and
              built for the next generation of autonomous systems.
            </p>

            {/* CTA Button */}
            <button className="mt-8 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>
        </motion.div>

        {/* Card 3 - Top (drifts up-right with logo only) */}
        <motion.div
          className="absolute inset-0 rounded-3xl backdrop-blur-xl flex flex-col items-center justify-center p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.04) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow:
              "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
            x: card3TranslateX,
            y: card3TranslateY,
            scale: card3Scale,
            opacity: card3Opacity,
            rotateZ: card3Rotate,
          }}
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.15), transparent 50%)",
              }}
            />
          </div>

          {/* Content - Logo and text side by side */}
          <div className="relative z-10 flex items-center justify-center gap-4">
            {/* Logo */}
            <img
              src="/Transparent logo 1.png"
              alt="Orynth Logo"
              className="h-16 md:h-20 w-auto"
            />

            {/* Text - using same style as navbar */}
            <span className="text-white/60 text-4xl md:text-5xl font-normal tracking-[0.2em] uppercase">
              ORYNTH
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
