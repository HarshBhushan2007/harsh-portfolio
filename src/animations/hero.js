import gsap from "gsap"

export function heroAnimation(scope) {
  const q = gsap.utils.selector(scope)

  const timeline = gsap.timeline({
    defaults: {
      ease: "power4.out",
    },
  })

  timeline
    .from(q(".hero-small"), {
      y: 30,
      opacity: 0,
      duration: 0.8,
    })

    .from(
      q(".hero-title span"),
      {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
      },
      "-=0.4"
    )

    .from(
      q(".hero-description"),
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.6"
    )

    .from(
      q(".hero-link"),
      {
        y: 20,
        opacity: 0,
        duration: 0.7,
      },
      "-=0.5"
    )

    .from(
      q(".hero-scroll"),
      {
        opacity: 0,
        y: 20,
        duration: 0.7,
      },
      "-=0.4"
    )

  return timeline
}