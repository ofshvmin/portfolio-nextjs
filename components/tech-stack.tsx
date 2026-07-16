"use client"

import { technologiesData } from "@/lib/data"
import SectionHeading from "./section-heading"
import { motion, useReducedMotion } from "framer-motion"

export default function TechStack() {
  const shouldReduceMotion = useReducedMotion()

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.05 * index,
      },
    }),
  }

  return (
    <section className="max-w-[53rem] text-center mb-20 sm:mb-28">
      <SectionHeading>Our Tech Stack</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-brand-text-primary">
        {technologiesData.map((tech, index) => (
          <motion.li
            key={index}
            className="bg-brand-surface border border-brand-border rounded-xl px-5 py-3"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {tech}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
