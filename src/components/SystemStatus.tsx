import { motion } from 'framer-motion'

const statusCards = [
  {
    label: 'System Uptime',
    value: '23 Years',
    detail: 'Online since 2003. Zero critical downtime.',
    icon: '⏱',
    color: 'text-cyber-green',
    borderColor: 'border-cyber-green/20',
    glowColor: 'hover:shadow-cyber-green/10',
  },
  {
    label: 'Current Deployment',
    value: 'Stockholm',
    detail: 'BTH — Blekinge Institute of Technology',
    icon: '📍',
    color: 'text-cyber-blue',
    borderColor: 'border-cyber-blue/20',
    glowColor: 'hover:shadow-cyber-blue/10',
  },
  {
    label: 'Upcoming Deployment',
    value: 'Linköping',
    detail: 'Migration scheduled for next release cycle',
    icon: '🚀',
    color: 'text-cyber-purple',
    borderColor: 'border-cyber-purple/20',
    glowColor: 'hover:shadow-cyber-purple/10',
  },
]

const coreServices = [
  { name: 'Aerospace Engineering', status: 'operational', latency: '12ms' },
  { name: 'Full Stack Development', status: 'operational', latency: '8ms' },
  { name: 'AI Integration', status: 'operational', latency: '15ms' },
  { name: 'Startup Survival', status: 'operational', latency: '23ms' },
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
  show: { opacity: 1, y: 0 },
}

export default function SystemStatus() {
  return (
    <section id="status" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-dark-border bg-dark-card px-4 py-1.5 font-mono text-xs text-cyber-green">
            SYSTEM DIAGNOSTICS
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">System Status Dashboard</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {statusCards.map((card) => (
            <motion.div
              key={card.label}
              variants={item}
              className={`group rounded-xl border ${card.borderColor} bg-dark-card/50 p-6 transition-all hover:shadow-2xl ${card.glowColor}`}
            >
              <div className="mb-4 text-3xl">{card.icon}</div>
              <p className="mb-1 font-mono text-xs uppercase tracking-wider text-gray-500">{card.label}</p>
              <p className={`mb-2 text-2xl font-bold ${card.color}`}>{card.value}</p>
              <p className="text-sm text-gray-500">{card.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl border border-dark-border bg-dark-card/50"
        >
          <div className="border-b border-dark-border px-6 py-4">
            <h3 className="font-mono text-sm font-semibold text-gray-300">Core Services</h3>
          </div>
          <div className="divide-y divide-dark-border">
            {coreServices.map((service) => (
              <div key={service.name} className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-dark-border/20">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyber-green shadow-[0_0_8px_rgba(57,255,20,0.5)]" />
                  <span className="text-sm text-gray-300">{service.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-gray-500">{service.latency}</span>
                  <span className="rounded-full bg-cyber-green/10 px-3 py-1 font-mono text-xs text-cyber-green">
                    {service.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
