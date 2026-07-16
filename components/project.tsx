"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { BsBoxArrowUpRight } from "react-icons/bs"
import type { Project as ProjectType } from "@/lib/types"

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectType) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })
  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [0.8, 1]
  )
  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [0.6, 1]
  )

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article
        className={`bg-brand-surface max-w-[42rem] border border-brand-border rounded-lg overflow-hidden relative mb-3 sm:mb-8 last:mb-0 shadow-md hover:shadow-lg hover:border-brand-border-hover transition-all ${
          imageUrl ? "sm:pr-8 sm:h-[20rem] sm:group-even:pl-8" : "p-6"
        }`}
      >
        <div
          className={`pt-4 pb-7 px-5 flex flex-col h-full ${
            imageUrl
              ? "sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:group-even:ml-[20rem]"
              : ""
          }`}
        >
          <h3 className="text-2xl font-semibold text-brand-text-primary">
            {title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-brand-text-secondary">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-brand-accent-subtle text-brand-accent px-2.5 py-1 text-[0.6rem] uppercase tracking-wider rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} GitHub repository`}
                className="text-brand-text-muted hover:text-brand-accent transition text-xl"
              >
                <FaGithub />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live site`}
                className="text-brand-text-muted hover:text-brand-accent transition text-xl"
              >
                <BsBoxArrowUpRight />
              </a>
            )}
          </div>
        </div>

        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition
            group-hover:scale-105
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-40"
          />
        )}
      </article>
    </motion.div>
  )
}
