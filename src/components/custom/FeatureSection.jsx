'use client'

import { CheckCircleIcon } from '@heroicons/react/24/outline'
import {
  ChartBarIcon,
  CircleStackIcon,
  RocketLaunchIcon,
  SparklesIcon,
  UserGroupIcon,
  CalendarIcon
} from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Button } from '../button'
import { GradientBorder } from '../gradient'

const FeatureSection = () => {
  const sections = [
    {
      badge: { icon: SparklesIcon, text: 'Powered by AI' },
      title: {
        regular: 'Spending too much time and money on ',
        gradient: 'ad agencies?',
      },
      description:
        'Use our proven, done-for-you ads to keep costs low—just pick one and start advertising! Our AI-driven system automates follow-ups and books the appointment, so you can focus on closing deals and building strong client relationships.',
      features: [
        { icon: SparklesIcon, text: 'AI-powered email & SMS campaigns' },
        { icon: CircleStackIcon, text: 'Smart reminders & follow-ups' },
        { icon: RocketLaunchIcon, text: 'Automated client engagement' },
        { icon: CalendarIcon, text: 'Booked appointments on your calendar' }

      ],
      mockup: 'auto-pilot',
      image: '/assets/feature1.png'
    },
    {
      badge: { icon: ChartBarIcon, text: 'Without Burnout' },
      title: {
        regular: 'Get Organized ',
        gradient: 'Without Burnout',
      },
      description:
        'Empower your real estate business with tools that work as hard as you do. Create, schedule, and deploy marketing campaigns effortlessly with automated workflows for email and social media, maintaining consistent outreach across platforms.',
      features: [
        {
          icon: CheckCircleIcon,
          text: 'Pre-built templates and scheduling tools',
        },
        { icon: CheckCircleIcon, text: 'Automated cross-platform campaigns' },
        { icon: CheckCircleIcon, text: 'Streamlined workflow management' },
        { icon: CheckCircleIcon, text: 'Clients and leads are automatically organized' },
        
      ],
      mockup: 'burnout',
      image: '/assets/feature2.png'
    },
    {
      badge: { icon: UserGroupIcon, text: 'Lead Management' },
      title: {
        regular: 'Capture, Nurture and Close Leads ',
        gradient: 'Easily & Efficiently',
      },
      description:
        'Easily track your leads with a real-time dashboard and smart automation. AI organizes and nurtures leads, so you never miss an opportunity.',
      features: [
        { icon: CheckCircleIcon, text: 'Real-time lead pipeline tracking' },
        { icon: CheckCircleIcon, text: 'Automated follow-up system' },
        { icon: CheckCircleIcon, text: 'Customizable E-Mail System' },
        { icon: CheckCircleIcon, text: 'Keep track your KPI and GCI' }
        
      ],
      mockup: 'leads',
      image: '/assets/feature3.png'
    },
  ]

const renderImageInterface = (section, index) => (
  <div className="relative rounded-2xl bg-background-2 p-2 ring-1 shadow-2xl shadow-black/5 ring-black/5 backdrop-blur-sm">
    {/* Top gradient line */}
    <div className="absolute -top-2 right-10 left-10 h-px bg-gradient-to-r from-transparent via-primary-1/20 to-transparent" />

    {/* Header with window controls and AI status */}
    <div className="mb-3 flex items-center gap-2 rounded-xl bg-background-2 p-3">
      <div className="flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-rose-400" />
        <div className="h-3 w-3 rounded-full bg-amber-400" />
        <div className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <SparklesIcon className="h-4 w-4 text-primary-2" />
        <span className="text-xs font-medium text-primary-2">
          AI Assistant Active
        </span>
      </div>
    </div>

    {/* Image container with animations */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl bg-background-2"
    >
      {/* Main image */}
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={section.image}
          alt={section.title.regular + section.title.gradient}
          className="h-full w-full transform object-cover object-center transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Overlay elements for visual effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Optional floating UI elements */}
      {/* <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 rounded-full border-primary-2 border-[1px] bg-background-2 px-4 py-2 shadow-lg backdrop-blur-sm"
        >
          <SparklesIcon className="h-4 w-4 text-primary-2 " />
          <span className="text-sm font-medium text-primary-2">
            {section.badge.text}
          </span>
        </motion.div>
      </div> */}
    </motion.div>

    {/* Decorative elements */}
    <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary-1/30 to-primary-2/30 blur-xl" />
    <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary-2/30 to-primary-1/30 blur-xl" />
  </div>
)
  return (
    <div className="relative overflow-hidden">
      {sections.map((section, index) => (
        <div key={index} className="relative py-20 sm:py-24">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-1/5 blur-3xl" />
            <div className="absolute top-1/2 right-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary-2/5 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Flex container for content and mockup */}
            <div
              className={`mx-auto flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                {/* Badge */}
                {/* <div className="mb-8 inline-flex items-center gap-2 rounded-full border-[1px] border-primary-2 bg-background-2 px-8 py-4 font-medium text-primary-2">
                  <section.badge.icon className="h-4 w-4" />
                  {section.badge.text}
                </div> */}

                {/* Title */}
                <h2 className="font-display text-3xl/tight font-medium tracking-tight sm:text-4xl/tight">
                  <span className="text-primary-3">
                    {section.title.regular}
                  </span>
                  <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
                    {section.title.gradient}
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-4 text-base/relaxed text-primary-3">
                  {section.description}
                </p>

                {/* Feature list */}
                <div className="mt-8 space-y-4">
                  {section.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <feature.icon className="h-6 w-6 flex-none text-primary-2" />
                      <span className="text-sm/6 text-primary-3">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA buttons - only for first section */}
                {index === 0 && (
                  <div className="mt-16 flex items-center gap-4">
                    <Button
                      href="/about-us#inline-CJncaycrRh5hGpavAAmu"
                      className="bg-primary-2 text-white hover:bg-hover-1 text-lg px-8 py-4 text-xl"
                    >
                      Get Started Today
                    </Button>
                  </div>
                )}
              </motion.div>

              {/* Mockup section */}
              <GradientBorder className="relative mx-auto w-full max-w-lg">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  {renderImageInterface(section, index)}
                </motion.div>
              </GradientBorder>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeatureSection
