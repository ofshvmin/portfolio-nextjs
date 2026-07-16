"use client"

import SectionHeading from "@/components/section-heading"
import TechStack from "@/components/tech-stack"
import { motion, useReducedMotion } from "framer-motion"

export default function AboutPageContent() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="flex flex-col items-center px-4">
      <section className="max-w-3xl w-full mb-20 sm:mb-28">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>About DankoDev</SectionHeading>
        </motion.div>

        <motion.div
          className="text-brand-text-secondary leading-relaxed space-y-4"
          initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p>
            DankoDev is a software development studio based in the Finger Lakes
            region of New York. We build custom web applications, mobile apps,
            and business websites for companies that need reliable, well-crafted
            software.
          </p>
          <p>
            Our founder brings a background in financial services — including
            roles at Goldman Sachs and BNY Mellon — where he developed deep
            expertise in complex operations, data-driven decision-making, and
            delivering technology solutions in high-stakes environments. That
            experience translates directly into how we approach software: with
            rigor, clear communication, and a focus on outcomes.
          </p>
          <p>
            We work best with businesses that have a clear problem to solve and
            want a technical partner who will own the solution end-to-end — from
            architecture and design through deployment and ongoing support.
          </p>
        </motion.div>
      </section>

      <section className="max-w-3xl w-full mb-20 sm:mb-28">
        <SectionHeading>Our Approach</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Ship Early, Iterate Often",
              text: "We deliver working software fast, then refine based on real feedback — not assumptions.",
            },
            {
              title: "Transparent Communication",
              text: "You'll always know where your project stands. No jargon, no surprises, no black boxes.",
            },
            {
              title: "Built to Last",
              text: "Clean architecture, tested code, and documentation that makes handoffs painless.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-brand-surface border border-brand-border rounded-lg p-6"
              initial={{
                opacity: shouldReduceMotion ? 1 : 0,
                y: shouldReduceMotion ? 0 : 20,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-brand-text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-brand-text-secondary">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <TechStack />
    </main>
  )
}
