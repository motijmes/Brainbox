'use client'

import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentIcon,
  EnvelopeIcon,
  SparklesIcon,
  UserGroupIcon,
  VideoCameraIcon,
  RobotIcon
} from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import { Bot } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '../container'
import { GradientBorder } from '../gradient'

// Enhanced BentoCard component
function BentoCard({
  dark = false,
  className = '',
  eyebrow,
  title,
  description,
  icon: Icon,
  features = [],
  fade = [],
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={clsx(
        className,
        'group relative flex flex-col overflow-hidden rounded-lg',
        'bg-background ring-1 shadow-lg backdrop-blur-sm',
        'transition-all duration-300 ease-in-out',
        'data-dark:bg-gray-800/90 data-dark:ring-white/15',
      )}
    >
      <GradientBorder>
        {/* Decorative gradient blob */}
        <div className="absolute inset-0 -z-10">
          <div className="from-primary-500/20 to-secondary-500/20 absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Content Section */}
        <motion.div
          className="relative h-full p-8"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {/* Icon */}
          <div className="mb-4">
            <Icon className="h-8 w-8 text-primary-2" />
          </div>

          {/* Title & Description */}
          <h3 className="mb-2 text-lg font-semibold text-primary-3">{title}</h3>
          <p className="mb-6 text-sm text-primary-3">{description}</p>

          {/* Feature List */}
          <div className="space-y-3">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-2"
              >
                <SparklesIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary-2" />
                <span className="text-sm text-primary-3">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 rounded-lg ring-1 ring-white/10 transition-all duration-300 ring-inset group-hover:ring-white/20" />
      </GradientBorder>
    </motion.div>
  )
}

function PlatformFeatures() {
  const features = [
    {
      title: 'AI Voice Agent & Receptionist',
      description:
        'AI Contacts and nurtures every lead',
      icon: Bot,
      features: [
        '24/7 System',
        'Works with SMS and Social Media',
        'Never miss another call or text',
      ],
      className: 'lg:col-span-2',
    },
    {
      title: 'Automated Online Reviews',
      description:
        'Easily gather and manage client reviews in one place',
      icon: ChatBubbleBottomCenterTextIcon,
      features: [
        'Work on all platforms',
        'AI automatically asks for reviews',
        'Easily Analyze and reply to client reviews',
      ],
      className: 'lg:col-span-2',
    },
    {
      title: 'Meeting Confirmations',
      description:
        'AI schedules meetings with automated reminders and follow-ups',
      icon: VideoCameraIcon,
      features: [
        'Automated scheduling',
        'Smart Meeting reminder',
        'Calendar integration',
      ],
      className: 'lg:col-span-2',
    },
    {
      title: 'Lead Management',
      description:
        'A single place to track leads and automate follow-ups',
      icon: UserGroupIcon,
      features: [
        'Real-time lead pipeline tracking',
        'Automated lead follow-up system',
        'Customizable simple database',
      ],
      className: 'lg:col-span-2',
    },
    {
      title: 'E-mail Marketing',
      description:
        'E-mail marketing solutions all in one easy to use platform',
      icon: EnvelopeIcon,
      features: [
        'Mass E-Mail Marketing',
        'Custom Campaigns with your brand',
        'E-Mail Click Tracking'
      ],
      className: 'lg:col-span-2',
    },
    {
      title: 'Marketing and Sales Analytics',
      description:
        'Tracking and reporting of all marketing and sales efforts.',
      icon: ArrowTrendingUpIcon,
      features: [
        'Real-time analytics',
        'Track GCI',
        'Measure KPIs'
      ],
      className: 'lg:col-span-2',
    },
  ]

  return (
    <div className="relative mx-2 mt-2 overflow-hidden rounded-4xl bg-background-2 py-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/2 translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-2">
            Platform Features
          </h2>
          <p className="mt-2 bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            The All-In-One AI Platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-fr">
          {features.map((feature, index) => (
            <BentoCard
              key={index}
              dark
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              features={feature.features}
              className={feature.className}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default PlatformFeatures