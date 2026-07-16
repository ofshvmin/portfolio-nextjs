"use client"

import SectionHeading from "@/components/section-heading"
import ContactForm from "@/components/contact-form"
import { companyInfo } from "@/lib/data"
import { motion, useReducedMotion } from "framer-motion"

export default function ContactPageContent() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="flex flex-col items-center px-4">
      <section className="max-w-[38rem] w-full mb-20 sm:mb-28">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>Get in Touch</SectionHeading>
          <p className="text-center text-brand-text-secondary -mt-4 mb-12">
            Reach out directly at{" "}
            <a
              className="text-brand-accent hover:text-brand-accent-hover underline transition"
              href={`mailto:${companyInfo.email}`}
            >
              {companyInfo.email}
            </a>{" "}
            or use the form below.
          </p>
        </motion.div>

        <ContactForm />

        <div className="mt-12 text-center text-sm text-brand-text-muted">
          <p>{companyInfo.location}</p>
        </div>
      </section>
    </main>
  )
}
