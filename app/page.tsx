import Hero from "@/components/hero"
import ServicesOverview from "@/components/services-overview"
import FeaturedWork from "@/components/featured-work"
import CtaBanner from "@/components/cta-banner"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <ServicesOverview />
      <FeaturedWork />
      <CtaBanner />
    </main>
  )
}
