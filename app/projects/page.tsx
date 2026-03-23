"use client"

import React, { useState, useRef, useEffect } from "react"
import { AnimatedNoise } from "@/components/animated-noise"
import { cn } from "@/lib/utils"
import { usePrismEffect, PrismLayers } from "@/components/prism-effect"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"
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
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-[DotGothic16] text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-12"
          >
            <span>←</span> BACK TO HOME
          </Link>

          <div ref={headerRef} className="mb-16">
            <span className="font-[DotGothic16] text-[12px] uppercase tracking-[0.3em] text-accent">PERSONAL PROJECTS</span>
            <h1 className="mt-4 font-[DotGothic16] text-5xl md:text-7xl tracking-tight">PROJECTS</h1>
            <p className="mt-6 max-w-2xl font-[DotGothic16] text-lg text-white/50 leading-relaxed">
              A collection of AI-powered games and experimental projects I've built for fun and learning.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-[1.05fr,1fr] border border-border/40 rounded-sm p-6 md:p-8 bg-black/20">
            <div>
              <span className="font-[DotGothic16] text-[11px] uppercase tracking-[0.28em] text-accent">Featured Personal Project</span>
              <h2 className="mt-3 font-[DotGothic16] text-2xl md:text-3xl tracking-tight">Flamework</h2>
              <p className="mt-3 max-w-3xl font-[DotGothic16] text-sm md:text-base text-white/70 leading-relaxed">
                Flamework is a personal build lab for fast product experiments, interaction prototypes, and AI-forward concepts. It’s where ideas get pressure-tested before they become full case studies.
              </p>
            </div>

            <div className="relative">
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {[
                    {
                      src: "/images/flamework/flamework-01-square.jpg",
                      alt: "Flamework concept artwork",
                    },
                  ].map((image) => (
                    <CarouselItem key={image.src}>
                      <div className="relative aspect-square overflow-hidden rounded-sm border border-border/40 bg-black/40">
                        <Image src={image.src} alt={image.alt} fill className="object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 top-auto bottom-2 translate-y-0 h-7 w-7 border-border/40 bg-black/60 hover:bg-black/80" />
                <CarouselNext className="right-2 top-auto bottom-2 translate-y-0 h-7 w-7 border-border/40 bg-black/60 hover:bg-black/80" />
              </Carousel>
            </div>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} persistHover={index === 0} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function ProjectCard({
  project,
  persistHover = false,
}: {
  project: {
    title: string
    medium: string
    description: string
    url?: string
    span: string
  }
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
    >
      {isActive && <PrismLayers intensity="subtle" />}

      <div className={cn("absolute inset-0 bg-white/5 transition-opacity duration-500", isActive ? "opacity-100" : "opacity-0")} />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <span className="font-[DotGothic16] text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{project.medium}</span>
        <span className={cn("font-[DotGothic16] text-lg leading-none transition-transform duration-300", isActive ? "text-white translate-x-0.5 -translate-y-0.5" : "text-muted-foreground")}>↗</span>
      </div>

      <div className="relative z-10 space-y-3 mt-auto">
        <h3
          className={cn(
            "font-[DotGothic16] text-xl md:text-2xl tracking-tight transition-colors duration-300",
            isActive ? "text-white" : "text-foreground",
          )}
        >
          {project.title}
        </h3>
        <p className="font-[DotGothic16] text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </article>
  )

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {card}
      </a>
    )
  }

  return <div className="block h-full">{card}</div>
}
