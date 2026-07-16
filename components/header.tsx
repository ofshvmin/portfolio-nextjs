"use client"

import { motion } from "framer-motion"
import { navLinks } from "@/lib/data"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import Logo from "./logo"

export default function Header() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-brand-border bg-brand-surface/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      />
      <nav className="flex fixed top-0 left-1/2 h-[4.5rem] -translate-x-1/2 px-4 items-center sm:top-6 sm:h-[3.25rem] w-full sm:w-[42rem] justify-between">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Logo />
        </motion.div>
        <ul className="flex items-center gap-1 text-[0.9rem] font-medium text-brand-text-muted sm:gap-3">
          {navLinks.map((link) => (
            <motion.li
              className="relative flex items-center justify-center"
              key={link.href}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center px-3 py-2 hover:text-brand-text-primary transition",
                  {
                    "text-brand-text-primary": isActive(link.href),
                  }
                )}
                href={link.href}
              >
                {link.name}

                {isActive(link.href) && (
                  <motion.span
                    className="bg-brand-accent-subtle rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
