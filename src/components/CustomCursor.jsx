import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

function CustomCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useGSAP(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current

    const moveX = gsap.quickTo(cursor, "x", {
      duration: 0.15,
      ease: "power3.out",
    })

    const moveY = gsap.quickTo(cursor, "y", {
      duration: 0.15,
      ease: "power3.out",
    })

    const ringX = gsap.quickTo(ring, "x", {
      duration: 0.45,
      ease: "power3.out",
    })

    const ringY = gsap.quickTo(ring, "y", {
      duration: 0.45,
      ease: "power3.out",
    })

    const handleMouseMove = (event) => {
      moveX(event.clientX)
      moveY(event.clientY)

      ringX(event.clientX)
      ringY(event.clientY)
    }

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 0.4,
        duration: 0.3,
        ease: "power3.out",
      })

      gsap.to(ring, {
        scale: 1.6,
        opacity: 0.35,
        duration: 0.4,
        ease: "power3.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      })

      gsap.to(ring, {
        scale: 1,
        opacity: 0.15,
        duration: 0.4,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    const interactiveElements = document.querySelectorAll(
      "a, button, .project-card, .skill-row"
    )

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  })

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference md:block"
      />

      {/* Outer cursor */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 md:block"
      />
    </>
  )
}

export default CustomCursor