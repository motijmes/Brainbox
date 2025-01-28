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
} from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Container } from '../container'

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
        'bg-white/5 ring-1 shadow-lg ring-white/10 backdrop-blur-sm',
        'transition-all duration-300 ease-in-out',
        'data-dark:bg-gray-800/90 data-dark:ring-white/15',
      )}
    >
      {/* Decorative gradient blob */}
      <div className="absolute inset-0 -z-10">
        <div className="from-primary-500/20 to-secondary-500/20 absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content Section */}
      <motion.div
        className="relative p-8"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {/* Icon */}
        <div className="mb-4">
          <Icon className="h-8 w-8 text-indigo-400" />
        </div>

        {/* Title & Description */}
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="mb-6 text-sm text-gray-300">{description}</p>

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
              <SparklesIcon className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
              <span className="text-sm text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-lg ring-1 ring-white/10 transition-all duration-300 ring-inset group-hover:ring-white/20" />
    </motion.div>
  )
}

function PlatformFeatures() {
  const features = [
    {
      title: 'Lead Management',
      description:
        'A centralized system for capturing and tracking leads with automated workflow management.',
      icon: UserGroupIcon,
      features: [
        'Real-time lead pipeline tracking',
        'Automated follow-up system',
        'Customizable engagement workflows',
      ],
      className: 'lg:col-span-2',
    },
    {
      title: 'Automated Online Reviews',
      description:
        'Streamline the collection and management of client reviews across platforms.',
      icon: ChatBubbleBottomCenterTextIcon,
      features: [
        'Multi-platform review management',
        'Automated review collection',
        'Sentiment analysis and reporting',
      ],
      className: 'lg:col-span-2',
    },
    {
      title: 'Meeting Confirmations',
      description:
        'Smart scheduling system with automated reminders and follow-ups.',
      icon: VideoCameraIcon,
      features: [
        'Automated scheduling system',
        'Smart reminder sequences',
        'Calendar integration',
      ],
      className: 'lg:col-span-2',
    },
    {
      title: 'AI Receptionist & Voice Agent',
      description:
        'Intelligent automation for client communication and engagement.',
      icon: SparklesIcon,
      features: [
        'Natural language processing',
        '24/7 automated responses',
        'Multi-channel support',
      ],
      className: 'lg:col-span-3',
    },
    {
      title: 'Automation Studio',
      description:
        'Powerful tools for creating and managing automated workflows.',
      icon: ChartBarIcon,
      features: [
        'Visual workflow builder',
        'Campaign automation',
        'Performance analytics',
      ],
      className: 'lg:col-span-3',
    },
    {
      title: 'Email Marketing',
      description:
        'Comprehensive email marketing solution with smart automation.',
      icon: EnvelopeIcon,
      features: ['Campaign automation', 'A/B testing', 'Performance tracking'],
      className: 'lg:col-span-2',
    },
    {
      title: 'Document Management',
      description:
        'Centralized document handling with smart organization features.',
      icon: DocumentIcon,
      features: [
        'Cloud storage integration',
        'Version control',
        'Automated filing',
      ],
      className: 'lg:col-span-2',
    },
    {
      title: 'Marketing Analytics',
      description:
        'Comprehensive tracking and reporting of all marketing efforts.',
      icon: ArrowTrendingUpIcon,
      features: ['Real-time analytics', 'Custom reporting', 'ROI tracking'],
      className: 'lg:col-span-2',
    },
  ]

  return (
    <div className="relative mx-2 mt-2 overflow-hidden rounded-4xl bg-gray-900 py-32">
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
          <h2 className="text-base leading-7 font-semibold text-indigo-400">
            Platform Features
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our All-In-One Platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
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
