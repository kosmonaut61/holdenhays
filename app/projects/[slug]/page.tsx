import Link from "next/link"
import { notFound } from "next/navigation"
import { AnimatedNoise } from "@/components/animated-noise"
import { ProjectHeroImage } from "@/components/project-hero-image"
import { ImageCluster } from "@/components/image-cluster"
import { ProjectSections } from "@/components/project-sections"
import { getProjectBySlug, projects } from "@/lib/projects"

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const relatedProject =
    projects.find((p) => p.slug !== project.slug && p.medium === project.medium) ||
    projects.find((p) => p.slug !== project.slug)

  return (
    <main className="relative min-h-screen pb-20">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      <AnimatedNoise opacity={0.03} />

      <section className="relative z-10 min-h-screen py-24 pl-6 md:pl-28 pr-6 md:pr-12">
        <div className="mx-auto w-full max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-[DotGothic16] text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <span>←</span> BACK TO HOME
          </Link>

          <header className="mt-12">
            <p className="font-[DotGothic16] text-[11px] uppercase tracking-[0.3em] text-accent">{project.medium}</p>
            <h1 className="mt-5 font-[DotGothic16] text-5xl md:text-7xl tracking-tight">{project.title}</h1>
            <p className="mt-6 max-w-3xl font-[var(--font-reading)] text-[1.14rem] text-white/78 leading-relaxed">{project.heroLine}</p>

            <div className="mt-8 flex flex-wrap gap-2 md:gap-3">
              <MetaChip label="Status" value={project.status} />
              <MetaChip label="Timeline" value={project.timeline} />
              <MetaChip label="Role" value={project.role} />
              <MetaChip label="Team" value={project.team} />
            </div>
          </header>

          {project.heroImage && (
            <ProjectHeroImage src={project.heroImage} alt={`${project.title} hero`} />
          )}

          <section className="mt-16 grid md:grid-cols-[1.1fr,1fr] gap-10 md:gap-14 items-start">
            <h2 className="font-[DotGothic16] text-3xl md:text-5xl leading-tight tracking-tight text-white/95">{project.goal}</h2>
            <div className="space-y-6 font-[var(--font-reading)] text-white/76 leading-relaxed">
              <p>{project.overview}</p>
              <p>{project.problem}</p>
            </div>
          </section>

          {project.metrics && project.metrics.length > 0 && (
            <section className="mt-16">
              <h3 className="font-[DotGothic16] text-sm uppercase tracking-[0.25em] text-accent">Key Metrics</h3>
              <div className="mt-5 grid md:grid-cols-3 gap-5">
                {project.metrics.map((metric) => (
                  <article key={`${metric.label}-${metric.value}`} className="rounded-sm border border-border/40 bg-black/20 p-5">
                    <p className="font-[DotGothic16] text-[10px] uppercase tracking-[0.2em] text-accent-bright">{metric.label}</p>
                    <p className="mt-2 font-[DotGothic16] text-2xl md:text-3xl text-white">{metric.value}</p>
                    {metric.note ? <p className="mt-2 font-[var(--font-reading)] text-[0.95rem] text-white/64 leading-relaxed">{metric.note}</p> : null}
                  </article>
                ))}
              </div>
            </section>
          )}

          <SimpleList title="My Contribution" items={project.contribution} />

          {project.sections && project.sections.length > 0 && (
            <ProjectSections sections={project.sections} />
          )}
          <SimpleSteps title="Process" items={project.process} />
          <SimpleSteps title="Key Features" items={project.features} />

          <section className="mt-14">
            <h3 className="font-[DotGothic16] text-sm uppercase tracking-[0.25em] text-accent">Challenges & Solutions</h3>
            <div className="mt-5 space-y-6">
              {project.challenges.map((item, i) => (
                <article key={i}>
                  <p className="font-[DotGothic16] text-[11px] uppercase tracking-[0.2em] text-white/60">Challenge</p>
                  <p className="mt-1 font-[var(--font-reading)] text-white/84 leading-relaxed">{item.challenge}</p>
                  <p className="mt-3 font-[DotGothic16] text-[11px] uppercase tracking-[0.2em] text-white/60">Solution</p>
                  <p className="mt-1 font-[var(--font-reading)] text-white/84 leading-relaxed">{item.solution}</p>
                  <p className="mt-3 font-[DotGothic16] text-[11px] uppercase tracking-[0.2em] text-white/60">Outcome</p>
                  <p className="mt-1 font-[var(--font-reading)] text-white/84 leading-relaxed">{item.outcome}</p>
                </article>
              ))}
            </div>
          </section>

          <SimpleList title="Results" items={project.results} />

          <section className="mt-14 grid md:grid-cols-3 gap-6">
            <StackGroup label="Frontend" items={project.stack.frontend} />
            <StackGroup label="Backend" items={project.stack.backend} />
            <StackGroup label="Tooling" items={project.stack.tooling} />
          </section>

          {project.clusterImages && project.clusterImages.length > 0 && (
            <ImageCluster images={project.clusterImages} />
          )}

          {relatedProject && (
            <section className="mt-16 border-t border-border/40 pt-8">
              <h3 className="font-[DotGothic16] text-sm uppercase tracking-[0.25em] text-accent">Another Project</h3>
              <p className="mt-3 font-[var(--font-reading)] text-white/72">If you liked this case study, check out this related project next.</p>
              <Link
                href={`/projects/${relatedProject.slug}`}
                className="mt-5 inline-flex items-center gap-3 rounded-sm border border-border/50 bg-black/20 px-4 py-3 hover:border-accent/60 transition-colors"
              >
                <span className="font-[DotGothic16] text-[10px] uppercase tracking-[0.18em] text-accent">{relatedProject.medium}</span>
                <span className="font-[var(--font-reading)] text-white">{relatedProject.title}</span>
                <span className="font-[DotGothic16] text-white/60">→</span>
              </Link>
            </section>
          )}
        </div>
      </section>
    </main>
  )
}

function SimpleList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-14">
      <h3 className="font-[DotGothic16] text-sm uppercase tracking-[0.25em] text-accent">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="font-[var(--font-reading)] text-white/82 leading-relaxed">
            <span className="text-accent mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

function SimpleSteps({ title, items }: { title: string; items: Array<{ title: string; body: string }> }) {
  return (
    <section className="mt-14">
      <h3 className="font-[DotGothic16] text-sm uppercase tracking-[0.25em] text-accent">{title}</h3>
      <div className="mt-4 space-y-5">
        {items.map((item) => (
          <article key={item.title}>
            <p className="font-[DotGothic16] text-[11px] uppercase tracking-[0.2em] text-white/60">{item.title}</p>
            <p className="mt-1 font-[var(--font-reading)] text-white/82 leading-relaxed">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function StackGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <article>
      <h3 className="font-[DotGothic16] text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="border border-border/50 px-2 py-1 text-[11px] font-[DotGothic16] text-white/80 bg-black/30 rounded-sm">
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}

function MetaChip({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/50 bg-black/30 px-3 py-1 font-[DotGothic16] text-[10px] uppercase tracking-[0.16em] text-white/78">
      <span className="text-white/50 mr-1">{label}:</span> {value}
    </span>
  )
}
