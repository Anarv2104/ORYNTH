"use client"

import { Suspense, useEffect, useState, useRef } from "react"
import Spline from "@splinetool/react-spline"

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [sceneUrl, setSceneUrl] = useState<string | null>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const splineRef = useRef<any>(null)

  // Intersection Observer: load Spline when near viewport, pause when scrolled away
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoad) {
            setShouldLoad(true)
          }
          // Pause/resume rendering based on visibility
          setIsVisible(entry.isIntersecting)
        })
      },
      {
        rootMargin: "200px",
        threshold: 0,
      }
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [shouldLoad])

  // Pause animations when tab is inactive (Page Visibility API)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  // Control Spline rendering based on visibility
  useEffect(() => {
    if (splineRef.current && splineRef.current.pause && splineRef.current.play) {
      if (isVisible) {
        splineRef.current.play()
      } else {
        splineRef.current.pause()
      }
    }
  }, [isVisible])

  // Fetch scene as blob for better caching and performance
  useEffect(() => {
    if (!shouldLoad) return

    let cancelled = false
    let objectUrl: string | null = null

    async function warmScene() {
      try {
        const resp = await fetch(scene, { mode: "cors", cache: "force-cache" })
        if (!resp.ok) throw new Error(`Failed to fetch scene: ${resp.status}`)
        const blob = await resp.blob()
        objectUrl = URL.createObjectURL(blob)
        if (!cancelled) setSceneUrl(objectUrl)
      } catch (err) {
        console.warn("Spline scene preload failed, using remote URL", err)
        if (!cancelled) setSceneUrl(scene)
      }
    }

    warmScene()

    return () => {
      cancelled = true
      if (objectUrl) {
        try {
          URL.revokeObjectURL(objectUrl)
        } catch (e) {
          /* ignore */
        }
      }
    }
  }, [scene, shouldLoad])

  return (
    <div ref={containerRef} className={`w-full h-full ${className || ""}`}>
      {!shouldLoad || !sceneUrl ? (
        // Instant loading placeholder - lightweight CSS gradient sphere
        <div className="w-full h-full flex items-center justify-center">
          <div 
            className="relative"
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05) 45%, rgba(0, 0, 0, 0.1))",
              boxShadow: "0 20px 60px rgba(255, 255, 255, 0.1), inset 0 0 40px rgba(255, 255, 255, 0.08)",
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          >
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle at 70% 70%, transparent 30%, rgba(0, 0, 0, 0.2))",
              }}
            />
          </div>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div 
                style={{
                  width: "220px",
                  height: "220px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05) 45%, rgba(0, 0, 0, 0.1))",
                  boxShadow: "0 20px 60px rgba(255, 255, 255, 0.1)",
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              />
            </div>
          }
        >
          {/* @ts-ignore - Spline types can be added later if needed */}
          <Spline 
            scene={sceneUrl} 
            className={className}
            onLoad={(spline: any) => {
              splineRef.current = spline
              if (!isVisible && spline.pause) {
                spline.pause()
              }
            }}
          />
        </Suspense>
      )}
    </div>
  )
}