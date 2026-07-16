"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { Service } from "@/lib/types"
import {
  HiOutlineCode,
  HiOutlineDeviceMobile,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
} from "react-icons/hi"

const iconMap: Record<string, React.ReactNode> = {
  code: <HiOutlineCode className="text-3xl" />,
  smartphone: <HiOutlineDeviceMobile className="text-3xl" />,
  globe: <HiOutlineGlobeAlt className="text-3xl" />,
  lightbulb: <HiOutlineLightBulb className="text-3xl" />,
}

export default function ServiceCard({
  service,
  index,
}: {
  service: Service
  index: number
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="bg-brand-surface border border-brand-border rounded-lg p-8 hover:border-brand-border-hover hover:bg-brand-surface-elevated transition-all"
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        y: shouldReduceMotion ? 0 : 30,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-brand-accent">{iconMap[service.icon]}</span>
        <h3 className="text-xl font-semibold text-brand-text-primary">
          {service.title}
        </h3>
      </div>
      <p className="text-brand-text-secondary leading-relaxed mb-6">
        {service.description}
      </p>
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-brand-text-secondary"
          >
            <span className="text-brand-accent mt-0.5">&#x2713;</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
