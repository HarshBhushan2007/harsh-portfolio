import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

function ScrollSections() {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".scroll-section")

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          {
            opacity: 0.35,
            scale: 0.96,
          },
          {
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "top 30%",
              scrub: true,
            },
          }
        )

        gsap.to(section, {
          opacity: 0.35,
          scale: 0.96,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "bottom 70%",
            end: "bottom 20%",
            scrub: true,
          },
        })
      })
    },
    {
      scope: containerRef,
  })

  return <div ref={containerRef} className="pointer-events-none fixed inset-0" />
}

export default ScrollSections