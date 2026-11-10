import Link from "next/link"

export function PortfolioNav() {
  return <header className="portfolio-nav">
    <Link href="/" className="portfolio-brand">Holden Hays</Link>
    <nav aria-label="Main navigation">
      <Link href="/#work" className="tw-button tw-button--quiet">Work</Link>
      <Link href="/projects" className="tw-button tw-button--quiet">Play & projects</Link>
      <Link href="/about" className="tw-button tw-button--quiet">About</Link>
      <a href="mailto:hello@holdenhays.com" className="tw-button">Contact</a>
    </nav>
  </header>
}
