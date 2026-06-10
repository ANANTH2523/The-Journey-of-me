import { motion } from 'framer-motion'

interface KonamiOverlayProps {
  active: boolean
}

export default function KonamiOverlay({ active }: KonamiOverlayProps) {
  if (!active) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        initial={{ y: 20, scale: 0.9 }}
        animate={{ y: 0, scale: 1 }}
        className="rounded-xl border border-cyber-green/30 bg-dark-card/90 p-4 shadow-2xl shadow-cyber-green/20 backdrop-blur-sm"
      >
        <div className="mb-1 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyber-green" />
          <span className="font-mono text-xs font-bold text-cyber-green">DEVELOPER MODE UNLOCKED</span>
        </div>
        <p className="font-mono text-[10px] text-gray-500">
          All system restrictions removed. God mode enabled.
        </p>
      </motion.div>
    </motion.div>
  )
}
