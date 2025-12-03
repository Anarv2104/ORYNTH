import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { SplineScene } from "@/components/ui/splite";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Performance mark for hero render
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark('hero-mount')
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      mouseX.set(x * 80);
      mouseY.set(y * 80);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32"
    >
      {/* Radial gradient overlay with parallax - disabled on mobile */}
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black pointer-events-none hidden md:block"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
      />
      
      {/* Grid background effect with parallax - reduced opacity on mobile */}
      <motion.div 
        className="absolute inset-0 opacity-[0.015] md:opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          x: useTransform(mouseXSpring, (value) => value * 0.5),
          y: useTransform(mouseYSpring, (value) => value * 0.5),
        }}
      />

      <div className="relative w-full max-w-7xl">
        {/* Main content: heading on left, 3D scene on right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
          {/* Main heading with staggered animation */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-[56px] sm:text-[70px] md:text-[100px] lg:text-[130px] xl:text-[150px] font-light leading-[0.9] md:leading-[0.85] tracking-[-0.02em]">
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="bg-linear-to-r from-white via-white/50 via-40% to-white/20 bg-clip-text text-transparent"
                style={{ 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                THE AI
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
                className="mt-2 bg-linear-to-r from-white/20 via-white/50 via-60% to-white bg-clip-text text-transparent pl-40"
                style={{ 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                IDENTITY
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="mt-2 bg-linear-to-r from-white via-white/50 via-40% to-white/20 bg-clip-text text-transparent"
                style={{ 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                STANDARD
              </motion.div>
            </h1>
          </div>

          {/* 3D Spline scene beside heading */}
          <div className="flex justify-center md:justify-end shrink-0">
            <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Subheading with delayed fade-in */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: 0.9, 
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="mt-8 sm:mt-10 md:mt-12 text-[10px] sm:text-xs text-white/60 tracking-[0.12em] sm:tracking-[0.15em] uppercase leading-relaxed text-center md:text-right md:pr-32 relative z-10 px-4"
        >
          Soon every AI will need identity. Orynth is where that identity begins.
        </motion.p>

        {/* Scroll indicator with breathing animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, 8, 0]
          }}
          transition={{ 
            opacity: { duration: 0.5, delay: 1.2, ease: [0.23, 1, 0.32, 1] },
            scale: { duration: 0.5, delay: 1.2, ease: [0.23, 1, 0.32, 1] },
            y: {
              duration: 2.2,
              delay: 2,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          className="mt-6 sm:mt-8 md:mt-3 flex justify-center md:justify-end md:pr-32"
        >
          <motion.button 
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 12px 48px rgba(255, 255, 255, 0.2), inset 0 2px 6px rgba(255, 255, 255, 0.8)"
            }}
            whileTap={{ 
              scale: 0.97,
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.4)"
            }}
            transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center cursor-pointer relative group touch-manipulation"
            style={{
              background: 'radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.95), rgba(240, 240, 240, 0.8) 25%, rgba(180, 180, 180, 0.6) 50%, rgba(120, 120, 120, 0.5) 75%, rgba(80, 80, 80, 0.6))',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.6), inset 0 -2px 4px rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Shine layer */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.4), transparent 50%)'
              }}
            />
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.3), transparent 70%)',
                filter: 'blur(8px)'
              }}
            />
            {/* Arrow icon with breathing opacity */}
            <motion.svg
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2.2,
                delay: 2,
                repeat: Infinity,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
            >
              <path
                d="M8 3V13M8 13L4 9M8 13L12 9"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </motion.section>
  );
}