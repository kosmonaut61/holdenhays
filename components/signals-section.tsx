"use client"

import React from "react"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePrismEffect, PrismLayers } from "./prism-effect"

gsap.registerPlugin(ScrollTrigger)

const signals = [
  {
    title: "Product Leadership",
    note: "Driving product direction from vision to execution by aligning customer needs, business goals, and cross-functional teams.",
  },
  {
    title: "AI Workflows",
    note: "Designing practical AI-assisted systems that speed up decisions, reduce manual work, and improve operational outcomes.",
  },
  {
    title: "Go to Market",
    note: "Shaping positioning, messaging, and launch plans that connect product value to real customer adoption.",
  },
  {
    title: "UX Architecture",
    note: "Structuring complex experiences into clear, scalable interaction patterns that teams can build and users can trust.",
  },
]

export function SignalsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in from left
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(
          cards,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="signals" ref={sectionRef} className="relative py-32 pl-6 md:pl-28 overflow-hidden">
      {/* Section header */}
      <div ref={headerRef} className="mb-16 pr-6 md:pr-12">
        <span className="font-[DotGothic16] text-[12px] uppercase tracking-[0.3em] texture-accent-text">01 / INTRO</span>
        <h2 className="mt-4 font-[DotGothic16] text-5xl md:text-7xl tracking-tight">WHO AM I?</h2>
        <p className="mt-8 max-w-2xl font-[DotGothic16] text-lg text-white/50 leading-relaxed">
          I'm a designer at heart, taking problems and breaking them down into solvable pieces. <span className="text-white">I use my powers for business.</span>
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={(el) => {
          scrollRef.current = el
          cardsRef.current = el
        }}
        className="flex gap-8 overflow-x-auto pb-8 pr-12 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {signals.map((signal, index) => (
          <SignalCard key={index} signal={signal} index={index} href="/projects/project-lattice" />
        ))}
      </div>

    </section>
  )
}

function SignalCard({
  signal,
  index,
  href,
}: {
  signal: { title: string; note: string }
  index: number
  href: string
}) {
  const [isHovered, setIsHovered] = useState(false)
  const bubbleRef = useRef<HTMLDivElement>(null)
  const { elementRef: prismRef, prismStyles } = usePrismEffect()

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!bubbleRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    gsap.to(bubbleRef.current, {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      duration: 0.35,
      ease: "power3.out",
    })
  }

  return (
    <Link href={href} className="block" aria-label={`Open ${signal.title} project`}>
      <article
        ref={prismRef as React.RefObject<HTMLElement>}
        className={cn(
          "group relative flex-shrink-0 w-80 border p-8 rounded-sm overflow-hidden",
          "transition-all duration-500 ease-out cursor-pointer",
          isHovered ? "border-white/20 bg-white/5 -translate-y-2" : "border-border/40 bg-card",
        )}
        style={isHovered ? prismStyles : {}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {isHovered && <PrismLayers intensity="subtle" />}

        <div
          ref={bubbleRef}
          className={cn(
            "pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-20",
            "w-10 h-10 rounded-full border border-white/30 bg-white/10",
            "transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Background layer */}
        <div
          className={cn(
            "absolute inset-0 bg-white/5 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Title */}
        <h3 className={cn(
          "relative font-[var(--font-bebas)] text-4xl tracking-tight mb-6 transition-colors duration-300",
          isHovered ? "text-white" : "text-foreground",
        )}>
          {signal.title}
        </h3>

        {/* Description */}
        <p className="relative font-[DotGothic16] text-sm text-muted-foreground leading-relaxed">{signal.note}</p>

        {/* Index marker */}
        <span
          className={cn(
            "absolute bottom-8 right-8 font-[DotGothic16] text-[12px] transition-colors duration-300",
            isHovered ? "text-white" : "text-muted-foreground/40",
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </article>
    </Link>
  )
}

