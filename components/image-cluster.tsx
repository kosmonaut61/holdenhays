"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

type ClusterImage = {
  src: string
  alt: string
}

// Each card: rotation + absolute position (% from center). Spread wide, overlap slightly.
const LAYOUTS: { rotate: number; x: number; y: number; z: number }[] = [
  { rotate: -8,  x: -340, y: -20,  z: 10 },
  { rotate:  4,  x: -110, y: -50,  z: 20 },
  { rotate: -3,  x:  130, y: -30,  z: 30 },
  { rotate:  9,  x:  360, y: -10,  z: 10 },
  { rotate: -12, x: -260, y:  130, z: 20 },
  { rotate:  6,  x:   20, y:  140, z: 30 },
  { rotate: -5,  x:  280, y:  120, z: 10 },
  { rotate:  11, x: -400, y:  80,  z: 20 },
  { rotate: -2,  x:  420, y:  90,  z: 30 },
  { rotate:  7,  x: -160, y: -140, z: 10 },
  { rotate: -9,  x:  180, y: -130, z: 20 },
  { rotate:  3,  x:   50, y: -160, z: 30 },
]

export function ImageCluster({ images }: { images: ClusterImage[] }) {
  const [focused, setFocused] = useState<number | null>(null)

  return (
    <div className="mt-16 mb-8">
      <p className="font-[DotGothic16] text-[11px] uppercase tracking-[0.25em] text-accent mb-6">Gallery</p>
      {/* tall enough container so cards don't clip */}
      <div className="relative w-full select-none" style={{ height: 720 }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {images.map((img, i) => {
            const layout = LAYOUTS[i % LAYOUTS.length]
            const isFocused = focused === i
            const isDimmed = focused !== null && !isFocused

            return (
              <div
                key={i}
                className={cn(
                  "absolute w-56 h-40 md:w-72 md:h-52 rounded-sm overflow-hidden shadow-lg cursor-pointer",
                  "transition-all duration-300 ease-out"
                )}
                style={{
                  transform: isFocused
                    ? `translate(${layout.x}px, ${layout.y}px) rotate(0deg) scale(1.55)`
                    : `translate(${layout.x}px, ${layout.y}px) rotate(${layout.rotate}deg) scale(${isDimmed ? 0.95 : 1})`,
                  zIndex: isFocused ? 50 : layout.z,
                  opacity: isDimmed ? 0.25 : 1,
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
                  sizes="(max-width: 768px) 224px, 288px"
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
