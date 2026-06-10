import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Interest {
  id: string
  name: string
  icon: string
  tagline: string
  color: string
  borderColor: string
  glowColor: string
  bgGlow: string
  achievements: { label: string; value: string }[]
  description: string
  funFact: string
  stats: { label: string; value: string; icon: string }[]
}

const interests: Interest[] = [
  {
    id: 'f1',
    name: 'Formula 1 & Motorsport',
    icon: '🏎️',
    tagline: 'Go Kart Champion, India 2022',
    color: 'text-cyber-pink',
    borderColor: 'border-cyber-pink/30',
    glowColor: 'shadow-cyber-pink/20',
    bgGlow: 'bg-cyber-pink/5',
    achievements: [
      { label: 'Title', value: 'Go Kart Champion — India 2022' },
      { label: 'Discipline', value: 'Sprint & Endurance Racing' },
      { label: 'Current', value: 'F1 Strategy Analyst (self-appointed)' },
      { label: 'Dream', value: 'Drive at Spa-Francorchamps' },
    ],
    description:
      'From dominating go-kart circuits in India to breaking down F1 race strategies at 2 AM — speed is not just a hobby, it\'s a lifestyle. Won the national championship in 2022 and haven\'t slowed down since.',
    funFact: 'Can name every F1 World Champion since 1950. Yes, all of them.',
    stats: [
      { label: 'Top Speed', value: '142 km/h', icon: '💨' },
      { label: 'Races Won', value: '15+', icon: '🏆' },
      { label: 'F1 Races Watched', value: '500+', icon: '📺' },
      { label: 'Lap Records', value: '3', icon: '⏱️' },
    ],
  },
  {
    id: 'cricket',
    name: 'Cricket',
    icon: '🏏',
    tagline: 'Professional Cricketer — Sweden League',
    color: 'text-cyber-green',
    borderColor: 'border-cyber-green/30',
    glowColor: 'shadow-cyber-green/20',
    bgGlow: 'bg-cyber-green/5',
    achievements: [
      { label: 'Status', value: 'Professional League Player — Sweden' },
      { label: 'Leagues', value: 'Active in Swedish Cricket League' },
      { label: 'Style', value: 'All-Rounder (Bat + Bowl)' },
      { label: 'Origin', value: 'Trained in India, competing in Sweden' },
    ],
    description:
      'Brought the spirit of Indian cricket to the frozen north. Currently smashing boundaries in Swedish league matches while confusing teammates with sledging in Telugu. Professional cricketer by weekend, engineer by weekday.',
    funFact: 'Has convinced at least 5 Swedes that cricket is better than hockey.',
    stats: [
      { label: 'Matches', value: '60+', icon: '🏟️' },
      { label: 'High Score', value: '89*', icon: '🔥' },
      { label: 'Wickets', value: '40+', icon: '🎯' },
      { label: 'Catches', value: '25+', icon: '🧤' },
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function PersonalInterests() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="interests" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-dark-border bg-dark-card px-4 py-1.5 font-mono text-xs text-cyber-yellow">
            SIDE QUESTS UNLOCKED
          </span>
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">Personal Interests</h2>
          <p className="mx-auto max-w-lg text-sm text-gray-500">
            Because life isn't just about code. These modules run in parallel with the main thread.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {interests.map((interest) => (
            <motion.div
              key={interest.id}
              variants={cardVariant}
              className={`group overflow-hidden rounded-2xl border ${interest.borderColor} ${interest.bgGlow} transition-all duration-300 hover:shadow-2xl hover:${interest.glowColor}`}
            >
              {/* Header */}
              <div
                className="cursor-pointer p-6 sm:p-8"
                onClick={() => setExpanded(expanded === interest.id ? null : interest.id)}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <motion.span
                      className="text-5xl"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {interest.icon}
                    </motion.span>
                    <div>
                      <h3 className={`text-xl font-bold ${interest.color}`}>{interest.name}</h3>
                      <p className="font-mono text-sm text-gray-400">{interest.tagline}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === interest.id ? 180 : 0 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-dark-border text-gray-500"
                  >
                    ▼
                  </motion.div>
                </div>

                {/* Stats row — always visible */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {interest.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-dark-border bg-dark-bg/50 p-3 text-center transition-colors hover:border-dark-border/80"
                    >
                      <span className="mb-1 block text-lg">{stat.icon}</span>
                      <span className={`block font-mono text-lg font-bold ${interest.color}`}>
                        {stat.value}
                      </span>
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-gray-500">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expanded details */}
              <AnimatePresence>
                {expanded === interest.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-dark-border px-6 py-6 sm:px-8">
                      <div className="grid gap-6 lg:grid-cols-2">
                        {/* Description */}
                        <div>
                          <p className="mb-4 text-sm leading-relaxed text-gray-400">
                            {interest.description}
                          </p>
                          <div className="rounded-lg border border-dark-border bg-dark-bg/50 p-4">
                            <p className="font-mono text-xs text-gray-500">
                              <span className={`font-bold ${interest.color}`}>Fun Fact:</span>{' '}
                              {interest.funFact}
                            </p>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-3">
                          {interest.achievements.map((a) => (
                            <div
                              key={a.label}
                              className="flex items-center justify-between rounded-lg border border-dark-border bg-dark-bg/30 px-4 py-3"
                            >
                              <span className="font-mono text-xs uppercase tracking-wider text-gray-500">
                                {a.label}
                              </span>
                              <span className="text-right font-mono text-sm text-gray-300">
                                {a.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
