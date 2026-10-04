import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

function About() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      const section = sectionRef.current

      gsap.from(".about-kicker", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      })

      gsap.from(".about-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      })

      gsap.from(".about-heading", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
        },
      })

      gsap.from(".about-copy", {
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

      gsap.to(".about-glow", {
        y: -100,
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
      id="about"
      className="scroll-section relative min-h-screen overflow-hidden px-6 py-40 md:px-12 md:py-56"
    >
      <div className="about-glow pointer-events-none absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[160px]" />

      <div className="relative z-10">
        <div className="about-kicker flex items-center gap-4">
          <span className="h-px w-10 bg-cyan-400/60" />

          <span className="text-[10px] tracking-[0.35em] text-white/35">
            02 — ABOUT ME
          </span>
        </div>

        <div className="about-line mt-8 h-px w-full bg-white/10" />

        <h2 className="about-heading mt-16 max-w-6xl text-[13vw] font-bold leading-[0.82] tracking-[-0.07em] sm:text-[11vw] md:text-[8vw]">
          I CREATE
          <br />
          <span className="bg-gradient-to-r from-purple-300 via-white to-cyan-300 bg-clip-text text-transparent">
            DIGITAL
          </span>
          <br />
          EXPERIENCES.
        </h2>

        <div className="mt-24 grid gap-16 md:grid-cols-2 md:gap-24">
          <p className="about-copy max-w-md text-sm leading-8 text-white/45 sm:text-base">
            I'm a computer science student passionate about
            building things for the web. I enjoy turning ideas
            into interactive experiences using code, design
            and motion.
          </p>

          <div className="about-copy max-w-md md:ml-auto">
            <p className="mb-8 text-xs tracking-[0.2em] text-white/30">
              WHAT I CARE ABOUT
            </p>

            <div className="space-y-5 text-xl tracking-[-0.02em] text-white/70 sm:text-2xl">
              <div className="border-b border-white/10 pb-5">
                Creative Development
              </div>

              <div className="border-b border-white/10 pb-5">
                Interactive Experiences
              </div>

              <div className="border-b border-white/10 pb-5">
                Clean & Modern Design
              </div>

              <div className="border-b border-white/10 pb-5">
                Continuous Learning
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 flex items-center justify-between text-[9px] tracking-[0.3em] text-white/25">
          <span>BASED IN INDIA</span>
          <span>02 / 06</span>
        </div>
      </div>
    </section>
  )
}

export default About