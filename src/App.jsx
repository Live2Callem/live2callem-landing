import Nav from './components/Nav'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import RoiCalculator from './components/RoiCalculator'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import DemoCTA from './components/DemoCTA'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyCallBar from './components/StickyCallBar'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-white">
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <RoiCalculator />
        <Features />
        <HowItWorks />
        <DemoCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  )
}
