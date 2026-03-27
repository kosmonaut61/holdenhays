"use client"

import React from "react"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePrismEffect, PrismLayers } from "./prism-effect"
import { projects } from "@/lib/projects"
import { ArrowUpRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const projectOrder = [
  "project-lattice",
  "silent-agent",
  "alchemail",
  "connie",
  "freight-spend-optimization",
  "inventory-part-management",
]

const experiments = projectOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project))

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return

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
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = gridRef.current?.querySelectorAll("article")
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 60, opacity: 0 })
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="work" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 top-16 w-[300px] h-[300px] md:w-[420px] md:h-[420px] opacity-15 md:opacity-22 mix-blend-screen animate-blob-float-b"
          style={{ backgroundImage: "url('/images/textures/hero-accent-blob-b.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
      </div>
      {/* Section header */}
      <div ref={headerRef} className="mb-16 flex items-end justify-between">
        <div>
          <span className="font-[DotGothic16] text-[12px] uppercase tracking-[0.3em] texture-accent-text">02 / Projects</span>
          <h2 className="mt-4 font-[DotGothic16] text-5xl md:text-7xl tracking-tight">SELECTED WORK</h2>
        </div>
        <p className="hidden md:block max-w-xs font-[DotGothic16] text-sm text-muted-foreground text-right leading-relaxed">
          Studies across interface design, agent systems, and visual computation.
        </p>
      </div>

      {/* Unified grid */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {experiments.map((experiment, index) => (
          <WorkCard key={index} experiment={experiment} persistHover={index === 0} />
        ))}
      </div>
    </section>
  )
}

function WorkCard({
  experiment,
  persistHover = false,
}: {
  experiment: {
    title: string
    medium: string
    description: string
    slug: string
  }
  persistHover?: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const bubbleRef = useRef<HTMLDivElement>(null)
  const [isScrollActive, setIsScrollActive] = useState(false)
  const { elementRef: prismRef, prismStyles } = usePrismEffect()

  useEffect(() => {
    if (!persistHover || !cardRef.current) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        onEnter: () => setIsScrollActive(true),
      })
    }, cardRef)

    return () => ctx.revert()
  }, [persistHover])

  const isActive = isHovered || isScrollActive

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

  const card = (
    <article
      ref={(el) => {
        cardRef.current = el
        if (isActive && el) {
          ;(prismRef as React.MutableRefObject<HTMLElement | null>).current = el
        }
      }}
      className={cn(
        "group relative border border-border/40 px-5 py-5 md:px-6 md:py-6 flex flex-col gap-5 transition-all duration-500 cursor-pointer overflow-hidden rounded-sm min-h-[190px] md:min-h-[210px]",
        isActive && "border-white/20",
      )}
      style={isActive ? prismStyles : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {isActive && <PrismLayers intensity="subtle" />}

      <div
        ref={bubbleRef}
        className={cn(
          "pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-20",
          "w-10 h-10 rounded-full border border-white/30 bg-white/10",
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        className={cn(
          "absolute inset-0 bg-white/5 transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <span className="font-[DotGothic16] text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          {experiment.medium}
        </span>
        <ArrowUpRight
          className={cn(
            "h-4 w-4 transition-all duration-300",
            isActive ? "text-white translate-x-0.5 -translate-y-0.5" : "text-muted-foreground",
          )}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 space-y-3 mt-auto">
        <h3
          className={cn(
            "font-[DotGothic16] text-xl md:text-2xl tracking-tight transition-colors duration-300",
            isActive ? "text-white" : "text-foreground",
          )}
        >
          {experiment.title}
        </h3>
        <p className="font-[DotGothic16] text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {experiment.description}
        </p>
      </div>
    </article>
  )

  return (
    <Link href={`/projects/${experiment.slug}`} className="block h-full">
      {card}
    </Link>
  )
}
