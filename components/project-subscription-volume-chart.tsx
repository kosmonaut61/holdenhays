"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import type { ProjectSubscriptionPoint } from "@/lib/project-charts"

const chartConfig = {
  activeSubscriptions: {
    label: "Active subscriptions",
    color: "rgba(255,255,255,0.72)",
  },
} satisfies ChartConfig

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function monthShortLabel(month: string) {
  const [year, monthNum] = month.split("-")
  const monthIndex = Number(monthNum) - 1
  return `${monthNames[monthIndex]} '${year.slice(2)}`
}

function monthLongLabel(month: string) {
  const [year, monthNum] = month.split("-")
  const monthIndex = Number(monthNum) - 1
  return `${monthNames[monthIndex]} ${year}`
}

export function ProjectSubscriptionVolumeChart({ data }: { data: ProjectSubscriptionPoint[] }) {
  const first = data[0]
  const last = data[data.length - 1]

  const chartData = data.map((point) => ({
    ...point,
    monthLabel: monthShortLabel(point.month),
    monthLong: monthLongLabel(point.month),
  }))

  return (
    <section className="mt-14 border border-border/50 bg-black/20 p-6 md:p-8 rounded-sm">
      <div>
        <h2 className="font-[DotGothic16] text-sm uppercase tracking-[0.25em] text-white/75">Subscription Growth</h2>
        <p className="mt-3 max-w-3xl font-[DotGothic16] text-white/75 leading-relaxed">
          Active ProcureOS Pro subscriptions grew from <span className="text-white">{first.activeSubscriptions}</span> to{" "}
          <span className="text-white">{last.activeSubscriptions}</span> in under 2.5 years, showing a sustained ramp after
          initial launch.
        </p>
      </div>

      <ChartContainer config={chartConfig} className="mt-8 h-[360px] w-full">
        <BarChart accessibilityLayer data={chartData} margin={{ left: 8, right: 16, top: 20 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="monthLabel"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={20}
            interval={2}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} allowDecimals={false} width={40} />
          <ChartTooltip
            cursor={{ fill: "rgba(255,255,255,0.04)" }}
            content={
              <ChartTooltipContent
                labelFormatter={(_, payload) => {
                  const row = payload?.[0]?.payload as { monthLong?: string } | undefined
                  return row?.monthLong ?? ""
                }}
                formatter={(value) => `${Number(value).toLocaleString()} active subscriptions`}
              />
            }
          />
          <Bar dataKey="activeSubscriptions" fill="var(--color-activeSubscriptions)" radius={[2, 2, 0, 0]}>
            <LabelList dataKey="activeSubscriptions" position="top" className="fill-white/65" fontSize={10} />
          </Bar>
        </BarChart>
      </ChartContainer>
    </section>
  )
}
