
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Community from './components/Community'
import OurRuns from './components/OurRuns'
import Membership from './components/Membership'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <main className="relative min-h-[1024px] overflow-hidden bg-[#0B0B0B]">
        <Hero />
        <Navbar />
        <Ticker />
      </main>

      <About />
      <Community />
      <OurRuns />
      <Membership />
      <Footer />
    </>
  )
}

export default App
