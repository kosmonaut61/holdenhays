"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { usePrismEffect, PrismLayers } from "@/components/prism-effect"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const blobRef = useRef<HTMLDivElement>(null)
  const blobBRef = useRef<HTMLDivElement>(null)
  const blobCRef = useRef<HTMLDivElement>(null)
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const { elementRef: prismRef, prismStyles } = usePrismEffect()

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Floating + slow rotation animations — each blob has its own offset timing
  useEffect(() => {
    const blobs = [
      { el: blobRef.current,  y1: -18, y2: 8,   y3: -10, r1: 4,  r2: -3, r3: 2,  d1: 4,   d2: 5,   d3: 3.5 },
      { el: blobBRef.current, y1: -12, y2: 14,  y3: -6,  r1: -5, r2: 3,  r3: -2, d1: 5.5, d2: 3.8, d3: 4.2 },
      { el: blobCRef.current, y1: -8,  y2: 10,  y3: -14, r1: 3,  r2: -4, r3: 2,  d1: 3.2, d2: 4.8, d3: 5.1 },
    ]
    const timelines = blobs.map(({ el, y1, y2, y3, r1, r2, r3, d1, d2, d3 }) => {
      if (!el) return null
      const tl = gsap.timeline({ repeat: -1, yoyo: true })
      tl.to(el, { y: y1, rotation: r1, duration: d1, ease: "sine.inOut" })
        .to(el, { y: y2, rotation: r2, duration: d2, ease: "sine.inOut" })
        .to(el, { y: y3, rotation: r3, duration: d3, ease: "sine.inOut" })
      return tl
    })
    return () => { timelines.forEach(tl => tl?.kill()) }
  }, [])

  // Mouse parallax — blobs move at slightly different speeds for depth
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const dx = (e.clientX / innerWidth - 0.5) * 2
      const dy = (e.clientY / innerHeight - 0.5) * 2
      const targets = [
        { el: blobRef.current,  mx: 14, my: 10, dur: 1.2 },
        { el: blobBRef.current, mx: 8,  my: 6,  dur: 1.6 },
        { el: blobCRef.current, mx: 20, my: 14, dur: 0.9 },
      ]
      targets.forEach(({ el, mx, my, dur }) => {
        if (!el) return
        gsap.to(el, { x: dx * mx, y: dy * my, duration: dur, ease: "power2.out", overwrite: "auto" })
      })
    }

    section.addEventListener("mousemove", onMove)
    return () => section.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Primary blob — right center */}
        <div
          ref={blobRef}
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[620px] md:h-[620px] opacity-35 md:opacity-45 mix-blend-screen will-change-transform"
          style={{ backgroundImage: "url('/images/textures/hero-accent-blob.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
        />
        {/* Blob B — upper left, smaller */}
        <div
          ref={blobBRef}
          className="absolute -left-24 top-12 w-[260px] h-[260px] md:w-[360px] md:h-[360px] opacity-20 md:opacity-30 mix-blend-screen will-change-transform"
          style={{ backgroundImage: "url('/images/textures/hero-accent-blob-b.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
        />
        {/* Blob C — bottom right, small */}
        <div
          ref={blobCRef}
          className="absolute right-12 bottom-8 w-[180px] h-[180px] md:w-[240px] md:h-[240px] opacity-20 md:opacity-28 mix-blend-screen will-change-transform"
          style={{ backgroundImage: "url('/images/textures/hero-accent-blob-c.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
        />
      </div>

      <AnimatedNoise opacity={0.03} />

      {/* Left vertical labels */}
      <div className="hidden md:block absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-[DotGothic16] text-[12px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          SIGNAL
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full">
        {/* Commented out flipboard animation - keep for potential future use */}
        {/* <SplitFlapAudioProvider>
          <div className="relative">
            <SplitFlapText text="INTERFACE" speed={80} />
            <div className="mt-4">
              <SplitFlapMuteToggle />
            </div>
          </div>
        </SplitFlapAudioProvider> */}

        <h1 className="font-[DotGothic16] text-white text-[clamp(3rem,12vw,8rem)] leading-none tracking-tight">
          HOLDEN HAYS
        </h1>

        <h2 className="font-sans text-white/70 text-[clamp(1rem,3vw,2rem)] mt-4 tracking-wide font-light">
          Product Focused Leader based in Phoenix, AZ
        </h2>

        <p className="mt-12 max-w-md font-[DotGothic16] text-lg text-white/50 leading-relaxed">
          My background is in product design, my current focus is leading product marketing and design @<a href="https://www.emergemarket.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors duration-200">emerge</a>, building AI-native workflows, and creator of @<a href="https://fretlings.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors duration-200">fretlings</a>.
        </p>

        <div className="mt-16 flex items-center gap-8">
          <a
            ref={prismRef as React.RefObject<HTMLAnchorElement>}
            href="#work"
            className={cn(
              "group relative inline-flex items-center gap-3 border px-6 py-3 font-[DotGothic16] text-sm uppercase tracking-widest transition-all duration-200 rounded-sm overflow-hidden",
              isButtonHovered ? "border-white/30 text-white bg-white/5" : "border-foreground/20 text-foreground"
            )}
            style={isButtonHovered ? prismStyles : {}}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            {isButtonHovered && <PrismLayers intensity="normal" />}
            <span className="relative z-10">
              <ScrambleTextOnHover text="VIEW WORK" as="span" duration={0.6} />
            </span>
            <BitmapChevron className="relative z-10 transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
          <a
            href="/about"
            className="font-[DotGothic16] text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Floating info tag */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <a 
          href="/projects" 
          className="border border-border px-4 py-2 font-[DotGothic16] text-[12px] uppercase tracking-widest text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors duration-200"
        >
          View my personal projects
        </a>
      </div>
    </section>
  )
}
