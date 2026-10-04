import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { ArrowUpRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const projects = [
  {
    number: "01",
    title: "MUSIC WAVE",
    category: "WEB EXPERIENCE",
    year: "2026",
    image: "/music-wave-project.jpg",
    description:
      "An immersive music discovery experience focused on sound, visual identity and interactive motion.",
    tech: ["REACT", "GSAP", "TAILWIND"],
  },
  {
    number: "02",
    title: "NEXUS AI",
    category: "AI INTERFACE",
    year: "2026",
    image: "/nexus-ai.jpg",
    description:
      "A futuristic interface concept for exploring AI tools through a clean and interactive dashboard.",
    tech: ["REACT", "JAVASCRIPT", "GSAP"],
  },
  {
    number: "03",
    title: "VOID STUDIO",
    category: "CREATIVE WEB",
    year: "2026",
    image: "/void-studio.jpg",
    description:
      "A creative studio experience built around typography, visual storytelling and smooth transitions.",
    tech: ["REACT", "TAILWIND", "LENIS"],
  },
]

function Projects() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      const section = sectionRef.current

      if (!section) return

      // --------------------------------
      // HEADER ANIMATION
      // --------------------------------

      gsap.from(".work-kicker", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      })

      gsap.from(".work-heading", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      })

      // --------------------------------
      // PROJECT CARDS
      // --------------------------------

      const cards = gsap.utils.toArray(".project-card")

      cards.forEach((card) => {
        const image = card.querySelector(".project-image")

        if (!image) return

        // Card reveal
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        })

        // Image parallax
        gsap.fromTo(
          image,
          {
            yPercent: -5,
          },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        )
      })

      // Refresh after images/layout settle
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 500)
    },
    {
      scope: sectionRef,
    }
  )

  // --------------------------------
  // MOUSE MOVE
  // --------------------------------

  const handleMouseMove = (event) => {
    const card = event.currentTarget
    const image = card.querySelector(".project-image")

    if (!image) return

    const rect = card.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const moveX = (x - rect.width / 2) * 0.02
    const moveY = (y - rect.height / 2) * 0.02

    gsap.to(image, {
      x: moveX,
      y: moveY,
      scale: 1.04,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto",
    })
  }

  // --------------------------------
  // MOUSE LEAVE
  // --------------------------------

  const handleMouseLeave = (event) => {
    const image = event.currentTarget.querySelector(".project-image")

    if (!image) return

    gsap.to(image, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: "power3.out",
      overwrite: "auto",
    })
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="scroll-section relative overflow-hidden px-6 py-40 md:px-12 md:py-56"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-60 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="relative z-10">

        {/* KICKER */}
        <div className="work-kicker flex items-center gap-4">
          <span className="h-px w-10 bg-purple-400/60" />

          <span className="text-[10px] tracking-[0.35em] text-white/35">
            03 — SELECTED WORK
          </span>
        </div>

        {/* HEADING */}
        <div className="mt-8 flex items-end justify-between border-b border-white/10 pb-10">

          <h2 className="work-heading text-[14vw] font-bold leading-[0.8] tracking-[-0.08em] sm:text-[11vw] md:text-[8vw]">
            SELECTED
            <br />

            <span className="bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              WORK.
            </span>
          </h2>

          <span className="hidden pb-2 text-[9px] tracking-[0.3em] text-white/25 md:block">
            03 / 06
          </span>

        </div>

        {/* PROJECT LIST */}
        <div className="mt-24 space-y-32 md:mt-40 md:space-y-48">

          {projects.map((project) => (
            <article
              key={project.number}
              className="project-card group"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >

              {/* TOP INFO */}
              <div className="mb-6 flex items-center justify-between border-t border-white/10 pt-5">

                <span className="text-[10px] tracking-[0.25em] text-white/30">
                  {project.number}
                </span>

                <span className="text-[10px] tracking-[0.25em] text-white/30">
                  {project.category}
                </span>

                <span className="text-[10px] tracking-[0.25em] text-white/30">
                  {project.year}
                </span>

              </div>

              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden bg-white/5 sm:aspect-[16/8]">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="project-image h-[115%] w-full object-cover grayscale opacity-70 will-change-transform transition-[filter,opacity] duration-700 group-hover:grayscale-0 group-hover:opacity-100"
                />

                {/* Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Arrow */}
                <div className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={20} />
                </div>

              </div>

              {/* PROJECT DETAILS */}
              <div className="grid gap-8 border-b border-white/10 py-8 md:grid-cols-[1fr_320px] md:items-end">

                <div>
                  <h3 className="text-[11vw] font-bold leading-[0.8] tracking-[-0.07em] transition-transform duration-500 group-hover:translate-x-3 sm:text-7xl md:text-8xl">
                    {project.title}
                  </h3>
                </div>

                <div>

                  <p className="text-sm leading-7 text-white/40">
                    {project.description}
                  </p>

                  {/* TECHNOLOGY */}
                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="border border-white/10 px-3 py-1 text-[8px] tracking-[0.18em] text-white/35"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects