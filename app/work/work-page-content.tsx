"use client"

import { projectsData } from "@/lib/data"
import SectionHeading from "@/components/section-heading"
import Project from "@/components/project"
import { motion, useReducedMotion } from "framer-motion"

export default function WorkPageContent() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="flex flex-col items-center px-4">
      <section className="max-w-[42rem] w-full mb-20 sm:mb-28">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>Our Work</SectionHeading>
          <p className="text-center text-brand-text-secondary -mt-4 mb-12">
            A selection of projects we&apos;ve built for clients and the
            community.
          </p>
        </motion.div>

        <div>
          {projectsData.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </section>
    </main>
  )
}
