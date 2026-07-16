"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"

export default function CtaBanner() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      className="w-full max-w-4xl bg-brand-accent rounded-2xl px-8 py-12 text-center mb-20 sm:mb-28"
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        Ready to build something great?
      </h2>
      <p className="text-white/80 mb-8 max-w-lg mx-auto">
        Tell us about your project and we&apos;ll get back to you with a plan.
      </p>
      <Link
        href="/contact"
        className="bg-white text-brand-accent font-medium px-8 py-3 rounded-full hover:bg-white/90 transition focus:scale-105 hover:scale-105 active:scale-100 inline-block"
      >
        Get in Touch
      </Link>
    </motion.section>
  )
}
