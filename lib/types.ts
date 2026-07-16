import { StaticImageData } from "next/image"

export type NavLink = {
  name: string
  href: string
}

export type Service = {
  title: string
  description: string
  icon: string
  features: string[]
}

export type Project = {
  title: string
  description: string
  tags: readonly string[]
  imageUrl: StaticImageData | null
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}
