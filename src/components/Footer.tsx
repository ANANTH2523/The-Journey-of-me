import { motion } from 'framer-motion'

const footerLinks = [
  { label: 'Aerospace', icon: '🛰️' },
  { label: 'AI', icon: '🧠' },
  { label: 'Hackathons', icon: '💻' },
  { label: 'Startups', icon: '🚀' },
]

export default function Footer() {
  return (
    <footer className="border-t border-dark-border px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          {/* Coverage bar */}
          <div className="mx-auto mb-6 max-w-md">
            <div className="mb-2 flex justify-between font-mono text-xs text-gray-500">
              <span>Test Coverage</span>
              <span className="text-cyber-green">97.3%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-dark-border">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '97.3%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-cyber-green to-cyber-blue"
              />
            </div>
          </div>

          <p className="mb-2 font-mono text-sm text-gray-400">
            Remaining edge cases are being investigated.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <span
              key={link.label}
              className="flex items-center gap-2 rounded-lg border border-dark-border bg-dark-card/30 px-4 py-2 font-mono text-xs text-gray-500 transition-colors hover:border-cyber-purple/30 hover:text-gray-300"
            >
              <span>{link.icon}</span>
              {link.label}
            </span>
          ))}
        </div>

        <div className="text-center">
          <p className="font-mono text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Ananth OS v25.0 &middot; Built with React, TypeScript & Tailwind &middot; Deployed on the edge
          </p>
          <p className="mt-2 font-mono text-[10px] text-gray-700">
            No engineers were harmed in the making of this portfolio. Side effects may include laughter.
          </p>
        </div>
      </div>
    </footer>
  )
}
