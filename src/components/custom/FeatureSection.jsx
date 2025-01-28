'use client'

import { CheckCircleIcon } from '@heroicons/react/24/outline'
import {
  ChartBarIcon,
  CircleStackIcon,
  RocketLaunchIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Button } from '../button'

const FeatureSection = () => {
  const sections = [
    {
      badge: { icon: SparklesIcon, text: 'Powered by AI' },
      title: {
        regular: 'Stay Connected ',
        gradient: 'On Auto-Pilot',
      },
      description:
        'Leverage intelligent automation to keep your client relationships strong without the manual effort. Our AI-driven system handles the routine tasks while you focus on what matters most – closing deals and building lasting connections.',
      features: [
        { icon: SparklesIcon, text: 'AI-powered email & SMS campaigns' },
        { icon: CircleStackIcon, text: 'Smart reminders & follow-ups' },
        { icon: RocketLaunchIcon, text: 'Automated client engagement' },
      ],
      mockup: 'auto-pilot',
      image: '/assets/feature1.png'
    },
    {
      badge: { icon: ChartBarIcon, text: 'Without Burnout' },
      title: {
        regular: 'Build ',
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
        'Simplify lead management with a comprehensive tracking dashboard that gives you real-time visibility into your pipeline. Automated tools work alongside customizable dashboards to keep you on top of every opportunity.',
      features: [
        { icon: CheckCircleIcon, text: 'Real-time lead pipeline tracking' },
        { icon: CheckCircleIcon, text: 'Automated follow-up system' },
        { icon: CheckCircleIcon, text: 'Customizable engagement workflows' },
      ],
      mockup: 'leads',
      image: '/assets/feature3.png'
    },
  ]

const renderImageInterface = (section, index) => (
  <div className="relative rounded-2xl bg-white/80 p-2 ring-1 shadow-2xl shadow-black/5 ring-black/5 backdrop-blur-sm">
    {/* Top gradient line */}
    <div className="absolute -top-2 right-10 left-10 h-px bg-gradient-to-r from-transparent via-primary-1/20 to-transparent" />

    {/* Header with window controls and AI status */}
    <div className="mb-3 flex items-center gap-2 rounded-xl bg-gray-50/80 p-3">
      <div className="flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-rose-400" />
        <div className="h-3 w-3 rounded-full bg-amber-400" />
        <div className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <SparklesIcon className="h-4 w-4 text-primary-1" />
        <span className="text-xs font-medium text-primary-1">
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
      className="relative overflow-hidden rounded-xl bg-gray-50/80"
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
      <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm"
        >
          <SparklesIcon className="h-4 w-4 text-primary-1" />
          <span className="text-sm font-medium text-gray-900">
            {section.badge.text}
          </span>
        </motion.div>
      </div>
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
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-1/10 px-4 py-2 text-sm font-medium text-primary-1">
                  <section.badge.icon className="h-4 w-4" />
                  {section.badge.text}
                </div>

                {/* Title */}
                <h2 className="font-display text-3xl/tight font-medium tracking-tight sm:text-4xl/tight">
                  <span className="text-text">{section.title.regular}</span>
                  <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
                    {section.title.gradient}
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-4 text-base/relaxed text-text/80">
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
                      <feature.icon className="h-6 w-6 flex-none text-primary-1" />
                      <span className="text-sm/6 text-text/70">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA buttons - only for first section */}
                {index === 0 && (
                  <div className="mt-10 flex items-center gap-4">
                    <Button
                      variant="custom"
                      as={motion.button}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started Free
                    </Button>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-1 hover:text-primary-2"
                    >
                      Learn more →
                    </a>
                  </div>
                )}
              </motion.div>

              {/* Mockup section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                {renderImageInterface(section, index)}
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeatureSection
