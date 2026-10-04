import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/projects"
import Skills from "./sections/skills"
import Experience from "./sections/Experience"
import Contact from "./sections/contact"

import CustomCursor from "./components/CustomCursor"
import SmoothScroll from "./components/SmoothScroll"
import Loader from "./components/Loader"
import SectionTransition from "./components/SectionTransition"
function App() {
  return (
    <main className="bg-[#050505] text-white">

    <Loader />

      <SmoothScroll />


      <CustomCursor />

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Skills />

      <SectionTransition />

      <Experience />

     <Contact />

    </main>
  )
}

export default App