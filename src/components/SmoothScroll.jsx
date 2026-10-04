import { useEffect } from "react"
import { initSmoothScroll } from "../animations/smoothScroll"

function SmoothScroll() {
  useEffect(() => {
    const cleanup = initSmoothScroll()

    return cleanup
  }, [])

  return null
}

export default SmoothScroll