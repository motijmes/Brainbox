'use client'
import { motion } from 'framer-motion'
import {
  Calendar,
  CheckCircle2,
  Linkedin,
  Loader2,
  Mail,
  SearchCheck,
  SparklesIcon,
} from 'lucide-react'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { GradientBackgroundSection } from '../gradient'

const Circle = forwardRef(({ className, children, text, status }, ref) => {
  const getBackgroundColor = () => {
    switch (status) {
      case 'loading':
        return 'bg-amber-50'
      case 'success':
        return 'bg-green-50'
      default:
        return 'bg-white/80'
    }
  }

  const getTextColor = () => {
    switch (status) {
      case 'loading':
        return 'text-amber-700'
      case 'success':
        return 'text-green-700'
      default:
        return 'text-gray-700'
    }
  }

  const getIcon = () => {
    switch (status) {
      case 'loading':
        return <Loader2 className="mr-2 h-4 w-4 animate-spin text-amber-500" />
      case 'success':
        return <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  return (
    <div
      className={`flex items-center gap-3 transition-all duration-500 ${status === 'hidden' ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'} ${className}`}
      ref={ref}
    >
      <div className="z-10 flex size-12 items-center justify-center rounded-full bg-white p-2 ring-1 shadow-lg ring-black/5">
        {children}
      </div>
      <div
        className={`flex items-center px-4 py-2 text-sm font-medium ${getBackgroundColor()} rounded-xl ring-1 shadow-sm ring-black/5 backdrop-blur-sm transition-colors duration-300`}
      >
        {getIcon()}
        <span className={`${getTextColor()} transition-colors duration-300`}>
          {text}
        </span>
      </div>
    </div>
  )
})

Circle.displayName = 'Circle'

export default function ModernUserflow() {
  const containerRef = useRef(null)
  const [statuses, setStatuses] = useState([
    'hidden',
    'hidden',
    'hidden',
    'hidden',
    'hidden',
  ])

useEffect(() => {
  const processStep = (index) => {
    if (index >= statuses.length) {
      // Reset all states to hidden after a delay
      setTimeout(() => {
        setStatuses(['hidden', 'hidden', 'hidden', 'hidden', 'hidden'])
        // Start the process again
        setTimeout(() => processStep(0), 300)
      }, 500)
      return
    }

    // Set current step to loading
    setStatuses((prev) => {
      const newStatuses = [...prev]
      newStatuses[index] = 'loading'
      return newStatuses
    })

    // After 1.5 seconds, set to success and start next step
    setTimeout(() => {
      setStatuses((prev) => {
        const newStatuses = [...prev]
        newStatuses[index] = 'success'
        return newStatuses
      })
      processStep(index + 1)
    }, 1500)
  }

  // Start with first step after a small delay
  const initialTimer = setTimeout(() => processStep(0), 100)

  // Cleanup
  return () => {
    clearTimeout(initialTimer)
  }
}, [])

  return (
    <div className="relative">
      <GradientBackgroundSection
        size="md"
        opacity={0.3}
        position={{ top: '0', right: '0' }}
      />
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

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
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
              <SparklesIcon className="h-4 w-4" />
              Sales Automation
            </div>

            {/* Title */}
            <h2 className="font-display text-3xl/tight font-medium tracking-tight sm:text-4xl/tight">
              <span className="text-text">Work every lead and scale your </span>
              <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
                sales activity
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-base/relaxed text-text/80">
              Automate your sales process and turn leads into customers on
              autopilot. Our intelligent system handles the routine tasks while
              you focus on closing deals.
            </p>

            {/* Feature list */}
            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, text: 'Nurture prospects automatically' },
                { icon: SearchCheck, text: 'Integrate with your tech stack' },
                { icon: Calendar, text: 'Book meetings 24/7' },
                { icon: Linkedin, text: 'Personalise your outreach' },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <feature.icon className="h-6 w-6 flex-none text-primary-1" />
                  <span className="text-sm/6 text-text/70">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-1 hover:text-primary-2"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Userflow animation section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div
              className="relative flex max-h-[700px] w-full max-w-[500px] items-center justify-center overflow-hidden rounded-2xl bg-white/80 p-12 ring-1 shadow-2xl shadow-black/5 ring-black/5 backdrop-blur-sm"
              ref={containerRef}
            >
              <svg
                className="absolute top-2 left-12 h-full"
                width="60"
                height="520"
                viewBox="0 0 60 520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 0
             C5 0, 45 130, 45 260
             C45 390, 5 520, 5 520"
                  stroke="url(#paint0_linear)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="0.5 8"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="5"
                    y1="0"
                    x2="5"
                    y2="520"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7E8095" />
                    <stop offset="1" stopColor="#B6B7C3" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex size-full flex-col items-stretch justify-between">
                <div className="flex flex-col gap-16">
                  <Circle text="Receive lead" status={statuses[0]}>
                    <Mail size={20} className="text-primary-1" />
                  </Circle>
                  <Circle
                    text="Lead research"
                    className="ml-4"
                    status={statuses[1]}
                  >
                    <SearchCheck size={20} className="text-primary-1" />
                  </Circle>
                  <Circle
                    text="Personalised outreach"
                    className="ml-6"
                    status={statuses[2]}
                  >
                    <Linkedin size={20} className="text-primary-1" />
                  </Circle>
                  <Circle
                    text="Respond to objections"
                    className="ml-4"
                    status={statuses[3]}
                  >
                    <Linkedin size={20} className="text-primary-1" />
                  </Circle>
                  <Circle text="Confirm/Book meeting" status={statuses[4]}>
                    <Calendar size={20} className="text-primary-1" />
                  </Circle>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
