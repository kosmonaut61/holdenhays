import chores from "@/data/grahams-chores.json"

const formatSyncedAt = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Phoenix",
  }).format(new Date(value))

export function GrahamsChoresSection() {
  const openItems = chores.items.filter((item) => !item.isCompleted)
  const completedItems = chores.items.filter((item) => item.isCompleted)

  return (
    <section id="grahams-chores" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-[DotGothic16] text-[12px] uppercase tracking-[0.3em] text-accent">
            03 / Family log
          </span>
          <h2 className="mt-4 font-[DotGothic16] text-5xl md:text-7xl tracking-tight">Graham’s Chores</h2>
        </div>
        <p className="max-w-sm font-[DotGothic16] text-sm text-muted-foreground leading-relaxed md:text-right">
          Read-only snapshot from Apple Reminders. Hayshold records the list here without becoming the place where chores are edited.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_320px]">
        <article className="border border-border/50 bg-black/25 p-5 md:p-6 rounded-sm">
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-border/40 pb-4">
            <div>
              <p className="font-[DotGothic16] text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Current list
              </p>
              <p className="mt-1 font-[DotGothic16] text-sm text-white/70">
                {openItems.length} open · {completedItems.length} completed
              </p>
            </div>
            <span className="border border-accent/40 bg-accent/10 px-3 py-1 font-[DotGothic16] text-[10px] uppercase tracking-[0.18em] text-accent-bright">
              {chores.source}
            </span>
          </div>

          {chores.items.length > 0 ? (
            <ul className="space-y-3">
              {chores.items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start gap-3 border border-border/35 bg-card/50 px-4 py-3 rounded-sm"
                >
                  <span
                    className={[
                      "mt-1 flex h-4 w-4 shrink-0 items-center justify-center border font-[DotGothic16] text-[9px]",
                      item.isCompleted
                        ? "border-accent-bright bg-accent/30 text-accent-bright"
                        : "border-white/35 text-transparent",
                    ].join(" ")}
                    aria-label={item.isCompleted ? "Completed" : "Open"}
                  >
                    ✓
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={[
                      "font-[DotGothic16] text-base leading-relaxed",
                      item.isCompleted ? "text-white/45 line-through" : "text-white/85",
                    ].join(" ")}
                    >
                      {item.title}
                    </p>
                    {item.notes ? <p className="mt-1 font-[DotGothic16] text-xs text-muted-foreground">{item.notes}</p> : null}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="font-[DotGothic16] text-sm text-muted-foreground">No chores are currently synced from this list.</p>
          )}
        </article>

        <aside className="border border-border/50 bg-black/20 p-5 rounded-sm">
          <h3 className="font-[DotGothic16] text-[11px] uppercase tracking-[0.22em] text-accent">Sync status</h3>
          <dl className="mt-5 space-y-4 font-[DotGothic16] text-sm">
            <div>
              <dt className="text-muted-foreground">List</dt>
              <dd className="mt-1 text-white/85">{chores.listName}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Last synced</dt>
              <dd className="mt-1 text-white/85">{formatSyncedAt(chores.syncedAt)}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Mode</dt>
              <dd className="mt-1 text-white/85">Read-only import</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
