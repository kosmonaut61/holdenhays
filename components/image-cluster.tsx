"use client"

import Image from "next/image"
import { useState } from "react"
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
              className="absolute cursor-pointer overflow-hidden rounded-sm shadow-lg transition-all duration-300 ease-out"
              style={{
                // Card size: responsive via clamp
                width: "clamp(140px, 38vw, 260px)",
                height: "clamp(100px, 27vw, 185px)",
                left: layout.left,
                top: layout.top,
                zIndex: isFocused ? 50 : layout.z,
                transform: isFocused
                  ? `rotate(0deg) scale(1.45)`
                  : `rotate(${layout.rotate}deg) scale(${isDimmed ? 0.95 : 1})`,
                opacity: isDimmed ? 0.2 : 1,
                // Focused card pops centered over itself
                transformOrigin: "center center",
              }}
              onMouseEnter={() => setFocused(i)}
              onMouseLeave={() => setFocused(null)}
              onTouchStart={() => setFocused(focused === i ? null : i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 38vw, 260px"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
