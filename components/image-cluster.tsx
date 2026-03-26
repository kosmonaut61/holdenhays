"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

type ClusterImage = {
  src: string
  alt: string
}

const LAYOUTS = [
  { left: "2%",  top: 60,  rotate: -6, z: 10 },
  { left: "30%", top: 20,  rotate:  4, z: 20 },
  { left: "57%", top: 70,  rotate: -3, z: 30 },
  { left: "12%", top: 240, rotate:  5, z: 20 },
  { left: "40%", top: 210, rotate: -5, z: 10 },
  { left: "65%", top: 230, rotate:  3, z: 30 },
  { left: "5%",  top: 400, rotate: -4, z: 30 },
  { left: "32%", top: 380, rotate:  6, z: 20 },
  { left: "60%", top: 390, rotate: -7, z: 10 },
]

const CARD_W = "clamp(160px, 40vw, 280px)"

export function ImageCluster({ images }: { images: ClusterImage[] }) {
  const [focused, setFocused] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<number | null>(null)

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightbox])

  // Height = tallest possible bottom edge + buffer
  const rows = Math.ceil(images.length / 3)
  const containerH = 80 + rows * 260

  return (
    <>
      <div className="mt-16 mb-8">
        <p className="font-[DotGothic16] text-[11px] uppercase tracking-[0.25em] text-accent mb-6">Gallery</p>

        {/* overflow-visible so cards outside bounds are still clickable */}
        <div
          className="relative w-full"
          style={{ height: containerH, overflow: "visible" }}
        >
          {images.map((img, i) => {
            const layout = LAYOUTS[i % LAYOUTS.length]
            const isFocused = focused === i
            const isDimmed = focused !== null && !isFocused

            return (
              <div
                key={i}
                className="absolute rounded-sm shadow-lg transition-all duration-300 ease-out"
                style={{
                  width: CARD_W,
                  left: layout.left,
                  top: layout.top,
                  zIndex: isFocused ? 50 : layout.z,
                  transform: isFocused
                    ? "rotate(0deg) scale(1.1)"
                    : `rotate(${layout.rotate}deg) scale(${isDimmed ? 0.95 : 1})`,
                  opacity: isDimmed ? 0.25 : 1,
                  cursor: "pointer",
                  userSelect: "none",
                }}
                onMouseEnter={() => setFocused(i)}
                onMouseLeave={() => setFocused(null)}
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto block rounded-sm"
                  draggable={false}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox — rendered outside cluster div so no z-index conflicts */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          style={{ cursor: "zoom-out" }}
          onClick={() => setLightbox(null)}
        >
          {images.length > 1 && (
            <button
              className="absolute left-4 md:left-8 z-10 font-[DotGothic16] text-2xl text-white/50 hover:text-white px-4 py-2 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length) }}
            >←</button>
          )}

          <div
            className="rounded-sm overflow-hidden shadow-2xl"
            style={{ maxWidth: "90vw", maxHeight: "90vh", cursor: "default" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              width={1400}
              height={900}
              className="block w-auto h-auto"
              style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }}
            />
          </div>

          {images.length > 1 && (
            <button
              className="absolute right-4 md:right-8 z-10 font-[DotGothic16] text-2xl text-white/50 hover:text-white px-4 py-2 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length) }}
            >→</button>
          )}

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-[DotGothic16] text-[11px] uppercase tracking-widest text-white/25">
            Click outside or Esc to close
          </p>
        </div>
      )}
    </>
  )
}
