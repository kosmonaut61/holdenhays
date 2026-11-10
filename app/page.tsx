import Link from "next/link"
import { projects } from "@/lib/projects"
import { DitherHero } from "@/components/dither-hero"

const order = ["project-lattice", "silent-agent", "alchemail", "connie", "freight-spend-optimization", "inventory-part-management"]

export default function Page() {
  return <main className="tw-scope portfolio-shell portfolio-home" data-tw-mode="dark" data-tw-treatment="minimal" id="main-content">
    <DitherHero />
    <section className="portfolio-intro portfolio-intro--quiet">
      <p className="portfolio-eyebrow">Product leadership · Design · Phoenix, AZ</p>
      <div><p className="portfolio-lead">My background is in design, my current focus is leading product and design at Emerge and building AI tools.</p>
      <Link className="portfolio-text-link" href="#work">Explore my work <span aria-hidden="true">↓</span></Link></div>
    </section>
    <section id="work" className="portfolio-section" aria-labelledby="work-title">
      <h2 id="work-title">Selected work</h2>
      <div className="portfolio-grid">
        {order.map(slug => projects.find(project => project.slug === slug)).filter(project => !!project).map(project => <Link key={project.slug} href={`/projects/${project.slug}`} className="tw-card portfolio-card portfolio-work-card">
          <span className="portfolio-eyebrow">{project.company ? `${project.company} · ${project.medium}` : project.medium}</span>
          <h3>{project.title}</h3><p>{project.description}</p>
          <span className="portfolio-card-action">Read case study ↗</span>
        </Link>)}
      </div>
    </section>
    <section className="portfolio-section portfolio-project-invite" aria-labelledby="play-title">
      <div><h2 id="play-title">Made to be played with.</h2><p>Games, music tools, and personal projects.</p></div>
      <Link href="/projects" className="portfolio-text-link">Browse projects ↗</Link>
    </section>
    <footer className="portfolio-footer"><a href="mailto:hello@holdenhays.com">hello@holdenhays.com</a><Link href="/about">About Holden</Link></footer>
  </main>
}
