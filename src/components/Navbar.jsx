import { useEffect, useState } from "react"
import gsap from "gsap"
import { Menu, X, ArrowUpRight } from "lucide-react"

const desktopLinks = [
  ["ABOUT", "#about"],
  ["WORK", "#projects"],
  ["SKILLS", "#skills"],
  ["JOURNEY", "#experience"],
  ["CONTACT", "#contact"],
]

const mobileLinks = [
  ["01", "ABOUT", "#about"],
  ["02", "WORK", "#projects"],
  ["03", "SKILLS", "#skills"],
  ["04", "JOURNEY", "#experience"],
  ["05", "CONTACT", "#contact"],
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-[100] w-full px-6 py-5 transition-all duration-500 md:px-12 ${
          scrolled || menuOpen
            ? "border-b border-white/[0.06] bg-[#050505]/70 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            onClick={closeMenu}
            className="group relative z-[110] flex items-center text-sm font-bold tracking-[0.3em]"
          >
            HB
            <span className="ml-0.5 text-purple-300 transition-all duration-300 group-hover:text-cyan-300">
              .
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex lg:gap-10">
            {desktopLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group relative py-2 text-[10px] tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-white"
              >
                {label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-purple-300 to-cyan-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-5 py-2.5 text-[9px] tracking-[0.2em] text-white/70 transition-all duration-300 hover:border-purple-300/50 hover:bg-purple-300/10 hover:text-white md:flex"
          >
            RESUME

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`relative z-[110] flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 md:hidden ${
              menuOpen
                ? "border-white/20 bg-white/10"
                : "border-white/10 bg-white/[0.02]"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`absolute transition-all duration-300 ${
                menuOpen
                  ? "rotate-90 scale-100 opacity-100"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[90] flex items-center justify-center bg-[#050505] px-6 transition-all duration-500 md:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-40 top-10 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[150px]" />

        <div className="relative w-full max-w-sm">
          {/* Menu heading */}
          <div
            className={`mb-10 flex items-center gap-4 transition-all duration-500 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <span className="h-px w-8 bg-purple-300/60" />

            <span className="text-[9px] tracking-[0.35em] text-white/30">
              NAVIGATION
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            {mobileLinks.map(([number, label, href], index) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                style={{
                  transitionDelay: menuOpen
                    ? `${index * 60}ms`
                    : "0ms",
                }}
                className={`group flex items-center justify-between border-b border-white/10 py-5 transition-all duration-500 ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <span className="text-[9px] tracking-[0.2em] text-white/20 transition-colors duration-300 group-hover:text-purple-300">
                  {number}
                </span>

                <span className="text-3xl font-bold tracking-[-0.05em] transition-transform duration-300 group-hover:translate-x-2">
                  {label}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                />
              </a>
            ))}
          </div>

          {/* Mobile resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className={`group mt-10 flex w-fit items-center gap-3 rounded-full border border-white/15 px-7 py-3 text-[9px] tracking-[0.25em] transition-all duration-500 hover:border-purple-300/40 hover:bg-purple-300/10 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: menuOpen ? "350ms" : "0ms",
            }}
          >
            VIEW RESUME

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

          {/* Bottom info */}
          <div
            className={`mt-16 flex items-center justify-between text-[8px] tracking-[0.3em] text-white/20 transition-all duration-500 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: menuOpen ? "450ms" : "0ms",
            }}
          >
            <span>HB / 2026</span>
            <span>CREATIVE DEVELOPER</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar