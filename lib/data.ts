import chemungSpeedrome from "@/public/chemungspeedrome.png"
import newsLingo from "@/public/newslingo.png"
import type { NavLink, Service, Project } from "./types"

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export const servicesData: Service[] = [
  {
    title: "Custom Web Applications",
    description:
      "Full-stack web applications tailored to your business processes. From internal tools to customer-facing platforms, we build scalable solutions with modern frameworks and cloud infrastructure.",
    icon: "code",
    features: [
      "React & Next.js frontends",
      "REST & GraphQL APIs",
      "Database design & integration",
      "Cloud deployment & CI/CD",
    ],
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps that deliver native performance. We use React Native to build for iOS and Android from a single codebase, reducing cost and time to market.",
    icon: "smartphone",
    features: [
      "React Native development",
      "iOS & Android deployment",
      "Push notifications & offline support",
      "App Store submission",
    ],
  },
  {
    title: "Business Websites",
    description:
      "Fast, polished websites that establish your online presence. Static-first architecture means lightning-fast load times, strong SEO, and low hosting costs.",
    icon: "globe",
    features: [
      "Marketing & landing pages",
      "Content management systems",
      "SEO optimization",
      "Analytics integration",
    ],
  },
  {
    title: "Technical Consulting",
    description:
      "Strategic guidance for teams navigating technical decisions. We help you choose the right stack, architect for scale, and establish engineering best practices.",
    icon: "lightbulb",
    features: [
      "Architecture review",
      "Technology selection",
      "Performance audits",
      "Team workflow optimization",
    ],
  },
]

export const projectsData: Project[] = [
  {
    title: "Chemung Speedrome",
    description:
      "Official website for a Finger Lakes short-track racetrack. Features race schedules, results, driver standings, sponsor showcases, and a custom admin dashboard.",
    tags: ["Astro", "TypeScript", "Tailwind", "Vercel"],
    imageUrl: chemungSpeedrome,
    githubUrl: "https://github.com/ofshvmin/racetrack-spa",
    liveUrl: "https://chemungspeedrome.com",
    featured: true,
  },
  {
    title: "NewsLingo",
    description:
      "Interactive language learning platform serving foreign language news articles with on-demand word translation. Built in collaboration with two other developers.",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl: newsLingo,
    githubUrl: "https://github.com/ofshvmin/newsLingo-front-end",
    liveUrl: "https://news-lingo.netlify.app/",
    featured: true,
  },
  {
    title: "Very Important Pickles",
    description:
      "Marketing website for a multidisciplinary advisory and execution practice based in Miami. Statically prerendered editorial site with a serverless contact form, organized content architecture across five practice areas, and a warm, editorial design system.",
    tags: ["Astro 5", "TypeScript", "Tailwind CSS", "Resend", "Vercel"],
    imageUrl: null,
    liveUrl: "https://veryimportantpickles.com",
    featured: false,
  },
  {
    title: "Grimoire",
    description:
      "Full-stack Magic: The Gathering Commander deck builder with AI-powered deck generation. Users import their card collection, select a commander, and get a complete legal deck with synergy analysis, combo detection, mana probability calculations, and natural-language AI deck briefs powered by Claude. Features multi-format import, playtest simulation, and budget-upgrade suggestions.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "FastAPI",
      "Python",
      "MongoDB",
      "Fly.io",
      "Vercel",
    ],
    imageUrl: null,
    githubUrl: "https://github.com/ofshvmin/mtg-deckbuilder",
    liveUrl: "https://mtg-deckbuilder-bice.vercel.app",
    featured: false,
  },
]

export const technologiesData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Astro",
  "Node.js",
  "Python",
  "FastAPI",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "AWS",
  "Vercel",
  "Framer Motion",
] as const

export const companyInfo = {
  name: "DankoDev, LLC",
  email: "info@dankodev.com",
  location: "Finger Lakes Region, NY",
  github: "https://github.com/ofshvmin",
  linkedin: "https://www.linkedin.com/in/daniel-g-mathews",
} as const
