'use client'
import { Button } from '@/components/button'
import { SparklesIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Calendar,
  Facebook,
  FileCheck,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  MessageSquare,
  MessagesSquare,
  HeartHandshake
} from 'lucide-react'
import { FaGoogle } from "react-icons/fa";
import { TbBrandGoogle } from "react-icons/tb";


import { forwardRef, useRef } from 'react'
import { GradientBackgroundSection, GradientBorder } from '../gradient'
import { Logo } from '../logo'
import { AnimatedBeam } from './animated-beam'
const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex items-center justify-center rounded-full border-2 border-primary-2 bg-background-2 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]`}
    >
      {children}
    </div>
  )
})

Circle.displayName = 'Circle'

export function BeamFlowDemo() {
  const containerRef = useRef(null)
  // Left side refs
  const sourceRefs = {
    google: useRef(null),
    facebook: useRef(null),
    instagram: useRef(null),
    sms: useRef(null),

    whatsapp: useRef(null),
    email: useRef(null),
    liveChat: useRef(null),
    linkedin: useRef(null),
  }
  // Center ref
  const botRef = useRef(null)
  // Right side refs
  const targetRefs = {
    collect: useRef(null),
    book: useRef(null),
    followup: useRef(null),
    availability: useRef(null),
    closing: useRef(null),
  }

  return (
    <div className="relative">
      <GradientBackgroundSection
        size="sm"
        opacity={0.3}
        position={{ top: '0', left: '0' }}
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
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-2 bg-background-2 px-4 py-2 font-medium text-primary-2">
              <SparklesIcon className="h-4 w-4" />
              AI-Powered Flow
            </div>

            {/* Title */}
            <h2 className="font-display text-3xl/tight font-medium tracking-tight sm:text-4xl/tight">
              <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
                Losing Leads
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-base/relaxed text-primary-3">
              As Realtors, We know how important it is to follow up with every lead.
              Accessible Agents communicates with every single lead in real time so NO LEAD GETS LEFT BEHIND
            </p>

            {/* Feature list */}
            <div className="mt-8 space-y-4">
              {[
                {
                  icon: MessageSquare,
                  text: 'AI engages with leads automatically 24/7',
                },
                { icon: Calendar, text: 'AI Schedules your appointments' },
                { icon: Bot, text: 'Your Accessible Agents/AI never stops working' },
                { icon: FileCheck, text: 'All the conversions are tracked' },
                { icon: HeartHandshake, text: 'No lead will be left behind' },
              ].map((feature, idx) => (
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

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Button
                href="/about-us"
                className="bg-primary-2 text-white hover:bg-hover-1 text-lg px-8 py-4 text-xl"
                as={motion.a}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Free
              </Button>
            </motion.div>
          </motion.div>

          {/* Animation section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <GradientBorder className="relative mx-auto w-full max-w-lg">
              <div
                className="relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10 shadow-2xl shadow-black/5 ring-black/5 backdrop-blur-sm"
                ref={containerRef}
              >
                <div className="flex w-full items-center justify-between">
                  {/* Left Column - 3 Sources */}
                  <div className="flex flex-col gap-12">
                    <Circle ref={sourceRefs.google}>
                      <TbBrandGoogle className="h-6 w-6 text-primary-2" />
                    </Circle>
                    <Circle ref={sourceRefs.facebook}>
                      <Facebook className="h-6 w-6 text-primary-2" />
                    </Circle>
                    <Circle ref={sourceRefs.instagram}>
                      <Instagram className="h-6 w-6 text-primary-2" />
                    </Circle>
                    <Circle ref={sourceRefs.sms}>
                      <MessageSquare className="h-6 w-6 text-primary-2" />
                    </Circle>
                  </div>

                  {/* Center - Bot */}
                  <Circle ref={botRef} className="">
                    {/* <Bot className="h-10 w-10 text-primary-2" /> */}
                    <Logo className="h-9 text-primary-2" variant={'orignal'} />
                  </Circle>

                  {/* Right Column - 4 Sources */}
                  <div className="flex flex-col gap-8">
                    <Circle ref={sourceRefs.whatsapp}>
                      <MessageCircle className="h-6 w-6 text-primary-2" />
                    </Circle>
                    <Circle ref={sourceRefs.email}>
                      <Mail className="h-6 w-6 text-primary-2" />
                    </Circle>
                    <Circle ref={sourceRefs.liveChat}>
                      <MessagesSquare className="h-6 w-6 text-primary-2" />
                    </Circle>
                    <Circle ref={sourceRefs.linkedin}>
                      <Linkedin className="h-6 w-6 text-primary-2" />
                    </Circle>
                  </div>
                </div>

                {/* Beams */}
                {Object.entries(sourceRefs).map(([key, ref], index) => (
                  <AnimatedBeam
                    key={key}
                    containerRef={containerRef}
                    fromRef={ref}
                    toRef={botRef}
                    curvature={index === 1 ? 0 : index === 0 ? -30 : 30}
                    gradientStartColor="color-primary-1"
                    gradientStopColor="color-primary-2"
                  />
                ))}

                {Object.entries(targetRefs).map(([key, ref], index) => (
                  <AnimatedBeam
                    key={key}
                    containerRef={containerRef}
                    fromRef={ref}
                    toRef={botRef}
                    curvature={index === 2 ? 0 : index < 2 ? -30 : 30}
                    gradientStartColor="color-primary-2"
                    gradientStopColor="color-primary-1"
                    reverse
                  />
                ))}

                {/* Decorative elements */}
                {/* <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary-1/30 to-primary-2/30 blur-xl" />
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary-2/30 to-primary-1/30 blur-xl" /> */}
              </div>
            </GradientBorder>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
