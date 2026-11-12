import Link from "next/link"
import { projects } from "@/lib/projects"
import { DitherHero } from "@/components/dither-hero"
import { PortfolioSections } from "@/components/portfolio-sections"
import { SpectralCorner } from "@/components/spectral-corner"

const order = ["project-lattice", "silent-agent", "alchemail", "connie", "freight-spend-optimization", "inventory-part-management"]
const previews = [
 {title:'Tonewedge',caption:'Music tools & workshops',url:'https://audiohays.com/',image:'tonewedge'},
 {title:'Tiny Alien World',caption:'Browser game',url:'https://tiny-alien-world.vercel.app/',image:'tiny-alien-world'},
 {title:'Greet Death',caption:'Browser game',url:'https://greetdeath.co/',image:'greet-death'},
]
export default function Page() {
  return <main className="tw-scope portfolio-shell portfolio-home" data-tw-theme="spectral" data-tw-mode="dark" data-tw-treatment="glass" id="main-content">
    <DitherHero />
    <PortfolioSections sections={[{id:"work",label:"Work",caption:"Product leadership & design"},{id:"play",label:"Play",caption:"Games, music & experiments"},{id:"about",label:"About",caption:"A little about me"},{id:"contact",label:"Contact",caption:"Let’s talk"}]}>
    <div>
      <div className="portfolio-grid featured-work-grid">
        {order.map(slug => projects.find(project => project.slug === slug)).filter(project => !!project).map((project,index) => <Link key={project.slug} href={`/projects/${project.slug}`} className={`tw-card portfolio-card spectral-work-card ${index<2?'featured-case':''}`}>
          {index<2 && <img className="case-preview" src={index===0?'/images/projects/procureos/hero.webp':'/images/projects/freight-ui/hero.webp'} alt={`${project.title} interface preview`} width="720" height="440" />}
          {index>=2 && <SpectralCorner />}
          <div className="case-summary"><span className="portfolio-eyebrow">{project.company ? `${project.company} · ${project.medium}` : project.medium}</span><h3>{project.title}</h3><p>{project.description}</p><span className="portfolio-card-action">Read case study ↗</span></div>
        </Link>)}
      </div>
    </div>
    <div className="play-showcase" aria-labelledby="play-title">
      <div className="play-section-heading"><div><h2 id="play-title">Made to be played with.</h2><p>Games, music tools, and personal projects.</p></div><Link href="/projects" className="tw-button">Browse projects ↗</Link></div>
      <div className="play-preview-grid">{previews.map(project=><a href={project.url} key={project.title} className="tw-card play-preview-card" target="_blank" rel="noopener noreferrer"><img src={`/images/play/${project.image}.jpg`} alt={`${project.title} website preview`} width="550" height="350" /><div><h3>{project.title}</h3><p>{project.caption} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in new tab)</span></p></div></a>)}</div>
    </div>
    <section className="personal-intro" aria-labelledby="intro-title">
      <figure><img src="/images/holden-profile.jpg" alt="Holden Hays outdoors in the Arizona desert" width="160" height="184" /><figcaption>Phoenix, Arizona</figcaption></figure>
      <div className="intro-heading"><p className="portfolio-eyebrow">Product leadership · Design</p><h2 id="intro-title">Designer at heart.</h2></div><div className="intro-body"><p className="portfolio-lead">My background is in design, my current focus is leading product and design at Emerge and building AI tools.</p><Link className="portfolio-text-link" href="/about">More about me ↗</Link></div>
    </section>
    <div className="portfolio-contact"><p className="portfolio-lead">Have something in mind?</p><a className="portfolio-contact-email" href="mailto:hello@holdenhays.com">hello@holdenhays.com ↗</a></div>
    </PortfolioSections>
    <footer className="portfolio-footer"><a href="mailto:hello@holdenhays.com">hello@holdenhays.com</a><Link href="/about">About Holden</Link></footer>
  </main>
}
