"use client"

import { servicesData } from "@/lib/data"
import SectionHeading from "@/components/section-heading"
import ServiceCard from "@/components/service-card"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

export default function ServicesPageContent() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="flex flex-col items-center px-4">
      <section className="max-w-4xl w-full mb-20 sm:mb-28">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>Our Services</SectionHeading>
          <p className="text-center text-brand-text-secondary -mt-4 mb-12 max-w-2xl mx-auto">
            We partner with businesses to design, build, and ship software that
            solves real problems. Every engagement is tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-brand-text-secondary mb-6">
            Have a project in mind? Let&apos;s talk about how we can help.
          </p>
          <Link
            href="/contact"
            className="bg-brand-accent text-white px-8 py-3 rounded-full font-medium hover:bg-brand-accent-hover transition focus:scale-105 hover:scale-105 active:scale-100 inline-block"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
