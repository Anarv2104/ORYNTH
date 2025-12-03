import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 md:py-6 bg-[#000000] border-b border-[#2a2a2a]">
      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-3">
        <img 
          src="/2.svg" 
          alt="ORYNTH Logo" 
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
        <span className="text-white text-xs sm:text-sm font-normal tracking-[0.2em] uppercase">
          ORYNTH
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center relative z-50"
        aria-label="Toggle menu"
      >
        <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm">
        <a 
          href="#overview" 
          className="text-[#888888] hover:text-white transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] relative group"
        >
          <span className="relative z-10">Overview</span>
          <span className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-150" />
        </a>
        <a 
          href="#why-orynth" 
          className="text-[#888888] hover:text-white transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] relative group"
        >
          <span className="relative z-10">Why Orynth</span>
          <span className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-150" />
        </a>
        <a 
          href="#how-it-works" 
          className="text-[#888888] hover:text-white transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] relative group"
        >
          <span className="relative z-10">How It Works</span>
          <span className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-150" />
        </a>
        <a 
          href="#pricing" 
          className="text-[#888888] hover:text-white transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] relative group"
        >
          <span className="relative z-10">Pricing</span>
          <span className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-150" />
        </a>
        <a 
          href="#docs" 
          className="text-[#888888] hover:text-white transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] relative group"
        >
          <span className="relative z-10">Docs</span>
          <span className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-150" />
        </a>
        <a 
          href="#api" 
          className="text-[#888888] hover:text-white transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] relative group"
        >
          <span className="relative z-10">API</span>
          <span className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-150" />
        </a>
        <a
          href="#get-started"
          className="text-white hover:text-white transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] flex items-center gap-1 ml-4 relative group"
        >
          <span className="relative z-10 flex items-center gap-1">
            Get Started
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                d="M3 9L9 3M9 3H4M9 3V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="absolute inset-0 rounded-md bg-white/8 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-150" />
        </a>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-xl transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '64px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-base px-6">
          <a 
            href="#overview" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#888888] hover:text-white transition-all duration-150 py-2 text-center w-full"
          >
            Overview
          </a>
          <a 
            href="#why-orynth" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#888888] hover:text-white transition-all duration-150 py-2 text-center w-full"
          >
            Why Orynth
          </a>
          <a 
            href="#how-it-works" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#888888] hover:text-white transition-all duration-150 py-2 text-center w-full"
          >
            How It Works
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#888888] hover:text-white transition-all duration-150 py-2 text-center w-full"
          >
            Pricing
          </a>
          <a 
            href="#docs" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#888888] hover:text-white transition-all duration-150 py-2 text-center w-full"
          >
            Docs
          </a>
          <a 
            href="#api" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#888888] hover:text-white transition-all duration-150 py-2 text-center w-full"
          >
            API
          </a>
          <a
            href="#get-started"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-white transition-all duration-150 py-3 px-8 rounded-full bg-white/10 border border-white/20 mt-4"
          >
            Get Started →
          </a>
        </nav>
      </div>
    </header>
  );
}