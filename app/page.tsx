import { HeroSection } from "@/components/hero-section"
import { SignalsSection } from "@/components/signals-section"
import { WorkSection } from "@/components/work-section"
// import { PrinciplesSection } from "@/components/principles-section"
import { ColophonSection } from "@/components/colophon-section"
import { SideNav } from "@/components/side-nav"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="fixed top-3 right-3 left-auto z-50 inline-flex items-center whitespace-nowrap rounded-sm border border-accent-bright/45 bg-accent/18 px-3 py-1 font-[DotGothic16] text-[11px] uppercase tracking-[0.18em] text-accent-bright backdrop-blur-sm">
        Demo Branch
      </div>

      <div className="relative z-10">
        <HeroSection />
        <SignalsSection />
        <WorkSection />
        {/* <PrinciplesSection /> */}
        <ColophonSection />
      </div>
    </main>
  )
}
