'use client'

import { Container } from '@/components/container'
import { PlayIcon, SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const demos = [
    {
      title: 'Lead Management',
      description:
        'Streamline your lead capture and nurturing process with intelligent automation',
      videoSrc: 'https://www.youtube.com/embed/jcImHWNOjrU',
      thumbnailSrc: '/assets/demoThumbnail.jpg',
    },
    {
      title: 'Email Marketing',
      description:
        'Create and deploy sophisticated email campaigns with smart automation',
      videoSrc: 'https://www.youtube.com/embed/jcImHWNOjrU',
      thumbnailSrc: '/assets/demoThumbnail.jpg',
    },
    {
      title: 'Lead Management',
      description:
        'Streamline your lead capture and nurturing process with intelligent automation',
      videoSrc: 'https://www.youtube.com/embed/jcImHWNOjrU',
      thumbnailSrc: '/assets/demoThumbnail.jpg',
    },
    {
      title: 'Email Marketing',
      description:
        'Create and deploy sophisticated email campaigns with smart automation',
      videoSrc: 'https://www.youtube.com/embed/jcImHWNOjrU',
      thumbnailSrc: '/assets/demoThumbnail.jpg',
    },
    {
      title: 'Lead Management',
      description:
        'Streamline your lead capture and nurturing process with intelligent automation',
      videoSrc: 'https://www.youtube.com/embed/jcImHWNOjrU',
      thumbnailSrc: '/assets/demoThumbnail.jpg',
    },
  ]

  const handleVideoClick = () => {
    setIsPlaying(true)
  }

  const handleCloseVideo = () => {
    setIsPlaying(false)
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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left sidebar with demo list */}
          <div className="space-y-2">
            {demos.map((demo, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveVideo(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`w-full rounded-xl p-4 text-left transition-all duration-300 cursor-pointer ${
                  activeVideo === index
                    ? 'bg-primary-1 text-white shadow-lg'
                    : 'bg-white/80 hover:bg-primary-1/10'
                }`}
              >
                <h3
                  className={`font-medium ${
                    activeVideo === index ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {demo.title}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    activeVideo === index ? 'text-white/80' : 'text-gray-500'
                  }`}
                >
                  {demo.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Right side video preview */}
          <div className="lg:col-span-2">
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

              {/* Video thumbnail and play button */}
              <motion.div
                className="group relative cursor-pointer"
                onClick={handleVideoClick}
              >
                <motion.img
                  src={demos[activeVideo].thumbnailSrc}
                  alt={demos[activeVideo].title}
                  className="w-full rounded-xl object-cover transition-all duration-300 group-hover:brightness-75"
                />

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-1/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  >
                    <PlayIcon className="h-8 w-8 text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={handleCloseVideo}
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
                className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all cursor-pointer hover:bg-white/20"
                onClick={handleCloseVideo}
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
