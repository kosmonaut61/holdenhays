export type ProjectFeature = {
  title: string
  body: string
}

export type ProjectChallenge = {
  challenge: string
  solution: string
  outcome: string
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
  stack: {
    frontend: string[]
    backend: string[]
    tooling: string[]
  }
  nextSteps: string[]
}

export const projects: ProjectData[] = [
  {
    slug: "project-lattice",
    title: "ProcureOS Pro",
    medium: "Product Leadership",
    description: "Product-led growth transformation within a traditionally sales-driven organization.",
    span: "col-span-2 row-span-2",
    status: "Concept-to-Prototype",
    timeline: "8 weeks",
    role: "Lead Product Designer + Frontend Build",
    team: "1 Designer, 1 Engineer, 1 PM",
    heroLine: "Introducing product led growth to a sales driven org & how the bet paid off.",
    overview:
      "Project Lattice rethinks how dense interfaces adapt to changing content and user intent. Instead of rigid templates, the layout system composes itself from reusable structural blocks, keeping hierarchy stable while content evolves.",
    problem:
      "Legacy screens broke down as content volume increased. Users spent too much time scanning and reorienting, and important information moved unpredictably across views.",
    goal:
      "Create a resilient layout framework that preserves orientation, improves scanning speed, and supports future product growth without redesigning core screens every quarter.",
    contribution: [
      "Defined component hierarchy and layout rules",
      "Authored responsive behavior model and edge-case states",
      "Built prototype architecture for rapid validation",
      "Led stakeholder walkthroughs and revision cycles",
    ],
    process: [
      { title: "Discovery", body: "Mapped high-friction screens and documented hierarchy failures across breakpoints." },
      { title: "System Design", body: "Created a spatial grammar of containers, anchors, and adaptive rails." },
      { title: "Build", body: "Implemented modular templates and tested with realistic data density." },
      { title: "Iteration", body: "Refined spacing, visual rhythm, and collapse behavior based on feedback." },
    ],
    features: [
      { title: "Adaptive Grid Logic", body: "Layout responds to content priority, not just viewport width." },
      { title: "Persistent Anchors", body: "Critical controls remain spatially stable across contexts." },
      { title: "Progressive Reveal", body: "Advanced controls remain available without overwhelming default views." },
    ],
    challenges: [
      {
        challenge: "High variance in content length caused broken alignment.",
        solution: "Introduced fluid modules with minimum rhythm constraints.",
        outcome: "Reduced visual jitter and improved readability under heavy data loads.",
      },
      {
        challenge: "Stakeholders wanted flexibility without inconsistency.",
        solution: "Defined strict composition rules with optional enhancement zones.",
        outcome: "Enabled customization while preserving a coherent UI language.",
      },
    ],
    results: [
      "Prototype usability tests showed faster task orientation in first-time sessions.",
      "Internal design reviews reported stronger clarity in information hierarchy.",
      "System reduced one-off layout exceptions during implementation planning.",
    ],
    stack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Content APIs (mocked)", "Static JSON fixtures"],
      tooling: ["Figma", "GSAP", "Storyboarding"],
    },
    nextSteps: [
      "Connect to live data sources and validate with production-level complexity.",
      "Expand pattern library for admin-only advanced workflows.",
      "Add accessibility audit pass for keyboard-first navigation.",
    ],
  },
  {
    slug: "signal-field",
    title: "Signal Field",
    medium: "Agent Orchestration",
    description: "Autonomous coordination layer for multi-agent environments.",
    span: "col-span-1 row-span-1",
    status: "Prototype",
    timeline: "6 weeks",
    role: "Interaction Design + Systems Mapping",
    team: "Solo",
    heroLine: "A coordination surface where autonomous agents exchange intent with human-readable clarity.",
    overview:
      "Signal Field explores how multi-agent systems can remain understandable to humans. The interface visualizes intent, priority, and state transitions so operators can monitor behavior without diving into logs.",
    problem:
      "Agent behaviors were technically successful but opaque. Operators lacked confidence because decisions happened in black-box chains with little contextual visibility.",
    goal: "Design a transparent orchestration layer that shows what is happening, why it is happening, and what action is possible next.",
    contribution: ["Defined event taxonomy", "Designed state visualization model", "Built dashboard prototype"],
    process: [
      { title: "Taxonomy", body: "Categorized events by urgency, confidence, and reversibility." },
      { title: "Visual Model", body: "Mapped state transitions to timeline and node views." },
      { title: "Validation", body: "Ran scenario-based walkthroughs for debugging workflows." },
    ],
    features: [
      { title: "Intent Timeline", body: "Chronological stream of agent objectives and decisions." },
      { title: "State Clusters", body: "Grouped active tasks by confidence and dependency." },
      { title: "Intervention Points", body: "Clear moments where manual override is meaningful." },
    ],
    challenges: [
      {
        challenge: "Dense telemetry created cognitive overload.",
        solution: "Collapsed low-risk events by default with contextual expansion.",
        outcome: "Improved scanning speed without losing traceability.",
      },
    ],
    results: ["Operators completed diagnostic drills faster in simulated runs.", "Confidence in system observability improved during feedback sessions."],
    stack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Synthetic event stream"],
      tooling: ["Figma", "Diagramming", "Usability scripts"],
    },
    nextSteps: ["Add filter presets for incident response.", "Integrate agent confidence scoring directly in node labels."],
  },
  {
    slug: "silent-agent",
    title: "Freight UI",
    medium: "Visual System",
    description: "Updating a fragmented visual system to be AI ready.",
    span: "col-span-1 row-span-2",
    status: "In Design",
    timeline: "4 weeks",
    role: "Visual Direction",
    team: "Solo",
    heroLine: "Updating a fragmented visual system to be AI ready.",
    overview: "Silent Agent defines low-noise patterns for status surfaces that live in peripheral vision.",
    problem: "Constant alerts and hard transitions created fatigue and alert blindness.",
    goal: "Build ambient feedback patterns that remain legible while reducing interruption cost.",
    contribution: ["Established visual rhythm", "Defined animation tempo", "Built token set"],
    process: [
      { title: "Moodboarding", body: "Explored low-contrast systems that preserve legibility." },
      { title: "Prototype", body: "Tested soft transitions and subtle state pulses." },
      { title: "Refinement", body: "Adjusted timing thresholds to reduce perceptual noise." },
    ],
    features: [
      { title: "Ambient Alerts", body: "State changes are visible without modal interruptions." },
      { title: "Soft Hierarchy", body: "Priority cues rely on rhythm and contrast, not alarm colors alone." },
    ],
    challenges: [
      { challenge: "Subtle visuals risked low discoverability.", solution: "Added adaptive contrast at critical thresholds.", outcome: "Balanced calm presentation with clear urgency when required." },
    ],
    results: ["Early feedback highlighted lower perceived stress during monitoring tasks."],
    stack: { frontend: ["Next.js", "CSS variables"], backend: ["N/A"], tooling: ["Figma", "After Effects"] },
    nextSteps: ["Test with larger notification sets.", "Add accessibility contrast presets."],
  },
  {
    slug: "noir-grid",
    title: "Top of Funnel Automation",
    medium: "Marketing Automation",
    description: "Automating marketing for better sales qualified leads.",
    span: "col-span-1 row-span-1",
    status: "Exploration",
    timeline: "3 weeks",
    role: "Type System Design",
    team: "Solo",
    heroLine: "Automating marketing for better sales qualified leads.",
    overview: "Noir Grid explores density, hierarchy, and pace in long-form digital storytelling.",
    problem: "Generic typography made important context visually flat and hard to scan.",
    goal: "Create a typographic system that carries narrative hierarchy with precision.",
    contribution: ["Scale architecture", "Responsive rhythm", "Editorial components"],
    process: [
      { title: "Audit", body: "Benchmarked readability and hierarchy failures in existing layouts." },
      { title: "Build", body: "Created modular display/body/caption relationships." },
    ],
    features: [
      { title: "Kinetic Headline Scale", body: "Headlines adapt shape across breakpoints while retaining identity." },
      { title: "Annotation Layer", body: "Context tags and captions remain visually coherent in dense pages." },
    ],
    challenges: [
      { challenge: "Expressive type often breaks on small screens.", solution: "Introduced range-clamped scale rules.", outcome: "Preserved tone without sacrificing readability." },
    ],
    results: ["Reading-flow tests showed better section recall."],
    stack: { frontend: ["CSS clamp()", "Tailwind typography"], backend: ["N/A"], tooling: ["Type studies", "Figma"] },
    nextSteps: ["Publish as reusable editorial design kit."],
  },
  {
    slug: "echo-chamber",
    title: "Echo Chamber",
    medium: "Audio-Visual",
    description: "Generative soundscapes mapped to interface interactions.",
    span: "col-span-2 row-span-1",
    status: "Prototype",
    timeline: "5 weeks",
    role: "Creative Direction + Interaction",
    team: "Solo",
    heroLine: "An experimental system where interaction patterns generate reactive audio atmosphere.",
    overview: "Echo Chamber treats interaction as composition, translating UI behavior into subtle musical feedback.",
    problem: "Interactive systems often ignore sonic affordance, missing opportunities for emotional reinforcement.",
    goal: "Create a responsive audio layer that enhances focus and flow without becoming distracting.",
    contribution: ["Designed sound mapping model", "Built interaction triggers", "Tuned response curves"],
    process: [
      { title: "Mapping", body: "Connected event types to tonal and rhythmic motifs." },
      { title: "Testing", body: "Validated comfort and cognitive load across long sessions." },
    ],
    features: [
      { title: "Event Sonification", body: "Actions emit contextual tones tied to system state." },
      { title: "Adaptive Ambience", body: "Background texture shifts with workflow intensity." },
    ],
    challenges: [
      { challenge: "Audio novelty can fatigue users quickly.", solution: "Added decay logic and repetition suppression.", outcome: "Sustained ambience with reduced annoyance." },
    ],
    results: ["Participants described the experience as more immersive and intentional."],
    stack: { frontend: ["Web Audio API", "React"], backend: ["N/A"], tooling: ["Ableton", "Figma"] },
    nextSteps: ["Add user tuning controls for sound profile intensity."],
  },

  {
    slug: "freight-spend-optimization",
    title: "Freight Spend Optimization",
    medium: "AI Product Strategy",
    description: "Developing AI driven products to save customers millions in freight spend.",
    span: "col-span-1 row-span-1",
    status: "In Delivery",
    timeline: "12+ months",
    role: "Product Leadership",
    team: "Cross-functional",
    heroLine: "Developing AI driven products to save customers millions in freight spend.",
    overview:
      "This initiative focused on building AI-assisted freight decisioning products that identify waste, improve routing decisions, and uncover savings opportunities across large shipping networks.",
    problem:
      "Customers managed freight spend through manual analysis and fragmented tooling, leading to missed savings and inconsistent procurement decisions.",
    goal:
      "Create intelligent, scalable product workflows that surface high-impact savings opportunities and make optimization actions easy to execute.",
    contribution: [
      "Shaped product strategy and roadmap",
      "Aligned stakeholders across product, sales, and operations",
      "Defined AI use-cases and validation criteria",
      "Led rollout and adoption planning",
    ],
    process: [
      { title: "Opportunity Mapping", body: "Analyzed customer spend patterns and identified highest-value optimization moments." },
      { title: "AI Product Design", body: "Defined recommendation flows and confidence-based actioning models." },
      { title: "Pilot Delivery", body: "Launched targeted pilots and iterated with customer feedback loops." },
    ],
    features: [
      { title: "Savings Opportunity Detection", body: "Models identify overspend patterns and prioritize high-value actions." },
      { title: "Decision Support Workflows", body: "Recommendations are paired with context, confidence, and expected impact." },
      { title: "Performance Tracking", body: "Dashboards connect optimization actions to measurable savings outcomes." },
    ],
    challenges: [
      {
        challenge: "Data quality varied significantly across customer environments.",
        solution: "Designed resilient ingestion rules and confidence thresholds.",
        outcome: "Maintained recommendation quality while scaling across accounts.",
      },
    ],
    results: [
      "Demonstrated multi-million-dollar savings potential across key customer segments.",
      "Improved stakeholder confidence in AI-assisted freight decisions.",
    ],
    stack: {
      frontend: ["Next.js", "React"],
      backend: ["Data pipelines", "Recommendation services"],
      tooling: ["Figma", "Analytics dashboards", "Customer pilot frameworks"],
    },
    nextSteps: [
      "Expand optimization models to additional spend categories.",
      "Increase automation for recurring high-confidence actions.",
    ],
  },
  {
    slug: "void-protocol",
    title: "Void Protocol",
    medium: "Experimental",
    description: "Negative space as primary interaction medium.",
    span: "col-span-1 row-span-1",
    status: "Research",
    timeline: "Ongoing",
    role: "Concept + Prototyping",
    team: "Solo",
    heroLine: "A minimal interaction experiment where absence guides behavior more than explicit controls.",
    overview: "Void Protocol investigates how restraint and spatial silence can improve decision quality in complex interfaces.",
    problem: "Interfaces overloaded with options can reduce confidence and increase random clicking behavior.",
    goal: "Test whether minimalist affordance patterns can create stronger intentional interaction.",
    contribution: ["Designed concept", "Built interaction studies", "Collected behavioral observations"],
    process: [
      { title: "Hypothesis", body: "Defined principles for action through omission." },
      { title: "Experiments", body: "Ran variants with different affordance densities." },
    ],
    features: [
      { title: "Sparse Action Model", body: "Only the most relevant controls appear at each state." },
      { title: "Spatial Prompts", body: "Whitespace and framing hint next actions." },
    ],
    challenges: [
      { challenge: "Minimal UI can feel ambiguous.", solution: "Introduced progressive hinting with contextual copy.", outcome: "Users retained autonomy while reducing uncertainty." },
    ],
    results: ["Initial sessions suggested fewer accidental interactions in core flows."],
    stack: { frontend: ["Next.js", "GSAP"], backend: ["N/A"], tooling: ["Figma", "Rapid prototypes"] },
    nextSteps: ["Expand studies across expert and novice user groups."],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
