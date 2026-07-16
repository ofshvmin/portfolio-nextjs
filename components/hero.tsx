"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="max-w-3xl text-center mb-20 sm:mb-28">
      <motion.h1
        className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-brand-text-primary"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        We build software that powers your business.
      </motion.h1>
      <motion.p
        className="mt-6 text-lg text-brand-text-secondary max-w-xl mx-auto"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Custom web applications, mobile apps, and business websites — designed
        and engineered by a team that understands your goals.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="/work"
          className="bg-brand-accent text-white px-8 py-3 rounded-full font-medium hover:bg-brand-accent-hover transition focus:scale-105 hover:scale-105 active:scale-100"
        >
          View Our Work
        </Link>
        <Link
          href="/contact"
          className="border border-brand-border bg-brand-surface px-8 py-3 rounded-full font-medium text-brand-text-primary hover:border-brand-border-hover hover:bg-brand-surface-elevated transition focus:scale-105 hover:scale-105 active:scale-100"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  )
}
