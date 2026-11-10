"use client"

import { useEffect, useRef, useState } from 'react'
import { PortfolioNav } from './portfolio-nav'
import type { BildpunktVisualizer } from '@audiohays/tonewedge-ui/visualizer'

export function DitherHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const visualRef = useRef<BildpunktVisualizer | null>(null)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let disposed = false
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotion = () => setReducedMotion(motion.matches)
    onMotion()
    motion.addEventListener('change', onMotion)
    import('@audiohays/tonewedge-ui/visualizer').then(({ BildpunktVisualizer, visualizerPaletteForMaterial }) => {
      if (disposed || !canvasRef.current) return
      const visual = new BildpunktVisualizer(canvasRef.current, {
        scene: 'flow', fps: 20, minPixel: 4,
        reducedMotion: true, pauseWhenHidden: true,
        palette: visualizerPaletteForMaterial({palette:'spectral',mode:'light'}),
      })
      visualRef.current = visual
      visual.setEnergy(.26, {immediate:true})
      visual.start()
      setReady(true)
    }).catch(() => {
      visualRef.current?.destroy()
      visualRef.current = null
      // Keep the readable static fallback if canvas initialization fails.
    })
    return () => { disposed=true; motion.removeEventListener('change',onMotion); visualRef.current?.destroy(); visualRef.current=null }
  }, [])

  function toggleMotion() {
    const next = !paused
    setPaused(next)
    if (next) visualRef.current?.stop()
    else visualRef.current?.start()
  }

  return <>
    <a className="portfolio-skip" href="#portfolio-content">Skip to content</a>
    <section className="dither-hero" aria-labelledby="hero-name">
      <canvas ref={canvasRef} className="dither-hero-canvas" aria-hidden="true" />
      <div className="hero-signature"><h1 id="hero-name">Holden Hays</h1><p>Product Focused Leader</p></div>
    </section>
    <div id="portfolio-content" className="hero-content-nav" tabIndex={-1}>
      <PortfolioNav />
      {ready && !reducedMotion && <button type="button" className="hero-motion" onClick={toggleMotion} aria-pressed={paused} aria-label={paused ? 'Play background animation' : 'Pause background animation'}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span></button>}
    </div>
  </>
}
