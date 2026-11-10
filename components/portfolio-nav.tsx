import Link from "next/link"

export function PortfolioNav({overlay=false}:{overlay?:boolean}) {
  return <header className={`portfolio-nav${overlay ? ' portfolio-nav--overlay' : ''}`}>
    <Link href="/" className="portfolio-brand" aria-label="Holden Hays home">{overlay ? 'HH' : 'Holden Hays'}</Link>
    <nav aria-label="Main navigation">
      <Link href="/#work">Work</Link>
      <Link href="/projects">Play</Link>
      <Link href="/about">About</Link>
      <a href="mailto:hello@holdenhays.com">Contact</a>
    </nav>
  </header>
}
