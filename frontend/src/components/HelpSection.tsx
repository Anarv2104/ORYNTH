import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Orynth?",
    answer: "Orynth is a trust layer that helps platforms ensure the AI systems they use are verified, accountable, and behaving as expected."
  },
  {
    question: "Why does this matter to me as a user?",
    answer: "It reduces the risk of unsafe automation, unreliable AI behavior, or hidden system changes in the products you rely on."
  },
  {
    question: "Does Orynth access or store my personal data?",
    answer: "No. Orynth evaluates AI system behavior, not user data, conversations, or personal information."
  },
  {
    question: "How does Orynth improve safety and reliability?",
    answer: "It ensures only verified AI systems can operate and makes behavior changes visible instead of silent."
  },
  {
    question: "Is Orynth free for users?",
    answer: "Yes. Users never pay for Orynth. Only platforms integrating it cover the cost."
  },
  {
    question: "When will Orynth be available?",
    answer: "Orynth is available via early access to selected partners, with phased integrations leading to a broader public rollout."
  }
];

function FAQAccordion({ item, isOpen, onToggle, index }: { 
  item: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.3 }}
      className="border-b border-white/10 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-sm sm:text-base text-white/90 font-light tracking-wide pr-4 group-hover:text-white transition-colors duration-300">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white/50 group-hover:text-white/80 transition-colors duration-300"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-white/50 font-light leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HelpSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll progress tracking for subtle parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.3
  });

  const cardY = useTransform(smoothProgress, [0, 1], [60, -60]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Header Section */}
      <div className="relative px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-24 md:pt-32 pb-16">
        {/* Subtle gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
              <span 
                className="italic bg-clip-text text-transparent"
                style={{ 
                  background: 'linear-gradient(to right, #ECECEC 0%, #C8C8C8 30%, #A0A0A0 60%, #787878 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                NEED HELP?
              </span>
              <br />
              <span 
                className="italic bg-clip-text text-transparent"
                style={{ 
                  background: 'linear-gradient(to right, #A0A0A0 0%, #787878 30%, #606060 60%, #484848 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                GET IN TOUCH!
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-xs sm:text-sm text-white/40 font-light tracking-wide uppercase max-w-sm lg:text-right leading-relaxed"
          >
            CONTACT OUR DEDICATED SUPPORT TEAM FOR
            QUICK AND RELIABLE ASSISTANCE. WE'RE HERE
            TO HELP YOU EVERY STEP OF THE WAY!
          </motion.p>
        </div>
      </div>

      {/* Main Content - FAQ + Contact Form */}
      <div className="relative px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pb-24 md:pb-32 -mt-6 md:-mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* FAQ Panel - Left Side */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="mb-8"
              >
                <span className="inline-block px-4 py-2 text-[10px] sm:text-xs tracking-[0.25em] text-white/60 font-light border border-white/10 rounded-full backdrop-blur-sm">
                  FAQ
                </span>
                <h3 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-light tracking-tight">
                  <span className="italic text-white/80">FIND YOUR</span>
                  <br />
                  <span className="italic text-white/50">ANSWERS</span>
                </h3>
              </motion.div>

              <div className="space-y-0">
                {faqData.map((item, index) => (
                  <FAQAccordion
                    key={index}
                    item={item}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Contact Form Card - Right Side */}
            <motion.div 
              className="order-1 lg:order-2"
              style={{ y: cardY }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                {/* Subtle glow effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative p-6 sm:p-8 md:p-10">
                  <h4 className="text-lg sm:text-xl font-light tracking-tight mb-1">
                    <span className="italic text-white/90">NEED </span>
                    <span className="italic text-white/50">ASSISTANCE</span>
                  </h4>
                  <p className="text-lg sm:text-xl font-light tracking-tight mb-8">
                    <span className="italic text-white/90">OR </span>
                    <span className="italic text-white/50">HAVE </span>
                    <span className="italic text-white/90">QUESTIONS?</span>
                  </p>

                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    {/* Full Name */}
                    <div>
                      <label className="block text-[10px] sm:text-xs tracking-[0.2em] text-white/40 font-light mb-2.5 uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Anderson"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white/90 text-sm font-light placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/8 transition-all duration-300"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] sm:text-xs tracking-[0.2em] text-white/40 font-light mb-2.5 uppercase">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="john.anderson@gmail.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white/90 text-sm font-light placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/8 transition-all duration-300"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] sm:text-xs tracking-[0.2em] text-white/40 font-light mb-2.5 uppercase">
                        Message
                      </label>
                      <textarea
                        placeholder="How can we help you?"
                        rows={3}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white/90 text-sm font-light placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/8 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 mt-2 rounded-lg text-sm font-medium tracking-wider uppercase transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(220, 220, 220, 0.9) 100%)",
                        color: "#0a0a0a",
                        boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      Send a Message
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
