"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

type ClusterImage = {
  src: string
  alt: string
}

// Positions as % of container width + fixed px top offset.
// Works at any container width — no fixed pixel x offsets.
// Designed for 3–6 images; repeats gracefully beyond that.
const LAYOUTS = [
  { left: "2%",   top: 60,  rotate: -6, z: 10 },
  { left: "30%",  top: 20,  rotate:  4, z: 20 },
  { left: "57%",  top: 70,  rotate: -3, z: 30 },
  { left: "12%",  top: 220, rotate:  5, z: 20 },
  { left: "40%",  top: 200, rotate: -5, z: 10 },
  { left: "65%",  top: 230, rotate:  3, z: 30 },
  { left: "5%",   top: 380, rotate: -4, z: 30 },
  { left: "32%",  top: 370, rotate:  6, z: 20 },
  { left: "60%",  top: 390, rotate: -7, z: 10 },
]

export function ImageCluster({ images }: { images: ClusterImage[] }) {
  const [focused, setFocused] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<number | null>(null)

  // Close lightbox on Escape
  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightbox])

  // Derive container height: enough rows for all images + card height + padding
  const rows = Math.ceil(images.length / 3)
  const containerHeight = 160 + rows * 200

  return (
    <div className="mt-16 mb-8">
      <p className="font-[DotGothic16] text-[11px] uppercase tracking-[0.25em] text-accent mb-6">Gallery</p>
      <div
        className="relative w-full select-none"
        style={{ height: containerHeight }}
      >
        {images.map((img, i) => {
          const layout = LAYOUTS[i % LAYOUTS.length]
          const isFocused = focused === i
          const isDimmed = focused !== null && !isFocused

          return (
            <div
              key={i}
              className="absolute cursor-pointer rounded-sm shadow-lg transition-all duration-300 ease-out"
              style={{
                width: "clamp(140px, 38vw, 260px)",
                left: layout.left,
                top: layout.top,
                zIndex: isFocused ? 50 : layout.z,
                transform: isFocused
                  ? `rotate(0deg) scale(1.45)`
                  : `rotate(${layout.rotate}deg) scale(${isDimmed ? 0.95 : 1})`,
                opacity: isDimmed ? 0.2 : 1,
                transformOrigin: "center center",
              }}
              onClick={() => setLightbox(i)}
              onMouseEnter={() => setFocused(i)}
              onMouseLeave={() => setFocused(null)}
              onTouchStart={() => setFocused(focused === i ? null : i)}
            >
              {/* Natural aspect ratio — no fixed height, top of image always visible */}
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full h-auto object-top"
                sizes="(max-width: 640px) 38vw, 260px"
              />
            </div>
          )
        })}
      </div>
    </div>

    {/* Lightbox */}
    {lightbox !== null && (
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out"
        onClick={() => setLightbox(null)}
      >
        {/* Prev */}
        {images.length > 1 && (
          <button
            className="absolute left-4 md:left-8 text-white/60 hover:text-white font-[DotGothic16] text-2xl px-4 py-2 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length) }}
          >←</button>
        )}

        <div
          className="relative max-w-[90vw] max-h-[90vh] rounded-sm overflow-hidden shadow-2xl cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            width={1400}
            height={900}
            className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>

        {/* Next */}
        {images.length > 1 && (
          <button
            className="absolute right-4 md:right-8 text-white/60 hover:text-white font-[DotGothic16] text-2xl px-4 py-2 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length) }}
          >→</button>
        )}

        {/* Close hint */}
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-[DotGothic16] text-[11px] uppercase tracking-widest text-white/30">
          Click outside or press Esc to close
        </p>
      </div>
    )}
  )
}
