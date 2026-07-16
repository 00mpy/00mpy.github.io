/**
 * EDIT THIS FILE TO CHANGE THE WORDS ON THE WEBSITE.
 *
 * Keep the property names and punctuation around each value intact.
 * The full editing guide is in EDITING_GUIDE.md at the project root.
 */
export const siteContent = {
  brand: "OOMPY / CODE WORK",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Approach", href: "#approach" },
    { label: "Notes", href: "#notes" },
  ],
  header: {
    utility: "TRACKSIDE UTILITY / 2026",
    status: "SYSTEM READY",
  },
  hero: {
    eyebrow: "HOBBY-BUILT SOFTWARE FOR MOTORCYCLE RACING",
    lineOne: "Small tools.",
    lineTwo: "Faster race days.",
    introduction:
      "AI-assisted software that removes the slow parts from Ridenet entry processing and brings MYLAPS timing to local trackside screens.",
    action: "Explore the work",
  },
  systemStrip: [
    "SESSION / 01",
    "MOTORCYCLE OPERATIONS SOFTWARE",
    "LOCAL / OFFLINE",
    "DATA / FAST",
    "RACE DAY / READY",
  ],
  workIntroduction: {
    kicker: "SELECTED WORK / 2026",
    title: "Two problems.",
    accent: "Worked through.",
    description:
      "Practical tools shaped around real trackside friction. Each project keeps the workflow close, understandable and useful under race-day pressure.",
  },
  projects: [
    {
      number: "01",
      label: "ENTRY / SCHEDULING",
      title: "Ridenet Data Processor",
      headline: "From export to an organised event in minutes.",
      description:
        "A local workflow that turns a downloaded Ridenet export into clearer entry data and a workable race schedule, without rebuilding the event by hand.",
      points: [
        "Import and check the downloaded event export",
        "Organise entries and classes into a useful workspace",
        "Build and refine the race schedule locally",
      ],
      status: "PROCESS / READY",
      readouts: [
        { label: "INPUT", value: "RIDENET EXPORT" },
        { label: "PROCESS", value: "LOCAL WORKSPACE" },
        { label: "OUTPUT", value: "ENTRIES + SCHEDULE" },
      ],
      flow: ["EXPORT", "CHECK", "ORGANISE", "SCHEDULE"],
    },
    {
      number: "02",
      label: "LIVE / LOCAL",
      title: "MYLAPS Local Timing",
      headline: "Trackside timing screens without an internet dependency.",
      description:
        "A local timing display that brings MYLAPS race information to screens around the circuit using the trackside network, without requiring Speedhive access.",
      points: [
        "Receive timing information on the local network",
        "Serve a clear browser display to trackside screens",
        "Keep the display useful when external internet is unavailable",
      ],
      status: "TIMING / LOCAL",
      readouts: [
        { label: "SOURCE", value: "MYLAPS TIMING" },
        { label: "NETWORK", value: "TRACKSIDE LOCAL" },
        { label: "DISPLAY", value: "BROWSER SCREENS" },
      ],
      flow: ["TIMING FEED", "LOCAL SERVER", "TRACK NETWORK", "SCREENS"],
    },
  ],
  approach: {
    kicker: "WHY THESE EXIST",
    title: "Built from problems",
    accent: "experienced at the circuit.",
    description:
      "These are independent, problem-led experiments by a hobby AI-assisted coder. AI helps explore and test ideas; the aim is simply to remove avoidable work and make race days easier.",
    steps: [
      {
        number: "01",
        title: "EXPERIENCE",
        description: "Notice the repeated task or trackside limitation.",
      },
      {
        number: "02",
        title: "SIMPLIFY",
        description: "Build the smallest useful local workflow around it.",
      },
      {
        number: "03",
        title: "REFINE",
        description: "Use it in context, learn, and improve the practical details.",
      },
    ],
  },
  notes: {
    kicker: "PUBLIC PROJECT NOTES",
    title: "The work is the story. Private data is not.",
    items: [
      "No customer information is shown or used to demonstrate these projects.",
      "No personal profile is required—the focus stays on the problems and the tools.",
      "Ridenet and MYLAPS are named only because the projects address workflows around those systems.",
    ],
  },
  footer: {
    statement: "SMALL TOOLS / FASTER RACE DAYS",
    tags: ["INDEPENDENT", "AI-ASSISTED", "PROBLEM-LED", "2026"],
    disclaimer:
      "Independent hobby projects. Ridenet and MYLAPS are referenced solely to describe the workflows these tools are designed around.",
  },
} as const;
