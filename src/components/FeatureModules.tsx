import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Module {
  name: string
  version: string
  versionColor: string
  borderColor: string
  glowColor: string
  icon: string
  description: string
  features: string[]
  isF1?: boolean
}

const modules: Module[] = [
  {
    name: 'Aerospace Module',
    version: 'Stable Release',
    versionColor: 'text-cyber-green',
    borderColor: 'border-cyber-green/20',
    glowColor: 'hover:shadow-cyber-green/10',
    icon: '🛰️',
    description: 'Battle-tested propulsion and aerodynamics package. Certified for production-grade launches. Warning: may cause spontaneous discussions about spacecraft design.',
    features: ['Aerodynamics Solver', 'Propulsion Analysis', 'Orbital Mechanics', 'CFD Integration'],
  },
  {
    name: 'AI Module',
    version: 'Active Development',
    versionColor: 'text-cyber-blue',
    borderColor: 'border-cyber-blue/20',
    glowColor: 'hover:shadow-cyber-blue/10',
    icon: '🧠',
    description: 'Neural networks, LLMs, and computer vision pipelines. Constantly self-upgrading. Known issue: occasionally dreams in tensors.',
    features: ['LLM Integration', 'Computer Vision', 'Model Training', 'RAG Pipelines'],
  },
  {
    name: 'Startup Module',
    version: 'Experimental',
    versionColor: 'text-cyber-yellow',
    borderColor: 'border-cyber-yellow/20',
    glowColor: 'hover:shadow-cyber-yellow/10',
    icon: '🚀',
    description: 'Survival toolkit for the startup ecosystem. Includes pitch-deck generator, burnout detector, and an unhealthy tolerance for ambiguity.',
    features: ['MVP Builder', 'Pitch Optimization', 'Pivot Detection', 'Caffeine Manager'],
  },
  {
    name: 'Formula 1 Module',
    version: 'Always Running',
    versionColor: 'text-cyber-pink',
    borderColor: 'border-cyber-pink/20',
    glowColor: 'hover:shadow-cyber-pink/10',
    icon: '🏎️',
    description: 'High-performance racing data analytics module. Cannot be stopped. DRS always enabled. Warning: Will compare everything to F1 strategy.',
    features: ['Race Strategy', 'Telemetry Analysis', 'DRS Optimization', 'Tyre Degradation Model'],
    isF1: true,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function FeatureModules() {
  const [f1Activated, setF1Activated] = useState(false)

  return (
    <section id="modules" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-dark-border bg-dark-card px-4 py-1.5 font-mono text-xs text-cyber-blue">
            INSTALLED PACKAGES
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">Feature Modules</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {modules.map((mod) => (
            <motion.div
              key={mod.name}
              variants={cardVariant}
              whileHover={{ scale: 1.02 }}
              onClick={() => mod.isF1 && setF1Activated(true)}
              className={`group cursor-pointer rounded-xl border ${mod.borderColor} bg-dark-card/50 p-6 transition-all hover:shadow-2xl ${mod.glowColor}`}
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{mod.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-200">{mod.name}</h3>
                    <span className={`font-mono text-xs ${mod.versionColor}`}>{mod.version}</span>
                  </div>
                </div>
                <span className="rounded-md border border-dark-border bg-dark-bg px-2 py-1 font-mono text-[10px] text-gray-500">
                  pkg
                </span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">{mod.description}</p>
              <div className="flex flex-wrap gap-2">
                {mod.features.map((f) => (
                  <span key={f} className="rounded-md bg-dark-bg px-2.5 py-1 font-mono text-[11px] text-gray-500">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* F1 Easter Egg */}
        <AnimatePresence>
          {f1Activated && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={() => setF1Activated(false)}
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="mx-4 max-w-md rounded-2xl border border-cyber-pink/30 bg-dark-card p-8 text-center shadow-2xl shadow-cyber-pink/20"
              >
                <div className="mb-4 text-6xl">🏎️💨</div>
                <h3 className="mb-2 bg-gradient-to-r from-cyber-pink to-cyber-yellow bg-clip-text text-2xl font-bold text-transparent">
                  Maximum Speed Mode Activated
                </h3>
                <p className="mb-4 font-mono text-sm text-gray-400">
                  DRS enabled. All limiters removed. Performance mode: RACE.
                </p>
                <div className="inline-flex items-center gap-2 rounded-full bg-cyber-pink/10 px-4 py-2 font-mono text-xs text-cyber-pink">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyber-pink" />
                  Lap time: 1:18.235
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
