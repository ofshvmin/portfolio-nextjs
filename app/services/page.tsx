import { Metadata } from "next"
import ServicesPageContent from "./services-page-content"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom web applications, mobile apps, business websites, and technical consulting from DankoDev.",
}

export default function ServicesPage() {
  return <ServicesPageContent />
}
