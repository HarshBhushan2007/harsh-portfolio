
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import {
  ArrowUpRight,
  Mail,
  GitFork,
  Network,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Contact() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      const section = sectionRef.current

      gsap.from(".contact-kicker", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      })

      gsap.from(".contact-heading", {
        y: 120,
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      })

      gsap.from(".contact-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
        },
      })

      gsap.to(".contact-glow", {
        y: -120,
        x: 80,
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
      id="contact"
      className="scroll-section relative min-h-screen overflow-hidden px-6 py-40 md:px-12 md:py-56"
    >
      <div className="contact-glow pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[170px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative z-10">
        <div className="contact-kicker flex items-center gap-4">
          <span className="h-px w-10 bg-cyan-400/60" />

          <span className="text-[10px] tracking-[0.35em] text-white/35">
            06 — CONTACT
          </span>
        </div>

        <div className="mt-10 border-b border-white/10 pb-16">
          <h2 className="contact-heading text-[17vw] font-bold leading-[0.72] tracking-[-0.09em] sm:text-[13vw] md:text-[10vw]">
            LET'S
            <br />

            <span className="bg-gradient-to-r from-purple-300 via-white to-cyan-300 bg-clip-text text-transparent">
              CONNECT.
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-[1fr_auto] md:items-end">
          <div className="contact-content">
            <p className="max-w-lg text-base leading-8 text-white/45">
              Have an idea, opportunity or simply want to talk about
              technology and development?
            </p>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/25">
              I'm always open to interesting conversations, collaborations
              and opportunities to learn something new.
            </p>

            <a
              href="mailto:harshbhushan55@gmail.com"
              className="group mt-12 flex w-fit items-center gap-5 border-b border-white/20 pb-4 text-sm tracking-[0.15em] transition-colors duration-300 hover:border-purple-300"
            >
              <Mail
                size={18}
                className="text-purple-300/60"
              />

              <span>harshbhushan55@gmail.com</span>

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="contact-content w-full max-w-sm border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="text-[9px] tracking-[0.3em] text-white/30">
                CURRENT STATUS
              </span>

              <span className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-cyan-300/70">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                OPEN
              </span>
            </div>

            <p className="mt-8 text-sm leading-7 text-white/50">
              Currently exploring internships, projects and opportunities
              to grow as a developer.
            </p>
          </div>
        </div>

        <div className="contact-content mt-32 border-t border-white/10 pt-8">
          <p className="mb-8 text-[9px] tracking-[0.3em] text-white/25">
            FIND ME ONLINE
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/HarshBhushan2007"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 border border-white/10 px-5 py-4 text-xs tracking-[0.15em] transition-all duration-500 hover:border-purple-300/40 hover:bg-white/[0.04]"
            >
              <GitFork size={16} />

              <span>GITHUB</span>

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-bhushan-02b797324/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 border border-white/10 px-5 py-4 text-xs tracking-[0.15em] transition-all duration-500 hover:border-cyan-300/40 hover:bg-white/[0.04]"
            >
              <Network size={16} />

              <span>LINKEDIN</span>

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <footer className="mt-32 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-[9px] tracking-[0.2em] text-white/20 md:flex-row">
          <span>HARSH BHUSHAN</span>
          <span>© 2026</span>
          <span>BUILT WITH REACT + GSAP</span>
          <span>06 / 06</span>
        </footer>
      </div>
    </section>
  )
}

export default Contact