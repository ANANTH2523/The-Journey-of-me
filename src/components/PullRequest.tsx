import { motion } from 'framer-motion'

const checklist = [
  { done: true, text: 'Education complete' },
  { done: true, text: 'Industry experience acquired' },
  { done: true, text: 'Startup experience added' },
  { done: true, text: 'Sweden survival package installed' },
  { done: false, text: 'Future upgrades pending' },
]

const reviewers = [
  { name: 'Universe', status: 'approved', color: 'text-cyber-green' },
  { name: 'Life', status: 'changes_requested', color: 'text-cyber-yellow' },
  { name: 'Career', status: 'pending', color: 'text-gray-400' },
]

export default function PullRequest() {
  return (
    <section id="pr" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-dark-border bg-dark-card px-4 py-1.5 font-mono text-xs text-cyber-purple">
            MERGE REQUEST
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">Pull Request</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl border border-dark-border bg-dark-card/50"
        >
          {/* PR header */}
          <div className="border-b border-dark-border p-6">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-cyber-green/10 px-3 py-1 font-mono text-xs text-cyber-green">
                Open
              </span>
              <h3 className="text-lg font-semibold text-white">
                Improve overall life architecture and prepare for next major release
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-gray-500">
              <span className="text-cyber-purple">#1001</span>
              <span>opened by</span>
              <span className="text-gray-300">@ananth</span>
              <span>wants to merge into</span>
              <span className="rounded-md bg-cyber-blue/10 px-2 py-0.5 text-cyber-blue">main</span>
              <span>from</span>
              <span className="rounded-md bg-cyber-purple/10 px-2 py-0.5 text-cyber-purple">feature/life-v2</span>
            </div>
          </div>

          {/* PR body */}
          <div className="border-b border-dark-border p-6">
            <div className="mb-6 rounded-lg border border-dark-border bg-dark-bg p-4">
              <h4 className="mb-3 font-mono text-sm font-semibold text-gray-300">Description</h4>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                Major refactor of life architecture. Migrated from single-threaded academic mode to a
                multi-threaded career pipeline with improved error handling and better resource allocation.
              </p>
              <h4 className="mb-3 font-mono text-sm font-semibold text-gray-300">Checklist</h4>
              <ul className="space-y-2">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-mono text-sm">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded border text-xs ${
                        item.done
                          ? 'border-cyber-green/30 bg-cyber-green/10 text-cyber-green'
                          : 'border-dark-border text-gray-600'
                      }`}
                    >
                      {item.done ? '✓' : ' '}
                    </span>
                    <span className={item.done ? 'text-gray-300' : 'text-gray-500'}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviewers */}
            <div className="rounded-lg border border-dark-border bg-dark-bg p-4">
              <h4 className="mb-3 font-mono text-sm font-semibold text-gray-300">Reviewers</h4>
              <div className="space-y-2">
                {reviewers.map((r) => (
                  <div key={r.name} className="flex items-center justify-between">
                    <span className="font-mono text-sm text-gray-400">@{r.name}</span>
                    <span className={`font-mono text-xs ${r.color}`}>{r.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Merge button */}
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-cyber-green shadow-[0_0_8px_rgba(57,255,20,0.5)]" />
              <span className="font-mono text-xs text-cyber-green">All checks passed</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-gradient-to-r from-cyber-green to-cyber-blue px-6 py-2.5 font-mono text-sm font-semibold text-dark-bg transition-shadow hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]"
            >
              Squash and merge
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
