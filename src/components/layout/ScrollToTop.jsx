import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button
      type="button"
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  )
}

export default ScrollToTop