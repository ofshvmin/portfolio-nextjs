import { Metadata } from "next"
import WorkPageContent from "./work-page-content"

export const metadata: Metadata = {
  title: "Work",
  description: "Projects built by DankoDev for clients and the community.",
}

export default function WorkPage() {
  return <WorkPageContent />
}
