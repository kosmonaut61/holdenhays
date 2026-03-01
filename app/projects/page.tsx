"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatedNoise } from "@/components/animated-noise"
import { cn } from "@/lib/utils"
import { usePrismEffect, PrismLayers } from "@/components/prism-effect"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const personalProjects = [
  {
    title: "Fretlingz",
    medium: "Educational Game",
    description: "A guitar learning app to help kids master the fretboard through interactive gameplay.",
    url: "https://fretlingz.vercel.app/",
    span: "col-span-2 row-span-2",
  },
  {
    title: "Mecharythm",
    medium: "Puzzle Game",
    description: "Giant robot & monster themed puzzle-based strategy game with tactical combat.",
    url: "https://mecharythm.vercel.app/",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Westward Ho",
    medium: "Action Game",
    description: "Western themed 3-column dodging game with fast-paced arcade action.",
    url: "https://westwardho.vercel.app/",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Coming Soon",
    medium: "Game Development",
    description: "New project in development.",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Coming Soon",
    medium: "Game Development",
    description: "New project in development.",
    span: "col-span-2 row-span-1",
  },
  {
    title: "Coming Soon",
    medium: "Game Development",
    description: "New project in development.",
    span: "col-span-1 row-span-1",
  },
]

export default function ProjectsPage() {
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
    <main className="relative min-h-screen">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      <AnimatedNoise opacity={0.03} />

      <section ref={sectionRef} className="relative z-10 min-h-screen py-32 pl-6 md:pl-28 pr-6 md:pr-12">
        <div className="w-full">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-[DotGothic16] text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-12"
          >
            <span>←</span> BACK TO HOME
          </Link>

          {/* Header */}
          <div ref={headerRef} className="mb-16">
            <span className="font-[DotGothic16] text-[12px] uppercase tracking-[0.3em] text-accent">
              PERSONAL PROJECTS
            </span>
            <h1 className="mt-4 font-[DotGothic16] text-5xl md:text-7xl tracking-tight">PROJECTS</h1>
            <p className="mt-6 max-w-2xl font-[DotGothic16] text-lg text-white/50 leading-relaxed">
              A collection of AI-powered games and experimental projects I've built for fun and learning.
            </p>
          </div>

          {/* Asymmetric grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]"
          >
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} persistHover={index === 0} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function ProjectCard({
  project,
  index,
  persistHover = false,
}: {
  project: {
    title: string
    medium: string
    description: string
    url?: string
    span: string
  }
  index: number
  persistHover?: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
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

  const CardContent = (
    <article
      ref={(el) => {
        cardRef.current = el
        if (isActive && el) {
          ;(prismRef as React.MutableRefObject<HTMLElement | null>).current = el
        }
      }}
      className={cn(
        "group relative border border-border/40 p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden rounded-sm",
        project.span,
        isActive && "border-white/20",
      )}
      style={isActive ? prismStyles : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isActive && <PrismLayers intensity="subtle" />}

      {/* Background layer */}
      <div
        className={cn(
          "absolute inset-0 bg-white/5 transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        <span className="font-[DotGothic16] text-[12px] uppercase tracking-widest text-muted-foreground">
          {project.medium}
        </span>
        <h3
          className={cn(
            "mt-3 font-[var(--font-bebas)] text-2xl md:text-4xl tracking-tight transition-colors duration-300",
            isActive ? "text-white" : "text-foreground",
          )}
        >
          {project.title}
        </h3>
      </div>

      {/* Description - reveals on hover */}
      <div className="relative z-10">
        <p
          className={cn(
            "font-[DotGothic16] text-sm text-muted-foreground leading-relaxed transition-all duration-500 max-w-[280px]",
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
        >
          {project.description}
        </p>
      </div>

      {/* Index marker */}
      <span
        className={cn(
          "absolute bottom-4 right-4 font-[DotGothic16] text-[12px] transition-colors duration-300",
          isActive ? "text-white" : "text-muted-foreground/40",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Corner line */}
      <div
        className={cn(
          "absolute top-0 right-0 w-12 h-12 transition-all duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-white/60" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-white/60" />
      </div>
    </article>
  )

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className={project.span}>
        {CardContent}
      </a>
    )
  }

  return CardContent
}
