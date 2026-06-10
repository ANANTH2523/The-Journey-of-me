import { motion } from 'framer-motion'

const traits = [
  {
    icon: '🎬',
    title: 'Crazy Movie Lover',
    detail: 'From Nolan masterpieces to Telugu blockbusters — can debate film theory for hours. Has a "must watch" list longer than most people\'s bucket lists.',
    color: 'text-cyber-pink',
    border: 'border-cyber-pink/20',
  },
  {
    icon: '🤝',
    title: 'Always Down for Meetups',
    detail: 'Coffee catch-ups, spontaneous dinners, weekend trips — never says no. The friend who actually shows up, every single time.',
    color: 'text-cyber-blue',
    border: 'border-cyber-blue/20',
  },
  {
    icon: '😂',
    title: 'Meme Lord',
    detail: 'Social media meme encyclopedia. Will respond to any situation with the perfect meme in under 3 seconds. Peak internet culture awareness.',
    color: 'text-cyber-yellow',
    border: 'border-cyber-yellow/20',
  },
  {
    icon: '🧠',
    title: 'Walking Wikipedia',
    detail: 'Insane general knowledge — from quantum physics to football stats to obscure history. The person you want on your quiz team. Always.',
    color: 'text-cyber-green',
    border: 'border-cyber-green/20',
  },
  {
    icon: '🔥',
    title: 'Philosophical Motivator',
    detail: 'The 3 AM friend who gives life-changing advice. Combines deep philosophical thinking with real-world wisdom to lift people up when they need it most.',
    color: 'text-cyber-purple',
    border: 'border-cyber-purple/20',
  },
  {
    icon: '👔',
    title: 'Mature Beyond His Years',
    detail: 'Moved countries alone at 21. Handles pressure like a veteran. Emotionally intelligent, financially responsible, and knows when to be serious.',
    color: 'text-cyber-blue',
    border: 'border-cyber-blue/20',
  },
  {
    icon: '🌍',
    title: 'World Traveler',
    detail: 'India → Sweden. Survived -20°C winters and still smiling. Adapts to any culture, any city, any situation.',
    color: 'text-cyber-yellow',
    border: 'border-cyber-yellow/20',
  },
  {
    icon: '🍳',
    title: 'Can Actually Cook',
    detail: 'South Indian cuisine specialist. Biryani rating: 10/10. Will feed you better than most restaurants.',
    color: 'text-cyber-pink',
    border: 'border-cyber-pink/20',
  },
  {
    icon: '🏆',
    title: 'Champion Mentality',
    detail: 'Go Kart Champion India 2022. Masters in Software Engineering. Doesn\'t do anything halfway — goes all in, every time.',
    color: 'text-cyber-green',
    border: 'border-cyber-green/20',
  },
]

const lifetimeStats = [
  { label: 'Countries Explored', value: '8+', icon: '✈️' },
  { label: 'Movies Watched', value: '1000+', icon: '🎬' },
  { label: 'Friends Motivated', value: '∞', icon: '💪' },
  { label: 'Memes Shared/Day', value: '50+', icon: '😂' },
  { label: 'Languages Spoken', value: '4', icon: '🗣️' },
  { label: 'Meetups Never Missed', value: '99.9%', icon: '🤝' },
  { label: 'Quiz Wins', value: '20+', icon: '🧠' },
  { label: 'Cups of Coffee', value: '∞', icon: '☕' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function WhyAnanth() {
  return (
    <section id="why" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-cyber-pink/30 bg-cyber-pink/5 px-4 py-1.5 font-mono text-xs text-cyber-pink">
            COMPATIBILITY REPORT
          </span>
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
            Why <span className="bg-gradient-to-r from-cyber-pink via-cyber-purple to-cyber-blue bg-clip-text text-transparent">Ananth</span>?
          </h2>
          <p className="mx-auto max-w-lg text-sm text-gray-500">
            A comprehensive analysis of traits that make this human worth keeping around.
            Spoiler: the results are overwhelmingly positive.
          </p>
        </motion.div>

        {/* Lifetime Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8"
        >
          {lifetimeStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group rounded-xl border border-dark-border bg-dark-card/50 p-4 text-center transition-all hover:border-cyber-purple/40 hover:shadow-lg hover:shadow-cyber-purple/10"
            >
              <span className="mb-2 block text-2xl">{stat.icon}</span>
              <span className="block font-mono text-xl font-bold text-white group-hover:text-cyber-blue">
                {stat.value}
              </span>
              <span className="block font-mono text-[9px] uppercase tracking-widest text-gray-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trait Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {traits.map((trait) => (
            <motion.div
              key={trait.title}
              variants={item}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`group rounded-xl border ${trait.border} bg-dark-card/30 p-6 transition-all hover:shadow-lg`}
            >
              <div className="mb-3 flex items-center gap-3">
                <motion.span
                  className="text-3xl"
                  whileHover={{ rotate: [0, -15, 15, 0], scale: 1.3 }}
                  transition={{ duration: 0.4 }}
                >
                  {trait.icon}
                </motion.span>
                <h3 className={`font-bold ${trait.color}`}>{trait.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">{trait.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="mx-auto max-w-md rounded-xl border border-dark-border bg-dark-card/30 p-6">
            <p className="font-mono text-xs italic text-gray-500">
              "He'll send you the perfect meme at 2 AM, motivate you with a philosophical
              quote at 3 AM, cook you biryani at noon, and casually mention he's a national
              go-kart champion over dinner."
            </p>
            <p className="mt-2 font-mono text-[10px] text-cyber-pink">
              — Everyone who's ever met Ananth
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
