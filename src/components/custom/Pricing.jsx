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
    usageCosts: {
      additionalUsers: '$10/user/month',
      emailMarketing: '$0.01/email',
      socialPosts: '100 posts/month included',
    },
    addOns: {
      seoWebsite: '$1000 one-time',
      facebookAdsIntegration: '$50/month',
      developmentRate: '$100/hour',
    },
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
    usageCosts: {
      sms: '$0.1/message',
      whatsapp: '$0.05/message',
      facebookMessenger: 'Included',
      instagramDM: 'Included',
    },
    addOns: {
      seoWebsite: '$1000 one-time',
      googleAdsIntegration: '$75/month',
      developmentRate: '$100/hour',
    },
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
    usageCosts: {
      sms: '$0.1/message',
      mms: '$0.2/message',
      emailCampaigns: 'Unlimited',
      socialBoosts: '$50 credit/month',
    },
    addOns: {
      seoWebsite: '$1000 one-time',
      marketingAutomation: '$150/month',
      developmentRate: '$100/hour',
    },
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
    usageCosts: {
      voiceCalls: '$0.4/minute',
      voicemailTranscription: 'Included',
      callRecording: '$0.1/minute',
    },
    addOns: {
      seoWebsite: '$1000 one-time',
      callCenterSetup: '$200/month',
      developmentRate: '$100/hour',
    },
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
    usageCosts: {
      voiceCalls: '$0.4/minute',
      internationalCalls: 'Custom rates',
      customIVR: 'Included',
      enterpriseAPI: 'Included',
    },
    addOns: {
      seoWebsite: '$1000 one-time',
      enterpriseIntegration: '$300/month',
      developmentRate: '$100/hour',
      weeklyDevelopment: '3 hours included',
    },
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
  const [isFlipped, setIsFlipped] = useState(false)

  const calculatePrice = () => {
    if (isAnnual) {
      const annualPrice = tier.priceMonthly * 12
      const discount = annualPrice * 0.1
      return (annualPrice - discount).toFixed(0)
    }
    return tier.priceMonthly
  }

  const price = calculatePrice()

  const handleMouseEnter = (e) => {
    // Check if the mouse entered from a button element
    if (!e.target.closest('button')) {
      setIsFlipped(true)
    }
  }

  const handleMouseLeave = (e) => {
    // Check if the mouse left to a button element
    if (!e.target.closest('button')) {
      setIsFlipped(false)
    }
  }

  return (
    <div
      className="perspective-1000 relative h-[600px] w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`transform-style-3d relative h-full w-full transition-transform duration-500 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute h-full w-full backface-hidden">
          <div className="h-full rounded-4xl p-2 shadow-md shadow-black/5">
            <div className="flex h-full flex-col rounded-3xl bg-white p-6 ring-1 shadow-2xl ring-black/5">
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{tier.description}</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="text-4xl font-medium text-gray-900">
                    ${price}
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>USD</p>
                    <p>per {isAnnual ? 'year' : 'month'}</p>
                  </div>
                </div>
                <div className="relative z-10 mt-6">
                  {' '}
                  {/* Added z-index */}
                  <Button
                    href={tier.href}
                    className="relative w-full"
                    onMouseEnter={(e) => {
                      e.stopPropagation()
                      setIsFlipped(false)
                    }}
                  >
                    Start free trial
                  </Button>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-900">
                  Features include:
                </h4>
                <ul className="mt-4 space-y-3">
                  {tier.highlights.map((feature, index) => (
                    <FeatureItem key={index} {...feature} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute h-full w-full rotate-y-180 backface-hidden">
          <div className="h-full rounded-4xl p-2 shadow-md shadow-black/5">
            <div className="flex h-full flex-col rounded-3xl bg-white p-6 ring-1 shadow-2xl ring-black/5">
              <h3 className="text-base font-semibold text-gray-900">
                Additional Details
              </h3>

              {/* Usage Costs */}
              <div className="mt-3">
                <h4 className="text-sm font-medium text-gray-900">
                  Usage Costs:
                </h4>
                <ul className="mt-1 space-y-1 text-sm text-gray-500">
                  {Object.entries(tier.usageCosts).map(([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span>{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add-ons */}
              <div className="mt-5">
                <h4 className="text-sm font-medium text-gray-900">
                  Available Add-ons:
                </h4>
                <ul className="mt-1 space-y-1 text-sm text-gray-500">
                  {Object.entries(tier.addOns).map(([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span>{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Features */}
              <div className="mt-5">
                <h4 className="text-sm font-medium text-gray-900">
                  All Features:
                </h4>
                <ul className="mt-1 space-y-1 text-sm text-gray-500">
                  {tier.features.map((feature, index) => (
                    <li key={index}>{feature.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        <div className="flex flex-col items-center">
          {' '}
          {/* Added wrapper for centering */}
          {/* First row - 3 cards */}
          <div className="mx-auto mb-8 flex w-full max-w-5xl flex-col justify-center gap-8 md:flex-row">
            {firstRowTiers.map((tier, index) => (
              <div className=" max-w-[360px] min-w-[360px] flex-1" key={index}>
                {' '}
                {/* Added max-width */}
                <PricingCard
                  key={index}
                  tier={tier}
                  index={index}
                  isAnnual={isAnnual}
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
          {/* Second row - 2 cards */}
          <div className="mx-auto mb-8 flex w-full max-w-5xl flex-col justify-center gap-8 md:flex-row">
            {secondRowTiers.map((tier, index) => (
              <div className=" max-w-[360px] min-w-[360px] flex-1" key={index}>
                {' '}
                {/* Added max-width */}
                <PricingCard
                  key={index}
                  tier={tier}
                  index={index}
                  isAnnual={isAnnual}
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
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
