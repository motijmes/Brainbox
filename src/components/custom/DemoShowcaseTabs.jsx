'use client'
'use client'
import { useState } from 'react'
import { Container } from '@/components/container'
import { PlayIcon, SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Tab } from '@headlessui/react'
import { clsx } from 'clsx'
import { createElement } from 'react'

import {
  BarChart3,
  MessagesSquare,
  SearchCode,
  Megaphone,
  Settings,
} from 'lucide-react'

const DemoShowcase = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const demos = [
    {
      title: 'Sales',
      description:
        'Automate your sales process and turn leads into customers on autopilot',
      icon: BarChart3,
      videoSrc: 'https://www.youtube.com/embed/jcImHWNOjrU',
      thumbnailSrc: '/assets/demoThumbnail.jpg',
      features: [
        'AI-powered lead qualification',
        'Automated follow-up sequences',
        'Smart meeting scheduling',
        'Performance analytics dashboard',
      ],
    },
    {
      title: 'Support',
      description:
        'Deliver exceptional customer support with AI-powered automation',
      icon: MessagesSquare,
      videoSrc: 'https://www.youtube.com/embed/jcImHWNOjrU',
      thumbnailSrc: '/assets/demoThumbnail.jpg',
      features: [
        'Intelligent ticket routing',
        '24/7 AI customer support',
        'Automated response suggestions',
        'Customer satisfaction tracking',
      ],
    },
    {
      title: 'Research',
      description:
        'Make data-driven decisions with advanced analytics and insights',
      icon: SearchCode,
      videoSrc: 'https://www.youtube.com/embed/jcImHWNOjrU',
      thumbnailSrc: '/assets/demoThumbnail.jpg',
      features: [
        'Market trend analysis',
        'Competitor tracking',
        'Customer behavior insights',
        'Predictive analytics',
      ],
    },
    {
      title: 'Marketing',
      description:
        'Create and deploy sophisticated marketing campaigns with smart automation',
      icon: Megaphone,
      videoSrc: 'https://www.youtube.com/embed/jcImHWNOjrU',
      thumbnailSrc: '/assets/demoThumbnail.jpg',
      features: [
        'Multi-channel campaign management',
        'Content automation',
        'Performance tracking',
        'A/B testing tools',
      ],
    },
    {
      title: 'Operations',
      description:
        'Streamline your business operations with intelligent workflows',
      icon: Settings,
      videoSrc: 'https://www.youtube.com/embed/jcImHWNOjrU',
      thumbnailSrc: '/assets/demoThumbnail.jpg',
      features: [
        'Workflow automation',
        'Resource management',
        'Process optimization',
        'Integration capabilities',
      ],
    },
  ]

  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-1/5 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-primary-2/5 blur-3xl"
        />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-1/10 px-4 py-2 text-sm font-medium text-primary-1"
          >
            <SparklesIcon className="h-4 w-4" />
            Product Demo
          </motion.div>
          <h2 className="font-display text-3xl/tight font-medium tracking-tight sm:text-4xl/tight">
            <span className="text-text">See How It </span>
            <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
              Works in Action
            </span>
          </h2>
        </motion.div>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          {/* Tab Navigation */}
          <div className="mb-16 flex justify-center">
            <div className="inline-flex rounded-xl bg-white/80 p-2">
              {demos.map((demo, index) => (
                <Tab
                  key={demo.title}
                  className="focus:outline-none focus-visible:outline-none"
                >
                  {({ selected }) => (
                    <div
                      className={clsx(
                        'relative flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium',
                        'transition-all duration-200',
                        selected
                          ? 'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-primary-1 from-30% to-primary-2 text-white shadow-sm'
                          : 'text-gray-600 hover:text-primary-1',
                      )}
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      {createElement(demo.icon, {
                        className: clsx(
                          'h-5 w-5',
                          selected ? 'text-white' : 'text-gray-500',
                        ),
                      })}
                      <span>{demo.title}</span>
                    </div>
                  )}
                </Tab>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <Tab.Panels>
            {demos.map((demo, idx) => (
              <Tab.Panel
                key={idx}
                className={`${idx === selectedIndex ? 'block' : 'hidden'}`}
              >
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  {/* Left side content */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center"
                  >
                    <h3 className="text-2xl font-bold text-gray-900">
                      {demo.title}
                    </h3>
                    <p className="mt-4 text-lg text-gray-600">
                      {demo.description}
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {demo.features.map((feature, featureIdx) => (
                        <motion.div
                          key={featureIdx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: featureIdx * 0.1,
                          }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary-1" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right side video preview */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-2xl bg-white/80 p-2 ring-1 shadow-2xl shadow-black/5 ring-black/5 backdrop-blur-sm"
                  >
                    {/* Window chrome */}
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

                    {/* Video thumbnail */}
                    <motion.div
                      className="group relative cursor-pointer overflow-hidden rounded-xl"
                      onClick={() => setIsPlaying(true)}
                    >
                      <motion.img
                        src={demo.thumbnailSrc}
                        alt={demo.title}
                        className="w-full object-cover transition-all duration-300 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                        <motion.div
                          className="flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-primary-1 from-30% to-primary-2 shadow-lg backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <PlayIcon className="h-8 w-8 text-white" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative mx-4 aspect-video w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                onClick={() => setIsPlaying(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <XMarkIcon className="h-6 w-6" />
              </motion.button>

              <iframe
                src={demos[selectedIndex].videoSrc}
                className="h-full w-full rounded-2xl border-2 border-white/10 bg-black/50 shadow-2xl"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DemoShowcase