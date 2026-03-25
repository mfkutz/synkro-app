import { motion } from 'framer-motion'
import { ArrowRight, Bell, CheckCircle2 } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

const PROJECTS = [
  { name: 'Website Redesign', done: 8, total: 12, color: 'bg-violet-500' },
  { name: 'API v2.0', done: 3, total: 10, color: 'bg-violet-500' },
  { name: 'Marketing Q2', done: 15, total: 15, color: 'bg-emerald-500', complete: true },
  { name: 'Mobile App', done: 2, total: 7, color: 'bg-violet-500' },
]

const SIDEBAR_ITEMS = [
  { label: 'Home', active: false },
  { label: 'Inbox', badge: 3, active: false },
  { label: 'My Tasks', active: false },
  { label: 'Projects', active: true },
  { label: 'Docs', active: false },
  { label: 'Automations', active: false },
]

const AVATARS = ['#7C3AED', '#0891B2', '#059669', '#D97706', '#DC2626']

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-zinc-950 pt-16 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-zinc opacity-100 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-800/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* Left — copy */}
        <div>
          <motion.a
            href="#"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-violet-600/10 hover:bg-violet-600/20 border border-violet-500/20 text-violet-400 text-xs font-medium px-3.5 py-2 rounded-full mb-8 transition-colors group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            New · AI-powered task suggestions are live
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </motion.a>

          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-5xl lg:text-[3.75rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            Collaborate Without<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
              the Chaos.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg text-zinc-400 mb-10 max-w-[420px] leading-relaxed"
          >
            Synkro brings your team's projects, tasks, and conversations into one focused workspace — so you ship faster and fight less.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex gap-3 flex-wrap mb-12"
          >
            <a
              href="#pricing"
              className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-violet-600/25 hover:-translate-y-0.5 hover:shadow-violet-600/35"
            >
              Get started free
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 border border-white/10 hover:border-white/25 text-zinc-300 hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-200"
            >
              See how it works
              <ArrowRight size={15} />
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {AVATARS.map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-zinc-950 flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: color }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#F59E0B">
                    <path d="M6 1l1.3 2.7 3 .4-2.2 2.1.5 3L6 7.8l-2.6 1.4.5-3L1.7 4.1l3-.4z" />
                  </svg>
                ))}
                <span className="text-xs text-zinc-400 font-medium ml-1">5.0</span>
              </div>
              <p className="text-xs text-zinc-500">Loved by <span className="text-zinc-300 font-medium">12,000+</span> teams worldwide</p>
            </div>
          </motion.div>
        </div>

        {/* Right — app mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="hidden lg:block relative"
        >
          {/* Floating notification */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-5 right-6 z-20 bg-zinc-900 border border-white/10 rounded-2xl shadow-xl shadow-black/40 p-3.5 flex items-start gap-3 min-w-[240px]"
          >
            <div className="w-7 h-7 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Bell size={12} className="text-violet-400" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white mb-0.5">Sarah marked complete</div>
              <div className="text-xs text-zinc-500">"Finalize API endpoints" · API v2.0</div>
              <div className="text-xs text-zinc-700 mt-1">2 min ago</div>
            </div>
          </motion.div>

          {/* Main app window */}
          <div className="bg-zinc-900 rounded-2xl border border-white/8 shadow-2xl shadow-black/60 overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-950 border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <div className="flex-1 mx-4">
                <div className="bg-zinc-800 rounded px-3 py-1 text-xs text-zinc-600 w-44 mx-auto text-center">
                  app.synkro.io/projects
                </div>
              </div>
            </div>

            {/* App body */}
            <div className="flex h-72">
              {/* Sidebar */}
              <div className="w-40 bg-zinc-950/60 border-r border-white/5 p-3 flex flex-col gap-0.5 flex-shrink-0">
                {/* Logo row */}
                <div className="flex items-center gap-1.5 px-2 py-1.5 mb-3">
                  <div className="w-4 h-4 bg-violet-600 rounded flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white text-xs font-semibold">Synkro</span>
                </div>

                {SIDEBAR_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-2 py-1.5 rounded-md text-xs transition-colors ${
                      item.active
                        ? 'bg-violet-600/20 text-violet-400'
                        : 'text-zinc-600 hover:text-zinc-400'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="bg-violet-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white text-xs font-semibold">Projects</span>
                  <div className="flex gap-1.5">
                    <div className="bg-zinc-800 border border-white/8 rounded px-2 py-1 text-xs text-zinc-500">
                      Filter
                    </div>
                    <div className="bg-violet-600 rounded px-2 py-1 text-xs text-white font-medium">
                      + New
                    </div>
                  </div>
                </div>

                {/* Project cards grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {PROJECTS.map((project) => (
                    <div
                      key={project.name}
                      className="bg-zinc-800/50 border border-white/5 rounded-lg p-3 hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-white text-xs font-medium leading-tight">{project.name}</span>
                        {project.complete && (
                          <CheckCircle2 size={12} className="text-emerald-400 flex-shrink-0" />
                        )}
                      </div>

                      {/* Progress bar */}
                      <div className="h-1 bg-zinc-700 rounded-full mb-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${project.color}`}
                          style={{ width: `${(project.done / project.total) * 100}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-600">
                          {project.complete ? 'Completed ✓' : `${project.done}/${project.total} tasks`}
                        </span>
                        {/* Mini avatar stack */}
                        <div className="flex -space-x-1">
                          {AVATARS.slice(0, 2).map((color, i) => (
                            <div
                              key={i}
                              className="w-4 h-4 rounded-full border border-zinc-800 text-[7px] font-bold text-white flex items-center justify-center"
                              style={{ backgroundColor: color }}
                            >
                              {String.fromCharCode(65 + i)}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Online indicator */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-4 left-6 bg-zinc-900 border border-white/10 rounded-full shadow-xl px-4 py-2 flex items-center gap-2.5"
          >
            <div className="flex -space-x-1.5">
              {AVATARS.slice(0, 3).map((color, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full border border-zinc-900 text-[8px] font-bold text-white flex items-center justify-center"
                  style={{ backgroundColor: color }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-zinc-400 font-medium">4 members online</span>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
    </section>
  )
}
