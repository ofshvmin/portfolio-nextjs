import { useContext, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/active-section"
import type { SectionName } from "./types"
import ThemeContext from "@/context/theme-context"


export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }

  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref,
  }
}

