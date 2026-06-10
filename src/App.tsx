import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleBackground from './components/ParticleBackground'
import WhyAnanth from './components/WhyAnanth'
import SystemStatus from './components/SystemStatus'
import FeatureModules from './components/FeatureModules'
import PersonalInterests from './components/PersonalInterests'
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
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SystemStatus />
        <FeatureModules />
        <PersonalInterests />
        <WhyAnanth />
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
