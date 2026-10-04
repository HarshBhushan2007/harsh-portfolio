import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { ArrowUpRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const timeline = [
  {
    year: "2026 — PRESENT",
    number: "01",
    title: "CREATIVE DEVELOPER",
    organization: "PERSONAL PROJECTS",
    description:
      "Building interactive web experiences while exploring React, GSAP, modern UI design and creative development.",
    tags: ["REACT", "GSAP", "WEB"],
  },
  {
    year: "2025 — PRESENT",
    number: "02",
    title: "COMPUTER SCIENCE",
    organization: "KIIT UNIVERSITY",
    description:
      "Studying computer science with a focus on programming, data structures, software development and problem solving.",
    tags: ["C / C++", "DSA", "CS"],
  },
  {
    year: "2025 — PRESENT",
    number: "03",
    title: "LEARNING IN PUBLIC",
    organization: "CONTINUOUS GROWTH",
    description:
      "Learning by building projects, experimenting with new technologies and continuously improving development skills.",
    tags: ["LEARNING", "BUILDING", "GROWTH"],
  },
]

function Experience() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      const section = sectionRef.current

      gsap.from(".experience-kicker", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      })

      gsap.from(".experience-heading", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      })

      gsap.from(".timeline-item", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
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
      id="experience"
      className="scroll-section relative overflow-hidden px-6 py-40 md:px-12 md:py-56"
    >
      <div className="pointer-events-none absolute -right-60 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10">
        <div className="experience-kicker flex items-center gap-4">
          <span className="h-px w-10 bg-purple-400/60" />

          <span className="text-[10px] tracking-[0.35em] text-white/35">
            05 — JOURNEY
          </span>
        </div>

        <div className="mt-8 border-b border-white/10 pb-10">
          <h2 className="experience-heading text-[15vw] font-bold leading-[0.78] tracking-[-0.08em] sm:text-[11vw] md:text-[8vw]">
            MY
            <br />

            <span className="bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              JOURNEY.
            </span>
          </h2>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-lg text-sm leading-8 text-white/40 sm:text-base">
            Still early in the journey, but every project, class and
            experiment is another step toward becoming a better developer.
          </p>

          <span className="text-[9px] tracking-[0.3em] text-white/25">
            2025 — 2029
          </span>
        </div>

        <div className="relative mt-24 md:mt-32">
          <div className="absolute left-[22px] top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-16 md:space-y-0">
            {timeline.map((item) => (
              <div
                key={item.number}
                className="timeline-item group relative grid gap-8 border-t border-white/10 py-10 transition-colors duration-500 hover:border-white/20 md:grid-cols-[70px_180px_1fr_50px] md:gap-8 md:py-14"
              >
                <div className="absolute left-[17px] top-[58px] hidden h-2 w-2 rounded-full bg-purple-300 transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-300 md:block" />

                <span className="text-[10px] tracking-[0.2em] text-white/20 transition-colors duration-300 group-hover:text-purple-300/60">
                  {item.number}
                </span>

                <div>
                  <p className="text-[10px] tracking-[0.2em] text-white/30">
                    {item.year}
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-medium tracking-[-0.04em] transition-colors duration-500 group-hover:text-white sm:text-4xl md:text-5xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[10px] tracking-[0.25em] text-purple-300/50">
                    {item.organization}
                  </p>

                  <p className="mt-7 max-w-xl text-sm leading-7 text-white/40">
                    {item.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 px-3 py-1 text-[8px] tracking-[0.18em] text-white/30 transition-colors duration-300 group-hover:border-purple-300/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ArrowUpRight
                  size={20}
                  className="hidden text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300 md:block"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex items-center justify-between text-[9px] tracking-[0.3em] text-white/20">
          <span>THE JOURNEY CONTINUES</span>
          <span>05 / 06</span>
        </div>
      </div>
    </section>
  )
}

export default Experience