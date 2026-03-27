"use client"

import { useRef } from "react"
import { AnimatedNoise } from "@/components/animated-noise"
import Link from "next/link"

const workHistory = [
  {
    company: "Emerge",
    url: "https://www.emergemarket.com",
    type: "Full-time · 4 yrs 2 mos",
    roles: [
      {
        title: "Director of Marketing and Design",
        period: "Jul 2024 – Present · 1 yr 9 mos",
        location: "Scottsdale, Arizona",
        description: "Leading product design and marketing strategy across Emerge's platform. Responsible for brand, go-to-market, and building AI-native workflows into how the team ships and operates.",
      },
      {
        title: "Group Lead Product Designer",
        period: "Feb 2022 – Jul 2024 · 2 yrs 6 mos",
        location: "Scottsdale, Arizona",
        description: "Led design across multiple product lines, establishing design systems and patterns that unified the experience across Emerge's suite of freight tools.",
      },
    ],
  },
  {
    company: "Fullbay",
    url: null,
    type: "Full-time · 2 yrs 4 mos",
    roles: [
      {
        title: "Manager of Product Department",
        period: "Sep 2021 – Feb 2022 · 6 mos",
        location: "Phoenix, Arizona",
        description: "Managed the product team and owned the process from discovery to delivery. Improved how features were scoped and prioritized to better align with business and customer goals.",
      },
      {
        title: "User Experience Designer",
        period: "Nov 2019 – Sep 2021 · 1 yr 11 mos",
        location: "Phoenix, Arizona",
        description: "Lead designer for Fullbay's shop management platform. Drove UX decisions across core workflows used by heavy-duty repair shops nationwide.",
      },
    ],
  },
  {
    company: "Hypur Inc.",
    url: null,
    type: "2018 – Nov 2019 · 1 yr 11 mos",
    roles: [
      {
        title: "Lead Designer",
        period: "2018 – Nov 2019",
        location: "Scottsdale, Arizona",
        description:
          "Redesigned the Hypur Platform across payment processing, CRM, document management, and analytics modules. Built UI kits and interaction patterns from scratch, and improved onboarding UX based on user feedback. Also owned the full marketing creative output — brand assets, iconography, illustration, and all motion and video content for training and campaigns.",
      },
    ],
  },
  {
    company: "Synexus US",
    url: null,
    type: "2 yrs 1 mo",
    roles: [
      {
        title: "Senior Patient Experience Designer",
        period: "2017 – 2018 · 1 yr",
        location: "Tempe, Arizona",
        description:
          "Led a full UX overhaul of the patient acquisition funnel — new app, improved onboarding, and email engagement flows. Balanced user-centered design with MVP constraints to hit KPIs set by the business development team. Managed junior designers.",
      },
      {
        title: "Senior Graphic Designer",
        period: "2016 – 2017 · 1 yr",
        location: "Tempe, Arizona",
        description:
          "Created marketing and patient acquisition materials across print and digital. Managed the website UX to improve study enrollment, maintained brand standards with clients, and mentored junior designers.",
      },
    ],
  },
  {
    company: "Apple",
    url: null,
    type: "2011 – 2016 · 5 yrs",
    roles: [
      {
        title: "Creative Trainer / Technical Support / Sales",
        period: "2011 – 2016",
        location: "Greater Phoenix Area",
        description:
          "Supported customers with technical troubleshooting and trained them on creative software. Five years of daily hands-on interaction with iOS and macOS gave me an early foundation in how real people experience software — and what breaks their trust in it. Consistently achieved high customer satisfaction ratings.",
      },
    ],
  },
]

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <main className="relative min-h-screen">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      <AnimatedNoise opacity={0.03} />

      <section
        ref={sectionRef}
        className="relative z-10 py-24 pl-6 md:pl-28 pr-6 md:pr-12"
      >
        <div className="mx-auto w-full max-w-4xl">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-[DotGothic16] text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-12"
          >
            <span>←</span> BACK TO HOME
          </Link>

          {/* Header */}
          <div className="mb-16">
            <span className="font-[DotGothic16] text-[12px] uppercase tracking-[0.3em] text-accent">
              ABOUT
            </span>
            <h1 className="mt-4 font-[DotGothic16] text-5xl md:text-7xl tracking-tight">HOLDEN HAYS</h1>
          </div>

          {/* Bio + profile */}
          <div className="grid md:grid-cols-[260px,1fr] gap-12 mb-24">
            {/* Profile Image placeholder */}
            <div className="relative">
              <div className="aspect-square w-full max-w-[260px] border border-border/40 rounded-sm overflow-hidden bg-card">
                <div className="w-full h-full flex items-center justify-center font-[DotGothic16] text-muted-foreground text-sm">
                  Profile Image
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <p className="font-[DotGothic16] text-lg text-white/70 leading-relaxed">
                I'm a designer at heart, taking problems and breaking them down into solvable pieces.{" "}
                <span className="text-white">I use my powers for business</span>, aligning company goals with
                customer needs to deliver great product experiences.
              </p>
              <p className="font-[DotGothic16] text-lg text-white/70 leading-relaxed">
                My background is in product design. My current focus is leading product design, marketing, and
                building AI workflows at{" "}
                <a
                  href="https://www.emergemarket.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors duration-200"
                >
                  Emerge
                </a>
                , and creator of{" "}
                <a
                  href="https://fretlings.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors duration-200"
                >
                  Fretlings
                </a>
                .
              </p>

              <a
                href="#"
                download
                className="inline-flex items-center gap-3 border border-foreground/20 px-5 py-2.5 font-[DotGothic16] text-sm uppercase tracking-widest transition-all duration-200 rounded-sm hover:border-white/30 hover:bg-white/5 mt-2"
              >
                DOWNLOAD RESUME <span>↓</span>
              </a>
            </div>
          </div>

          {/* Work History */}
          <div>
            <span className="font-[DotGothic16] text-[12px] uppercase tracking-[0.3em] text-accent">
              WORK HISTORY
            </span>
            <h2 className="mt-3 mb-12 font-[DotGothic16] text-3xl md:text-4xl tracking-tight">Experience</h2>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-border/30" />

              <div className="space-y-12 pl-8">
                {workHistory.map((job, ji) => (
                  <div key={ji} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-accent ring-4 ring-background" />

                    {/* Company header */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        {job.url ? (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-[DotGothic16] text-xl text-white hover:text-accent transition-colors duration-200"
                          >
                            {job.company}
                          </a>
                        ) : (
                          <span className="font-[DotGothic16] text-xl text-white">{job.company}</span>
                        )}
                        <span className="font-sans text-sm text-white/40">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    {/* Roles */}
                    <div className="space-y-6">
                      {job.roles.map((role, ri) => (
                        <div key={ri} className={job.roles.length > 1 && ri > 0 ? "pl-4 border-l border-border/20" : ""}>
                          <p className="font-[DotGothic16] text-lg text-white">{role.title}</p>
                          <p className="font-[DotGothic16] text-[11px] uppercase tracking-widest text-accent mt-1">
                            {role.period}
                          </p>
                          <p className="font-sans text-sm text-white/50 mt-0.5">
                            {role.location}
                          </p>
                          {role.description && (
                            <p className="mt-3 font-sans text-base text-white/75 leading-relaxed">
                              {role.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
