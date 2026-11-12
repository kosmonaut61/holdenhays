import { PortfolioNav } from "@/components/portfolio-nav"

const projects = [
  { title: "Tonewedge", type: "Music", description: "Explore the Tonewedge music tools and workshops at Audio Hays.", url: "https://audiohays.com/" },
  { title: "Tiny Alien World", type: "Game", description: "Play Tiny Alien World in your browser.", url: "https://tiny-alien-world.vercel.app/" },
  { title: "Greet Death", type: "Game", description: "Play Greet Death in your browser.", url: "https://greetdeath.co/" },
  { title: "Pieces, Please", type: "Game", description: "Play Pieces, Please in your browser.", url: "https://pieces-please.vercel.app/" },
  { title: "Fretlingz", type: "Educational game", description: "A guitar learning app to help kids master the fretboard through interactive gameplay.", url: "https://fretlingz.vercel.app/" },
  { title: "Mecharythm", type: "Puzzle game", description: "Giant robot & monster themed puzzle-based strategy game with tactical combat.", url: "https://mecharythm.vercel.app/" },
  { title: "Westward Ho", type: "Action game", description: "Western themed 3-column dodging game with fast-paced arcade action.", url: "https://westwardho.vercel.app/" },
]

export default function ProjectsPage() {
  return <main className="tw-scope portfolio-shell" data-tw-theme="spectral" data-tw-mode="dark" data-tw-treatment="glass" id="main-content">
    <PortfolioNav />
    <section className="portfolio-intro"><p className="portfolio-eyebrow">Personal projects</p><h1>Play & projects</h1><p className="portfolio-lead">Games, music tools, and experiments. Pick something and jump in.</p></section>
    <section className="portfolio-section" aria-label="Project gallery"><div className="portfolio-grid">
      {projects.map(project => <a href={project.url} key={project.title} className="tw-card portfolio-card gallery-card" target="_blank" rel="noopener noreferrer">{["Tonewedge","Tiny Alien World","Greet Death"].includes(project.title) && <img className="gallery-preview" src={`/images/play/${project.title.toLowerCase().replaceAll(" ","-")}.jpg`} alt={`${project.title} website preview`} width="550" height="350" />}<span className="portfolio-eyebrow">{project.type}</span><h2>{project.title}</h2><p>{project.description}</p><span className="portfolio-card-action">Open project ↗<span className="sr-only"> (new tab)</span></span></a>)}
    </div></section>
    <section className="portfolio-section portfolio-project-invite"><div><h2>Flamework</h2><p>Flamework is a personal build lab for fast product experiments, interaction prototypes, and AI-forward concepts. It’s where ideas get pressure-tested before they become full case studies.</p></div><img src="/images/flamework/flamework-01-square.jpg" alt="Flamework concept artwork" width="180" height="180" /></section>
  </main>
}
