import { motion } from 'framer-motion'

const COMPANIES = ['Stripe', 'Vercel', 'Linear', 'Figma', 'Notion', 'Loom', 'Retool']

export default function LogoStrip() {
  return (
    <section className="py-14 bg-zinc-900 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-zinc-600 uppercase tracking-widest font-medium mb-8"
        >
          Trusted by teams at fast-moving companies
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
        >
          {COMPANIES.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="text-base font-semibold text-zinc-700 hover:text-zinc-500 transition-colors cursor-default tracking-tight"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
