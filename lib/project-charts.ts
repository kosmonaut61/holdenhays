export type ProjectSubscriptionPoint = {
  month: string
  activeSubscriptions: number
}

export const activeSubscriptionVolumeByMonth: ProjectSubscriptionPoint[] = [
  { month: "2023-11-01", activeSubscriptions: 1 },
  { month: "2023-12-01", activeSubscriptions: 2 },
  { month: "2024-01-01", activeSubscriptions: 2 },
  { month: "2024-02-01", activeSubscriptions: 9 },
  { month: "2024-03-01", activeSubscriptions: 10 },
  { month: "2024-04-01", activeSubscriptions: 10 },
  { month: "2024-05-01", activeSubscriptions: 41 },
  { month: "2024-06-01", activeSubscriptions: 72 },
  { month: "2024-07-01", activeSubscriptions: 89 },
  { month: "2024-08-01", activeSubscriptions: 91 },
  { month: "2024-09-01", activeSubscriptions: 95 },
  { month: "2024-10-01", activeSubscriptions: 103 },
  { month: "2024-11-01", activeSubscriptions: 111 },
  { month: "2024-12-01", activeSubscriptions: 115 },
  { month: "2025-01-01", activeSubscriptions: 121 },
  { month: "2025-02-01", activeSubscriptions: 123 },
  { month: "2025-03-01", activeSubscriptions: 123 },
  { month: "2025-04-01", activeSubscriptions: 130 },
  { month: "2025-05-01", activeSubscriptions: 136 },
  { month: "2025-06-01", activeSubscriptions: 141 },
  { month: "2025-07-01", activeSubscriptions: 142 },
  { month: "2025-08-01", activeSubscriptions: 146 },
  { month: "2025-09-01", activeSubscriptions: 150 },
  { month: "2025-10-01", activeSubscriptions: 154 },
  { month: "2025-11-01", activeSubscriptions: 155 },
  { month: "2025-12-01", activeSubscriptions: 162 },
  { month: "2026-01-01", activeSubscriptions: 170 },
  { month: "2026-02-01", activeSubscriptions: 175 },
  { month: "2026-03-01", activeSubscriptions: 180 },
]

export function getSubscriptionVolumeByProjectSlug(slug: string): ProjectSubscriptionPoint[] | null {
  if (slug === "project-lattice") {
    return activeSubscriptionVolumeByMonth
  }

  return null
}
