import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

function SectionTransition() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      const section = sectionRef.current

      // Main line reveal
      gsap.from(".transition-line", {
        scaleX: 0,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      })

      // Center point
      gsap.from(".transition-point", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      })

      // Text
      gsap.from(".transition-text", {
        y: 15,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      })

      // Main orb movement
      gsap.to(".transition-orb-main", {
        y: -40,
        x: 50,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // Side orb movement
      gsap.to(".transition-orb-side", {
        x: -30,
        y: 30,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    },
    {
      scope: sectionRef,
    }
  )

  return (
    <section
      ref={sectionRef}
      className="relative h-[24vh] min-h-[180px] max-h-[260px] overflow-hidden"
    >
      {/* Main purple glow */}
      <div
        className="
          transition-orb-main
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[180px]
          w-[180px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/15
          blur-[100px]
        "
      />

      {/* Left blue glow */}
      <div
        className="
          transition-orb-side
          pointer-events-none
          absolute
          left-[5%]
          top-1/2
          h-[140px]
          w-[140px]
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-[80px]
        "
      />

      {/* Right cyan glow */}
      <div
        className="
          transition-orb-side
          pointer-events-none
          absolute
          right-[5%]
          top-1/2
          h-[140px]
          w-[140px]
          -translate-y-1/2
          rounded-full
          bg-cyan-400/10
          blur-[80px]
        "
      />

      {/* Main line */}
      <div
        className="
          transition-line
          absolute
          left-1/2
          top-1/2
          h-px
          w-[80%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-purple-300/40
          to-transparent
        "
      />

      {/* Secondary line */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-px
          w-[35%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-300/30
          to-transparent
        "
      />

      {/* Center point */}
      <div
        className="
          transition-point
          absolute
          left-1/2
          top-1/2
          h-2
          w-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/80
          shadow-[0_0_25px_rgba(255,255,255,0.5)]
        "
      />

      {/* Left label */}
      <span
        className="
          absolute
          left-6
          top-1/2
          -translate-y-1/2
          text-[8px]
          tracking-[0.3em]
          text-white/20
          md:left-12
        "
      >
        EXPERTISE
      </span>

      {/* Right label */}
      <span
        className="
          absolute
          right-6
          top-1/2
          -translate-y-1/2
          text-[8px]
          tracking-[0.3em]
          text-white/20
          md:right-12
        "
      >
        JOURNEY
      </span>

      {/* Center text */}
      <div
        className="
          transition-text
          absolute
          left-1/2
          top-[calc(50%+22px)]
          -translate-x-1/2
          text-center
        "
      >
        <p className="whitespace-nowrap text-[7px] tracking-[0.4em] text-white/25">
          KEEP EXPLORING
        </p>
      </div>
    </section>
  )
}

export default SectionTransition