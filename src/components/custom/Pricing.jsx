'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { GradientBackgroundSection, GradientLight } from '@/components/gradient'
import { Heading, Lead, Subheading } from '@/components/text'
import { motion } from 'framer-motion'
import { useState } from 'react'
import PricingToggle from '../pricing-toggle'

const tiers = [
  {
    name: 'Essential CRM',
    slug: 'essential',
    description:
      'Perfect starting point for businesses needing basic CRM and communication tools.',
    priceMonthly: 75,
    href: '#',
    highlights: [
      { description: 'Basic CRM Access' },
      { description: 'Up to 10 Users' },
      { description: 'Email Services' },
      { description: 'Contact Form' },
      { description: 'Basic Analytics' },
      { description: 'Social Media Posts' },
      { description: 'Lead Capture' },
    ],
    features: [
      { section: 'Features', name: 'Basic CRM Access', value: true },
      { section: 'Features', name: 'Up to 10 Users', value: true },
      { section: 'Communication', name: 'Email Services', value: true },
      { section: 'Features', name: 'Contact Form', value: true },
      { section: 'Analysis', name: 'Basic Analytics', value: true },
      { section: 'Marketing', name: 'Social Media Posts', value: true },
      { section: 'Features', name: 'Lead Capture', value: true },
    ],
  },
  {
    name: 'AI Text Assistant Basic',
    slug: 'text-basic',
    description:
      'Enhanced text-based communication suite with AI chatbot capabilities.',
    priceMonthly: 150,
    href: '#',
    highlights: [
      { description: 'All Essential Features' },
      { description: 'AI Chatbot' },
      { description: 'SMS Automation' },
      { description: 'WhatsApp Integration' },
      { description: 'Campaign Tracking' },
      { description: 'Lead Scoring' },
      { description: 'Social Media Analytics' },
    ],
    features: [
      { section: 'AI', name: 'AI Chatbot', value: true },
      { section: 'Communication', name: 'SMS Automation', value: true },
      { section: 'Communication', name: 'WhatsApp Integration', value: true },
      { section: 'Analysis', name: 'Campaign Tracking', value: true },
      { section: 'Features', name: 'Lead Scoring', value: true },
      { section: 'Analysis', name: 'Social Media Analytics', value: true },
      { section: 'Marketing', name: 'Facebook Messenger', value: true },
    ],
  },
  {
    name: 'AI Text Assistant Pro',
    slug: 'text-pro',
    description:
      'Advanced text automation with enhanced AI capabilities and marketing features.',
    priceMonthly: 275,
    href: '#',
    highlights: [
      { description: 'All Text Basic Features' },
      { description: 'Enhanced AI Text' },
      { description: 'A/B Testing' },
      { description: 'ROI Analytics' },
      { description: 'Conversion Tracking' },
      { description: 'Email Campaigns' },
      { description: 'Social Media Boosts' },
    ],
    features: [
      { section: 'AI', name: 'Enhanced AI Text', value: true },
      { section: 'Marketing', name: 'A/B Testing', value: true },
      { section: 'Analysis', name: 'ROI Analytics', value: true },
      { section: 'Analysis', name: 'Conversion Tracking', value: true },
      { section: 'Communication', name: 'Email Campaigns', value: true },
      { section: 'Marketing', name: 'Social Media Boosts', value: true },
      { section: 'Support', name: 'Priority Support', value: true },
    ],
  },
  {
    name: 'AI Voice Assistant Basic',
    slug: 'voice-basic',
    description:
      'Entry-level voice automation with essential AI calling features.',
    priceMonthly: 400,
    href: '#',
    highlights: [
      { description: 'Voice AI Features' },
      { description: 'Call Tracking' },
      { description: 'Voicemail Transcription' },
      { description: 'Click-to-Call Ads' },
      { description: 'Call Recording' },
      { description: 'Google Business Integration' },
      { description: 'Basic IVR' },
    ],
    features: [
      { section: 'AI', name: 'Voice AI Features', value: true },
      { section: 'Analysis', name: 'Call Tracking', value: true },
      { section: 'Features', name: 'Voicemail Transcription', value: true },
      { section: 'Marketing', name: 'Click-to-Call Ads', value: true },
      { section: 'Features', name: 'Call Recording', value: true },
      { section: 'Integration', name: 'Google Business', value: true },
      { section: 'Features', name: 'Basic IVR', value: true },
    ],
  },
  {
    name: 'AI Voice Assistant Pro',
    slug: 'voice-pro',
    description:
      'Complete voice solution with advanced AI capabilities and enterprise features.',
    priceMonthly: 900,
    href: '#',
    highlights: [
      { description: 'All Voice Basic Features' },
      { description: 'Advanced Voice AI' },
      { description: 'Custom IVR' },
      { description: 'Enterprise API' },
      { description: 'Omnichannel Analytics' },
      { description: 'Attribution Modeling' },
      { description: 'Dedicated Support' },
      { description: 'Weekly Development' },
    ],
    features: [
      { section: 'AI', name: 'Advanced Voice AI', value: true },
      { section: 'Features', name: 'Custom IVR', value: true },
      { section: 'Integration', name: 'Enterprise API', value: true },
      { section: 'Analysis', name: 'Omnichannel Analytics', value: true },
      { section: 'Analysis', name: 'Attribution Modeling', value: true },
      { section: 'Support', name: 'Dedicated Support', value: true },
      { section: 'Support', name: 'Weekly Development', value: true },
      { section: 'Support', name: '8-Hour Response', value: true },
    ],
  },
]

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

function PricingCard({ tier, index, isAnnual }) {
  // Calculate the price based on billing period
  const calculatePrice = () => {
    if (isAnnual) {
      const annualPrice = tier.priceMonthly * 12
      const discount = annualPrice * 0.1 // 10% discount
      return (annualPrice - discount).toFixed(0)
    }
    return tier.priceMonthly
  }

  const price = calculatePrice()

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
              <div className="text-4xl font-medium text-gray-950">${price}</div>
              <div className="text-sm/5 text-gray-950/75">
                <p>USD</p>
                <p>per {isAnnual ? 'year' : 'month'}</p>
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

function PricingCards({ isAnnual }) {
  // Split tiers into two rows
  const firstRowTiers = tiers.slice(0, 3)
  const secondRowTiers = tiers.slice(3, 5)

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
        {/* First row - 3 cards */}
        <div className="mx-auto mb-8 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {firstRowTiers.map((tier, index) => (
            <PricingCard
              key={index}
              tier={tier}
              index={index}
              isAnnual={isAnnual}
            />
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 justify-center gap-8 md:grid-cols-2">
          {secondRowTiers.map((tier, index) => (
            <PricingCard
              key={index + 3}
              tier={tier}
              index={index + 3}
              isAnnual={isAnnual}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}
function Header({ handleBillingChange }) {
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
        <PricingToggle onChange={handleBillingChange} />
      </motion.div>
    </Container>
  )
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true) // Set annual as default

  const handleBillingChange = (isAnnual) => {
    setIsAnnual(isAnnual)
  }

  return (
    <main className="relative">
      <GradientBackgroundSection
        size="sm"
        opacity={0.3}
        position={{ top: '0', right: '0' }}
      />
      <div className="overflow-hidden">
        <Header handleBillingChange={handleBillingChange} />
        <PricingCards isAnnual={isAnnual} />
      </div>
    </main>
  )
}
