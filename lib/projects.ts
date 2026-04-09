export type ProjectFeature = {
  title: string
  body: string
}

export type ProjectChallenge = {
  challenge: string
  solution: string
  outcome: string
}

export type ProjectMetric = {
  label: string
  value: string
  note?: string
}

export type ProjectData = {
  slug: string
  title: string
  medium: string
  description: string
  span: string
  status: string
  timeline: string
  role: string
  team: string
  heroLine: string
  overview: string
  problem: string
  goal: string
  contribution: string[]
  process: ProjectFeature[]
  features: ProjectFeature[]
  challenges: ProjectChallenge[]
  results: string[]
  metrics?: ProjectMetric[]
  stack: {
    frontend: string[]
    backend: string[]
    tooling: string[]
  }
  nextSteps: string[]
  heroImage?: string
  clusterImages?: { src: string; alt: string }[]
  sections?: { title: string; body: string; image?: string; imageAlt?: string }[]
}

export const projects: ProjectData[] = [
  {
    slug: "project-lattice",
    title: "ProcureOS Pro",
    medium: "Product Leadership",
    description: "Defining a repeatable commercial model in a historically one-off, sales-led motion.",
    span: "col-span-2 row-span-2",
    status: "Shipped",
    timeline: "Multi-quarter initiative",
    role: "Product Leadership",
    team: "Analytics, Marketing, Product, and Sales",
    heroLine: "Introducing product led growth to a sales driven org & how the bet paid off.",
    overview:
      "ProcureOS Pro centered on redesigning the commercial model behind the platform. Similar customer cohorts were being sold through one-off structures with inconsistent account value, making growth hard to predict and harder to scale.",
    problem:
      "Commercial packaging and pricing were highly variable, even across comparable customers. The existing model limited repeatability, obscured value realization, and made long-term product investment decisions harder.",
    goal:
      "My goal was to increase contribution margin, since a lot of our revenue was from facilitating freight transactions with variable costs. We needed a way to steadily monetize under-performing accounts without affecting existing lucrative relationships.",
    contribution: [
      "Aligned analytics, marketing, product, and sales around a unified commercial framework",
      "Defined Pro-only feature boundaries to create clear paid value",
      "Structured free-tier eligibility around standardized volume thresholds",
      "Developed marketing strategies and launch content, including product storytelling video assets (Wistia)",
      "Led cross-functional decision-making on rollout and customer transition",
    ],
    process: [
      { title: "Commercial Diagnosis", body: "Audited one-off deal patterns and account-value variance across comparable cohorts." },
      { title: "Cross-Functional Design", body: "Facilitated model design with analytics, marketing, product, and sales to ensure operational fit." },
      { title: "Packaging Strategy", body: "Preserved legacy free access while moving advanced capabilities into a Pro subscription tier." },
      { title: "Policy Standardization", body: "Defined volume thresholds required for ongoing free usage to improve consistency." },
    ],
    features: [
      { title: "Pro Feature Gating", body: "High-value capabilities were packaged into a paid Pro tier with clearer customer outcomes." },
      { title: "Free-Tier Volume Standards", body: "Eligibility requirements for free usage were standardized across similar customers." },
      { title: "Cohort Consistency", body: "Commercial decisions moved from one-off exceptions toward repeatable cohort-based rules." },
    ],
    challenges: [
      {
        challenge: "A sales-driven organization relied on bespoke deal making.",
        solution: "Built alignment around a shared model that still allowed a practical legacy-free path.",
        outcome: "Created a more scalable commercial motion without forcing abrupt customer disruption.",
      },
      {
        challenge: "Balancing adoption with monetization required careful tradeoffs.",
        solution: "Used clear Pro value boundaries plus objective free-tier volume requirements.",
        outcome: "Improved model clarity for internal teams and customers.",
      },
    ],
    results: [
      "Average ticket price for newly onboarded customers increased by ~20% after tying ProcureOS Pro to net-new customers.",
      "Successfully migrated unprofitable legacy-system customers onto ProcureOS Pro pricing.",
      "Improved overall monetization performance through a more consistent, scalable commercial model.",
    ],
    metrics: [
      {
        label: "Avg Account Value (Before Model Change)",
        value: "~$20K",
        note: "Legacy marketplace-era baseline before commercial model standardization.",
      },
      {
        label: "Avg Account Value (After Model Change)",
        value: "~$436K",
        note: "Post-shift expected SaaS account value based on Jan '26 invoice snapshot.",
      },
      {
        label: "Account Value Uplift",
        value: "~22x",
        note: "Rounded directional increase from pre-change baseline to post-change model value.",
      },
    ],
    stack: {
      frontend: ["N/A"],
      backend: ["Analytics modeling", "Pricing and packaging operations"],
      tooling: ["Cross-functional workshops", "Board-deck analysis"],
    },
    nextSteps: [
      "Add quantified impact metrics from board-deck slides.",
      "Document customer cohort before/after performance deltas.",
      "Capture rollout lessons for future commercial-model updates.",
    ],
    heroImage: "/images/projects/procureos/hero.webp",
  },

  {
    slug: "silent-agent",
    title: "Freight UI",
    medium: "Visual System",
    description: "Updating a fragmented visual system to be AI ready.",
    span: "col-span-1 row-span-2",
    status: "In Design",
    timeline: "4 weeks",
    role: "Design Leadership",
    team: "Design team + frontend engineering",
    heroLine: "Updating a fragmented visual system to be AI ready.",
    overview: "Freight UI focused on consolidating a fragmented component ecosystem split across Material UI patterns and multiple custom themes into a unified, scalable design system.",
    problem: "The product experience lacked cohesion because teams were shipping from competing component patterns and theme implementations, creating inconsistency and higher implementation overhead.",
    goal: "Modernize and standardize the component library so designers and engineers could build faster, with clearer patterns, stronger UI consistency, and a shared source of truth.",
    contribution: ["Managed designers modernizing core UI components", "Defined standards to bridge Material UI and custom theme patterns", "Introduced Storybook documentation workflows for developer adoption", "Aligned implementation direction toward MCP-server-ready component architecture"],
    process: [
      { title: "Audit & Mapping", body: "Cataloged component drift across Material UI and custom-themed implementations." },
      { title: "System Modernization", body: "Led redesign and standardization of shared components with implementation constraints in mind." },
      { title: "Documentation", body: "Rolled out Storybook docs (storybook.emergemarket.dev) including FUI component stories to improve dev handoff and usage consistency." },
    ],
    features: [
      { title: "Unified Component Standards", body: "Core UI patterns were consolidated into a coherent cross-team component system." },
      { title: "Storybook-Driven Adoption", body: "Design and engineering shared documented component behavior and usage guidance in Storybook." },
    ],
    challenges: [
      { challenge: "Fragmented implementation patterns made consistency difficult at scale.", solution: "Introduced shared component standards, documentation, and governance through Storybook.", outcome: "Improved UI cohesion and reduced ambiguity between design intent and engineering execution." },
    ],
    results: ["Reduced design/development ambiguity through documented reusable components.", "Improved consistency across surfaces previously split between Material UI and custom themes.", "Established groundwork for MCP-server-ready component operations."],
    stack: { frontend: ["Material UI", "Custom theming system"], backend: ["N/A"], tooling: ["Figma", "Storybook", "Design QA reviews"] },
    nextSteps: ["Expand Storybook coverage across remaining legacy components.", "Add quantified delivery metrics (velocity, defects, adoption).", "Formalize MCP-server integration patterns for component delivery."],
    heroImage: "/images/projects/freight-ui/hero.webp",
    clusterImages: [
      { src: "/images/projects/freight-ui/cluster-1.webp", alt: "Goal flag" },
      { src: "/images/projects/freight-ui/cluster-2.webp", alt: "Funnel" },
      { src: "/images/projects/freight-ui/cluster-3.webp", alt: "Target" },
    ],
    sections: [
      {
        title: "MCP Ready",
        body: "Designers, engineers, and AI agents all reference the same source of truth for component usage — eliminating ambiguity across every application. Developers can copy production-ready code directly from the tool and explore every available parameter. Each component maps 1:1 to its Figma counterpart, so there is never confusion about which component to use or what it should look like.",
        image: "/images/projects/freight-ui/storybook-hero.webp",
        imageAlt: "Storybook component documentation showing the Button component with live controls",
      },
    ],
  },
  {
    slug: "alchemail",
    title: "Alchemail",
    medium: "AI Lifecycle Marketing",
    description: "Autonomous CRM segmentation and lifecycle campaign execution that continuously improves message quality.",
    span: "col-span-1 row-span-2",
    status: "In Delivery",
    timeline: "Ongoing",
    role: "Product + Workflow Design",
    team: "Marketing, Sales Ops, RevOps",
    heroLine: "Building an AI lifecycle engine that segments, drafts, tests, and learns with minimal manual overhead.",
    overview:
      "Alchemail automates lifecycle marketing from audience segmentation through campaign iteration, replacing slow manual planning and copy cycles with a continuous test-and-learn workflow.",
    problem:
      "Lifecycle campaigns were manually segmented, slow to ship, and often too broad to feel relevant. Approvals and handoffs across teams reduced iteration speed and limited experimentation.",
    goal:
      "Create an AI-native lifecycle system that generates targeted campaigns from CRM signals, runs controlled experiments, and improves messaging quality through feedback loops.",
    contribution: [
      "Designed and shipped Alchemail for autonomous CRM segmentation and lifecycle campaign execution",
      "Built content-training workflow using web content, case studies, and approved marketing positioning",
      "Integrated Apollo CRM signals to identify high-value account segments and trigger targeted campaigns",
      "Defined experimentation and learning loops for copy and segment performance",
    ],
    process: [
      { title: "Workflow Mapping", body: "Mapped manual lifecycle campaign steps to identify bottlenecks and automation candidates." },
      { title: "Agent Design", body: "Defined goals, context inputs, and decision rules for segmentation, message generation, and campaign sequencing." },
      { title: "System Integration", body: "Connected Apollo CRM data and campaign delivery channels to run continuously with measurable outputs." },
      { title: "Feedback Loops", body: "Incorporated open-rate and engagement signals to refine segment strategy and copy quality over time." },
    ],
    features: [
      { title: "Dynamic Segmentation", body: "Builds campaign cohorts from Apollo account signals instead of static list logic." },
      { title: "Autonomous Campaign Generation", body: "Generates and launches targeted lifecycle sequences with reduced manual copy assembly." },
      { title: "Continuous A/B Learning", body: "Runs tests and updates message strategy based on observed engagement outcomes." },
    ],
    challenges: [
      {
        challenge: "Legacy drip campaigns treated most cohorts similarly, reducing relevance.",
        solution: "Implemented dynamic segmentation using CRM account signals and context-aware message generation.",
        outcome: "Improved campaign precision and reduced generic, one-size-fits-all messaging.",
      },
      {
        challenge: "Content production and approvals slowed iteration velocity.",
        solution: "Trained Alchemail on trusted marketing artifacts and created automated test-and-learn loops.",
        outcome: "Faster campaign iteration with less dependency on multi-stakeholder copy review cycles.",
      },
    ],
    results: [
      "Established an AI-driven lifecycle campaign system that continuously learns from engagement feedback.",
      "Reduced manual effort across segmentation, content generation, and campaign execution.",
      "Increased iteration velocity by automating campaign setup and test cycles.",
    ],
    stack: {
      frontend: ["Next.js", "React"],
      backend: ["Apollo CRM integration", "Agent orchestration workflows"],
      tooling: ["A/B testing", "Campaign analytics", "Prompt and knowledge-base management"],
    },
    nextSteps: [
      "Add quantitative KPIs (open-rate lift, click-through lift, pipeline contribution).",
      "Expand segmentation logic to include intent and behavioral signals.",
      "Add human-in-the-loop controls for edge-case messaging and compliance review.",
    ],
  },

  {
    slug: "connie",
    title: "Connie",
    medium: "AI Outbound Automation",
    description: "Autonomous carrier outreach and webinar conversion workflow for top-of-funnel pipeline generation.",
    span: "col-span-1 row-span-2",
    status: "In Delivery",
    timeline: "Ongoing",
    role: "Product + Workflow Design",
    team: "Marketing, Sales Ops, RevOps",
    heroLine: "Automating outbound prospecting into a consistent, always-on webinar conversion flow.",
    overview:
      "Connie automates early-funnel prospecting by handling carrier qualification outreach, webinar invitation, and handoff into application flow without repetitive manual execution.",
    problem:
      "Carrier prospecting and qualification required repetitive manual effort from business teams, creating inconsistent outreach cadence and limiting funnel throughput.",
    goal:
      "Build an autonomous outbound workflow that consistently identifies target carriers, executes qualification messaging, and routes interested prospects into conversion paths.",
    contribution: [
      "Designed Connie to automate top-of-funnel carrier outreach and webinar conversion flow",
      "Defined qualification and invitation logic for rolling webinar enrollment",
      "Mapped handoff criteria from outreach engagement to application routing",
      "Structured performance feedback loops for outreach quality and conversion stages",
    ],
    process: [
      { title: "Prospecting Workflow Mapping", body: "Documented manual outreach and qualification steps to identify repetitive operator work." },
      { title: "Agent Flow Design", body: "Defined decision logic for qualification messaging, follow-up timing, and invite triggers." },
      { title: "Funnel Integration", body: "Connected outreach responses to webinar invitation and downstream application handoff." },
      { title: "Performance Review", body: "Tracked engagement and conversion behavior to refine targeting and messaging cadence." },
    ],
    features: [
      { title: "Automated Carrier Qualification", body: "Runs outbound qualification messaging against targeted carrier cohorts." },
      { title: "Rolling Webinar Invitations", body: "Invites qualified prospects into an on-demand webinar flow on a recurring schedule." },
      { title: "Application Path Routing", body: "Routes engaged prospects into the next conversion step with less manual intervention." },
    ],
    challenges: [
      {
        challenge: "Carrier prospecting required repetitive manual effort from business teams.",
        solution: "Built Connie to run outreach and webinar invitation flow autonomously on a rolling schedule.",
        outcome: "Recovered team time and increased consistency of top-of-funnel execution.",
      },
      {
        challenge: "Inconsistent outreach cadence reduced funnel reliability.",
        solution: "Implemented always-on scheduling and standardized follow-up logic.",
        outcome: "Improved execution consistency and reduced dependence on ad hoc team capacity.",
      },
    ],
    results: [
      "Automated a previously manual prospecting motion into a scalable always-on outreach workflow.",
      "Improved consistency of top-of-funnel execution across qualification and invitation steps.",
      "Reduced operational lift for business teams running repetitive outbound motions.",
    ],
    stack: {
      frontend: ["Next.js", "React"],
      backend: ["Agent orchestration workflows", "Prospecting and routing logic"],
      tooling: ["Outreach sequencing", "Webinar automation", "Funnel analytics"],
    },
    nextSteps: [
      "Add quantitative KPIs (reply rate, webinar attendance, application conversion).",
      "Improve qualification scoring with richer account and engagement signals.",
      "Add compliance guardrails and manual override controls for edge cases.",
    ],
  },


  {
    slug: "freight-spend-optimization",
    title: "Freight Spend Optimization",
    medium: "AI Product Strategy",
    description: "Building AI/ML-powered freight optimization workflows to reduce spend while preserving operational constraints.",
    span: "col-span-1 row-span-1",
    status: "In Delivery",
    timeline: "12+ months",
    role: "Product Leadership",
    team: "Cross-functional",
    heroLine: "AI and machine-learning optimization that balances lowest-cost outcomes with real-world business rules.",
    overview:
      "Freight Spend Optimization introduced an AI/ML-powered constraint builder that helps shippers move beyond pure lowest-cost awards. Teams can define rule-based goals, lane filters, and participant filters, then run optimization scenarios that balance cost, service, and operational realities.",
    problem:
      "Customers were relying on manual bid analysis and static spreadsheets. Pure lowest-cost allocation often ignored important constraints (like carrier strategy, incumbent rules, and lane-level requirements), which created inconsistent award outcomes and missed savings.",
    goal:
      "Deliver an intelligent optimization workflow that combines machine-learning-assisted freight decisioning with configurable rule-based constraints, so teams can reduce spend without sacrificing execution requirements.",
    contribution: [
      "Defined product strategy for AI/ML-assisted freight optimization",
      "Led cross-functional design of the constraint builder and scenario workflow",
      "Translated customer procurement rules into scalable product primitives (goal, scope, lane filters, participant filters)",
      "Aligned product, operations, and commercial teams on rollout and adoption",
    ],
    process: [
      { title: "Decision Model Framing", body: "Mapped where lowest-cost optimization worked and where business constraints required rule-based overrides." },
      { title: "Constraint System Design", body: "Built a structured model around goals, lane scope, participant scope, and filter logic to support real-world award strategies." },
      { title: "Scenario Validation", body: "Used iterative testing to catch infeasible scenarios early and improve recommendation trust with customer teams." },
    ],
    features: [
      { title: "AI/ML Optimization Engine", body: "Runs cost-aware award recommendations across lanes while accounting for capacity and bid behavior." },
      { title: "Rule-Based Constraint Builder", body: "Lets users enforce business requirements even when they differ from pure lowest-cost outcomes." },
      { title: "Scope + Filter Controls", body: "Supports lane and participant targeting as a whole, individually, or by grouped segments for precise optimization." },
    ],
    challenges: [
      {
        challenge: "Customers needed to optimize for cost while still honoring nuanced procurement and network constraints.",
        solution: "Combined machine-learning optimization with configurable rule-based goals and fallback logic.",
        outcome: "Enabled practical, explainable award decisions instead of one-dimensional cost-only outputs.",
      },
    ],
    results: [
      "Improved confidence in freight award decisions by making optimization logic transparent and configurable.",
      "Unlocked significant spend-reduction opportunities while preserving carrier and lane strategy requirements.",
    ],
    stack: {
      frontend: ["Next.js", "React"],
      backend: ["Optimization services", "ML-assisted decisioning", "Scenario evaluation pipelines"],
      tooling: ["Figma", "Analytics dashboards", "Customer pilot frameworks"],
    },
    nextSteps: [
      "Expand model coverage across additional freight scenarios and constraint types.",
      "Increase automated guidance for infeasible goals and conflicting rule sets.",
    ],
  },

  {
    slug: "inventory-part-management",
    title: "Inventory & Part Management",
    medium: "Workflow Optimization",
    description: "Streamlining the most time inefficient part of a technician's workflow.",
    span: "col-span-1 row-span-1",
    status: "Shipped",
    timeline: "9 months",
    role: "Product Leadership",
    team: "Product, Design, Engineering, Field Ops",
    heroLine: "Streamlining the most time inefficient part of a technician's workflow.",
    overview:
      "This project focused on reducing technician downtime caused by fragmented inventory lookup, part availability uncertainty, and manual request processes.",
    problem:
      "Technicians were losing high-value time searching for parts across disconnected systems, delaying repairs and increasing repeat site visits.",
    goal:
      "Design and deliver an end-to-end part management experience that speeds up lookup, improves confidence in availability, and shortens repair cycles.",
    contribution: [
      "Defined product vision and success metrics",
      "Prioritized technician-first workflows with operations stakeholders",
      "Led execution sequencing across multiple teams",
      "Drove adoption strategy with field enablement",
    ],
    process: [
      { title: "Field Research", body: "Mapped technician pain points from dispatch to completion." },
      { title: "Workflow Redesign", body: "Created unified part search, reservation, and request flows." },
      { title: "Rollout", body: "Released incrementally with training and operational feedback loops." },
    ],
    features: [
      { title: "Unified Part Search", body: "Single search surface for local, regional, and vendor inventory." },
      { title: "Availability Confidence", body: "Clear stock status and fulfillment timing reduce guesswork." },
      { title: "Technician Queue Tools", body: "Batch request and part-kit workflows reduce repetitive actions." },
    ],
    challenges: [
      {
        challenge: "Inventory data consistency varied by source system.",
        solution: "Introduced normalization and confidence indicators at point of use.",
        outcome: "Improved trust in displayed availability for field decisions.",
      },
    ],
    results: [
      "Reduced time spent on parts-related tasks within technician workflows.",
      "Improved repair throughput by minimizing parts-related delays.",
    ],
    stack: {
      frontend: ["Next.js", "React"],
      backend: ["Inventory APIs", "Parts orchestration services"],
      tooling: ["Figma", "Analytics", "Field pilot playbooks"],
    },
    nextSteps: [
      "Expand predictive part recommendations by job type.",
      "Integrate automated replenishment signals for high-velocity items.",
    ],
  },

]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
