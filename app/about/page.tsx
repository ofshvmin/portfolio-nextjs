import { Metadata } from "next"
import AboutPageContent from "./about-page-content"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about DankoDev — our background, approach, and the technologies we use.",
}

export default function AboutPage() {
  return <AboutPageContent />
}
