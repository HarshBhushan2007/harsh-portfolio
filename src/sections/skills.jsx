import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { ArrowUpRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const skills = [
  {
    number: "01",
    name: "JAVASCRIPT",
    type: "LANGUAGE",
  },
  {
    number: "02",
    name: "REACT",
    type: "FRONTEND",
  },
  {
    number: "03",
    name: "GSAP",
    type: "ANIMATION",
  },
  {
    number: "04",
    name: "TAILWIND CSS",
    type: "STYLING",
  },
  {
    number: "05",
    name: "HTML / CSS",
    type: "FOUNDATION",
  },
  {
    number: "06",
    name: "C / C++",
    type: "PROGRAMMING",
  },
  {
    number: "07",
    name: "DATA STRUCTURES",
    type: "COMPUTING",
  },
  {
    number: "08",
    name: "GIT / GITHUB",
    type: "TOOLS",
  },
]

function Skills() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from(".skills-kicker", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      gsap.from(".skills-heading", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })

      gsap.from(".skill-row", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      })
    },
    {
      scope: sectionRef,
  })

  const handleMouseEnter = (event) => {
    const row = event.currentTarget
    const arrow = row.querySelector(".skill-arrow")

    gsap.to(row, {
      x: 12,
      duration: 0.5,
      ease: "power3.out",
    })

    gsap.to(arrow, {
      rotate: 45,
      scale: 1.2,
      duration: 0.4,
      ease: "power3.out",
    })
  }

  const handleMouseLeave = (event) => {
    const row = event.currentTarget
    const arrow = row.querySelector(".skill-arrow")

    gsap.to(row, {
      x: 0,
      duration: 0.6,
      ease: "power3.out",
    })

    gsap.to(arrow, {
      rotate: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    })
  }

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="scroll-section relative overflow-hidden px-6 py-40 md:px-12 md:py-56"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-60 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[180px]" />

      <div className="relative z-10">

        {/* Header */}
        <div className="skills-kicker flex items-center gap-4">
          <span className="h-px w-10 bg-cyan-400/60" />

          <span className="text-[10px] tracking-[0.35em] text-white/35">
            04 — EXPERTISE
          </span>
        </div>

        {/* Main heading */}
        <div className="mt-8 border-b border-white/10 pb-10">
          <h2 className="skills-heading max-w-6xl text-[15vw] font-bold leading-[0.78] tracking-[-0.08em] sm:text-[11vw] md:text-[8vw]">
            TOOLS
            <br />
            <span className="bg-gradient-to-r from-purple-300 via-white to-cyan-300 bg-clip-text text-transparent">
              I USE.
            </span>
          </h2>
        </div>

        {/* Intro */}
        <div className="mt-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-md text-sm leading-8 text-white/40 sm:text-base">
            A growing toolkit built through projects, experimentation and
            constant curiosity about how the web works.
          </p>

          <span className="text-[9px] tracking-[0.3em] text-white/25">
            08 — SKILLS
          </span>
        </div>

        {/* Skills */}
        <div className="mt-24 border-t border-white/10 md:mt-32">
          {skills.map((skill) => (
            <div
              key={skill.number}
              className="skill-row group grid cursor-default grid-cols-[45px_1fr_auto] items-center gap-4 border-b border-white/10 py-7 transition-colors duration-500 hover:border-purple-300/30 md:grid-cols-[70px_1fr_180px_50px] md:py-9"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Number */}
              <span className="text-[10px] tracking-[0.2em] text-white/20">
                {skill.number}
              </span>

              {/* Skill name */}
              <h3 className="text-2xl font-medium tracking-[-0.04em] transition-colors duration-500 group-hover:text-purple-200 sm:text-4xl md:text-5xl">
                {skill.name}
              </h3>

              {/* Type */}
              <span className="hidden text-[9px] tracking-[0.25em] text-white/25 md:block">
                {skill.type}
              </span>

              {/* Arrow */}
              <ArrowUpRight
                className="skill-arrow text-white/20 transition-colors duration-500 group-hover:text-cyan-300"
                size={20}
              />
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-24 flex items-center justify-between text-[9px] tracking-[0.3em] text-white/20">
          <span>ALWAYS LEARNING</span>
          <span>04 / 06</span>
        </div>

      </div>
    </section>
  )
}

export default Skills