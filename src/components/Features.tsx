import { motion } from 'framer-motion'
import { Zap, RefreshCw, BellRing } from 'lucide-react'

const ACTIVITY = [
  { user: 'A', color: '#7C3AED', action: 'completed', item: 'Finalize API spec', time: '2m ago' },
  { user: 'B', color: '#0891B2', action: 'assigned', item: 'Mobile nav redesign', time: '5m ago' },
  { user: 'C', color: '#059669', action: 'commented on', item: 'Q2 roadmap', time: '8m ago' },
  { user: 'D', color: '#D97706', action: 'moved', item: 'Auth flow to Review', time: '12m ago' },
]

const NOTIFICATIONS = [
  { icon: '💬', text: 'Alex mentioned you in "Roadmap review"', time: '1m' },
  { icon: '✅', text: 'Sprint #14 was completed', time: '5m' },
  { icon: '📎', text: 'New file added to Mobile App', time: '12m' },
  { icon: '🔁', text: 'Automation ran: "Close stale issues"', time: '1h' },
]

export default function Features() {
  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-widest">
            Features
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-zinc-900 tracking-tight">
            Everything your team needs.<br />Nothing it doesn't.
          </h2>
          <p className="mt-4 text-zinc-500 max-w-lg mx-auto leading-relaxed">
            Synkro is designed for teams that want to move fast without losing track of the work that matters.
          </p>
        </motion.div>

        {/* Feature 1 — text left, visual right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mb-5">
              <RefreshCw size={18} className="text-violet-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Real-time for real teams</h3>
            <p className="text-zinc-500 leading-relaxed mb-6">
              Every update, comment, and status change appears instantly across your team — no refresh, no "did you see my message?", no guessing what's current.
            </p>
            <ul className="space-y-3">
              {['Live presence indicators per task', 'Conflict-free collaborative editing', 'Instant push notifications across devices'].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Live activity feed UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-950 rounded-2xl border border-white/8 p-5 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-white text-xs font-semibold">Live Activity</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-zinc-500">Live</span>
              </div>
            </div>
            <div className="space-y-3">
              {ACTIVITY.map((item, i) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-3 bg-zinc-900 rounded-xl border border-white/5"
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.user}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-zinc-300">
                      <span className="font-medium">{item.user}</span>
                      {' '}<span className="text-zinc-600">{item.action}</span>{' '}
                      <span className="text-violet-400">"{item.item}"</span>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-700 flex-shrink-0">{item.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature 2 — visual left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Automation rule builder UI */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-950 rounded-2xl border border-white/8 p-6 shadow-xl order-2 lg:order-1"
          >
            <div className="text-white text-xs font-semibold mb-5">Automation Rule</div>

            <div className="space-y-3">
              {/* Trigger */}
              <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
                <div className="text-xs text-zinc-600 uppercase tracking-widest mb-2 font-medium">When</div>
                <div className="flex items-center gap-2">
                  <div className="bg-violet-600/20 border border-violet-500/30 rounded-lg px-3 py-1.5 text-violet-400 text-xs font-medium">
                    Task status changes
                  </div>
                  <span className="text-zinc-600 text-xs">→</span>
                  <div className="bg-zinc-800 border border-white/5 rounded-lg px-3 py-1.5 text-zinc-300 text-xs">
                    Done
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
                <div className="text-xs text-zinc-600 uppercase tracking-widest mb-2 font-medium">Then</div>
                <div className="flex flex-col gap-2">
                  {[
                    'Notify task owner',
                    'Move to "Completed" sprint',
                    'Post summary to #dev-updates',
                  ].map((action) => (
                    <div key={action} className="flex items-center gap-2 text-xs text-zinc-400">
                      <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l1.5 1.5 3.5-3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {action}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <div className="flex-1 bg-violet-600 rounded-lg py-2 text-xs text-white font-semibold text-center">
                  Save Rule
                </div>
                <div className="bg-zinc-800 border border-white/8 rounded-lg py-2 px-4 text-xs text-zinc-400">
                  Test
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mb-5">
              <Zap size={18} className="text-violet-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Automation without the engineering ticket</h3>
            <p className="text-zinc-500 leading-relaxed mb-6">
              Build powerful workflows with a no-code rule builder. Set triggers, define actions, and let Synkro handle the repetitive stuff so your team can focus on real work.
            </p>
            <ul className="space-y-3">
              {['50+ pre-built automation templates', 'Connects to Slack, GitHub, Jira, and more', 'No-code · no engineering required'].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Feature 3 — text left, visual right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mb-5">
              <BellRing size={18} className="text-violet-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">One inbox. Zero noise.</h3>
            <p className="text-zinc-500 leading-relaxed mb-6">
              Stop drowning in Slack threads and email chains. Synkro's unified inbox brings every mention, assignment, and deadline together — prioritized and actionable.
            </p>
            <ul className="space-y-3">
              {['Smart priority sorting', 'Reply and resolve without leaving the inbox', 'Daily digest for async teams'].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Inbox UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-950 rounded-2xl border border-white/8 p-5 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-white text-xs font-semibold">Inbox</span>
              <span className="bg-violet-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {NOTIFICATIONS.length} new
              </span>
            </div>
            <div className="space-y-2">
              {NOTIFICATIONS.map((n, i) => (
                <motion.div
                  key={n.text}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-start gap-3 p-3 rounded-xl border cursor-default transition-colors ${
                    i === 0
                      ? 'bg-violet-600/10 border-violet-500/20'
                      : 'bg-zinc-900 border-white/5 hover:border-white/10'
                  }`}
                >
                  <span className="text-base flex-shrink-0">{n.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-zinc-300 leading-snug">{n.text}</div>
                  </div>
                  <span className="text-xs text-zinc-700 flex-shrink-0">{n.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
