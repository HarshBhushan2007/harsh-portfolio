import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    touchMultiplier: 1.5,
  })

  const update = (time) => {
    lenis.raf(time * 1000)
  }

  lenis.on("scroll", ScrollTrigger.update)

  gsap.ticker.add(update)

  gsap.ticker.lagSmoothing(0)

  return () => {
    lenis.destroy()
    gsap.ticker.remove(update)
  }
}