import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

function Loader() {
  const loaderRef = useRef(null)
  const counterRef = useRef(null)

  useGSAP(
    () => {
      const counter = { value: 0 }

      const tl = gsap.timeline()

      tl.to(counter, {
        value: 100,
        duration: 1.8,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(counter.value)
          }
        },
      })
        .to(".loader-counter", {
          opacity: 0,
          duration: 0.3,
        })
        .to(
          loaderRef.current,
          {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
          },
          "-=0.1"
        )
    },
    {
      scope: loaderRef,
    }
  )

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050505]"
    >
      <div className="loader-counter text-sm tracking-[0.3em] text-white/70">
        <span ref={counterRef}>0</span>%
      </div>
    </div>
  )
}

export default Loader