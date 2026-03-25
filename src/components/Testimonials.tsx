import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote:
      "We tried Notion, Linear, and Asana. Synkro is the first tool where our engineering and design teams are actually in the same place — and staying there.",
    name: 'Priya Nair',
    role: 'CTO, Volta Health',
    initials: 'PN',
    color: '#7C3AED',
  },
  {
    quote:
      "The automation rules alone saved us about 4 hours a week of manual status updates and Slack pings. Setup took 20 minutes. I don't know why we waited so long.",
    name: 'Tom Becker',
    role: 'Head of Engineering, Arcum Group',
    initials: 'TB',
    color: '#0891B2',
  },
  {
    quote:
      "Onboarding our 40-person team was shockingly smooth. By day 3 everyone was using it. That has literally never happened with any tool we've rolled out before.",
    name: 'Lena Sørensen',
    role: 'VP Product, Sable Commerce',
    initials: 'LS',
    color: '#059669',
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-zinc-900 tracking-tight">
            Teams that switched. Teams that stayed.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-zinc-100 hover:border-violet-100 hover:shadow-lg hover:shadow-violet-50 p-8 flex flex-col transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 12 12" fill="#F59E0B">
                    <path d="M6 1l1.3 2.7 3 .4-2.2 2.1.5 3L6 7.8l-2.6 1.4.5-3L1.7 4.1l3-.4z" />
                  </svg>
                ))}
              </div>

              <p className="text-zinc-700 text-sm leading-relaxed flex-1 mb-7">"{t.quote}"</p>

              <div className="flex items-center gap-3 pt-5 border-t border-zinc-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900">{t.name}</div>
                  <div className="text-xs text-zinc-400 mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
