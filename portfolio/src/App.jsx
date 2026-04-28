import './index.css'
import Navbar from "./sections/Navbar"
import ParallaxScrolling from "./sections/ParallaxScrolling"
import About from "./sections/About"
import Projects from "./sections/FAQ"
import Testimonial from "./sections/Testimonial"
import Form from "./sections/Form"
import Footer from "./sections/Footer"
import StatsSection from "./components/StatsSection"
import Process from "./sections/Process"
import Contact2 from "./sections/Contact2"

function App() {
  return ( 
  <div className="container mx-auto max-w-7xl">
    <Navbar />
    <ParallaxScrolling />
    <StatsSection />
    <About />
    <Process />
    <Testimonial />
    <Form />
    <Projects />
    <Contact2 />
    <Footer />
    </div>

  )
}

export default App
