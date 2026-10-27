import { useEffect, useState } from 'react'

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'contact',
]

function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return activeSection
}

export default useActiveSection