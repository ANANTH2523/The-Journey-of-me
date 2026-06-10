import { motion } from 'framer-motion'
import { useTypingEffect } from '../hooks/useTypingEffect'

const terminalLines = [
  '$ sudo apt install aerospace-engineer --turbo',
  '$ pip install ai-integration --upgrade --no-sleep',
  '$ npm run start-career --mode=beast',
  '$ docker compose up -d startup-survival-mode',
  '$ go-kart --champion --country=india --year=2022',
  '$ cricket play --league=sweden --role=allrounder',
  '$ cargo build --release --features="full-stack,chad"',
]

export default function Hero() {
  const typedText = useTypingEffect(terminalLines, 40, 20, 1500)

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow effects */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyber-purple/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyber-blue/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dark-border bg-dark-card/50 px-4 py-2 font-mono text-xs text-gray-400">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyber-green" />
            System Status: All services operational
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
            Ananth.exe
          </span>
          <br />
          <span className="font-mono text-2xl font-normal text-gray-500 sm:text-3xl">The Journey</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 sm:text-xl"
        >
          Software Engineer by day. <span className="text-cyber-pink">Go Kart Champion</span> by weekend.{' '}
          <span className="text-cyber-green">Pro Cricketer</span> by season.{' '}
          <span className="text-cyber-yellow">Movie buff</span>. <span className="text-cyber-purple">Meme lord</span>.{' '}
          <span className="text-cyber-blue">Philosophical motivator</span>.{' '}
          Running on caffeine, ambition & good vibes since 2003.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#status"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple px-6 py-3 font-mono text-sm font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            View Documentation
          </a>
          <a
            href="#pr"
            className="inline-flex items-center gap-2 rounded-lg border border-dark-border bg-dark-card px-6 py-3 font-mono text-sm text-gray-300 transition-all hover:border-cyber-purple hover:text-white hover:shadow-[0_0_30px_rgba(176,38,255,0.2)]"
          >
            Open GitHub PR
          </a>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-dark-border bg-dark-card/80 shadow-2xl shadow-cyber-blue/5"
        >
          <div className="flex items-center gap-2 border-b border-dark-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-gray-500">ananth@journey ~ terminal</span>
          </div>
          <div className="p-5 text-left font-mono text-sm">
            <span className="text-cyber-green">{typedText}</span>
            <span className="ml-0.5 inline-block h-5 w-2 animate-pulse bg-cyber-green" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
