import { navLinks, companyInfo } from "@/lib/data"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-surface/50 mt-20">
      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="text-xl font-bold tracking-tight mb-2">
            <span className="text-brand-text-primary">Danko</span>
            <span className="text-brand-accent">Dev</span>
          </p>
          <p className="text-brand-text-secondary">
            Software development for businesses that need it done right.
          </p>
        </div>

        <div>
          <p className="font-semibold text-brand-text-primary mb-3">Pages</p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-brand-text-secondary hover:text-brand-accent transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-brand-text-primary mb-3">Contact</p>
          <ul className="space-y-2 text-brand-text-secondary">
            <li>
              <a
                href={`mailto:${companyInfo.email}`}
                className="hover:text-brand-accent transition"
              >
                {companyInfo.email}
              </a>
            </li>
            <li>{companyInfo.location}</li>
            <li className="flex gap-3 pt-1">
              <a
                href={companyInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-lg hover:text-brand-accent transition"
              >
                <FaGithub />
              </a>
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-lg hover:text-brand-accent transition"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-border py-4 text-center text-xs text-brand-text-muted">
        &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
        reserved.
      </div>
    </footer>
  )
}
