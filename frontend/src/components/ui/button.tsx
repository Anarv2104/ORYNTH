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
        style={{
          backdropFilter: 'blur(20px)',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Outer pill background - gradient shift on hover */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={false}
          animate={{
            background: isHovered
              ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 1) 100%)'
              : 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.2) 100%)',
          }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        />
        
        {/* Border - brightens on hover */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: '1px solid',
          }}
          animate={{
            borderColor: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
          }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        />
        
        {/* Inner bar - light gradient with animated shift */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          initial={false}
          animate={{
            background: isHovered
              ? 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.12) 30%, rgba(255, 255, 255, 0.18) 50%, rgba(255, 255, 255, 0.12) 70%, rgba(255, 255, 255, 0) 100%)'
              : 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.06) 70%, rgba(255, 255, 255, 0) 100%)',
            backgroundPosition: isHovered ? '100% 50%' : '0% 50%',
            backgroundSize: '200% 100%',
          }}
          transition={{ 
            background: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
            backgroundPosition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
          }}
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
      className={`group relative h-[42px] sm:h-[46px] px-6 sm:px-8 rounded-full flex items-center justify-center cursor-pointer touch-manipulation overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Base background - fills with dark gradient on hover */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          background: isHovered
            ? 'linear-gradient(135deg, rgba(10, 10, 12, 0.9) 0%, rgba(5, 5, 6, 0.95) 100%)'
            : 'rgba(0, 0, 0, 0.4)',
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      />
      
      {/* Border - brightens on hover */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          border: '1px solid',
        }}
        animate={{
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      />
      
      {/* Text - lightens on hover */}
      <span 
        className="relative z-10 font-semibold text-[10px] sm:text-[11px] tracking-[0.08em] uppercase flex items-center gap-2"
        style={{
          color: isHovered ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
          transition: 'color 0.3s ease',
        }}
      >
        {children}
      </span>
    </motion.button>
  );
}
