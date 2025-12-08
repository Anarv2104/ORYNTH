import { motion } from "framer-motion";
import { useState } from "react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = "primary", 
  onClick,
  className = "" 
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  if (variant === "primary") {
    return (
      <motion.button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative h-[42px] sm:h-[46px] px-6 sm:px-8 rounded-full flex items-center justify-center cursor-pointer group touch-manipulation overflow-hidden ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Base gradient background */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={false}
          animate={{
            background: isHovered
              ? 'linear-gradient(135deg, rgba(200, 200, 200, 0.9) 0%, rgba(160, 160, 160, 0.85) 25%, rgba(120, 120, 120, 0.8) 50%, rgba(90, 90, 90, 0.85) 75%, rgba(70, 70, 70, 0.9) 100%)'
              : 'linear-gradient(135deg, rgba(240, 240, 240, 0.95) 0%, rgba(200, 200, 200, 0.9) 25%, rgba(160, 160, 160, 0.85) 50%, rgba(120, 120, 120, 0.8) 75%, rgba(90, 90, 90, 0.85) 100%)'
          }}
          style={{
            boxShadow: isHovered
              ? '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.3)'
              : '0 6px 24px rgba(0, 0, 0, 0.5), inset 0 1px 3px rgba(255, 255, 255, 0.6), inset 0 -1px 3px rgba(0, 0, 0, 0.2)'
          }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        />
        
        {/* Top shine layer - more prominent on hover */}
        <motion.div 
          className="absolute inset-0 rounded-full pointer-events-none"
          initial={false}
          animate={{
            background: isHovered
              ? 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.5), transparent 45%)'
              : 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.35), transparent 50%)'
          }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        />
        
        {/* Center glow on hover */}
        <motion.div 
          className="absolute inset-0 rounded-full pointer-events-none"
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.3), transparent 60%)'
          }}
          style={{
            filter: 'blur(8px)'
          }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        />
        
        {/* Text */}
        <span 
          className="relative z-10 font-semibold text-[10px] sm:text-[11px] tracking-[0.08em] uppercase flex items-center gap-2"
          style={{
            color: '#000000',
          }}
        >
          {children}
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-200"
          >
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </motion.button>
    );
  }
  
  // Secondary button
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative h-[42px] sm:h-[46px] px-6 sm:px-8 rounded-full font-semibold text-[10px] sm:text-[11px] tracking-[0.08em] uppercase cursor-pointer focus:outline-none overflow-hidden border group ${className}`}
      style={{
        borderColor: isHovered ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.14)',
        background: isHovered 
          ? 'radial-gradient(circle at 50% 50%, rgba(80, 80, 80, 0.28), rgba(55, 55, 55, 0.2) 50%, rgba(38, 38, 38, 0.14))'
          : 'radial-gradient(circle at 50% 50%, rgba(65, 65, 65, 0.22), rgba(48, 48, 48, 0.16) 50%, rgba(32, 32, 32, 0.1))',
        boxShadow: isHovered
          ? '0 3px 12px rgba(0, 0, 0, 0.7), inset 0 1px 2px rgba(255, 255, 255, 0.06)'
          : '0 2px 6px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.04)',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        duration: 0.15,
        ease: [0.23, 1, 0.32, 1]
      }}
    >
      {/* Subtle inner shine for depth */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.05), transparent 50%)'
        }}
      />
      
      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.06), transparent 70%)',
          filter: 'blur(5px)'
        }}
      />
      
      {/* Text */}
      <span 
        className="relative z-10"
        style={{
          color: isHovered ? '#A0A0A0' : '#8E8E8E',
        }}
      >
        {children}
      </span>
    </motion.button>
  );
}
