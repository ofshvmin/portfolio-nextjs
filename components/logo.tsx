import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="text-xl font-bold tracking-tight">
      <span className="text-brand-text-primary">Danko</span>
      <span className="text-brand-accent">Dev</span>
    </Link>
  )
}
