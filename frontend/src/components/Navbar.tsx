export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-8 py-6 bg-[#000000] border-b border-[#2a2a2a]">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img 
          src="/2.svg" 
          alt="ORYNTH Logo" 
          className="w-6 h-6"
        />
        <span className="text-white text-sm font-normal tracking-[0.2em] uppercase">
          ORYNTH
        </span>
      </div>

      {/* Right Navigation */}
      <nav className="flex items-center gap-8 text-sm">
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
    </header>
  );
}