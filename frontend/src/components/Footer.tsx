import { motion } from "framer-motion";

const productLinks = [
  { name: "Overview", href: "#" },
  { name: "Why Orynth", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "FAQ", href: "#" },
];

const developerLinks = [
  { name: "Documentation", href: "#", external: true },
  { name: "API", href: "#", external: true },
  { name: "GitHub", href: "#", external: true },
];

const companyLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Use", href: "#" },
  { name: "Contact", href: "#" },
];

function ExternalLinkIcon() {
  return (
    <svg 
      width="10" 
      height="10" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      className="ml-1 opacity-50"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-20 md:pt-28 pb-8">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-24">
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-5">
                <img src="/2.svg" alt="Orynth" className="w-7 h-7" />
                <span className="text-[13px] tracking-[0.15em] uppercase text-white/90 font-light">ORYNTH</span>
              </div>
              <p className="text-[13px] sm:text-[14px] text-white/40 font-light leading-[1.7] max-w-xs">
                Orynth is a trust and identity layer for autonomous AI systems.
              </p>
            </motion.div>

            {/* Product Links */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h4 className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-white/30 font-light mb-5">
                Product
              </h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-[13px] sm:text-[14px] text-white/60 font-light hover:text-white/90 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Developer Links */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h4 className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-white/30 font-light mb-5">
                Developers
              </h4>
              <ul className="space-y-3">
                {developerLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="inline-flex items-center text-[13px] sm:text-[14px] text-white/60 font-light hover:text-white/90 transition-colors duration-300"
                    >
                      {link.name}
                      {link.external && <ExternalLinkIcon />}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h4 className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-white/30 font-light mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-[13px] sm:text-[14px] text-white/60 font-light hover:text-white/90 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Empty space for alignment */}
            <div className="hidden lg:block lg:col-span-2" />
          </div>

          {/* Early Access Note */}
          <motion.div 
            className="mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] sm:text-[12px] text-white/25 font-light tracking-wide">
              Early access available for selected integrations.
            </p>
          </motion.div>

          {/* Large Background Logo Text */}
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-center gap-4 md:gap-8"
            >
              {/* Logo Icon - Large */}
              <img 
                src="/2.svg" 
                alt="" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-[0.08]" 
              />
              {/* ORYNTH Text - Large */}
              <span 
                className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] font-light tracking-[-0.02em] leading-none"
                style={{ color: 'rgba(255, 255, 255, 0.06)' }}
              >
                ORYNTH
              </span>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div 
            className="mt-8 md:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] sm:text-[12px] text-white/25 font-light">
              © 2026 Orynth. All rights reserved.
            </p>
            <p className="text-[10px] sm:text-[11px] text-white/20 font-light tracking-wide">
              Built for open, verifiable AI systems.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
