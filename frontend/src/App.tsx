import MainLayout from "./layout/MainLayout.tsx";
import ParallaxCards from "./components/ParallaxCards.tsx";

export default function App() {
  return (
    <MainLayout>
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 pb-0 bg-[#000000]">
        {/* Top badge */}
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-white/10 bg-transparent">
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/50">
              TRUST, REDEFINED
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-center text-[40px] md:text-[52px] lg:text-[64px] font-light leading-[1.1] tracking-[-0.02em]">
          <div 
            className="bg-linear-to-r from-white via-white/50 via-40% to-white/20 bg-clip-text text-transparent"
            style={{ 
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            TRUST MADE SIMPLE.
          </div>
          <div 
            className="bg-linear-to-r from-white/20 via-white/50 via-60% to-white bg-clip-text text-transparent mt-1"
            style={{ 
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            EVERYWHERE IT MATTERS.
          </div>
        </h2>
      </section>

      {/* Parallax Cards Section */}
      <ParallaxCards />
    </MainLayout>
  );
}