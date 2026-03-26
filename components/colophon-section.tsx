"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ColophonSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Grid columns fade up with stagger
      if (gridRef.current) {
        const columns = gridRef.current.querySelectorAll(":scope > div")
        gsap.from(columns, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Footer fade in
      if (footerRef.current) {
        gsap.from(footerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="colophon"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30 overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-12 bottom-12 w-[240px] h-[240px] md:w-[320px] md:h-[320px] opacity-12 md:opacity-16 mix-blend-screen animate-blob-float-b"
          style={{ backgroundImage: "url('/images/textures/hero-accent-blob-b.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
      </div>
      {/* Section header */}
      <div ref={headerRef} className="mb-16 max-w-4xl">
        <span className="font-[DotGothic16] text-[12px] uppercase tracking-[0.3em] texture-accent-text">03 / Thanks</span>
        <h2 className="mt-4 font-[DotGothic16] text-5xl md:text-7xl tracking-tight">LET&apos;S BUILD SOMETHING USEFUL.</h2>
        <p className="mt-6 font-[DotGothic16] text-sm md:text-base text-foreground/70 leading-relaxed">
          I lead products from early signal to shipped experience — blending product leadership, AI workflows,
          go-to-market thinking, and UX architecture.
        </p>
      </div>

      {/* Footer content */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl">
        <div className="col-span-1 border border-border/40 bg-card/40 rounded-sm p-6">
          <h4 className="font-[DotGothic16] text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Now</h4>
          <ul className="space-y-3 font-[DotGothic16] text-sm text-foreground/80">
            <li>Leading product marketing + design at <a href="https://www.emergemarket.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-200">Emerge</a></li>
            <li>Building and shipping <a href="https://fretlings.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-200">Fretlings</a></li>
          </ul>
        </div>

        <div className="col-span-1 border border-border/40 bg-card/40 rounded-sm p-6">
          <h4 className="font-[DotGothic16] text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Navigate</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="font-[DotGothic16] text-sm text-foreground/80 hover:text-accent transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link href="/about" className="font-[DotGothic16] text-sm text-foreground/80 hover:text-accent transition-colors duration-200">About</Link>
            </li>
            <li>
              <Link href="/projects" className="font-[DotGothic16] text-sm text-foreground/80 hover:text-accent transition-colors duration-200">Projects</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 border border-border/40 bg-card/40 rounded-sm p-6">
          <h4 className="font-[DotGothic16] text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a href="mailto:hello@holdenhays.com" className="font-[DotGothic16] text-sm text-foreground/80 hover:text-accent transition-colors duration-200">
                hello@holdenhays.com
              </a>
            </li>
            <li>
              <a href="https://www.emergemarket.com" target="_blank" rel="noopener noreferrer" className="font-[DotGothic16] text-sm text-foreground/80 hover:text-accent transition-colors duration-200">
                @emerge
              </a>
            </li>
            <li>
              <a href="https://fretlings.com" target="_blank" rel="noopener noreferrer" className="font-[DotGothic16] text-sm text-foreground/80 hover:text-accent transition-colors duration-200">
                @fretlings
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        ref={footerRef}
        className="mt-24 pt-8 border-t border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <p className="font-[DotGothic16] text-[12px] text-muted-foreground uppercase tracking-widest">
          © 2026 Holden Hays. All rights reserved.
        </p>
      </div>
    </section>
  )
}
