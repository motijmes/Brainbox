'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Tab } from '@headlessui/react'
import { PlayIcon, SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { createElement, useState } from 'react'

import { BarChart3, MessagesSquare, Bot } from 'lucide-react'
import { GradientBorder } from '../gradient'

// Video Player Component
const VideoPlayer = ({ video }) => {
  if (video.type === 'youtube') {
    return (
      <iframe
        src={video.videoSrc}
        className="h-full w-full rounded-2xl border-2 border-white/10 bg-black/50 shadow-2xl"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    )
  }

  return (
    <video
      key={video.videoSrc}
      controls
      autoPlay
      className="h-full w-full rounded-2xl border-2 border-white/10 bg-black/50 shadow-2xl"
    >
      <source src={video.videoSrc} type="video/mp4" />
      <source src={video.videoSrc.replace('.mp4', '.webm')} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  )
}

const DemoShowcase = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const demos = [
    {
      tabTitle: "Voice AI",
      title: {
        regular: 'Accessible Agents ',
        gradient: 'Voice AI',
      },
      description:
        ' Your clients receive instant, 24/7 responsiveness—never miss another opportunity. Stand out from the competition with premium service that works while you sleep. Welcome to modern real estate: where exceptional service never takes a break.',
      icon: Bot,
      video: {
        type: 'direct',
        videoSrc: '/demos/WL voice ai demo video-VEED (2).mp4',
      },
      features: [
        { icon: CheckCircle2, text: 'AI Voice' },
        { icon: CheckCircle2, text: 'AI Chat' },
        { icon: CheckCircle2, text: '24/7 Customer Support' },
        { icon: CheckCircle2, text: 'Smart organizing systems' },
      ],
    },
    {
      tabTitle: "Smart Chatbot in Action",
      title: {
        regular: 'Smart Chatbot',
        gradient: ' in Action',
      },
      description:
        `Transform your customer lead integration with AI-powered automation. Provide instant responses, book appointments, and maintain high satisfaction levels around the clock.`,
      icon: MessagesSquare,
      video: {
        type: 'direct',
        videoSrc: '/demos/smart chatbot in action.mp4',
      },
      features: [
        { icon: CheckCircle2, text: '“Erika” Chatbot interacts like a human' },
        { icon: CheckCircle2, text: '"Erika” books appointments' },
        { icon: CheckCircle2, text: '24/7 Customer Support' },
        { icon: CheckCircle2, text: 'No Lead Left Behind' },
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
          className="mb-16 text-center mt-5"
        >
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border-primary-2 bg-background-2 px-4 py-2 text-sm font-medium text-primary-2"
          >
            <SparklesIcon className="h-4 w-4" />
            Product Demo
          </motion.div> */}
          <h2 className="font-display text-3xl/tight font-medium tracking-tight sm:text-4xl/tight">
            <span className="text-primary-3">See How It </span>
            <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
        </motion.div>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          {/* Tab Navigation */}
          <div className="mb-16 flex justify-center">
            <div className="inline-flex rounded-xl bg-background-2 p-2 gap-2">
              {demos.map((demo) => (
                <Tab
                  key={demo.title.regular}
                  className="focus:outline-none focus-visible:outline-none min-w-[200px] text-primary-2 hover:text-hover-1 flex gap-2 border-[2px] rounded-lg border-primary-2"
                >
                  {({ selected }) => (
                    <div
                      className={clsx(
                        'relative flex items-center justify-center w-full gap-2 px-6 py-3 text-sm font-medium',
                        'transition-all duration-200',
                        selected
                          ? ' bg-primary-2 text-white shadow-sm'
                          : '',
                      )}
                    >
                      {createElement(demo.icon, {
                        className: clsx(
                          'h-5 w-5',
                          selected ? 'text-white' : 'text-primary-2',
                        ),
                      })}
                      <span>{demo.tabTitle}</span>
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
                    {/* Title */}
                    <h2 className="font-display text-3xl/tight font-medium tracking-tight sm:text-4xl/tight">
                      <span className="text-primary-3">
                        {demo.title.regular}
                      </span>
                      <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
                        {demo.title.gradient}
                      </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-4 text-base/relaxed text-primary-3">
                      {demo.description}
                    </p>

                    {/* Features */}
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
                          className="flex items-start gap-3"
                        >
                          <feature.icon className="h-6 w-6 flex-none text-primary-2" />
                          <span className="text-sm/6 text-primary-3">
                            {feature.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    {/* <div className="mt-16 flex items-center gap-4">
                    <Button
                        href="/about-us#inline-CJncaycrRh5hGpavAAmu"
                        className="bg-primary-2 text-white hover:bg-hover-1 text-lg px-8 py-4 text-xl"
                      >
                        Get Started Today
                      </Button>
                    </div> */}
                  </motion.div>

                  {/* Right side video preview */}
                  <GradientBorder className="relative mx-auto w-full max-w-lg ">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative overflow-hidden rounded-2xl bg-background-2 p-2 ring-1 shadow-2xl shadow-black/5 ring-black/5 backdrop-blur-sm"
                    >
                      {/* Top gradient line */}
                      <div className="absolute -top-2 right-10 left-10 h-px bg-gradient-to-r from-transparent via-primary-1/20 to-transparent" />

                      {/* Window chrome */}
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

                      {/* Video Preview */}
                      <motion.div
                        className="group relative cursor-pointer overflow-hidden rounded-xl"
                        onClick={() => setIsPlaying(true)}
                      >
                        {demo.video.type === 'direct' ? (
                          <video
                            src={demo.video.videoSrc}
                            className="h-full w-full scale-105 transform object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        ) : (
                          <div className="aspect-video bg-gray-100" />
                        )}

                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
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
                      <div className="absolute -right-6 -bottom-6 -z-10 h-[250px] w-[250px] rounded-full bg-gradient-to-br from-primary-1/30 to-primary-2/30 blur-xl" />
                      <div className="absolute -top-6 -left-6 -z-10 h-[250px] w-[250px] rounded-full bg-gradient-to-br from-primary-2/30 to-primary-1/30 blur-xl" />
                    </motion.div>
                  </GradientBorder>
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

              <VideoPlayer video={demos[selectedIndex].video} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DemoShowcase
