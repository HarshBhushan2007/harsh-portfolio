import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowDown, ArrowUpRight } from "lucide-react"

gsap.registerPlugin(useGSAP)

function Hero() {
  const heroRef = useRef(null)
  const orbRef = useRef(null)

  useGSAP(
    () => {
      const orb = orbRef.current

      // Simple entrance animations
      gsap.from(".hero-kicker", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out",
      })

      gsap.from(".hero-info", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      })

      gsap.from(".hero-card", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.7,
        ease: "power3.out",
      })

      // Orb floating
      const floatingOrb = gsap.to(orb, {
        x: 40,
        y: -30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      return () => {
        floatingOrb.kill()
      }
    },
    {
      scope: heroRef,
    }
  )

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#07070a] px-6 text-white md:px-12"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Purple glow */}
      <div className="pointer-events-none absolute -left-40 top-[-150px] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]" />

      {/* Blue glow */}
      <div className="pointer-events-none absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[160px]" />

      {/* Main orb */}
      <div
        ref={orbRef}
        className="pointer-events-none absolute right-[8%] top-[25%] h-[280px] w-[280px] rounded-full bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-400/10 md:h-[420px] md:w-[420px]"
      >
        <div className="absolute inset-[20%] rounded-full bg-gradient-to-br from-purple-400/20 to-cyan-300/10 blur-[60px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center pt-24 md:pt-16">

        {/* Kicker */}
        <div className="hero-kicker mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-purple-400/60" />

          <span className="text-[10px] tracking-[0.35em] text-white/40">
            CREATIVE DEVELOPER / 2026
          </span>
        </div>

        {/* =================================
            MAIN TITLE
        ================================= */}

        <div className="hero-title relative z-10">
          <h1 className="font-bold leading-[0.8] tracking-[-0.08em]">

            <span className="block text-[18vw] sm:text-[15vw] md:text-[11vw]">
              CREATIVE
            </span>

            <span className="block text-[18vw] sm:text-[15vw] md:text-[11vw] bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              DEVELOPER
            </span>

          </h1>
        </div>

        {/* =================================
            INFORMATION
        ================================= */}

        <div className="hero-info mt-16 grid gap-12 md:grid-cols-[1fr_auto] md:items-end">

          <div>
            <p className="max-w-lg text-sm leading-8 text-white/45 sm:text-base">
              I design and build digital experiences where
              technology, design and motion come together.
            </p>

            <a
              href="#projects"
              className="group mt-8 flex w-fit items-center gap-4 border-b border-white/20 pb-3 text-xs tracking-[0.2em] transition-colors duration-300 hover:border-white"
            >
              EXPLORE MY WORK

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Card */}
          <div className="hero-card w-full max-w-xs border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">

            <div className="mb-8 flex items-center justify-between">
              <span className="text-[9px] tracking-[0.25em] text-white/30">
                CURRENTLY
              </span>

              <span className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-purple-300/70">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                AVAILABLE
              </span>
            </div>

            <p className="text-sm leading-6 text-white/60">
              Exploring web development,
              creative coding and interactive
              digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["REACT", "GSAP", "TAILWIND"].map((tech) => (
                <span
                  key={tech}
                  className="border border-white/10 px-2.5 py-1 text-[8px] tracking-[0.15em] text-white/35"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-0 flex items-center gap-3 text-[9px] tracking-[0.3em] text-white/30">
          <ArrowDown
            size={14}
            className="animate-bounce"
          />

          SCROLL TO EXPLORE
        </div>

        {/* Page */}
        <div className="absolute bottom-8 right-0 text-[9px] tracking-[0.3em] text-white/30">
          01 / 06
        </div>

      </div>
    </section>
  )
}

export default Hero