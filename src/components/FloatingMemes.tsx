import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const memes = [
  '// TODO: fix later',
  'git push --force',
  'Works on my machine',
  'undefined is not a function',
  '// This should never happen',
  'LGTM 👍',
  'npm install everything',
  '¯\\_(ツ)_/¯',
  'Segfault (core dumped)',
  '// I have no idea why this works',
  '// Dear future me, I\'m sorry',
  'sudo make me a sandwich',
  'console.log("here")',
  'Stack Overflow to the rescue',
]

interface FloatingMeme {
  id: number
  text: string
  x: number
  y: number
}

export default function FloatingMemes() {
  const [activeMemes, setActiveMemes] = useState<FloatingMeme[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const meme: FloatingMeme = {
        id: Date.now(),
        text: memes[Math.floor(Math.random() * memes.length)],
        x: Math.random() * (window.innerWidth - 200),
        y: Math.random() * (window.innerHeight - 100),
      }
      setActiveMemes(prev => [...prev.slice(-4), meme])
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <AnimatePresence>
        {activeMemes.map((meme) => (
          <motion.div
            key={meme.id}
            initial={{ opacity: 0, scale: 0.5, x: meme.x, y: meme.y }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{ left: meme.x, top: meme.y }}
            className="absolute rounded-lg border border-dark-border/50 bg-dark-card/60 px-3 py-2 font-mono text-xs text-gray-500 backdrop-blur-sm"
          >
            {meme.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
