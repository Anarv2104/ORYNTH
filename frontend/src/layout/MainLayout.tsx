import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero /> 
      <main>{children}</main>
    </div>
  );
}