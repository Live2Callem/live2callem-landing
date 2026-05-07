import Nav from './components/Nav'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import DemoCTA from './components/DemoCTA'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-white">
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <HowItWorks />
        <DemoCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
