'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { PlayIcon, SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeVideo, setActiveVideo] = useState(0)

  const demos = [
    {
      badge: { icon: SparklesIcon, text: 'Lead Management' },
      title: {
        regular: 'Capture and Nurture ',
        gradient: 'Every Lead',
      },
      description:
        'Streamline your lead capture and nurturing process with intelligent automation. Our AI-driven system ensures no opportunity slips through the cracks, maximizing your conversion potential.',
      videoSrc: 'https://www.youtube.com/embed/jcImHWNOjrU',
      thumbnailSrc: '/assets/demoThumbnail.jpg',
      features: [
        { icon: CheckCircle2, text: 'Automated lead qualification' },
        { icon: CheckCircle2, text: 'Smart follow-up sequences' },
        { icon: CheckCircle2, text: 'Pipeline visualization' },
      ],
    },
    {
      badge: { icon: SparklesIcon, text: 'Email Marketing' },
      title: {
        regular: 'Deploy Sophisticated ',
        gradient: 'Email Campaigns',
      },
      description:
        'Create and deploy sophisticated email campaigns with smart automation. Reach your audience at the right time with personalized content that drives engagement and results.',
      videoSrc: 'https://www.youtube.com/embed/jcImHWNOjrU',
      thumbnailSrc: '/assets/demoThumbnail.jpg',
      features: [
        { icon: CheckCircle2, text: 'AI-powered content suggestions' },
        { icon: CheckCircle2, text: 'Advanced segmentation' },
        { icon: CheckCircle2, text: 'Performance analytics' },
      ],
    },
    {
      badge: { icon: SparklesIcon, text: 'Task Automation' },
      title: {
        regular: 'Automate Your ',
        gradient: 'Daily Tasks',
      },
      description:
        'Let our intelligent system handle your routine tasks while you focus on growing your business. From follow-ups to scheduling, automation handles it all.',
      videoSrc: 'https://www.youtube.com/embed/jcImHWNOjrU',
      thumbnailSrc: '/assets/demoThumbnail.jpg',
      features: [
        { icon: CheckCircle2, text: 'Smart task prioritization' },
        { icon: CheckCircle2, text: 'Automated workflows' },
        { icon: CheckCircle2, text: 'Integration capabilities' },
      ],
    },
  ]

  const handleVideoClick = (index) => {
    setActiveVideo(index)
    setIsPlaying(true)
  }

  return (
    <div className="relative overflow-hidden py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-1/5 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/2 translate-y-1/2 rounded-full bg-primary-2/5 blur-3xl"
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

        {/* Demo Sections */}
        {demos.map((demo, index) => (
          <div key={index} className="relative py-20 sm:py-24">
            <div className="mx-auto max-w-7xl">
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
                    <demo.badge.icon className="h-4 w-4" />
                    {demo.badge.text}
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-3xl/tight font-medium tracking-tight sm:text-4xl/tight">
                    <span className="text-text">{demo.title.regular}</span>
                    <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
                      {demo.title.gradient}
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="mt-4 text-base/relaxed text-text/80">
                    {demo.description}
                  </p>

                  {/* Feature list */}
                  <div className="mt-8 space-y-4">
                    {demo.features.map((feature, idx) => (
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

                  {/* CTA button */}
                  <div className="mt-10 flex items-center gap-4">
                    <Button
                      variant="custom"
                      as={motion.button}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleVideoClick(index)}
                    >
                      Watch Demo
                    </Button>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-1 hover:text-primary-2"
                    >
                      Learn more →
                    </a>
                  </div>
                </motion.div>

                {/* Video preview section */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <div className="relative rounded-2xl bg-white/80 p-2 ring-1 shadow-2xl shadow-black/5 ring-black/5 backdrop-blur-sm">
                    {/* Top gradient line */}
                    <div className="absolute -top-2 right-10 left-10 h-px bg-gradient-to-r from-transparent via-primary-1/20 to-transparent" />

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
                      onClick={() => handleVideoClick(index)}
                    >
                      <motion.img
                        src={demo.thumbnailSrc}
                        alt={demo.title.regular + demo.title.gradient}
                        className="h-full w-full transform object-cover transition-transform duration-700 hover:scale-105"
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

                    {/* Decorative elements */}
                    <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary-1/30 to-primary-2/30 blur-xl" />
                    <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary-2/30 to-primary-1/30 blur-xl" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
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
                src={demos[activeVideo].videoSrc}
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

export default VideoShowcase
