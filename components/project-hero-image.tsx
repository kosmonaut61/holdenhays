"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export function ProjectHeroImage({ src, alt }: { src: string; alt: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapperRef.current) return
    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0, y: 32, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power2.out", delay: 0.2 }
    )
  }, [])

  return (
    <div ref={wrapperRef} style={{ opacity: 0 }} className="mt-14 rounded-sm overflow-hidden border border-border/30 bg-black/20">
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={900}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  )
}
