"use client"

import { servicesData } from "@/lib/data"
import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import SectionHeading from "./section-heading"
import {
  HiOutlineCode,
  HiOutlineDeviceMobile,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
} from "react-icons/hi"

const iconMap: Record<string, React.ReactNode> = {
  code: <HiOutlineCode className="text-2xl" />,
  smartphone: <HiOutlineDeviceMobile className="text-2xl" />,
  globe: <HiOutlineGlobeAlt className="text-2xl" />,
  lightbulb: <HiOutlineLightBulb className="text-2xl" />,
}

export default function ServicesOverview() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="max-w-4xl w-full mb-20 sm:mb-28">
      <SectionHeading>What We Do</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-brand-surface border border-brand-border rounded-lg p-6 hover:border-brand-border-hover hover:bg-brand-surface-elevated transition-all"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 30,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-brand-accent">{iconMap[service.icon]}</span>
              <h3 className="font-semibold text-brand-text-primary">
                {service.title}
              </h3>
            </div>
            <p className="text-sm text-brand-text-secondary leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/services"
          className="text-brand-accent hover:text-brand-accent-hover font-medium transition"
        >
          Learn more about our services &rarr;
        </Link>
      </div>
    </section>
  )
}
