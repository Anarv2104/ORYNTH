import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Lenis from 'lenis'
import CustomCursor from './components/CustomCursor.tsx'
import './lib/performance' // Auto-run performance monitoring

// Eagerly prefetch Spline scene before React even starts
void fetch('https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode', { 
  mode: 'cors', 
  cache: 'force-cache' 
}).catch(() => {})

function AppWithLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <CustomCursor />
      <App />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithLenis />
  </StrictMode>,
)
