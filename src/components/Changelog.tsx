import { motion } from 'framer-motion'

const versions = [
  {
    version: 'v2026.2',
    date: 'Upcoming',
    tag: 'pre-release',
    tagColor: 'text-cyber-yellow bg-cyber-yellow/10 border-cyber-yellow/20',
    changes: [
      { type: 'feat', text: 'Migration to Linköping scheduled' },
      { type: 'improve', text: 'Improved real-world engineering capabilities' },
      { type: 'feat', text: 'Advanced aerospace integration modules' },
      { type: 'fix', text: 'Reduced time-to-coffee in morning routine' },
    ],
  },
  {
    version: 'v2026.1',
    date: 'Current',
    tag: 'latest',
    tagColor: 'text-cyber-green bg-cyber-green/10 border-cyber-green/20',
    changes: [
      { type: 'feat', text: "Completed Master's Degree" },
      { type: 'feat', text: 'Built AI-powered products' },
      { type: 'feat', text: 'Survived Sweden Rock Festival' },
      { type: 'deploy', text: 'Deployed Aerospace Career Path' },
    ],
  },
]

const typeColors: Record<string, string> = {
  feat: 'text-cyber-green',
  improve: 'text-cyber-blue',
  fix: 'text-cyber-yellow',
  deploy: 'text-cyber-purple',
}

export default function Changelog() {
  return (
    <section id="changelog" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-dark-border bg-dark-card px-4 py-1.5 font-mono text-xs text-cyber-yellow">
            RELEASE NOTES
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">Changelog</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-dark-border" />

          <div className="space-y-12">
            {versions.map((ver, i) => (
              <motion.div
                key={ver.version}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1.5 h-4 w-4 rounded-full border-2 border-cyber-purple bg-dark-bg" />

                <div className="rounded-xl border border-dark-border bg-dark-card/50 p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <h3 className="font-mono text-lg font-bold text-white">{ver.version}</h3>
                    <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${ver.tagColor}`}>
                      {ver.tag}
                    </span>
                    <span className="font-mono text-xs text-gray-500">{ver.date}</span>
                  </div>
                  <ul className="space-y-3">
                    {ver.changes.map((change, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className={`mt-0.5 font-mono text-xs font-bold ${typeColors[change.type]}`}>
                          [{change.type}]
                        </span>
                        <span>{change.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
