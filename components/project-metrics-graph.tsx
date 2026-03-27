"use client"

import { useEffect, useMemo, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Metric = {
  label: string
  value: string
  note?: string
}

function parseMetricValue(value: string): number {
  const cleaned = value.replace(/,/g, "").replace(/[^\d.-]/g, "")
  const parsed = Number(cleaned)
  return Number.isFinite(parsed) ? Math.abs(parsed) : 0
}

export function ProjectMetricsGraph({ metrics }: { metrics: Metric[] }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const barRefs = useRef<(HTMLDivElement | null)[]>([])

  const chartData = useMemo(() => {
    const values = metrics.map((metric) => parseMetricValue(metric.value))
    const maxValue = Math.max(...values, 1)

    return metrics.map((metric, index) => {
      const raw = values[index]
      const normalized = Math.max((raw / maxValue) * 100, 8)
      return {
        ...metric,
        normalized,
      }
    })
  }, [metrics])

  useEffect(() => {
    if (!sectionRef.current || chartData.length === 0) return

    const bars = barRefs.current.filter(Boolean)
    if (bars.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bars,
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          transformOrigin: "bottom",
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [chartData])

  return (
    <div ref={sectionRef} className="mt-8 rounded-sm border border-border/40 bg-black/20 p-5 md:p-6">
      <p className="font-[DotGothic16] text-[10px] uppercase tracking-[0.2em] text-accent-bright">Metric Graph</p>

      <div className="mt-5 grid grid-cols-3 gap-3 md:gap-5 items-end min-h-[220px]">
        {chartData.map((metric, index) => (
          <div key={`${metric.label}-${metric.value}`} className="flex flex-col items-center gap-3 h-full">
            <span className="font-[DotGothic16] text-sm md:text-base text-white">{metric.value}</span>

            <div className="relative w-full h-[160px] md:h-[180px] rounded-sm border border-border/30 bg-black/35 overflow-hidden flex items-end">
              <div
                ref={(el) => {
                  barRefs.current[index] = el
                }}
                className="w-full bg-accent/85"
                style={{ height: `${metric.normalized}%` }}
              />
            </div>

            <span className="text-center font-[DotGothic16] text-[9px] md:text-[10px] uppercase tracking-[0.16em] text-white/70 leading-snug">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
