import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

function MagneticButton({ children, href = "#" }) {
  const buttonRef = useRef(null)

  useGSAP(() => {
    const button = buttonRef.current

    const handleMouseMove = (event) => {
      const rect = button.getBoundingClientRect()

      const x = event.clientX - (rect.left + rect.width / 2)
      const y = event.clientY - (rect.top + rect.height / 2)

      gsap.to(button, {
        x: x * 0.25,
        y: y * 0.25,
        duration: 0.4,
        ease: "power3.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
      })
    }

    button.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      button.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  })

  return (
    <a
      ref={buttonRef}
      href={href}
      className="hero-link group flex w-fit items-center gap-5 border-b border-white/30 pb-3 text-xs tracking-[0.2em]"
    >
      {children}

      <span className="transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>
    </a>
  )
}

export default MagneticButton