import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'

interface Plan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  featured?: boolean
}

const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for small teams getting started.',
    features: [
      'Up to 3 active projects',
      '5 team members',
      'Basic task management',
      'List & board views',
      '1GB file storage',
      'Community support',
    ],
    cta: 'Get started free',
  },
  {
    name: 'Pro',
    price: '$18',
    period: 'per seat / month',
    description: 'For growing teams that need more power.',
    features: [
      'Unlimited projects',
      'Up to 25 members',
      'All views incl. timeline & calendar',
      'Automations (unlimited rules)',
      '50+ integrations',
      '25GB file storage',
      'Priority support',
    ],
    cta: 'Start 14-day free trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'billed annually',
    description: 'For large orgs with advanced security needs.',
    features: [
      'Unlimited everything',
      'SSO / SAML 2.0',
      'Advanced permissions & roles',
      'Audit logs & compliance reports',
      'Custom contracts & SLA',
      'Dedicated success manager',
      '24/7 priority support',
    ],
    cta: 'Talk to sales',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-zinc-900 tracking-tight">
            Simple, honest pricing
          </h2>
          <p className="mt-4 text-zinc-500 max-w-md mx-auto">
            No hidden fees. No feature paywalls. Cancel any time.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-zinc-100 rounded-xl p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                !annual ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                annual ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'
              }`}
            >
              Annual
              <span className="text-xs bg-violet-100 text-violet-600 font-semibold px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border flex flex-col ${
                plan.featured
                  ? 'bg-zinc-950 border-violet-500/30 shadow-2xl shadow-violet-600/10'
                  : 'bg-white border-zinc-100 hover:border-violet-100 transition-colors'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-violet-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className={`text-sm font-semibold mb-1 ${plan.featured ? 'text-violet-400' : 'text-zinc-500'}`}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1.5 mb-2">
                  <span className={`text-4xl font-extrabold tracking-tight ${plan.featured ? 'text-white' : 'text-zinc-900'}`}>
                    {plan.price === '$18' && annual ? '$14' : plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className={`text-sm mb-1.5 ${plan.featured ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      /{annual ? 'mo, billed annually' : 'mo'}
                    </span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${plan.featured ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className={`flex-shrink-0 mt-0.5 ${plan.featured ? 'text-violet-400' : 'text-violet-500'}`}
                    />
                    <span className={`text-sm ${plan.featured ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`w-full text-center py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  plan.featured
                    ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/30'
                    : 'border border-zinc-200 hover:border-violet-300 text-zinc-700 hover:text-violet-600'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
