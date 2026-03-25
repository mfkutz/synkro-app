import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-28 bg-violet-600 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-500 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-700 rounded-full opacity-50 blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.3)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Your team is ready.<br />Is your workflow?
          </h2>
          <p className="text-violet-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Join 12,000+ teams that made the switch. Free to start, no credit card required, cancel any time.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 bg-white hover:bg-zinc-50 text-violet-700 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-violet-800/30"
            >
              Get started free
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              Book a demo
            </a>
          </div>

          <p className="mt-6 text-violet-300 text-sm">
            Free plan includes 3 projects · No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  )
}
