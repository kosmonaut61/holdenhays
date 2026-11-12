"use client"

import { Children, useEffect, useRef, type ReactNode } from "react"

type Section = { id: string; label: string; caption: string }

export function PortfolioSections({ sections, children }: { sections: Section[]; children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let disposed = false
    let cleanup = () => {}
    import("@audiohays/tonewedge-ui/section-cards").then(({ createSectionCard, createSectionStack }) => {
      if (disposed || !root.current) return
      const host = root.current
      const sheets = Array.from(host.querySelectorAll<HTMLElement>("[data-stack-card]"))
      const panels = sheets.map(sheet => sheet.querySelector<HTMLElement>("[data-stack-panel]")!)
      let active = ""
      const stack = createSectionStack({ element: host })
      const cards = sections.map((section, index) => {
        const card = createSectionCard({
          id: `portfolio-card-${section.id}`,
          label: section.label, caption: section.caption,
          controls: `portfolio-panel-${section.id}`, disclosureIndicator: true,
          state: { palette: "spectral", mode: "dark", grain: 72, panes: false },
          time: index * 3.3,
          onSelect: () => select(active === section.id ? "" : section.id, true),
        })
        sheets[index].querySelector("[data-card-mount]")!.append(card.element)
        sheets[index].querySelector<HTMLElement>("[data-card-fallback]")!.hidden = true
        return card
      })
      function select(id: string, push = false, focus = false) {
        const previous = active
        active = sections.some(section => section.id === id) ? id : ""
        stack.transition(() => {
          sections.forEach((section, index) => {
            const open = section.id === active
            panels[index].hidden = !open
            sheets[index].dataset.open = String(open)
            cards[index].update({ selected: open, expanded: open })
          })
        })
        if (push) history.pushState(null, "", active ? `#${active}` : location.pathname + location.search)
        if (focus) cards[sections.findIndex(section => section.id === previous)]?.element.focus()
        if (push && active) stack.reveal(sheets[sections.findIndex(section => section.id === active)])
      }
      const restore = () => select(location.hash.slice(1))
      const close = (event: Event) => {
        if ((event.target as HTMLElement).closest("[data-close-section]")) select("", true, true)
      }
      const escape = (event: KeyboardEvent) => {
        if (event.key === "Escape" && active) { event.preventDefault(); select("", true, true) }
      }
      host.dataset.enhanced = "true"
      restore()
      host.addEventListener("click", close)
      host.addEventListener("keydown", escape)
      window.addEventListener("popstate", restore)
      window.addEventListener("hashchange", restore)
      cleanup = () => {
        host.removeEventListener("click", close)
        host.removeEventListener("keydown", escape)
        window.removeEventListener("popstate", restore)
        window.removeEventListener("hashchange", restore)
        stack.destroy()
        cards.forEach(card => card.destroy())
      }
    }).catch(() => { /* Server-rendered headings and content remain usable. */ })
    return () => { disposed = true; cleanup() }
  }, [sections])
  const content = Children.toArray(children)
  return <div ref={root} className="tw-section-stack portfolio-section-stack" aria-label="Explore Holden’s portfolio">
    {sections.map((section, index) => <section id={section.id} key={section.id} data-stack-card="" aria-labelledby={`portfolio-heading-${section.id}`}>
      <h2 id={`portfolio-heading-${section.id}`} className="portfolio-sheet-heading"><span data-card-fallback="">{section.label}</span><span data-card-mount="" /></h2>
      <div id={`portfolio-panel-${section.id}`} data-stack-panel="" className="portfolio-sheet-panel">
        {content[index]}
        <button className="tw-button tw-button--quiet portfolio-section-close" type="button" data-close-section="">Close {section.label.toLowerCase()} ↑</button>
      </div>
    </section>)}
  </div>
}
