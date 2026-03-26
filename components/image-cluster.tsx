"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

type ClusterImage = {
  src: string
  alt: string
}

// Fixed layout: each card gets a deterministic rotation + offset so the pile looks naturally messy
const LAYOUTS = [
  { rotate: "-rotate-6",  x: "translate-x-0",   y: "-translate-y-2",  z: "z-10" },
  { rotate: "rotate-3",   x: "translate-x-8",   y: "translate-y-4",   z: "z-20" },
  { rotate: "-rotate-2",  x: "-translate-x-6",  y: "translate-y-6",   z: "z-30" },
  { rotate: "rotate-8",   x: "translate-x-14",  y: "-translate-y-6",  z: "z-10" },
  { rotate: "-rotate-10", x: "-translate-x-10", y: "-translate-y-4",  z: "z-20" },
  { rotate: "rotate-5",   x: "translate-x-4",   y: "translate-y-10",  z: "z-30" },
  { rotate: "-rotate-4",  x: "-translate-x-14", y: "translate-y-2",   z: "z-10" },
  { rotate: "rotate-12",  x: "translate-x-10",  y: "-translate-y-10", z: "z-20" },
  { rotate: "-rotate-7",  x: "-translate-x-4",  y: "translate-y-8",   z: "z-30" },
  { rotate: "rotate-2",   x: "translate-x-16",  y: "translate-y-6",   z: "z-10" },
  { rotate: "-rotate-11", x: "-translate-x-8",  y: "-translate-y-8",  z: "z-20" },
  { rotate: "rotate-6",   x: "translate-x-2",   y: "translate-y-12",  z: "z-30" },
]

export function ImageCluster({ images }: { images: ClusterImage[] }) {
  const [focused, setFocused] = useState<number | null>(null)

  return (
    <div className="mt-16 mb-8">
      <p className="font-[DotGothic16] text-[11px] uppercase tracking-[0.25em] text-accent mb-6">Gallery</p>
      <div className="relative flex items-center justify-center min-h-[520px] md:min-h-[640px] select-none overflow-visible">
        {images.map((img, i) => {
          const layout = LAYOUTS[i % LAYOUTS.length]
          const isFocused = focused === i
          const isDimmed = focused !== null && !isFocused

          return (
            <div
              key={i}
              className={cn(
                "absolute w-64 h-48 md:w-80 md:h-60 rounded-sm overflow-hidden shadow-lg cursor-pointer",
                "transition-all duration-300 ease-out",
                layout.rotate,
                layout.x,
                layout.y,
                isFocused
                  ? "scale-[1.5] rotate-0 !z-50 shadow-2xl ring-1 ring-white/20"
                  : isDimmed
                  ? cn(layout.z, "opacity-20 scale-95")
                  : cn(layout.z, "opacity-85 hover:opacity-100 hover:scale-105 hover:shadow-2xl")
              )}
              onMouseEnter={() => setFocused(i)}
              onMouseLeave={() => setFocused(null)}
              onTouchStart={() => setFocused(focused === i ? null : i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
