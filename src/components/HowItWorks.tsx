import { motion } from 'framer-motion'
import { Link2, LayoutGrid, Rocket } from 'lucide-react'

const STEPS = [
  {
    icon: Link2,
    number: '01',
    title: 'Connect your tools',
    description:
      'Sync with GitHub, Slack, Figma, and 50+ integrations in minutes. Synkro meets your team where the work already happens.',
  },
  {
    icon: LayoutGrid,
    number: '02',
    title: 'Organize your work',
    description:
      "Create projects, assign tasks, and set milestones. Choose between list, board, or timeline views — whatever fits your team's way of working.",
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Ship together',
    description:
      'Track progress in real-time, celebrate wins, and run retrospectives without switching tabs. Your whole team, in sync.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-zinc-900 tracking-tight">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-zinc-500 max-w-md mx-auto leading-relaxed">
            No lengthy onboarding. No dedicated admin required. Most teams are fully set up in under an hour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step bubble */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-white border-2 border-violet-100 rounded-2xl flex items-center justify-center shadow-sm shadow-violet-100 relative z-10">
                  <step.icon size={28} className="text-violet-600" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-violet-600 rounded-full flex items-center justify-center z-20">
                  <span className="text-white text-[10px] font-bold">{i + 1}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-zinc-900 mb-3">{step.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
