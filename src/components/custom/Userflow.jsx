'use client'
import { motion } from 'framer-motion'
import {
  Calendar,
  Mail,
  SearchCheck,
  SparklesIcon,
  FolderCheck,
  Sparkles
} from 'lucide-react'
import { GradientBackgroundSection } from '../gradient'
import SalesProcessFlow from './SalesProcessFlow'
import ImageSlider from './ImageSlider'
import { Button } from '@/components/button'
import { Link } from '@/components/link' 
export default function ModernUserflow() {
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
            {/* <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-2 bg-primary-1/10 px-4 py-2 font-medium text-primary-2">
              <SparklesIcon className="h-4 w-4" />
              Sales Automation
            </div> */}

            {/* Title */}
            <h2 className="font-display text-3xl/tight font-medium tracking-tight sm:text-4xl/tight">
              <span className="text-primary-3">
                Need to get{' '}
              </span>
              <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
                organized?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-base/relaxed text-primary-3">
            Stop drowning in tasks—our intuitive real estate platform streamlines your business
            instantly. Built by Realtors who get it: no steep learning curves, no complex systems, just
            simple solutions that work. Focus on closing deals while Accessible Agents handles the
            rest of your business on autopilot.
            </p>

            {/* Feature list */}
            <div className="mt-8 space-y-4">
              {[
                { icon: FolderCheck, text: 'Organizes all your leads' },
                { icon: SearchCheck, text: 'Nurtures your prospects' },
                { icon: Calendar, text: 'Book meetings while you sleep' },
                { icon: Mail, text: 'Send  automated E-Mails' },
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
                  <span className="text-sm/6 text-primary-3">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA button */}
            <div className="mt-16 flex items-center gap-4">
              <Link href="/about-us#inline-CJncaycrRh5hGpavAAmu">
                <Button
                  className="bg-primary-2 text-white hover:bg-hover-1 text-lg px-8 py-4 text-xl"
                >
                  Get Started Free
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Userflow animation section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            {/* <SalesProcessFlow /> */}
            <ImageSlider />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
