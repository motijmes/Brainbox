'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient, GradientBackgroundLight, GradientBackgroundSection, GradientLight } from '@/components/gradient'
import { Heading, Lead, Subheading } from '@/components/text'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Premium Plan',
    slug: 'premium',
    description:
      'Designed for mid-sized teams looking for advanced automation and enhanced engagement tools.',
    priceMonthly: 397,
    href: '#',
    highlights: [
      { description: 'All Standard Features' },
      { description: 'Advanced Automation' },
      { description: 'Enhanced AI Content' },
      { description: 'Drip Campaigns' },
      { description: 'AI Phone Agent' },
      { description: 'Advanced Analytics' },
      { description: 'Cost Tracking' },
      { description: 'Accessible Studio' },
      { description: 'Custom Templates' },
      { description: 'Customer Portal' },
    ],
    features: [
      { section: 'Features', name: 'Advanced Automation', value: true },
      { section: 'Features', name: 'Enhanced AI Content', value: true },
      { section: 'Features', name: 'Drip Campaigns', value: true },
      { section: 'Features', name: 'AI Phone Agent', value: true },
      { section: 'Analysis', name: 'Advanced Analytics', value: true },
      { section: 'Analysis', name: 'Cost Tracking', value: true },
      { section: 'Features', name: 'Accessible Studio', value: true },
      { section: 'Features', name: 'Custom Templates', value: true },
      { section: 'Features', name: 'Customer Portal', value: true },
    ],
  },
  {
    name: 'Enterprise Plan',
    slug: 'enterprise',
    description:
      'Tailored for teams or organizations needing comprehensive control and robust analytics.',
    priceMonthly: 997,
    href: '#',
    highlights: [
      { description: 'All Premium Features' },
      { description: 'AI Lead Scoring' },
      { description: 'Full Customization' },
      { description: 'Predictive Insights' },
      { description: 'Client Portal' },
      { description: 'Document Management' },
      { description: 'Team Collaboration' },
      { description: '200+ Integrations' },
      { description: 'Social Management' },
      { description: 'Custom Reporting' },
      { description: 'Account Manager' },
      { description: 'Website Management' },
    ],
    features: [
      { section: 'Features', name: 'AI Lead Scoring', value: true },
      { section: 'Features', name: 'Full Customization', value: true },
      { section: 'Features', name: 'Predictive Insights', value: true },
      { section: 'Features', name: 'Client Portal', value: true },
      { section: 'Features', name: 'Document Management', value: true },
      { section: 'Features', name: 'Team Collaboration', value: true },
      { section: 'Features', name: '200+ Integrations', value: true },
      { section: 'Features', name: 'Social Management', value: true },
      { section: 'Features', name: 'Custom Reporting', value: true },
      { section: 'Support', name: 'Account Manager', value: true },
      { section: 'Features', name: 'Website Management', value: true },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Heading as="h1">Pricing Plans</Heading>
        <Lead className="mt-6 max-w-3xl">
          Our pricing plans are crafted to support real estate professionals at
          every level, from solo agents to large organizations.
        </Lead>
      </motion.div>
    </Container>
  )
}

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function FeatureItem({ description, disabled = false, delay = 0 }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay,
      }}
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </motion.li>
  )
}

function PricingCard({ tier, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="-m-2 h-full rounded-4xl ring-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-black/5"
    >
      <div className="h-full rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="flex h-full flex-col rounded-3xl bg-white p-6 ring-1 shadow-2xl ring-black/5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Subheading>{tier.name}</Subheading>
            <p className="mt-2 max-w-sm text-sm/6 text-gray-950/75">
              {tier.description}
            </p>
            <motion.div
              className="mt-6 flex items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="text-4xl font-medium text-gray-950">
                ${tier.priceMonthly}
              </div>
              <div className="text-sm/5 text-gray-950/75">
                <p>USD</p>
                <p>per month</p>
              </div>
            </motion.div>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Button
                href={tier.href}
                as={motion.a}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a free trial
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-6 flex-grow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <h3 className="text-sm/6 font-medium text-gray-950">
              Start selling with:
            </h3>
            <ul className="mt-2 space-y-2">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem
                  key={featureIndex}
                  {...props}
                  delay={0.6 + featureIndex * 0.1}
                />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function PricingCards() {
  return (
    <div className="relative py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <GradientLight className="absolute inset-x-2 top-24 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      </motion.div>
      <Container className="relative">
        <div className="mx-auto grid max-w-5xl grid-cols-1 justify-center gap-12 md:grid-cols-2">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} index={tierIndex} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default function Pricing() {
  return (
    <main className="relative">
      <GradientBackgroundSection
        size="sm"
        opacity={0.3}
        position={{ top: '0', right: '0' }}
      />
      <div className='overflow-hidden'>
        <Header />
        <PricingCards />
      </div>
    </main>
  )
}
