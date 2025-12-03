// Performance monitoring utility
// Add this to your browser console to see detailed performance metrics

export function logPerformanceMetrics() {
  if (typeof performance === 'undefined') {
    console.log('Performance API not available')
    return
  }

  const metrics: Record<string, number> = {}

  // Navigation Timing
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  if (navigation) {
    metrics.domContentLoaded = Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart)
    metrics.loadComplete = Math.round(navigation.loadEventEnd - navigation.loadEventStart)
    metrics.dns = Math.round(navigation.domainLookupEnd - navigation.domainLookupStart)
    metrics.tcp = Math.round(navigation.connectEnd - navigation.connectStart)
    metrics.ttfb = Math.round(navigation.responseStart - navigation.requestStart)
    metrics.download = Math.round(navigation.responseEnd - navigation.responseStart)
  }

  // Custom marks and measures
  const marks = performance.getEntriesByType('mark')
  const measures = performance.getEntriesByType('measure')

  console.group('🚀 ORYNTH Performance Metrics')
  
  console.group('📊 Navigation Timing')
  console.table(metrics)
  console.groupEnd()

  if (measures.length > 0) {
    console.group('⏱️ Custom Measurements')
    measures.forEach(measure => {
      console.log(`${measure.name}: ${Math.round(measure.duration)}ms`)
    })
    console.groupEnd()
  }

  if (marks.length > 0) {
    console.group('📍 Performance Marks')
    marks.forEach(mark => {
      console.log(`${mark.name}: ${Math.round(mark.startTime)}ms`)
    })
    console.groupEnd()
  }

  // Paint timing
  const paintEntries = performance.getEntriesByType('paint')
  if (paintEntries.length > 0) {
    console.group('🎨 Paint Timing')
    paintEntries.forEach(entry => {
      console.log(`${entry.name}: ${Math.round(entry.startTime)}ms`)
    })
    console.groupEnd()
  }

  // Resource timing for Spline assets
  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
  const splineResources = resources.filter(r => 
    r.name.includes('spline.design') || 
    r.name.includes('splinetool')
  )
  
  if (splineResources.length > 0) {
    console.group('📦 Spline Resources')
    splineResources.forEach(resource => {
      const duration = Math.round(resource.duration)
      const size = resource.transferSize ? `${Math.round(resource.transferSize / 1024)}KB` : 'cached'
      console.log(`${resource.name.split('/').pop()}: ${duration}ms (${size})`)
    })
    console.groupEnd()
  }

  console.groupEnd()
}

// Auto-run on page load (after everything settles)
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(logPerformanceMetrics, 2000)
  })
}
