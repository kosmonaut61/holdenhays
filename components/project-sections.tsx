"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Section = {
  title: string
  body: string
  image?: string
  imageAlt?: string
}

export function ProjectSections({ sections }: { sections: Section[] }) {
  return (
    <div className="mt-16 space-y-20">
      {sections.map((section, i) => (
        <ProjectSectionItem key={i} section={section} flip={i % 2 !== 0} />
      ))}
    </div>
  )
}

function ProjectSectionItem({ section, flip }: { section: Section; flip: boolean }) {
  const imgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imgRef.current || !textRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, { opacity: 0, y: 28 }, {
        opacity: 1, y: 0, duration: 1.2, ease: "power2.out",
        scrollTrigger: { trigger: imgRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      })
      gsap.fromTo(textRef.current, { opacity: 0, x: flip ? 20 : -20 }, {
        opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 0.15,
        scrollTrigger: { trigger: textRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      })
    })
    return () => ctx.revert()
  }, [flip])

  return (
    <div className={`flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-16 items-center`}>
      {section.image && (
        <div ref={imgRef} className="w-full md:w-3/5 rounded-sm overflow-hidden shadow-xl" style={{ opacity: 0 }}>
          <Image
            src={section.image}
            alt={section.imageAlt ?? section.title}
            width={1400}
            height={900}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
      <div ref={textRef} className="w-full md:w-2/5 space-y-4" style={{ opacity: 0 }}>
        <span className="font-[DotGothic16] text-[11px] uppercase tracking-[0.25em] text-accent">Feature</span>
        <h3 className="font-[DotGothic16] text-3xl md:text-4xl tracking-tight">{section.title}</h3>
        <p className="font-[var(--font-reading)] text-white/72 leading-relaxed">{section.body}</p>
      </div>
    </div>
  )
}
