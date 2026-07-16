import { Metadata } from "next"
import ContactPageContent from "./contact-page-content"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with DankoDev to discuss your project.",
}

export default function ContactPage() {
  return <ContactPageContent />
}
