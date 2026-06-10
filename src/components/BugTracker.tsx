import { motion } from 'framer-motion'

const bugs = [
  {
    id: 'BUG-001',
    title: 'Occasionally talks about Formula 1 for too long',
    priority: 'P2',
    priorityColor: 'text-cyber-yellow bg-cyber-yellow/10',
    label: 'personality',
    labelColor: 'text-cyber-purple bg-cyber-purple/10',
    status: 'open',
    statusColor: 'text-cyber-green bg-cyber-green/10',
    assignee: 'self',
    created: '24 years ago',
    comments: 47,
  },
  {
    id: 'BUG-002',
    title: 'Accepts hackathon invitations faster than expected',
    priority: 'P1',
    priorityColor: 'text-cyber-pink bg-cyber-pink/10',
    label: 'feature-not-bug',
    labelColor: 'text-cyber-blue bg-cyber-blue/10',
    status: 'wontfix',
    statusColor: 'text-gray-400 bg-gray-400/10',
    assignee: 'self',
    created: '3 years ago',
    comments: 12,
  },
  {
    id: 'BUG-003',
    title: 'Can spend excessive time optimizing code that already works',
    priority: 'P3',
    priorityColor: 'text-cyber-blue bg-cyber-blue/10',
    label: 'perfectionism',
    labelColor: 'text-cyber-yellow bg-cyber-yellow/10',
    status: 'open',
    statusColor: 'text-cyber-green bg-cyber-green/10',
    assignee: 'self',
    created: '5 years ago',
    comments: 28,
  },
  {
    id: 'BUG-004',
    title: 'May become excited when discussing aerospace projects',
    priority: 'P0',
    priorityColor: 'text-red-400 bg-red-400/10',
    label: 'passion',
    labelColor: 'text-cyber-green bg-cyber-green/10',
    status: 'open',
    statusColor: 'text-cyber-green bg-cyber-green/10',
    assignee: 'self',
    created: '10 years ago',
    comments: 93,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export default function BugTracker() {
  return (
    <section id="bugs" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-dark-border bg-dark-card px-4 py-1.5 font-mono text-xs text-cyber-pink">
            KNOWN ISSUES
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">Bug Tracker</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl border border-dark-border bg-dark-card/50"
        >
          <div className="border-b border-dark-border px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-full border-2 border-cyber-green" />
                <span className="font-mono text-sm text-gray-300">
                  <span className="font-bold text-white">4 Open</span> issues
                </span>
              </div>
              <span className="font-mono text-xs text-gray-500">ananth/life-repo</span>
            </div>
          </div>

          <div className="divide-y divide-dark-border">
            {bugs.map((bug) => (
              <motion.div
                key={bug.id}
                variants={item}
                className="group px-6 py-4 transition-colors hover:bg-dark-border/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-gray-500">{bug.id}</span>
                      <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${bug.priorityColor}`}>
                        {bug.priority}
                      </span>
                      <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${bug.labelColor}`}>
                        {bug.label}
                      </span>
                    </div>
                    <h4 className="mb-1 text-sm font-medium text-gray-200 group-hover:text-white">
                      {bug.title}
                    </h4>
                    <p className="font-mono text-xs text-gray-500">
                      Opened {bug.created} by <span className="text-gray-400">@ananth</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full px-2.5 py-1 font-mono text-[10px] ${bug.statusColor}`}>
                      {bug.status}
                    </span>
                    <span className="font-mono text-xs text-gray-500">💬 {bug.comments}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
