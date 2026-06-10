import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SystemStatus from './components/SystemStatus'
import FeatureModules from './components/FeatureModules'
import BugTracker from './components/BugTracker'
import Changelog from './components/Changelog'
import PullRequest from './components/PullRequest'
import FloatingMemes from './components/FloatingMemes'
import KonamiOverlay from './components/KonamiOverlay'
import Footer from './components/Footer'
import { useKonamiCode } from './hooks/useKonamiCode'

export default function App() {
  const konamiActivated = useKonamiCode()

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SystemStatus />
        <FeatureModules />
        <BugTracker />
        <Changelog />
        <PullRequest />
      </main>
      <Footer />
      <FloatingMemes />
      <KonamiOverlay active={konamiActivated} />
    </div>
  )
}
