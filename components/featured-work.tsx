"use client"

import { projectsData } from "@/lib/data"
import SectionHeading from "./section-heading"
import Project from "./project"
import Link from "next/link"

export default function FeaturedWork() {
  const featured = projectsData.filter((p) => p.featured)

  return (
    <section className="max-w-[42rem] w-full mb-20 sm:mb-28">
      <SectionHeading>Featured Work</SectionHeading>
      <div>
        {featured.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/work"
          className="text-brand-accent hover:text-brand-accent-hover font-medium transition"
        >
          See all projects &rarr;
        </Link>
      </div>
    </section>
  )
}
